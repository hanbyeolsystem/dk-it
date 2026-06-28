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
    name: "한별시스템",
    field: "컴퓨터, 프린터, 나스, 핸드프린터, 라벨프린터 판매 및 렌탈",
    region: "대구 달서구",
    address: "대구광역시 달서구 문화회관11안길 22-7",
    ceo: "김상환",
    phone: "053-588-7119",
    homepage: "https://한별시스템.kr",
  },
  {
    name: "디직스코리아",
    field: "컴퓨터 및 주변기기 복합기 CCTV 키드체크기,POS,키오스크 사무기기렌탈",
    region: "경북 문경",
    address: "경북 문경시 신흥로130 상가1층 디직스코리아",
    ceo: "윤일한",
    phone: "054-555-4949",
    homepage: "https://map.naver.com/p/entry/place/1886346752?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202606271548%26locale%3Dko%26svcName%3Dmap_pcv5",
  },
  {
    name: "나이스시스템",
    field: "컴퓨터, 사무기기, CCTV, 삼성/중소기업TV",
    region: "경산 하양",
    address: "경북 경산시 하양읍 금송로 17",
    ceo: "황동훈",
    phone: "053-857-9595",
    homepage: "https://map.naver.com/p/entry/place/15199737?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202606281738%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=128.8175301&lat=35.9147786&c=15.00,0,0,0,dh",
  },
];
