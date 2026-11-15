import Reveal from "./Reveal";

function StepVisualConnect() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {["S", "G", "H", "J", "N", "O", "Z", "S"].map((c, i) => (
        <span
          key={i}
          className="flex h-10 items-center justify-center rounded-xl border border-navy/10 bg-white font-display text-[13px] font-bold text-navy shadow-sm"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function StepVisualBuild() {
  return (
    <div className="space-y-0 rounded-xl border border-navy/10 bg-navy p-3">
      {["New claim received", "Enrich with AI research", "Route to regional pod"].map(
        (s, i) => (
          <div key={s}>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-navy/60 px-3 py-2">
              <span className="text-[11px] text-white/90">{s}</span>
              <span
                className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-emerald-400" : "bg-violet"}`}
              />
            </div>
            {i < 2 && <div className="mx-auto h-3 w-px bg-gradient-to-b from-violet/60 to-white/10" />}
          </div>
        )
      )}
    </div>
  );
}

function StepVisualMeasure() {
  const bars = [42, 60, 48, 74, 62, 90, 80, 100];
  return (
    <div className="rounded-xl border border-navy/10 bg-navy p-4">
      <div className="flex items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h * 0.5}px` }}
            className={`w-full rounded-t-md ${i === bars.length - 1 ? "bg-violet" : "bg-white/10"}`}
          />
        ))}
      </div>
      <p className="mt-3 text-[11px] font-semibold text-violet-soft">
        +24.1% hours automated this quarter
      </p>
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Connect your stack",
    body: "Link the tools your teams already run on. OrinexSoft syncs data in both directions across 200+ integrations, so records stay identical everywhere.",
    visual: <StepVisualConnect />,
  },
  {
    n: "02",
    title: "Design the workflow",
    body: "Build approvals, routing, and reporting visually. AI agents handle the repetitive paths, and every trigger lands in an audit log your compliance team can read.",
    visual: <StepVisualBuild />,
  },
  {
    n: "03",
    title: "Measure everything",
    body: "Dashboards update the second data changes. Forecasts arrive with confidence intervals, and anomalies surface before they cost money.",
    visual: <StepVisualMeasure />,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] font-semibold text-violet">
            How it works
          </p>
          <h2
            id="how-heading"
            className="font-display mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl"
          >
            Live in a week. Measured from day one.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
                <span className="font-display text-[13px] font-bold tracking-[0.2em] text-muted">
                  STEP {step.n}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">{step.body}</p>
                <div className="mt-6">{step.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
