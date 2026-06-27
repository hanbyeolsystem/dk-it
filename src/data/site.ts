// 대경IT 사이트 전역 콘텐츠 — 이 파일 수정만으로 사이트 유지보수 가능
// ※ 아래 값은 임시 플레이스홀더입니다. 실제 정보로 교체하세요.

export const site = {
  name: "대경IT",
  nameEn: "DAEKYUNG IT",
  tagline: "기업 IT 인프라를 책임지는 든든한 파트너",
  description:
    "IT 유지관리 · 네트워크 · 서버/NAS 구축 · 사무기기. 대구·경북 기업의 IT 파트너 대경IT.",
  url: "https://daekyung-it.kr", // TODO: 실제 도메인으로 교체

  phone: {
    main: "053-000-0000",         // TODO: 대표번호
    mainHref: "tel:053-000-0000",
    mobile: "010-0000-0000",      // TODO: 휴대전화
    mobileHref: "tel:010-0000-0000",
    hours: "평일 09:00 ~ 18:00",
  },

  email: "acapaper78@gmail.com",  // TODO: 대경IT 이메일

  address: {
    street: "대구광역시 (주소 입력)",   // TODO
    bizNo: "000-00-00000",            // TODO: 사업자등록번호
    mailOrder: "제0000-대구-0000호",   // TODO: 통신판매업신고
    ceo: "대표자명",                   // TODO
  },

  social: {
    blog: "https://blog.naver.com/",   // TODO
    instagram: "https://instagram.com/",
    threads: "https://www.threads.net/",
  },

  stats: [
    { value: "000+", label: "관리 고객사" },
    { value: "000+", label: "구축 실적" },
    { value: "000+", label: "장비 설치" },
    { value: "00+",  label: "운영 연수" },
  ],
} as const;

export const nav = [
  { href: "/", label: "홈" },
  { href: "/nas", label: "NAS 솔루션" },
  { href: "/rental", label: "복사기 임대" },
  { href: "/shop", label: "임대 쇼핑몰" },
  { href: "/cases", label: "구축사례" },
  { href: "/support", label: "고객지원" },
  { href: "/support/drivers", label: "드라이버" },
  { href: "/blog", label: "블로그" },
  { href: "/about", label: "회사소개" },
] as const;
