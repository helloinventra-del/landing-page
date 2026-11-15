export default function Logo({
  light = false,
  id = "brand",
  className = "",
}: {
  /** true = variant for dark surfaces (white wordmark); false = light surfaces (navy wordmark) */
  light?: boolean;
  /** unique suffix so gradient/mask ids never collide across instances */
  id?: string;
  className?: string;
}) {
  const gO = `ox-o-${id}`;
  const gX = `ox-x-${id}`;
  const mHole = `ox-hole-${id}`;
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* OX mark — vector recreation of the brand logo */}
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-9 w-9 shrink-0">
        <defs>
          <linearGradient id={gO} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C45CF7" />
            <stop offset="0.55" stopColor="#7C4FF0" />
            <stop offset="1" stopColor="#4F3AE8" />
          </linearGradient>
          <linearGradient id={gX} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A55EF6" />
            <stop offset="1" stopColor="#4633E6" />
          </linearGradient>
          <mask id={mHole}>
            <rect width="64" height="64" fill="white" />
            <circle cx="21" cy="34" r="7.2" fill="black" />
          </mask>
        </defs>
        {/* X passes behind the O */}
        <g
          stroke={`url(#${gX})`}
          strokeWidth="11"
          fill="none"
        >
          <path d="M38 9.5 L59.5 53.5" />
          <path d="M59.5 9.5 L38 53.5" />
        </g>
        {/* depth shadow the O casts onto the X */}
        <g opacity="0.32" transform="translate(2.5 2.5)">
          <circle cx="21" cy="34" r="16.5" fill="#160F38" mask={`url(#${mHole})`} />
        </g>
        {/* O on top */}
        <circle cx="21" cy="34" r="16.5" fill={`url(#${gO})`} mask={`url(#${mHole})`} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[16px] font-bold tracking-[0.08em] ${
            light ? "text-white" : "text-navy"
          }`}
        >
          ORINEXSOFT
        </span>
        <span
          className={`mt-1 text-[9.5px] font-semibold tracking-[0.3em] ${
            light ? "text-cool" : "text-muted"
          }`}
        >
          TECHNOLOGIES
        </span>
      </span>
    </span>
  );
}
