import Link from "next/link";
import DashboardMockup from "./DashboardMockup";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-soft via-white to-white">
      {/* soft purple washes */}
      <div className="absolute -top-24 right-0 h-[380px] w-[560px] rounded-full bg-lavender/70 blur-[100px]" aria-hidden="true" />
      <div className="absolute right-[10%] top-[40%] h-64 w-64 rounded-full bg-violet/5 blur-[80px]" aria-hidden="true" />

      <div className="container-x grid gap-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-lavender px-3.5 py-1.5 text-[10.5px] font-bold tracking-[0.14em] text-violet uppercase">
            Engineering what&apos;s next
          </span>
          <h1 className="font-display mt-5 text-[42px] font-bold leading-[1.05] tracking-tight text-navy sm:text-[52px]">
            Building technology
            <br />
            for a smarter
            <br />
            <span className="text-violet">tomorrow.</span>
          </h1>
          <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-muted">
            We create intelligent software, digital products, and technology
            platforms that turn complex challenges into meaningful solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-violet-soft"
            >
              Explore Our Products
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-[14.5px] font-semibold text-navy transition-colors hover:border-navy/30"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lavender transition-colors group-hover:bg-violet/15">
                <svg viewBox="0 0 12 12" className="h-3 w-3 text-violet" fill="currentColor">
                  <path d="M3.5 2l6 4-6 4V2z" />
                </svg>
              </span>
              Learn About OrinexSoft
            </Link>
          </div>
        </Reveal>

        {/* Product visual */}
        <Reveal delay={140}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
