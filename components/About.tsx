import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

/* Real positioning copy, from the About page's three pillars. */
const PILLARS = [
  {
    title: "Product-first",
    body: "We build and own products — services fund and sharpen them, never replace them.",
    glyph: "M4 5h16v14H4zM4 9h16M9 9v10",
  },
  {
    title: "Problem-first",
    body: "Every product starts with a written problem from a real workflow, not a market trend.",
    glyph: "M12 3a6 6 0 00-3.5 10.9c.7.5 1 1.3 1 2.1h5c0-.8.3-1.6 1-2.1A6 6 0 0012 3zM10 19h4",
  },
  {
    title: "Engineering-first",
    body: "Decisions are documented, code is reviewed, and scope is defended.",
    glyph: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-soft" aria-labelledby="about-heading">
      <div className="container-x grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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

        {/* Branded identity panel — no stock imagery; real principles */}
        <Reveal delay={120}>
          <div className="rounded-xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(16,19,34,0.05)] sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <span className="inline-flex items-center gap-2.5">
                <Image
                  src="/logo-mark.png"
                  alt="OrinexSoft logo"
                  width={720}
                  height={364}
                  className="h-7 w-auto"
                />
                <span className="font-display text-[15px] font-extrabold tracking-[0.02em] text-navy">
                  ORINEXSOFT
                </span>
              </span>
              <span className="hidden rounded-full border border-line bg-soft px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-muted uppercase sm:inline-block">
                Building what&apos;s next.
              </span>
            </div>

            <div className="mt-2">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3.5 border-b border-line py-4 last:border-b-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-5 w-5 shrink-0 text-violet"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={p.glyph} />
                  </svg>
                  <span>
                    <span className="block text-[14px] font-bold text-navy">{p.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-muted">
                      {p.body}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
