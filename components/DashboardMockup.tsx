import Image from "next/image";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", active: true },
  { label: "Flows", active: false },
  { label: "Runs", active: false },
  { label: "Reports", active: false },
  { label: "Settings", active: false },
];

/* Sample data — clearly illustrative product UI, not real customer results. */
const METRICS = [
  { value: "1,284", label: "Workflows run" },
  { value: "96.2%", label: "Success rate" },
  { value: "2.4s", label: "Avg. duration" },
];

const ACTIVITY = [
  { label: "Workflow published", time: "2m ago", tint: "bg-violet/15", glyph: "M13 3l7 7-7 7v-4H8a5 5 0 00-5 5v1" },
  { label: "Approval completed", time: "5m ago", tint: "bg-emerald-100", glyph: "M4.5 12.5l4.5 4.5 10-11" },
  { label: "Report exported", time: "12m ago", tint: "bg-violet-soft/20", glyph: "M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" },
];

/**
 * The OrinexSoft dashboard window — demo data, labeled as such.
 * Used standalone inside framed hero panels and in the layered composition.
 */
export function DashboardWindow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-white text-left shadow-[0_16px_44px_rgba(17,18,36,0.12)] ${className}`}
    >
      <div className="flex">
        {/* dark sidebar */}
        <div className="w-[104px] shrink-0 bg-deep px-3 py-3">
          <div className="flex items-center gap-1.5 px-1">
            <Image src="/logo-mark.png" alt="" width={720} height={364} className="h-3.5 w-auto" />
            <span className="text-[8px] font-bold tracking-wide text-white">OrinexSoft</span>
          </div>
          <div className="mt-3 space-y-1">
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[8.5px] font-medium ${
                  item.active ? "bg-violet/80 text-white" : "text-cool"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-sm ${item.active ? "bg-white/80" : "bg-cool/60"}`} />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* main panel */}
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-bold text-navy">Dashboard</p>
            <span className="rounded-full border border-line bg-soft px-2 py-0.5 text-[8px] font-bold tracking-wide text-muted uppercase">
              Sample data
            </span>
          </div>

          <p className="mt-3 text-[14px] font-bold text-navy">Good morning!</p>
          <p className="text-[9.5px] text-muted">Here&apos;s what&apos;s running today.</p>

          {/* stat cards — sample data */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {METRICS.map((m) => (
              <div key={m.label} className="rounded-lg border border-line bg-white p-2.5">
                <p className="text-[13px] font-bold text-navy">{m.value}</p>
                <p className="mt-0.5 text-[8.5px] text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          {/* line chart — sample data */}
          <div className="mt-3 rounded-lg border border-line p-3">
            <svg viewBox="0 0 320 90" className="h-[90px] w-full" preserveAspectRatio="none" aria-hidden="true">
              {[20, 45, 70].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgb(17 18 36 / 0.05)" />
              ))}
              <path
                d="M0 72 C 30 66, 55 58, 85 52 S 150 40, 185 34 S 260 20, 320 12"
                fill="none"
                stroke="#6842FF"
                strokeWidth="2"
              />
              <path
                d="M0 72 C 30 66, 55 58, 85 52 S 150 40, 185 34 S 260 20, 320 12 L 320 90 L 0 90 Z"
                fill="rgb(104 66 255 / 0.08)"
              />
              <circle cx="185" cy="34" r="3" fill="#6842FF" />
            </svg>
          </div>

          {/* recent activity — sample data */}
          <p className="mt-3 text-[10px] font-bold text-navy">Recent Activity</p>
          <div className="mt-2 space-y-1.5">
            {ACTIVITY.map((a) => (
              <div key={a.label} className="flex items-center justify-between rounded-lg border border-line px-2.5 py-1.5">
                <span className="flex items-center gap-2">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-md ${a.tint}`}>
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-violet" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={a.glyph} />
                    </svg>
                  </span>
                  <span className="text-[9.5px] font-medium text-navy">{a.label}</span>
                </span>
                <span className="text-[8.5px] text-muted">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Layered composition: a flat pale panel behind a crisp OrinexSoft
 * dashboard window (demo data, labeled as such) and a small floating
 * product card.
 */
export default function DashboardMockup() {
  return (
    <div className="relative" aria-hidden="true">
      {/* flat offset panel — depth without blur */}
      <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-xl border border-line bg-soft sm:block" />

      <DashboardWindow className="relative z-[1] shadow-[0_16px_44px_rgba(17,18,36,0.12)]" />

      {/* small floating product card — sample UI */}
      <div className="absolute -bottom-6 right-6 z-[2] flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3 shadow-[0_12px_32px_rgba(17,18,37,0.14)]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
          <svg viewBox="0 0 12 12" className="h-3 w-3 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 6.5l2.5 2.5 4.5-5" />
          </svg>
        </span>
        <span>
          <span className="block text-[12px] font-semibold text-navy">Workflow run completed</span>
          <span className="block text-[10.5px] text-muted">Sample UI · just now</span>
        </span>
      </div>
    </div>
  );
}
