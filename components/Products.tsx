import Link from "next/link";
import PreviewFrame from "./PreviewFrame";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="products" className="border-t border-line bg-white" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-[13px] font-semibold text-violet">Products</p>
          <h2
            id="products-heading"
            className="font-display mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl"
          >
            Products built to make a difference.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
            OrinexSoft builds and owns its products. Each one starts with a real
            problem and ships when it has earned the name. What you see below is
            the honest state of that work today.
          </p>
        </Reveal>

        {/* Featured product — in development */}
        <Reveal delay={80}>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <PreviewFrame label="Interface preview · in development" className="bg-soft/40" />
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-soft px-3 py-1 text-[12px] font-semibold text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                In development
              </span>
              <h3 className="font-display mt-4 text-2xl font-bold text-navy">
                OrinexSoft&apos;s first product
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Currently in active development. The name, the interface, and the
                details will be published here as soon as the product reaches its
                first public milestone.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-violet underline decoration-violet/40 decoration-2 underline-offset-4 transition-colors hover:decoration-violet"
              >
                Follow the build
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Early-stage slots — honest placeholders, not invented launches */}
        <div className="mt-10 border-t border-line">
          <Reveal delay={80}>
            <div className="grid gap-6 border-b border-line py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10">
              <span className="font-display text-[13px] font-bold tracking-[0.16em] text-muted">
                02
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-navy">
                  Product 02{" "}
                  <span className="ml-2 rounded-full border border-line bg-soft px-2.5 py-0.5 text-[11.5px] font-semibold text-muted">
                    Research
                  </span>
                </h3>
                <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-muted">
                  In research. We are interviewing operators to define the scope
                  before writing code.
                </p>
              </div>
              <Link
                href="/contact"
                className="text-[14px] font-semibold text-navy transition-colors hover:text-violet sm:text-right"
              >
                Get updates
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid gap-6 border-b border-line py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10">
              <span className="font-display text-[13px] font-bold tracking-[0.16em] text-muted">
                03
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-navy">
                  Product 03{" "}
                  <span className="ml-2 rounded-full border border-line bg-soft px-2.5 py-0.5 text-[11.5px] font-semibold text-muted">
                    Early exploration
                  </span>
                </h3>
                <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-muted">
                  A second idea from our own build log, kept deliberately small
                  until the first product ships.
                </p>
              </div>
              <Link
                href="/contact"
                className="text-[14px] font-semibold text-navy transition-colors hover:text-violet sm:text-right"
              >
                Get updates
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
