// 대경IT연합회 — 회원사(파트너) 목록
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
    region: "대구",
    address: "대구광역시 수성구 달구벌대로",
    ceo: "대표자명",
    phone: "053-000-0000",
  },
  {
    name: "(주)○○네트웍스",
    field: "네트워크 · 통신 구축",
    region: "대구",
    address: "대구광역시 달서구 성서공단로",
    ceo: "대표자명",
    phone: "053-000-0000",
  },
  {
    name: "○○정보통신",
    field: "CCTV · 출입통제",
    region: "경북 구미",
    address: "경상북도 구미시 송정대로",
    ceo: "대표자명",
    phone: "054-000-0000",
  },
  {
    name: "(주)○○테크",
    field: "사무기기 · 복합기 임대",
    region: "경북 포항",
    address: "경상북도 포항시 북구 중앙로",
    ceo: "대표자명",
    phone: "054-000-0000",
  },
  {
    name: "○○솔루션",
    field: "데이터 백업 · 복구",
    region: "경북 경산",
    address: "경상북도 경산시 경안로",
    ceo: "대표자명",
    phone: "053-000-0000",
  },
  {
    name: "(주)○○ICT",
    field: "클라우드 · 가상화",
    region: "대구",
    address: "대구광역시 북구 칠성로",
    ceo: "대표자명",
    phone: "053-000-0000",
  },
  {
    name: "○○컴퓨터",
    field: "PC · 노트북 유지보수",
    region: "경북 안동",
    address: "경상북도 안동시 경동로",
    ceo: "대표자명",
    phone: "054-000-0000",
  },
  {
    name: "(주)○○전산",
    field: "ERP · 그룹웨어",
    region: "경북 경주",
    address: "경상북도 경주시 원화로",
    ceo: "대표자명",
    phone: "054-000-0000",
  },
  {
    name: "○○시스템즈",
    field: "산업용 네트워크",
    region: "경북 칠곡",
    address: "경상북도 칠곡군 왜관읍 중앙로",
    ceo: "대표자명",
    phone: "054-000-0000",
  },
];
