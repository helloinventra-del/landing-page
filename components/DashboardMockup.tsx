import Image from "next/image";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", active: true },
  { label: "Tasks", active: false },
  { label: "Projects", active: false },
  { label: "Reports", active: false },
  { label: "Settings", active: false },
];

const METRICS = [
  { value: "128k", label: "Total users", delta: "+1.5%" },
  { value: "$24.8k", label: "Revenue", delta: "+1.8%" },
  { value: "99.9%", label: "Uptime", delta: "+1%" },
];

const ACTIVITY = [
  { label: "New user signed up", time: "2m ago", tint: "bg-violet/15", glyph: "M10 12a4 4 0 100-8 4 4 0 000 8zM3 21v-1a6 6 0 0112 0v1" },
  { label: "Payment received", time: "5m ago", tint: "bg-emerald-100", glyph: "M3 7h18v10H3zM3 11h18M7 15h4" },
  { label: "New project created", time: "12m ago", tint: "bg-violet-soft/20", glyph: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" },
];

/**
 * Layered hero composition: purple geometric shapes, the OrinexSoft web
 * dashboard (demo data) and an overlapping mobile interface.
 */
export default function DashboardMockup() {
  return (
    <div className="relative" aria-hidden="true">
      {/* soft purple geometric shapes */}
      <div className="absolute -right-6 -top-8 h-44 w-[420px] rotate-2 rounded-3xl bg-gradient-to-br from-lavender to-white" />
      <div className="absolute -right-2 top-6 h-40 w-64 rounded-2xl border border-line bg-white/40" />

      {/* dashboard window */}
      <div className="relative z-[1] ml-auto w-[92%] overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_60px_rgba(17,18,36,0.16)]">
        <div className="flex">
          {/* sidebar */}
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
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-28 rounded-md border border-line bg-soft" />
                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-line text-muted">
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4-4" />
                  </svg>
                </span>
              </div>
            </div>

            <p className="mt-3 text-[14px] font-bold text-navy">Good morning!</p>
            <p className="text-[9.5px] text-muted">Here&apos;s what&apos;s happening today.</p>

            {/* metric cards — demo data */}
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {METRICS.map((m) => (
                <div key={m.label} className="rounded-lg border border-line bg-white p-2.5">
                  <p className="text-[13px] font-bold text-navy">{m.value}</p>
                  <p className="mt-0.5 text-[8.5px] text-muted">{m.label}</p>
                  <span className="mt-1 inline-block rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-600">
                    {m.delta}
                  </span>
                </div>
              ))}
            </div>

            {/* line chart — demo data */}
            <div className="mt-3 rounded-lg border border-line p-3">
              <svg viewBox="0 0 320 90" className="h-[90px] w-full" preserveAspectRatio="none" aria-hidden="true">
                {[20, 45, 70].map((y) => (
                  <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgb(17 18 36 / 0.05)" />
                ))}
                <path
                  d="M0 72 C 30 66, 55 58, 85 52 S 150 40, 185 34 S 260 20, 320 12"
                  fill="none"
                  stroke="#6945F5"
                  strokeWidth="2"
                />
                <path
                  d="M0 72 C 30 66, 55 58, 85 52 S 150 40, 185 34 S 260 20, 320 12 L 320 90 L 0 90 Z"
                  fill="rgb(105 69 245 / 0.08)"
                />
                <circle cx="185" cy="34" r="3" fill="#6945F5" />
              </svg>
            </div>

            {/* recent activity — demo data */}
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

      {/* overlapping mobile interface */}
      <div className="absolute -left-6 bottom-[-26px] z-[2] w-[150px] rounded-[20px] border border-line bg-white p-3 shadow-[0_20px_50px_rgba(17,18,36,0.20)]">
        <div className="mx-auto h-1 w-10 rounded-full bg-line" />
        <div className="mt-3 flex items-center gap-1.5">
          <Image src="/logo-mark.png" alt="" width={720} height={364} className="h-4 w-auto" />
          <span className="text-[9px] font-extrabold tracking-wide text-navy">OrinexSoft</span>
        </div>
        <p className="mt-2 text-[8px] font-bold leading-snug text-navy">
          Build. Automate. Grow.
        </p>
        <svg viewBox="0 0 120 60" className="mt-2 w-full" aria-hidden="true">
          <path
            d="M0 48 C 24 40, 40 18, 68 26 S 100 44, 120 20 L 120 60 L 0 60 Z"
            fill="rgb(105 69 245 / 0.85)"
          />
          <path
            d="M0 54 C 30 48, 52 30, 80 36 S 108 52, 120 38"
            fill="none"
            stroke="#8A68FF"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
