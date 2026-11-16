import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-deep" aria-labelledby="cta-heading">
      {/* Restrained abstract brand shape — quiet concentric arcs, clipped right */}
      <svg
        viewBox="0 0 320 320"
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 sm:block"
        aria-hidden="true"
      >
        {[150, 110, 72].map((r, i) => (
          <circle
            key={r}
            cx="160"
            cy="160"
            r={r}
            fill="none"
            stroke="#8A68FF"
            strokeOpacity={i === 2 ? 0.22 : 0.1}
            strokeWidth="1"
          />
        ))}
        <circle cx="160" cy="160" r="34" fill="none" stroke="#6842FF" strokeOpacity="0.35" strokeWidth="1.5" />
      </svg>

      <div className="container-x py-16 sm:py-20">
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
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-violet-soft"
              >
                Get in Touch
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="mailto:sales@orinexsoft.com"
                className="text-[13.5px] font-medium text-cool transition-colors hover:text-white"
              >
                or email sales@orinexsoft.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
