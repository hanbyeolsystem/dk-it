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
    region: "대구 성서공단",
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
  {
    name: "위더스컴퓨터(월배이마트점)",
    field: "컴퓨터, 프린터임대 ,\n사무기기렌탈",
    region: "대구 달서구",
    address: "대구시 달서구 조암남로135",
    ceo: "박수민",
    phone: "053-639-1579 / 010-7207-1579",
    homepage: "https://map.naver.com/p/entry/place/1469733822?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202606290939%26locale%3Dko%26svcName%3Dmap_pcv5",
  },
  {
    name: "다원시스템",
    field: "컴퓨터및주변기기, 디지털복합기.CCTV.사무기기렌탈, 음향.빔프로젝트.LED전광판공사.렌탈",
    region: "대구 남구",
    address: "대구 남구 대봉로30길37",
    ceo: "장순철",
    phone: "053-742-3411",
    homepage: "https://map.naver.com/p/entry/place/1829807055?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202606290939%26locale%3Dko%26svcName%3Dmap_pcv5",
  },
  {
    name: "제이씨스템",
    field: "컴퓨터 주변기기 바코드장비 소모품 네트워크 기업장비유지보수",
    region: "경산",
    address: "경북 경산시 원효로28길60-7",
    ceo: "박준영",
    phone: "053-813-0431",
    homepage: "https://map.naver.com/p/search/%EC%9B%90%ED%9A%A8%EB%A1%9C28%EA%B8%B860-7/place/1239353629?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202606290936%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%9B%90%ED%9A%A8%EB%A1%9C28%EA%B8%B860-7",
  },
  {
    name: "라인시스템",
    field: "데이타 복구",
    region: "대구 북구",
    address: "대구 북구 유통단지로25 4동 301호",
    ceo: "김세용",
    phone: "070-7530-3348",
  },
  {
    name: "베스트잉크",
    field: "컴퓨터  프린터 렌탈",
    region: "대구 화원",
    address: "대구 달성군 화원읍 성천로108",
    ceo: "조재현",
    phone: "010-2431-5544",
  },
  {
    name: "유원비즈텍",
    field: "영업 관리시스템 개발, 홈페이지 개발",
    region: "",
    address: "대구시 수성구 동대구로 55길 4-5",
    ceo: "장승도",
    phone: "053-767-2701",
    homepage: "https://uonebiztec.com/",
  },
  {
    name: "피씨플래너",
    field: "복사기 · 프린터 판매 및 렌탈, 컴퓨터 주변기기 및 유지보수, CAM/NC 프로그래밍 MCT(머시닝센터) 가공 지원 및 기술지원, 데이터 복구,네트워크 구축 및 유지보수, LAN(랜) 공사 및 통신",
    region: "대구 전자관",
    address: "대구시 북구 유통단지로45 3증319호",
    ceo: "김년오",
    phone: "053-604-5250",
    homepage: "https://map.naver.com/p/entry/place/1539410457?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202606290936%26locale%3Dko%26svcName%3Dmap_pcv5",
  },
  {
    name: "컴셋시스템",
    field: "컴퓨터수리. 조립. 판매. 중고부속 취급 업체유지보수.네트워크공사",
    region: "대구 용산",
    address: "대구시달서구용산큰못1길7 1층 위더스컴퓨터",
    ceo: "정홍욱",
    phone: "053-554 4551 / 010-2914-8722",
    homepage: "https://map.naver.com/p/entry/place/1034783011?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202606290938%26locale%3Dko%26svcName%3Dmap_pcv5",
  },
];
