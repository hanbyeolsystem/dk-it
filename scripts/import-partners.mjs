// 엑셀(회원사_관리.xlsx) → src/data/partners.ts 자동 변환
//
// 사용법:
//   1) 프로젝트 폴더의 "회원사_관리.xlsx" 를 엑셀로 열어 회원사 정보를 입력/수정
//   2) 터미널에서  npm run import:partners
//   3) src/data/partners.ts 가 자동 갱신됨 → git push 하면 사이트 반영
//
// 엑셀 첫 번째 시트의 첫 행을 '헤더'로 인식한다(열 순서는 바뀌어도 됨).
// 인식 키워드: 업체/회사/이름→업체명, 분야/업종→전문분야, 지역→지역,
//             주소→주소, 전화→대표전화, 홈페이지/사이트→홈페이지, 대표→대표자

import ExcelJS from "exceljs";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const XLSX_PATH = resolve(ROOT, "회원사_관리.xlsx");
const OUT_PATH = resolve(ROOT, "src/data/partners.ts");

// 헤더 텍스트 → 데이터 키 매핑 (순서 중요: '대표전화'가 '대표'보다 먼저 검사돼야 함)
function headerToKey(raw) {
  const h = String(raw ?? "").replace(/\s/g, "");
  if (!h) return null;
  if (h.includes("전화")) return "phone";
  if (h.includes("홈페이지") || h.includes("사이트") || h.toLowerCase().includes("http") || h.toLowerCase().includes("url")) return "homepage";
  if (h.includes("주소")) return "address";
  if (h.includes("분야") || h.includes("업종")) return "field";
  if (h.includes("지역")) return "region";
  if (h.includes("업체") || h.includes("회사") || h.includes("이름") || h.includes("상호")) return "name";
  if (h.includes("대표")) return "ceo";
  return null;
}

// 셀 값을 문자열로 (하이퍼링크/숫자 대응)
function cellText(cell) {
  const v = cell?.value;
  if (v == null) return "";
  if (typeof v === "object") {
    if ("text" in v) return String(v.text); // 하이퍼링크
    if ("result" in v) return String(v.result); // 수식 결과
    if ("richText" in v) return v.richText.map((t) => t.text).join("");
    return String(v);
  }
  return String(v).trim();
}

// TS 문자열 리터럴 안전 이스케이프
function q(s) {
  return JSON.stringify(String(s ?? ""));
}

async function main() {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(XLSX_PATH);
  const ws = wb.worksheets[0];
  if (!ws) throw new Error("시트를 찾을 수 없습니다.");

  // 헤더 행 자동 탐지 (안내문이 위에 있을 수 있으므로 상위 10행을 스캔,
  // '업체명' 열이 인식되는 첫 행을 헤더로 본다)
  let headerRowNum = 0;
  const colKey = {}; // 열번호 → key
  for (let r = 1; r <= 10; r++) {
    const map = {};
    ws.getRow(r).eachCell((cell, col) => {
      const key = headerToKey(cellText(cell));
      if (key) map[col] = key;
    });
    if (Object.values(map).includes("name")) {
      headerRowNum = r;
      Object.assign(colKey, map);
      break;
    }
  }
  if (!headerRowNum) {
    throw new Error("'업체명' 열을 찾지 못했습니다. 첫 행 헤더를 확인하세요.");
  }

  const rows = [];
  ws.eachRow((row, rowNum) => {
    if (rowNum <= headerRowNum) return; // 안내문·헤더 행 건너뜀
    const obj = {};
    for (const [col, key] of Object.entries(colKey)) {
      obj[key] = cellText(row.getCell(Number(col)));
    }
    if (!obj.name) return; // 업체명 없으면 빈 줄로 보고 무시
    rows.push(obj);
  });

  const items = rows
    .map((r) => {
      const lines = [
        `    name: ${q(r.name)},`,
        `    field: ${q(r.field || "")},`,
        `    region: ${q(r.region || "")},`,
        `    address: ${q(r.address || "")},`,
      ];
      if (r.ceo) lines.push(`    ceo: ${q(r.ceo)},`);
      if (r.phone) lines.push(`    phone: ${q(r.phone)},`);
      if (r.homepage) lines.push(`    homepage: ${q(r.homepage)},`);
      return `  {\n${lines.join("\n")}\n  },`;
    })
    .join("\n");

  const out = `// 대경IT연합회 — 회원사(파트너) 목록
// ⚠ 이 파일은 자동 생성됩니다. 직접 수정하지 말고 "회원사_관리.xlsx" 를 편집한 뒤
//    npm run import:partners 를 실행하세요. (메인페이지 지도 섹션이 이 데이터를 사용)

export type Partner = {
  name: string;        // 업체명
  field: string;       // 업종 / 전문분야
  region: string;      // 지역 라벨 (목록 칩)
  address: string;     // 주소 — 지도 검색에 사용
  ceo?: string;        // 대표자
  phone?: string;      // 대표전화
  homepage?: string;   // 홈페이지 URL
};

export const partners: Partner[] = [
${items}
];
`;

  writeFileSync(OUT_PATH, out, "utf8");
  console.log(`✅ 회원사 ${rows.length}개를 src/data/partners.ts 에 반영했습니다.`);
  console.log(`   다음: git add -A && git commit -m "회원사 갱신" && git push`);
}

main().catch((e) => {
  console.error("❌ 가져오기 실패:", e.message);
  process.exit(1);
});
