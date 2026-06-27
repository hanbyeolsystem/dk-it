// public 폴더 정적 자산 경로에 basePath(/dk-it)를 붙인다.
//
// 왜 필요한가: next.config 에서 images.unoptimized:true 라 next/image 의 기본 로더가
// basePath 를 자동으로 붙이지 않는다. 그래서 프로젝트 서브경로(/dk-it/) 배포에서
// "/cases/a.png" 같은 절대경로 이미지가 404 가 된다. 이 헬퍼로 보정한다.
//
// 외부 URL(http…)이나 상대경로는 그대로 둔다. 커스텀 도메인 연결 시 basePath="" 가 되어
// 자동으로 "/cases/a.png" 로 돌아간다.
export function asset(path: string): string {
  if (!path || !path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
