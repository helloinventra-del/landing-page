import Reveal from "./Reveal";

function CardVisualAutomate() {
  return (
    <div className="mt-6 space-y-2">
      {[100, 72, 88].map((w, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet/40 bg-violet/10">
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-violet" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 6.5l2.5 2.5 4.5-5" />
            </svg>
          </span>
          <div className="h-2 rounded-full bg-navy/10" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  );
}

function CardVisualScale() {
  return (
    <div className="mt-6 flex h-[74px] items-end gap-2">
      {[24, 40, 34, 56, 70, 64, 86, 100].map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className={`w-full rounded-t-md ${i >= 6 ? "bg-violet" : "bg-navy/10"}`}
        />
      ))}
    </div>
  );
}

function CardVisualControl() {
  return (
    <div className="mt-6 rounded-xl border border-navy/10 bg-navy p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium text-cool">SYSTEM HEALTH</span>
        <span className="rounded-full bg-violet/15 px-2 py-0.5 text-[10px] font-semibold text-violet-soft">99.99%</span>
      </div>
      <svg viewBox="0 0 160 40" className="mt-3 w-full" preserveAspectRatio="none">
        <path d="M0 32 C 20 28, 30 34, 45 26 S 75 20, 95 22 S 130 10, 160 6" fill="none" stroke="#8175F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M0 32 C 20 28, 30 34, 45 26 S 75 20, 95 22 S 130 10, 160 6 L 160 40 L 0 40 Z" fill="rgba(108,92,231,0.12)" />
      </svg>
    </div>
  );
}

const CARDS = [
  {
    title: "Automate the routine",
    body: "AI-driven workflows handle approvals, routing, and reporting without supervision, putting thousands of routine hours back in your teams' hands every quarter.",
    visual: <CardVisualAutomate />,
  },
  {
    title: "Scale without limits",
    body: "The same infrastructure serves ten workflows or ten thousand. When usage spikes, FutureX absorbs the load automatically, so nobody gets paged and nothing gets rebuilt.",
    visual: <CardVisualScale />,
  },
  {
    title: "Decide with clarity",
    body: "Dashboards update the second data changes. Anomalies surface before they cost money, and every forecast can be audited back to its source. No exceptions.",
    visual: <CardVisualControl />,
  },
];

export default function FeatureCards() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="feature-cards-heading">
      <h2 id="feature-cards-heading" className="sr-only">
        Why teams choose FutureX
      </h2>
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 90}>
            <div className="group h-full rounded-3xl border border-navy/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_20px_60px_rgba(108,92,231,0.15)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet/30 bg-violet/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-violet" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />}
                  {i === 1 && <path d="M4 20V10M10 20V4M16 20v-7M2 20h20" />}
                  {i === 2 && <path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6l8-3z" />}
                </svg>
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-navy">{card.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{card.body}</p>
              {card.visual}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
