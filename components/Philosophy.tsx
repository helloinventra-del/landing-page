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
    <section id="philosophy" className="border-t border-line bg-soft" aria-labelledby="philosophy-heading">
      <div className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
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

        {/* Compact three-step timeline */}
        <Reveal delay={120}>
          <ol className="relative">
            {/* connector line through the step markers */}
            <span
              className="absolute bottom-5 left-[19px] top-5 w-px bg-line"
              aria-hidden="true"
            />
            {PRINCIPLES.map((p) => (
              <li key={p.n} className="relative flex gap-5 py-4">
                <span className="font-display relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[12px] font-bold tracking-[0.06em] text-violet">
                  {p.n}
                </span>
                <span className="pt-1">
                  <span className="block text-[15.5px] font-bold text-navy">{p.title}</span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">{p.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
