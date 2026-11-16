import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-soft" aria-labelledby="about-heading">
      <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
            About OrinexSoft
          </p>
          <h2
            id="about-heading"
            className="font-display mt-3 text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
          >
            Driven by ideas.
            <br />
            Defined by engineering.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            OrinexSoft exists to build meaningful technology &mdash; products that
            simplify complexity, empower people, and create lasting impact.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-violet-soft"
          >
            Our Mission
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line shadow-[0_16px_40px_rgba(17,18,36,0.10)]">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=75"
              alt="Modern glass office architecture reflecting the sky"
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
