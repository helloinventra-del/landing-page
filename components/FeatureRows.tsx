import Reveal from "./Reveal";

/* ------------------------------- mock panels ------------------------------- */

function BoardMock() {
  const columns = [
    { name: "Queued", cards: ["Vendor onboarding", "API access review"], tone: "wait" as const },
    { name: "In progress", cards: ["Data migration", "QA automation"], tone: "run" as const },
    { name: "Shipped", cards: ["ERP sync v2.4"], tone: "ok" as const },
  ];
  const toneDot = { wait: "bg-cool/40", run: "bg-violet", ok: "bg-emerald-400" };
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-navy/80 p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-[14px] font-bold text-white">Automation Board</p>
        <span className="rounded-full border border-violet/30 bg-violet/10 px-2.5 py-1 text-[10px] font-semibold text-violet-soft">
          Live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {columns.map((col) => (
          <div key={col.name} className="space-y-2.5">
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${toneDot[col.tone]}`} />
              <p className="text-[10px] font-semibold tracking-wide text-cool uppercase">{col.name}</p>
            </div>
            {col.cards.map((c) => (
              <div key={c} className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
                <p className="text-[11px] font-medium leading-snug text-white/90">{c}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="h-4 w-4 rounded-full bg-violet/50" />
                  <span className="h-1.5 w-8 rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TableMock() {
  const rows = [
    { name: "Platform rollout", pod: "Core", status: "On track", pct: 82 },
    { name: "AI copilot beta", pod: "Intelligence", status: "On track", pct: 64 },
    { name: "Data warehouse", pod: "Platform", status: "At risk", pct: 41 },
    { name: "SSO migration", pod: "Security", status: "Done", pct: 100 },
  ];
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-navy/80 p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[14px] font-bold text-white">Enterprise Systems</p>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-cool">Q4 · 24 projects</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10">
        <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-white/10 bg-white/[0.04] px-3.5 py-2 text-[10px] font-semibold tracking-wide text-cool uppercase">
          <span>System</span><span>Status</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-white/5 px-3.5 py-2.5 last:border-0">
            <div>
              <p className="text-[12px] font-medium text-white/90">{r.name}</p>
              <div className="mt-1.5 h-1 w-28 overflow-hidden rounded-full bg-white/10">
                <div className={`h-full rounded-full ${r.pct === 100 ? "bg-emerald-400" : "bg-violet"}`} style={{ width: `${r.pct}%` }} />
              </div>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                r.status === "At risk"
                  ? "bg-amber-400/10 text-amber-300"
                  : r.status === "Done"
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "bg-violet/15 text-violet-soft"
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartMock() {
  const bars = [40, 58, 46, 72, 60, 88, 78, 100];
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-navy/80 p-4 sm:p-5">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold tracking-wide text-cool uppercase">Forecast · Revenue</p>
          <p className="font-display mt-1 text-2xl font-bold text-white">$4.82M</p>
          <p className="mt-0.5 text-[11px] font-semibold text-violet-soft">+24.1% projected</p>
        </div>
        <span className="rounded-full border border-violet/30 bg-violet/10 px-2.5 py-1 text-[10px] font-semibold text-violet-soft">AI Model v3</span>
      </div>
      <div className="flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-md ${i === bars.length - 1 ? "bg-violet" : "bg-white/10"}`} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Accuracy 94%", "Signals 118", "Lag 0.4s"].map((s) => (
          <div key={s} className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5 text-center text-[10px] text-cool">{s}</div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- content --------------------------------- */

const ROWS = [
  {
    title: "Business Automation",
    body: "Build a workflow visually in the morning; it runs by lunch. Every trigger and every action is logged, so audits take minutes instead of weeks.",
    checks: ["Visual workflow builder", "AI agents & smart triggers", "Process mining insights"],
    mock: <BoardMock />,
    anchor: undefined,
  },
  {
    title: "Enterprise Systems",
    body: "CRM, operations, and infrastructure live under one roof. Access is governed by roles, so nobody holds keys they don't need. Anything you already own connects through open APIs.",
    checks: ["Unified CRM & operations", "Role-based access control", "Open APIs & webhooks"],
    mock: <TableMock />,
    anchor: "about",
  },
  {
    title: "Data Intelligence",
    body: "Your numbers come straight from live data. Forecasts arrive with confidence intervals, and anomalies surface before they become losses.",
    checks: ["Real-time analytics", "AI forecasting models", "Custom reporting suites"],
    mock: <ChartMock />,
    anchor: undefined,
  },
];

export default function FeatureRows() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24" id="solutions" aria-labelledby="feature-rows-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2
            id="feature-rows-heading"
            className="font-display max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl"
          >
            Run the whole business
            <br />
            from{" "}
            <span className="bg-gradient-to-r from-violet to-violet-soft bg-clip-text text-transparent">
              one place
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {ROWS.map((row, i) => (
            <Reveal key={row.title} delay={60}>
              <div className="grid items-center gap-8 rounded-[2rem] border border-navy/10 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-12">
                <div id={row.anchor}>
                  <p className="text-[12px] font-semibold tracking-[0.2em] text-violet uppercase">
                    0{i + 1} · Platform
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-bold text-navy sm:text-[28px]">
                    {row.title}
                  </h3>
                  <p className="mt-3.5 max-w-md text-[14.5px] leading-relaxed text-muted">
                    {row.body}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {row.checks.map((check) => (
                      <li key={check} className="flex items-center gap-2.5 text-[14px] text-navy">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet/15">
                          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-violet" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" />
                          </svg>
                        </span>
                        {check}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_28px_rgba(108,92,231,0.45)] hover:ring-2 hover:ring-violet-soft"
                  >
                    Try for free
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-6 rounded-3xl bg-violet/10 blur-3xl" aria-hidden="true" />
                  <div className="relative rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-card p-4 sm:p-6">
                    {row.mock}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
