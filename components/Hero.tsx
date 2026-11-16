import Link from "next/link";
import InterfaceSketch from "./InterfaceSketch";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="container-x grid gap-14 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:pb-28 lg:pt-20">
        {/* Copy */}
        <div className="max-w-xl">
          <h1 className="font-display text-[40px] font-bold leading-[1.06] tracking-tight text-navy sm:text-[56px]">
            Building technology for a smarter tomorrow.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            We create intelligent software, digital products, and technology
            platforms that turn complex challenges into meaningful solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-violet-soft"
            >
              Explore Our Products
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3 text-[15px] font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-soft"
            >
              Discover OrinexSoft
            </Link>
          </div>
        </div>

        {/* Product ecosystem composition */}
        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden="true">
            {/* satellite module panel */}
            <div className="absolute -left-2 top-4 w-[46%] opacity-90 sm:-left-6 sm:w-[42%]">
              <InterfaceSketch module="Automation" />
            </div>
            {/* main interface sketch */}
            <div className="relative ml-auto w-[86%]">
              <InterfaceSketch module="Operations" />
            </div>
            {/* connecting label */}
            <span className="absolute -bottom-5 right-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[11px] font-semibold text-navy shadow-[0_4px_14px_rgba(16,19,34,0.10)]">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              One platform · every product
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
