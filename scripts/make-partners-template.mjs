// "회원사_관리.xlsx" 엑셀 템플릿 생성기 (최초 1회/초기화용)
//   npm run make:partners-template  → 프로젝트 폴더에 회원사_관리.xlsx 생성
// 보통은 다시 실행할 필요 없음(기존 입력을 덮어쓰므로 주의).

import ExcelJS from "exceljs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "회원사_관리.xlsx");

// 헤더(첫 행) — 이 텍스트로 열을 인식하므로 키워드(업체/분야/지역/주소/전화/홈페이지/대표)는 유지
const HEADERS = [
  "업체명 (필수)",
  "전문분야",
  "지역",
  "주소 (지도표시·필수)",
  "대표자",
  "대표전화",
  "홈페이지",
];

// 초기 예시 행 (지도가 보이도록 실제 도시 주소 사용 — 실제 정보로 교체하세요)
const ROWS = [
  ["대경IT 본부", "IT 인프라 · NAS · 네트워크", "대구", "대구광역시 중구 동성로2가", "대표자명", "053-000-0000", "https://hanbyeolsystem.github.io/dk-it/"],
  ["(주)○○시스템", "서버 · 보안 솔루션", "대구", "대구광역시 수성구 달구벌대로", "대표자명", "053-000-0000", ""],
  ["(주)○○네트웍스", "네트워크 · 통신 구축", "대구", "대구광역시 달서구 성서공단로", "대표자명", "053-000-0000", ""],
  ["○○정보통신", "CCTV · 출입통제", "경북 구미", "경상북도 구미시 송정대로", "대표자명", "054-000-0000", ""],
  ["(주)○○테크", "사무기기 · 복합기 임대", "경북 포항", "경상북도 포항시 북구 중앙로", "대표자명", "054-000-0000", ""],
  ["○○솔루션", "데이터 백업 · 복구", "경북 경산", "경상북도 경산시 경안로", "대표자명", "053-000-0000", ""],
  ["(주)○○ICT", "클라우드 · 가상화", "대구", "대구광역시 북구 칠성로", "대표자명", "053-000-0000", ""],
  ["○○컴퓨터", "PC · 노트북 유지보수", "경북 안동", "경상북도 안동시 경동로", "대표자명", "054-000-0000", ""],
  ["(주)○○전산", "ERP · 그룹웨어", "경북 경주", "경상북도 경주시 원화로", "대표자명", "054-000-0000", ""],
  ["○○시스템즈", "산업용 네트워크", "경북 칠곡", "경상북도 칠곡군 왜관읍 중앙로", "대표자명", "054-000-0000", ""],
];

async function main() {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet("회원사");

  // 안내 행
  ws.mergeCells(1, 1, 1, HEADERS.length);
  const note = ws.getCell(1, 1);
  note.value =
    "▶ 회원사 정보를 입력한 뒤 저장하고, 터미널에서  npm run import:partners  실행 → 사이트에 반영됩니다. (열 제목은 바꾸지 마세요)";
  note.font = { bold: true, color: { argb: "FFDD5A12" }, size: 11 };
  note.alignment = { vertical: "middle" };
  ws.getRow(1).height = 26;

  // 헤더 행
  const headerRow = ws.addRow(HEADERS);
  headerRow.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF16223D" } };
    cell.alignment = { vertical: "middle", horizontal: "center" };
    cell.border = { bottom: { style: "thin", color: { argb: "FFCCCCCC" } } };
  });
  headerRow.height = 22;

  // 데이터 행
  ROWS.forEach((r) => ws.addRow(r));

  // 열 너비
  const widths = [22, 24, 12, 34, 12, 16, 40];
  widths.forEach((w, i) => (ws.getColumn(i + 1).width = w));

  // 헤더 고정(스크롤 시 유지)
  ws.views = [{ state: "frozen", ySplit: 2 }];

  await wb.xlsx.writeFile(OUT);
  console.log(`✅ 템플릿 생성: ${OUT}`);
}

main().catch((e) => {
  console.error("❌ 템플릿 생성 실패:", e.message);
  process.exit(1);
});
