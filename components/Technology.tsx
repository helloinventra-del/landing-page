import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    n: "01",
    title: "Software Engineering",
    body: "Typed codebases, reviewed changes, tested surfaces. The foundation every OrinexSoft product stands on.",
    applied: "Every product · foundation",
  },
  {
    n: "02",
    title: "Artificial Intelligence",
    body: "Models applied where they earn their place: routing decisions, summarization, anomaly detection. Always inspectable.",
    applied: "Product 01 · decision layer",
  },
  {
    n: "03",
    title: "Automation",
    body: "Workflows that remove repetitive paths from operations and log every step they take.",
    applied: "Product 01 · workflow core",
  },
  {
    n: "04",
    title: "Digital Platforms",
    body: "Web products designed for daily use, not demos. Fast to load and predictable to operate.",
    applied: "Product 01 · interface layer",
  },
  {
    n: "05",
    title: "Cloud & Infrastructure",
    body: "Multi-region deployments, infrastructure as code, and uptime treated as a product feature.",
    applied: "All products · runtime",
  },
  {
    n: "06",
    title: "Data Intelligence",
    body: "Pipelines and dashboards that turn product events into decisions people can act on.",
    applied: "Product 01 · forecasting",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="border-t border-line bg-white" aria-labelledby="technology-heading">
      <div className="container-x py-20 sm:py-24">
        <Reveal>
          <p className="text-[13px] font-semibold text-violet">Technology</p>
          <h2
            id="technology-heading"
            className="font-display mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl"
          >
            Capabilities that build products.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
            Six disciplines, one team. Each capability is tied to where it shows
            up inside the products we build.
          </p>
        </Reveal>

        <div className="mt-12">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.n} delay={i * 40}>
              <div className="grid gap-2 border-t border-line py-7 sm:grid-cols-[56px_240px_1fr] sm:items-baseline sm:gap-8 sm:py-8">
                <span className="font-display text-[13px] font-bold tracking-[0.16em] text-muted">
                  {c.n}
                </span>
                <h3 className="text-[16.5px] font-bold text-navy">{c.title}</h3>
                <div className="sm:flex sm:items-baseline sm:justify-between sm:gap-8">
                  <p className="max-w-xl text-[15px] leading-relaxed text-muted">{c.body}</p>
                  <span className="mt-3 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-soft px-3 py-1 text-[11.5px] font-semibold text-navy sm:mt-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    {c.applied}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
