import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────
// 배포 경로 설정
// 지금은 커스텀 도메인이 없어 GitHub Pages 프로젝트 주소
//   https://hanbyeolsystem.github.io/dk-it/
// 로 배포되므로 basePath 가 "/dk-it" 여야 CSS·이미지가 깨지지 않는다.
//
// ▶ 추후 커스텀 도메인(예: daekyung-it.kr)을 연결하면:
//   1) 아래 basePath 를 "" (빈 문자열) 로 변경
//   2) public/CNAME 파일에 도메인 작성
// ─────────────────────────────────────────────────────────────
const basePath = "/dk-it";

// GitHub Pages 정적 호스팅 — `npm run build` 시 /out 폴더에 사이트 빌드
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    // 클라이언트 코드에서 원시 경로(영상·서비스워커 등) 보정용 단일 출처
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true, // 정적 export 는 Next 의 Image 최적화 서버를 못 씀
  },
  trailingSlash: true, // GitHub Pages 정적 호스팅 호환성 (a.html 대신 a/ 디렉토리)
};

export default nextConfig;
