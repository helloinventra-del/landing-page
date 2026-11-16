import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    title: "Software Engineering",
    body: "Typed codebases, reviewed changes, tested surfaces.",
    glyph: "M8 8l-4 4 4 4M16 8l4 4-4 4",
  },
  {
    title: "Artificial Intelligence",
    body: "Models where they earn their place — routing, summarization, anomaly detection.",
    glyph: "M12 3v3m0 12v3M3 12h3m12 0h3M7.5 7.5l2 2m5 5l2 2m0-9l-2 2m-5 5l-2 2M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
  },
  {
    title: "Automation",
    body: "Workflows that remove repetitive paths and log every step.",
    glyph: "M4 12a8 8 0 0113.6-5.7M20 12a8 8 0 01-13.6 5.7M17 3v3.5h-3.5M7 21v-3.5h3.5",
  },
  {
    title: "Cloud & Infrastructure",
    body: "Multi-region deployments and uptime treated as a feature.",
    glyph: "M7 18a4 4 0 01-.6-7.9A5.5 5.5 0 0117.3 8.6 4.2 4.2 0 0117 18H7z",
  },
  {
    title: "Data Intelligence",
    body: "Pipelines and dashboards that turn events into decisions.",
    glyph: "M4 20V10m5.5 10V4M15 20v-7m5.5 7V8",
  },
  {
    title: "Digital Platforms",
    body: "Web products designed for daily use, not demos.",
    glyph: "M3 5h18v14H3zM3 9h18M6.5 7h.01",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="border-t border-line bg-white" aria-labelledby="technology-heading">
      <div className="container-x py-14 sm:py-16 lg:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
              Technology &amp; Capabilities
            </p>
            <h2
              id="technology-heading"
              className="font-display mt-3 text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
            >
              Capabilities that power our products.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              A strong foundation of modern technologies to build scalable,
              intelligent and secure solutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-violet/40"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-violet"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={c.glyph} />
                </svg>
                <h3 className="mt-3.5 text-[15px] font-bold text-navy">{c.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
