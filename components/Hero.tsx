import Reveal from "./Reveal";

function Star() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-navy/50" aria-hidden="true">
      <path d="M8 1.5l1.9 4.1 4.5.5-3.3 3 .9 4.4L8 11.2 4 13.5l.9-4.4-3.3-3 4.5-.5L8 1.5z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Backdrop: grid + single restrained glow */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_35%,black,transparent)]" />
      <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet/10 blur-[140px]" />

      {/* Floating geometric accents (restrained, enterprise) */}
      <div className="animate-float-slow absolute left-[7%] top-[190px] hidden h-16 w-16 rounded-2xl border border-navy/10 lg:block" />
      <div className="animate-float absolute right-[9%] top-[150px] hidden h-10 w-10 rotate-45 rounded-lg bg-navy/10 lg:block" />

      <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pt-24">
        <Reveal delay={80}>
          <h1 className="font-display text-[42px] font-bold leading-[1.08] tracking-tight text-navy sm:text-6xl lg:text-[72px]">
            The operations platform
            <br />
            that{" "}
            <span className="text-violet">runs itself</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted sm:text-[18px]">
            Enterprise software, AI-driven automation, and data intelligence in
            one platform. FutureX runs the operations; you steer the business.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_36px_rgba(108,92,231,0.45)] hover:ring-2 hover:ring-violet-soft sm:w-auto"
            >
              Start free
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-navy/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-navy/5 sm:w-auto"
            >
              Book a demo
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-10 inline-flex items-center gap-2 text-[13px] font-medium text-muted">
            <span className="flex gap-0.5" aria-label="Rated 4.9 out of 5">
              <Star /><Star /><Star /><Star /><Star />
            </span>
            Rated 4.9/5 by 200+ enterprise teams
          </p>
        </Reveal>
      </div>
    </section>
  );
}
