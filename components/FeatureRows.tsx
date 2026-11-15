import Image from "next/image";
import Reveal from "./Reveal";

/* --------------------------------- content --------------------------------- */

const ROWS = [
  {
    title: "Business Automation",
    body: "Build a workflow visually in the morning; it runs by lunch. Every trigger and every action is logged, so audits take minutes instead of weeks.",
    checks: ["Visual workflow builder", "AI agents & smart triggers", "Process mining insights"],
    photo: "photo-1517245386807-bb43f82c33c4",
    alt: "Operations team mapping an approval workflow in a planning workshop",
    anchor: undefined,
  },
  {
    title: "Enterprise Systems",
    body: "CRM, operations, and infrastructure live under one roof. Access is governed by roles, so nobody holds keys they don't need. Anything you already own connects through open APIs.",
    checks: ["Unified CRM & operations", "Role-based access control", "Open APIs & webhooks"],
    photo: "photo-1558494949-ef010cbdcc31",
    alt: "Enterprise server infrastructure running OrinexSoft deployments",
    anchor: "about",
  },
  {
    title: "Data Intelligence",
    body: "Your numbers come straight from live data. Forecasts arrive with confidence intervals, and anomalies surface before they become losses.",
    checks: ["Real-time analytics", "AI forecasting models", "Custom reporting suites"],
    photo: "photo-1544197150-b99a580bb7a8",
    alt: "Control room screens streaming live business metrics",
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
            from <span className="text-violet">one place</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {ROWS.map((row, i) => (
            <Reveal key={row.title} delay={60}>
              <div className="grid items-center gap-8 rounded-[2rem] border border-navy/10 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-12">
                <div id={row.anchor}>
                  <p className="text-[13px] font-semibold text-muted">
                    Platform {i + 1} of 3
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-bold text-navy sm:text-[28px]">
                    {row.title}
                  </h3>
                  <p className="mt-3.5 max-w-md text-[15px] leading-relaxed text-muted">
                    {row.body}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {row.checks.map((check) => (
                      <li key={check} className="flex items-center gap-2.5 text-[14px] text-navy">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10">
                          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-navy" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" />
                          </svg>
                        </span>
                        {check}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
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
                  <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-card shadow-[0_20px_50px_rgba(11,16,32,0.18)]">
                    <div className="relative aspect-[16/11] w-full">
                      <Image
                        src={`https://images.unsplash.com/${row.photo}?auto=format&fit=crop&w=1000&q=72`}
                        alt={row.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-navy/80 px-3 py-1.5 text-[11px] font-medium text-cool backdrop-blur">
                        {row.title} · live
                      </span>
                    </div>
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
