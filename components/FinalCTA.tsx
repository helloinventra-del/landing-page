import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-deep" aria-labelledby="cta-heading">
      {/* purple curves */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[420px] w-[560px] rounded-full border-[24px] border-violet/25" />
        <div className="absolute -bottom-52 -right-24 h-[460px] w-[620px] rounded-full bg-gradient-to-tr from-violet/40 via-violet-soft/20 to-transparent" />
        <div className="absolute right-[18%] top-[-60px] h-40 w-40 rotate-12 rounded-3xl border border-violet-soft/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="max-w-xl">
            <h2
              id="cta-heading"
              className="font-display text-[32px] font-bold leading-tight tracking-tight text-white sm:text-[40px]"
            >
              Let&apos;s build what&apos;s next.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cool">
              Have an idea, a challenge, or a vision for a new product? We&apos;d
              love to hear about it.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-violet px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-violet-soft"
            >
              Get in Touch
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
