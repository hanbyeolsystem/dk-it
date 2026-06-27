import Link from "next/link";
import { site } from "@/data/site";
import { embedHref } from "@/lib/embed";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-hb-primary text-slate-300 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* 브랜드 */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo tone="light" className="h-12 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              {site.tagline}
            </p>
            <div className="flex gap-2">
              <Link href={embedHref(site.social.blog, "대경 블로그")} aria-label="네이버 블로그"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-hb-blue hover:text-white flex items-center justify-center transition"><Icon name="pen" className="w-[18px] h-[18px]" /></Link>
              <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="인스타그램"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-hb-blue hover:text-white flex items-center justify-center transition"><Icon name="camera" className="w-[18px] h-[18px]" /></a>
              <a href={site.social.threads} target="_blank" rel="noopener" aria-label="Threads"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-hb-blue hover:text-white flex items-center justify-center transition"><Icon name="at" className="w-[18px] h-[18px]" /></a>
            </div>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="text-[11px] font-extrabold text-white tracking-[.18em] mb-3">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nas" className="hover:text-white transition">NAS 솔루션</Link></li>
              <li><Link href="/rental" className="hover:text-white transition">복사기 임대</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">임대 쇼핑몰</Link></li>
              <li><Link href="/cases" className="hover:text-white transition">구축 사례</Link></li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h4 className="text-[11px] font-extrabold text-white tracking-[.18em] mb-3">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support/remote" className="hover:text-white transition">원격 지원</Link></li>
              <li><Link href="/support/drivers" className="hover:text-white transition">드라이버 다운로드</Link></li>
              <li><Link href="/support/as" className="hover:text-white transition">AS 접수</Link></li>
              <li><Link href="/support/quote" className="hover:text-white transition">견적 요청</Link></li>
            </ul>
          </div>

          {/* 문의 — 중앙 연락처 없이 각 회원사로 직접 */}
          <div>
            <h4 className="text-[11px] font-extrabold text-white tracking-[.18em] mb-3">문의</h4>
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              대경IT연합회는 회원사별로 운영됩니다.<br />
              문의는 가까운 회원사로 직접 연락해 주세요.
            </p>
            <Link
              href="/#partners"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-hb-blue-light hover:text-white transition"
            >
              <Icon name="pin" className="w-4 h-4 shrink-0" strokeWidth={2} />
              회원사 찾기 →
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-[11px] leading-relaxed text-slate-500">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div>
              <strong className="text-slate-300">{site.name}</strong> · 15년 이상 전문경력자들의 IT 대표 모임
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <Link href="/privacy" className="hover:text-slate-300">개인정보처리방침</Link>
              <span className="text-slate-700">·</span>
              <Link href="/terms" className="hover:text-slate-300">이용약관</Link>
            </div>
          </div>
          <div className="text-center text-slate-600 mt-4">© 2026 대경IT연합회 (DAEKYUNG IT UNION). All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
