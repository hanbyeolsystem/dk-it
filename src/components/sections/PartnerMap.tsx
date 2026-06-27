"use client";

import { useState } from "react";
import { partners } from "@/data/partners";
import { Icon } from "@/components/Icon";

/* 회원사(파트너) 위치 섹션 — "15년 이상 전문경력자들의 IT 대표의 모임"
   왼쪽: 회원사 목록(클릭 선택) / 오른쪽: 선택한 회원사의 지도 + 상세.
   지도는 별도 API 키 없이 동작하는 구글 지도 임베드(주소 검색)를 사용.
   ▶ 추후 카카오맵(JS 키 필요)으로 교체하려면 mapSrc 부분만 바꾸면 됨. */

function mapSrc(address: string) {
  const q = encodeURIComponent(address);
  return `https://maps.google.com/maps?q=${q}&z=15&hl=ko&output=embed`;
}

function kakaoSearch(address: string) {
  return `https://map.kakao.com/?q=${encodeURIComponent(address)}`;
}

export function PartnerMap() {
  const [active, setActive] = useState(0);
  const cur = partners[active];

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* 헤더 */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow justify-center mb-4">PARTNER NETWORK</span>
          <h2 className="text-2xl lg:text-4xl font-black text-[var(--ink)] mb-4">
            대구·경북 회원사 네트워크
          </h2>
          <p className="text-[var(--mute)] leading-relaxed">
            15년 이상 전문경력자들의 IT 대표 모임 — 대구·경북 {partners.length}개 회원사가
            가까운 곳에서 함께 합니다. 회원사를 선택하면 위치와 정보를 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ── 회원사 목록 ── */}
          <div className="lg:col-span-5">
            <ul className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
              {partners.map((p, i) => {
                const on = i === active;
                return (
                  <li key={`${p.name}-${i}`}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={on}
                      className={[
                        "w-full text-left rounded-xl border p-4 transition",
                        on
                          ? "border-hb-blue bg-hb-blue-soft/60 shadow-sm"
                          : "border-[var(--line)] bg-[var(--panel)] hover:border-hb-blue/50",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={[
                                "inline-flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-bold shrink-0",
                                on ? "bg-hb-blue text-white" : "bg-[var(--bg)] text-[var(--mute)] border border-[var(--line)]",
                              ].join(" ")}
                            >
                              {i + 1}
                            </span>
                            <span className="font-extrabold text-[var(--ink)] truncate">
                              {p.name}
                            </span>
                          </div>
                          <p className="text-[13px] text-[var(--mute)] mt-1.5 truncate">
                            {p.field}
                          </p>
                          <p className="text-[12px] text-[var(--mute)] mt-1 inline-flex items-center gap-1">
                            <Icon name="pin" className="w-3.5 h-3.5 text-hb-blue shrink-0" strokeWidth={2} />
                            {p.address}
                          </p>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-hb-blue bg-hb-blue-soft px-2 py-0.5 rounded-full">
                          {p.region}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── 지도 + 선택 회원사 상세 ── */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[var(--line)] overflow-hidden bg-[var(--panel)] shadow-sm">
              <div className="relative w-full aspect-[16/11] bg-[var(--bg)]">
                <iframe
                  key={cur.address}
                  title={`${cur.name} 위치 지도`}
                  src={mapSrc(cur.address)}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* 선택 회원사 상세 */}
              <div className="p-5 lg:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-black text-[var(--ink)]">{cur.name}</h3>
                  <span className="text-[11px] font-bold text-hb-blue bg-hb-blue-soft px-2 py-0.5 rounded-full">
                    {cur.region}
                  </span>
                </div>

                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <Icon name="pin" className="w-4 h-4 text-hb-blue shrink-0" strokeWidth={2} />
                    <span className="text-[var(--ink)]">{cur.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="server" className="w-4 h-4 text-hb-blue shrink-0" strokeWidth={2} />
                    <span className="text-[var(--mute)]">{cur.field}</span>
                  </div>
                  {cur.ceo && (
                    <div className="flex items-center gap-2">
                      <Icon name="star" className="w-4 h-4 text-hb-blue shrink-0" strokeWidth={2} />
                      <span className="text-[var(--mute)]">대표 {cur.ceo}</span>
                    </div>
                  )}
                  {cur.phone && (
                    <div className="flex items-center gap-2">
                      <Icon name="phone" className="w-4 h-4 text-hb-blue shrink-0" strokeWidth={2} />
                      <a href={`tel:${cur.phone}`} className="text-[var(--ink)] font-semibold hover:text-hb-blue transition">
                        {cur.phone}
                      </a>
                    </div>
                  )}
                </dl>

                <div className="flex flex-wrap gap-2.5 mt-5">
                  <a
                    href={kakaoSearch(cur.address)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-hb-blue hover:bg-hb-azure text-white font-bold text-[13px] px-4 py-2.5 rounded-lg transition"
                  >
                    <Icon name="pin" className="w-4 h-4" strokeWidth={2} /> 카카오맵 길찾기
                  </a>
                  {cur.homepage && (
                    <a
                      href={cur.homepage}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 border border-[var(--line)] text-[var(--ink)] hover:border-hb-blue hover:text-hb-blue font-bold text-[13px] px-4 py-2.5 rounded-lg transition"
                    >
                      <Icon name="external" className="w-4 h-4" strokeWidth={2} /> 홈페이지
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
