import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28">
      {/* Geometric accents on the dark closing band */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-violet/25 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[12%] top-[16%] hidden h-14 w-14 rotate-45 rounded-2xl border-2 border-violet/50 sm:block" aria-hidden="true" />
      <div className="absolute bottom-[22%] left-[10%] hidden h-3 w-3 rounded-full bg-violet-soft sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[13px] font-semibold text-violet-soft">
            Future ready
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            See your own operation running on FutureX
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-cool">
            Bring one real process to a 30-minute walkthrough, watch us set
            it up on live FutureX infrastructure, and see exactly how it
            behaves under your real workload. No slides.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-violet px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_40px_rgba(108,92,231,0.55)] hover:ring-2 hover:ring-violet-soft"
            >
              Get a personal tour
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border-2 border-white/25 px-8 py-[14px] text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Contact sales
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
