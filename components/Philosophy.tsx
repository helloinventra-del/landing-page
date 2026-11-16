import Link from "next/link";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Build with purpose",
    body: "Solve real problems, create real value.",
  },
  {
    n: "02",
    title: "Engineer for scale",
    body: "Build for what's next, not just what's now.",
  },
  {
    n: "03",
    title: "Make complexity simple",
    body: "Turn complex ideas into elegant solutions.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-white" aria-labelledby="philosophy-heading">
      <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
            Our Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="font-display mt-3 text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
          >
            How we build.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            We believe in building with purpose, engineering for scale, and
            designing around people. Our approach blends innovation with
            responsibility, always keeping the end user in mind.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet transition-colors hover:text-navy"
          >
            Learn more
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div>
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.n}
                className={`flex items-start gap-5 py-5 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet text-[12px] font-bold text-white">
                  {p.n}
                </span>
                <span>
                  <span className="block text-[15.5px] font-bold text-navy">{p.title}</span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">{p.body}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
