export default function Logo({
  light = false,
  id = "brand",
  className = "",
}: {
  /** true = variant for dark surfaces (white wordmark); false = light surfaces (navy wordmark) */
  light?: boolean;
  /** unique suffix so SVG gradient ids never collide across instances */
  id?: string;
  className?: string;
}) {
  const gid = `inv-g-${id}`;
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 shrink-0">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8175F0" />
            <stop offset="1" stopColor="#6C5CE7" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          fill={light ? "rgba(255,255,255,0.06)" : "#FFFFFF"}
        />
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="2"
        />
        <path
          d="M9.5 22.5 L14.5 13.5 L19 18.5 L22.5 9.5"
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="22.5" r="2.2" fill="#8175F0" />
        <circle cx="22.5" cy="9.5" r="2.2" fill="#6C5CE7" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-bold tracking-[0.08em] ${
            light ? "text-white" : "text-navy"
          }`}
        >
          FUTUREX
        </span>
        <span
          className={`mt-1 text-[8.5px] font-semibold tracking-[0.34em] ${
            light ? "text-cool" : "text-muted"
          }`}
        >
          TECHNOLOGIES
        </span>
      </span>
    </span>
  );
}
