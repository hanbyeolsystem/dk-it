import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "원격 지원",
  description: "Seetrol MY 원격지원. 다운로드 후 화면에 보이는 숫자를 담당 회원사에 알려주시면 즉시 원격 접속합니다.",
};

// 다운로드 경로 — 파일명은 절대 변경 금지 (Seetrol 접속 식별자)
const REMOTE_FILE = "/files/588-0 대경원격.exe";
const REMOTE_FILENAME = "588-0 대경원격.exe";

const steps = [
  "클릭 후 열기 또는 다운로드 후 실행",
  "대경IT에 화면에 보이는 숫자를 알려주세요",
];

export default function RemoteSupportPage() {
  return (
    <>
      <PageHeader
        badge="REMOTE SUPPORT"
        title="원격 지원 즉시 연결"
        description="대경 전용 Seetrol MY 원격지원. 두 단계면 끝납니다."
      />

      <section className="py-12 lg:py-16 bg-[var(--bg)]">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          {/* Seetrol 단일 다운로드 카드 */}
          <a
            href={REMOTE_FILE}
            download={REMOTE_FILENAME}
            className="group relative overflow-hidden block bg-gradient-to-br from-hb-blue to-hb-blue-light text-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition mb-10"
          >
            <span className="absolute top-4 right-4 bg-white text-hb-primary text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full">
              대경 추천
            </span>
            <div className="text-5xl mb-4">⬇</div>
            <h2 className="text-xl lg:text-2xl font-extrabold leading-tight mb-1">
              Seetrol MY 원격지원
            </h2>
            <p className="text-[13px] lg:text-sm text-white/80 mb-6 leading-relaxed">
              대경IT 전용 · 설치 불필요 · 클릭 즉시 실행
            </p>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur px-4 py-2.5 rounded-xl text-sm font-extrabold group-hover:bg-white/30 transition">
              지금 다운로드 →
            </div>
          </a>

          {/* 진행 순서 — 2단계 */}
          <h3 className="text-lg lg:text-xl font-extrabold text-[var(--ink)] mb-5">
            진행 순서
          </h3>
          <div className="bg-[var(--panel)] border border-[var(--line)] rounded-3xl p-6 lg:p-8 mb-10">
            <ol className="space-y-5">
              {steps.map((body, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-hb-blue text-white font-black flex items-center justify-center shadow-md">
                    {idx + 1}
                  </span>
                  <div className="pt-1.5 text-[var(--ink)] font-semibold text-[15px] lg:text-base leading-relaxed">
                    {body}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* 회원사 연결 CTA */}
          <div className="bg-gradient-to-br from-hb-primary to-hb-blue text-white rounded-3xl p-7 lg:p-9 text-center shadow-xl">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl lg:text-2xl font-extrabold mb-2">원격 지원 연결</h3>
            <p className="text-sm text-white/80 mb-5">
              프로그램 실행 후 화면에 보이는 숫자를<br />담당 회원사에 알려주시면 즉시 접속합니다.
            </p>
            <Link
              href="/#partners"
              className="inline-flex items-center justify-center gap-2 bg-white text-hb-primary hover:bg-hb-blue-soft font-extrabold text-base lg:text-lg px-8 py-4 rounded-xl transition shadow-lg"
            >
              회원사 찾기 →
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-[var(--mute)] hover:text-hb-blue transition">
              ← 메인으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
