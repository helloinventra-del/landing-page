import Image from "next/image";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "OrinexSoft automated 80% of our back-office operations in the first quarter. The AI workflows had already paid for the entire platform before the pilot program officially came to an end.",
    name: "Amelia Hart",
    role: "COO, Lura",
    photo: "photo-1494790108377-be9c29b29330",
  },
  {
    quote:
      "We replaced six disconnected tools with one control center. Deployment time for client systems dropped from weeks to two days.",
    name: "Victor Kane",
    role: "CTO, NeoBits",
    photo: "photo-1472099645785-5658abf4ff4e",
  },
  {
    quote:
      "The forecasting models are frighteningly accurate. We stopped debating whose numbers were right and started debating what to do next.",
    name: "Dana Whitfield",
    role: "VP Operations, Spectrum",
    photo: "photo-1573497019940-1c28c88b4f3e",
  },
  {
    quote:
      "Enterprise-grade from day one. SSO, audit logs, compliance: everything our security team asks for was already there.",
    name: "Rafael Ortiz",
    role: "Head of IT, Vertex Systems",
    photo: "photo-1560250097-0b93528c311a",
  },
  {
    quote:
      "We scaled from 40 to 400 enterprise clients on OrinexSoft without hiring another ops person. The platform carried the growth.",
    name: "Mira Chen",
    role: "Founder, NextWave",
    photo: "photo-1438761681033-6461ffad8d80",
  },
  {
    quote:
      "Support routes you straight to engineers. We've had answers in minutes and fixes shipped the same day, without a single escalation ticket.",
    name: "Jonas Feld",
    role: "Engineering Lead, Momentum",
    photo: "photo-1507003211169-0a1dd7228f2d",
  },
];

export default function Testimonials() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="font-display mx-auto max-w-2xl text-center text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl"
          >
            Real feedback from teams using OrinexSoft
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-navy/10 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-violet/35">
                <blockquote className="text-[14.5px] leading-relaxed text-navy/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={`https://images.unsplash.com/${t.photo}?auto=format&fit=crop&w=96&q=70`}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold text-navy">{t.name}</span>
                    <span className="block text-[12.5px] text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <a
              href="#stories"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-[14px] font-semibold text-navy shadow-sm transition-colors hover:border-navy/30 hover:bg-navy/5"
            >
              See customer stories
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
