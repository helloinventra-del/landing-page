import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Build with purpose",
    body: "Every feature starts as a written problem statement. If the problem is not clear, the feature does not get built.",
  },
  {
    n: "02",
    title: "Engineer for scale",
    body: "We design for the load we expect and the load we would hate to turn away. Architecture decisions are documented, not improvised.",
  },
  {
    n: "03",
    title: "Make complexity simple",
    body: "Complex systems are allowed behind the scenes. The surface a person touches stays small, legible, and honest.",
  },
  {
    n: "04",
    title: "Design around people",
    body: "Interfaces are judged by the second run, not the first demo. If a task needs a tutorial, the task needs redesign.",
  },
  {
    n: "05",
    title: "Innovate responsibly",
    body: "New technology is adopted when it makes a product measurably better, never for the launch note.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-line bg-soft" aria-labelledby="philosophy-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-[13px] font-semibold text-violet">Engineering philosophy</p>
          <h2
            id="philosophy-heading"
            className="font-display mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl"
          >
            How we build.
          </h2>
        </Reveal>

        <div className="mt-12">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <div className="grid gap-3 border-t border-line py-7 sm:grid-cols-[64px_240px_1fr] sm:gap-8 sm:py-8">
                <span className="font-display text-[13px] font-bold tracking-[0.16em] text-muted">
                  {p.n}
                </span>
                <h3 className="text-[16.5px] font-bold text-navy">{p.title}</h3>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
