/* 대경IT연합회 로고 (인라인 SVG)
   - 엠블럼: 중심 노드 + 4개 회원사 노드가 연결된 "연합 네트워크" 모티프
   - 워드마크: 대경 + IT(오렌지 포인트) + 연합회, 하단 영문 서브타이틀
   - tone="brand"  → 밝은 배경용(네이비 글자)  / tone="light" → 어두운 배경용(흰 글자)
   인라인 SVG라 페이지 폰트(Pretendard)를 그대로 사용하고, 어떤 크기로도 선명하다. */

export function Logo({
  className = "h-11 w-auto",
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "light";
}) {
  const orange = "#F26C1F";
  const ink = tone === "light" ? "#FFFFFF" : "#16223D";
  const sub = tone === "light" ? "rgba(255,255,255,0.65)" : "#5C6B82";
  const badge = tone === "light" ? "#FFFFFF" : "#16223D";
  const node = orange;
  const center = tone === "light" ? "#16223D" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 300 72"
      className={className}
      role="img"
      aria-label="대경IT연합회"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 엠블럼 */}
      <rect x="4" y="6" width="60" height="60" rx="16" fill={badge} />
      {/* 연결선 */}
      <g stroke={node} strokeWidth="2.4" strokeLinecap="round" opacity="0.85">
        <line x1="34" y1="36" x2="20" y2="22" />
        <line x1="34" y1="36" x2="48" y2="22" />
        <line x1="34" y1="36" x2="20" y2="50" />
        <line x1="34" y1="36" x2="48" y2="50" />
      </g>
      {/* 회원사 노드 */}
      <g fill={node}>
        <circle cx="20" cy="22" r="4.2" />
        <circle cx="48" cy="22" r="4.2" />
        <circle cx="20" cy="50" r="4.2" />
        <circle cx="48" cy="50" r="4.2" />
      </g>
      {/* 중심 노드(연합회) */}
      <circle cx="34" cy="36" r="7" fill={center} />
      <circle cx="34" cy="36" r="3.2" fill={node} />

      {/* 워드마크 */}
      <text
        x="78"
        y="39"
        fontFamily="Pretendard, 'Apple SD Gothic Neo', sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-0.5"
        fill={ink}
      >
        대경<tspan fill={orange}>IT</tspan>연합회
      </text>
      <text
        x="79"
        y="57"
        fontFamily="Pretendard, sans-serif"
        fontWeight="600"
        fontSize="9.5"
        letterSpacing="3"
        fill={sub}
      >
        DAEKYUNG IT UNION
      </text>
    </svg>
  );
}
