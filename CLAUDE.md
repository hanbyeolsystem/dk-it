# 대경IT 홈페이지 (Next.js) — Claude 작업 컨텍스트

이 폴더는 대경IT 공식 사이트 소스. **한별시스템 고객사이트(customer)를 기본틀로 복제 후 리브랜딩**한 독립 프로젝트다.
GitHub 리포 / Supabase 프로젝트를 별도로 두기 위해 폴더를 분리했다.

## 별칭
사용자가 "대경IT" / "대경" / "대경it 사이트" 라고 하면 이 폴더.

## 스택 (한별 customer와 동일)
- Next.js 16 App Router · React 19 · TypeScript 5
- Tailwind v4 (`@theme` 블록 — `tailwind.config` 없음)
- next-themes (class 기반 다크모드)
- Swiper 12
- 정적 export (`next.config.ts` 의 `output: "export"`) → `/out` 폴더 빌드 → GitHub Pages

## 디자인 — 오렌지 + 네이비 (한별의 블루에서 전환)
색상 토큰 이름은 한별과 동일하게 `hb-*` 를 그대로 쓴다(전 컴포넌트가 참조하므로 이름 유지, **값만 교체**).
의미 매핑이 살짝 어긋나 있으니 주의:
- `hb-primary` / `hb-primary-2` = **네이비** (히어로·푸터·CTA 다크 서피스)
- `hb-blue` / `hb-blue-light` / `hb-blue-soft` = **오렌지** (버튼·링크·포인트)
- `hb-azure` 계열 = **비비드 오렌지** (시그니처 글로우·점)
- 배경: 웜 아이보리(`#F5F3EF`) / 잉크: 네이비(`#16223D`)
- 변경 지점: `src/app/globals.css` 의 `@theme` 와 `:root` / `.dark`

## 콘텐츠 데이터 (관리자 페이지 없이 코드로 수정)
- `src/data/site.ts` — 회사정보·전화·SNS·통계 **← 현재 임시 플레이스홀더(TODO). 실제 값으로 교체 필요**
- `src/data/services.ts` — 퀵서비스/핵심서비스
- `src/data/cases.ts` — 구축사례 (더미)
- `src/data/products.ts` — 임대 상품 (더미)
- `src/data/posts.ts` — 블로그 글 (더미)

## 아직 한별에서 그대로 물려받은 것 (교체 필요)
- `public/brand/logo.png` — 한별 로고. **대경IT 로고로 교체**
- `public/hero/hero-loop.mp4`, `public/cases/*.png` — 한별 자산(임시 비주얼)
- `src/lib/chat.ts`, `src/lib/contact.ts` — Supabase 엔드포인트가 `YOUR_PROJECT_REF` 플레이스홀더.
  **대경IT 전용 Supabase 프로젝트 생성 후 교체** (anon key 포함)
- `supabase/functions/` — Edge Function 소스(챗봇/슬랙 알림). 대경 Supabase에 배포 필요
- 외부 서비스 URL(쇼핑몰 hbsys.kr, 드라이브 882.kr 등)은 한별 것 — 대경 채널로 교체
- 일부 페이지 본문 카피는 한별 IT 서비스 기준 — 대경IT 사업 내용으로 다듬기

## 배포 (GitHub Pages)
`.github/workflows/deploy.yml`: `main` push 시 `npm run build` → `/out` → Pages 자동 배포.
도메인은 `public/CNAME` (`daekyung-it.kr` — TODO: 실제 도메인).

## 자주 막힐 점
- Tailwind v4 다크모드: `@custom-variant dark (&:where(.dark, .dark *));` — `dark:` 접두사 사용 가능
- 정적 export라 `next/image` 는 `unoptimized: true`. 외부 이미지는 도메인 제약 없음
- 폼은 Supabase Edge Function 중계 — 엔드포인트 미설정 시 전송 실패(UI는 동작)
