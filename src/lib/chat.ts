// 대경IT 고객센터 챗봇 설정
// anon 키는 공개 키(클라이언트 노출 정상) — RLS/verify_jwt 용 식별자일 뿐 비밀이 아니다.
// 실제 비밀(ANTHROPIC_API_KEY)은 Edge Function 서버에만 존재한다.

// TODO: 대경IT 전용 Supabase 프로젝트를 만든 뒤 아래 값을 교체하세요.
// (Supabase 대시보드 → Project Settings → API 에서 URL/anon key 확인)
export const CHAT_ENDPOINT =
  "https://YOUR_PROJECT_REF.supabase.co/functions/v1/customer-chat";

export const SUPABASE_ANON_KEY =
  "YOUR_SUPABASE_ANON_KEY";

export type ChatMessage = { role: "user" | "assistant"; content: string };
