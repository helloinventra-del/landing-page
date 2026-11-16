import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-deep" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold text-violet-soft">Get in touch</p>
            <h2
              id="cta-heading"
              className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
            >
              Let&apos;s build what&apos;s next.
            </h2>
            <p className="mt-5 max-w-lg text-[16.5px] leading-relaxed text-cool">
              Have an idea, a challenge, or a vision for a new product? We would
              love to hear about it.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-violet px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-violet-soft"
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
