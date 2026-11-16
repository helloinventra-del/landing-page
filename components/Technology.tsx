import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    icon: "M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-3 16",
    title: "Software Engineering",
    body: "Typed codebases, reviewed changes, tested surfaces. The foundation everything else stands on.",
  },
  {
    icon: "M12 3a4 4 0 014 4c0 1.7-.9 2.6-1.5 3.5-.4.6-.5 1-.5 1.5h-4c0-.5-.1-.9-.5-1.5C9 9.6 8 8.7 8 7a4 4 0 014-4zM10 15h4M10.5 18h3",
    title: "Artificial Intelligence",
    body: "Models applied where they earn their place: routing decisions, summarization, anomaly detection. Always inspectable.",
  },
  {
    icon: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
    title: "Automation",
    body: "Workflows that remove repetitive paths from operations and log every step they take.",
  },
  {
    icon: "M3 5h18v14H3zM3 9h18M8 5v4",
    title: "Digital Platforms",
    body: "Web products designed for daily use, not demos. Fast to load and predictable to operate.",
  },
  {
    icon: "M4 18h16M6 18v-6M10 18V8M14 18v-9M18 18v-4M3 21h18",
    title: "Cloud & Infrastructure",
    body: "Multi-region deployments, infrastructure as code, and uptime treated as a product feature.",
  },
  {
    icon: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    title: "Data Intelligence",
    body: "Pipelines and dashboards that turn product events into decisions people can act on.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="border-t border-line bg-white" aria-labelledby="technology-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-[13px] font-semibold text-violet">Technology</p>
          <h2
            id="technology-heading"
            className="font-display mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl"
          >
            Capabilities that build products.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
            Six disciplines, one team. Every capability below exists to ship
            OrinexSoft products, not to sell hours.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="bg-white p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-soft">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={c.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-[15.5px] font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
