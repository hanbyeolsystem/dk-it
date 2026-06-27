import Link from "next/link";
import { site } from "@/data/site";
import { HeroBackground } from "./HeroBackground";
import { Icon } from "@/components/Icon";
import { embedHref } from "@/lib/embed";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hb-primary text-white">
      {/* 배경: 작업 영상 + 심야 네이비 + 항성골드 글로우(대경=별) */}
      <div className="absolute inset-0">
        <HeroBackground
          posterSrc="/hero/server-rack.png"
          videoSrc="/hero/hero-loop.mp4?v=3"
        />
        {/* 왼쪽 텍스트는 보호, 오른쪽은 영상이 드러나게 */}
        <div className="absolute inset-0 bg-gradient-to-r from-hb-primary via-hb-primary/65 to-hb-primary/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(0,144,216,0.28),transparent_45%)]" />
        <div className="absolute inset-0 console-grid opacity-[0.25]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-hb-primary to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── 텍스트(논제) ── */}
          <div className="lg:col-span-8">
            <div className="hb-rise inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold tracking-[.18em] text-white/70 mb-7">
              <span className="hb-blink w-2 h-2 rounded-full bg-hb-azure shadow-[0_0_0_4px_rgba(0,144,216,0.25)]" />
              SYS.ONLINE — 15Y+ EXPERTS
            </div>

            <h1 className="text-[34px] sm:text-5xl lg:text-[62px] font-black leading-[1.1] tracking-tight mb-7">
              15년 이상 전문경력자들의<br />
              <span className="text-hb-azure">IT 대표의 모임</span>
            </h1>

            <p className="text-base lg:text-lg text-white/85 leading-relaxed mb-2 font-medium">
              NAS 구축 · 데이터 백업 · 복사기 임대 · IT 유지관리
            </p>
            <p className="text-sm lg:text-base text-white/60 mb-9">
              대구·경북 170여 개 기업의 시스템을 <strong className="text-white font-bold">{site.name}</strong>이 지킵니다.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/support/remote"
                className="inline-flex items-center justify-center gap-2 bg-hb-blue hover:bg-hb-azure text-white font-extrabold text-[15px] px-7 py-3.5 rounded-xl transition shadow-lg shadow-hb-azure/30"
              >
                <span aria-hidden>▸</span> 원격지원 시작
              </Link>
              <Link
                href={embedHref("https://hanbyeolsystem.github.io/hanbyeol-errorcode/", "에러코드 검색")}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition border border-white/20"
              >
                <Icon name="search" className="w-[18px] h-[18px]" strokeWidth={2} /> 에러코드 검색
              </Link>
              <Link
                href="/support/drivers"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition border border-white/20"
              >
                <Icon name="download" className="w-[18px] h-[18px]" strokeWidth={2} /> 드라이버 검색
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
