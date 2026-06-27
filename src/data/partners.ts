// 대경IT — "15년 이상 전문경력자들의 IT 대표의 모임" 회원사(파트너) 목록
// 메인페이지 지도 섹션(components/sections/PartnerMap)에서 사용한다.
//
// ※ 아래 10개는 임시 플레이스홀더입니다. 실제 회원사 정보로 교체하세요.
//    - address 값이 지도 검색어로 그대로 쓰입니다(정확할수록 핀이 정확).
//    - 항목을 추가/삭제하면 지도 섹션이 자동으로 늘어납니다(개수 제한 없음).

export type Partner = {
  name: string;        // 업체명
  field: string;       // 업종 / 전문분야
  region: string;      // 지역 라벨 (목록 칩)
  address: string;     // 주소 — 지도 검색에 사용
  ceo?: string;        // 대표자
  phone?: string;      // 대표전화
  homepage?: string;   // 홈페이지 URL (있으면 링크 표시)
};

export const partners: Partner[] = [
  {
    name: "대경IT 본부",
    field: "IT 인프라 · NAS · 네트워크",
    region: "대구",
    address: "대구광역시 중구 동성로2가",
    ceo: "대표자명",
    phone: "053-000-0000",
    homepage: "https://hanbyeolsystem.github.io/dk-it/",
  },
  {
    name: "(주)○○시스템",
    field: "서버 · 보안 솔루션",
    region: "서울",
    address: "서울특별시 강남구 테헤란로",
    ceo: "대표자명",
    phone: "02-000-0000",
  },
  {
    name: "(주)○○네트웍스",
    field: "네트워크 · 통신 구축",
    region: "부산",
    address: "부산광역시 부산진구 서면로",
    ceo: "대표자명",
    phone: "051-000-0000",
  },
  {
    name: "○○정보통신",
    field: "CCTV · 출입통제",
    region: "인천",
    address: "인천광역시 남동구 구월동",
    ceo: "대표자명",
    phone: "032-000-0000",
  },
  {
    name: "(주)○○테크",
    field: "사무기기 · 복합기 임대",
    region: "대전",
    address: "대전광역시 서구 둔산동",
    ceo: "대표자명",
    phone: "042-000-0000",
  },
  {
    name: "○○솔루션",
    field: "데이터 백업 · 복구",
    region: "광주",
    address: "광주광역시 서구 상무중앙로",
    ceo: "대표자명",
    phone: "062-000-0000",
  },
  {
    name: "(주)○○ICT",
    field: "클라우드 · 가상화",
    region: "울산",
    address: "울산광역시 남구 삼산로",
    ceo: "대표자명",
    phone: "052-000-0000",
  },
  {
    name: "○○컴퓨터",
    field: "PC · 노트북 유지보수",
    region: "수원",
    address: "경기도 수원시 영통구 광교중앙로",
    ceo: "대표자명",
    phone: "031-000-0000",
  },
  {
    name: "(주)○○전산",
    field: "ERP · 그룹웨어",
    region: "포항",
    address: "경상북도 포항시 북구 중앙로",
    ceo: "대표자명",
    phone: "054-000-0000",
  },
  {
    name: "○○시스템즈",
    field: "산업용 네트워크",
    region: "창원",
    address: "경상남도 창원시 성산구 중앙대로",
    ceo: "대표자명",
    phone: "055-000-0000",
  },
];
