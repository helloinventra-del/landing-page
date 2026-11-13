import Reveal from "./Reveal";

function Star() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-violet" aria-hidden="true">
      <path d="M8 1.5l1.9 4.1 4.5.5-3.3 3 .9 4.4L8 11.2 4 13.5l.9-4.4-3.3-3 4.5-.5L8 1.5z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Backdrop: grid + restrained violet glow */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_35%,black,transparent)]" />
      <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]" />
      <div className="absolute right-[8%] top-[220px] h-56 w-56 rounded-full bg-violet/10 blur-[110px]" />

      {/* Floating geometric accents (restrained, enterprise) */}
      <div className="animate-float-slow absolute left-[7%] top-[190px] hidden h-16 w-16 rounded-2xl border border-violet/40 lg:block" />
      <div className="animate-float absolute right-[9%] top-[150px] hidden h-10 w-10 rotate-45 rounded-lg bg-violet/20 lg:block" />
      <div className="animate-float absolute right-[16%] top-[330px] hidden h-2.5 w-2.5 rounded-full bg-violet lg:block" />
      <div className="animate-float-slow absolute left-[14%] top-[340px] hidden h-2 w-2 rounded-full bg-muted lg:block" />

      <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pt-24">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-navy/10 bg-white px-4 py-2 shadow-sm">
            <span className="flex gap-0.5" aria-label="Rated 4.9 out of 5">
              <Star /><Star /><Star /><Star /><Star />
            </span>
            <span className="text-[13px] font-medium text-muted">
              Rated <span className="font-semibold text-navy">4.9/5</span> by 200+ enterprises
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display mt-7 text-[42px] font-bold leading-[1.08] tracking-tight text-navy sm:text-6xl lg:text-[72px]">
            Run your enterprise
            <br />
            on{" "}
            <span className="bg-gradient-to-r from-violet to-violet-soft bg-clip-text text-transparent">
              intelligent
            </span>{" "}
            systems
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-lg">
            Enterprise software, automation, and analytics in one platform
            that scales with you. FutureX runs the operations; you steer the
            business.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_36px_rgba(108,92,231,0.45)] hover:ring-2 hover:ring-violet-soft sm:w-auto"
            >
              Try for free
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-navy/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-navy/5 sm:w-auto"
            >
              Book a demo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
