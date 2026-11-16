import Link from "next/link";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-soft" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl"
          >
            Driven by ideas.{" "}
            <span className="text-muted">Defined by engineering.</span>
          </h2>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-navy transition-colors hover:text-violet"
          >
            More about OrinexSoft
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-5 text-[16px] leading-relaxed text-muted">
            <p>
              OrinexSoft exists because software is too often built backwards.
              Products get shaped around org charts and feature lists instead of
              the problem itself, and the complexity lands on the people who can
              least afford it.
            </p>
            <p>
              We work the other way around. We start from the problem, stay small
              until we understand it, and let engineering decisions follow from
              what the product needs to do. Every product we ship has to survive
              one question: does this make the work genuinely better?
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
