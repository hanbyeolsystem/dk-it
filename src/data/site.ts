// 대경IT연합회 사이트 전역 콘텐츠 — 이 파일 수정만으로 사이트 유지보수 가능
// ※ 중앙 연락처(전화·이메일)는 두지 않습니다. 문의는 각 회원사로 직접 연결됩니다.
//   회원사 정보는 회원사_관리.xlsx → src/data/partners.ts 에서 관리합니다.

export const site = {
  name: "대경IT연합회",
  nameEn: "DAEKYUNG IT UNION",
  tagline: "15년 이상 전문경력자들의 IT 대표 모임",
  description:
    "대구·경북 IT 전문기업들의 연합회. NAS·네트워크·서버·사무기기 — 가까운 회원사가 직접 함께 합니다.",
  url: "https://daekyung-it.kr", // TODO: 실제 도메인으로 교체

  // 중앙 연락처 없음(전화/이메일 미운영). 문의는 메인 '회원사 네트워크' 섹션 참고.

  social: {
    blog: "https://blog.naver.com/",   // TODO (연합회 공식 채널이 있으면 교체, 없으면 숨김 가능)
    instagram: "https://instagram.com/",
    threads: "https://www.threads.net/",
  },

  stats: [
    { value: "000+", label: "회원사" },
    { value: "000+", label: "누적 구축" },
    { value: "000+", label: "관리 기업" },
    { value: "15+",  label: "평균 경력(년)" },
  ],
} as const;

export const nav = [
  { href: "/", label: "홈" },
  { href: "/#partners", label: "회원사" },
  { href: "/nas", label: "NAS 솔루션" },
  { href: "/rental", label: "복사기 임대" },
  { href: "/shop", label: "임대 쇼핑몰" },
  { href: "/cases", label: "구축사례" },
  { href: "/support", label: "고객지원" },
  { href: "/about", label: "연합회 소개" },
] as const;
