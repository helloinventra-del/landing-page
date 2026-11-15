import Reveal from "./Reveal";

const TOOLS = [
  { name: "Slack", pos: "left-[6%] top-[16%]" },
  { name: "Google", pos: "right-[8%] top-[10%]" },
  { name: "Salesforce", pos: "left-[16%] top-[62%]" },
  { name: "GitHub", pos: "right-[16%] top-[58%]" },
  { name: "Notion", pos: "left-[42%] top-[2%]" },
  { name: "Jira", pos: "left-[30%] top-[86%]" },
  { name: "HubSpot", pos: "right-[38%] top-[82%]" },
  { name: "Okta", pos: "right-[4%] top-[38%]" },
];

/** Desktop: constellation around the FutureX hub. Mobile: simple grid. */
export default function Integrations() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            Every tool your teams already use, talking to one system
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            FutureX syncs data across 200+ tools in both directions, so when a
            deal closes in Salesforce, finance and operations already know.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_36px_rgba(108,92,231,0.45)] hover:ring-2 hover:ring-violet-soft"
          >
            Try for free
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>

        {/* Mobile grid — also the screen-reader source of truth */}
        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-md grid-cols-4 gap-3 md:hidden">
            {TOOLS.map((t) => (
              <span
                key={t.name}
                className="flex h-14 flex-col items-center justify-center rounded-2xl border border-navy/10 bg-white text-[9px] font-medium text-muted shadow-sm"
              >
                <span className="font-display text-[15px] font-bold text-navy">{t.name[0]}</span>
                <span className="mt-0.5">{t.name}</span>
              </span>
            ))}
          </div>
        </Reveal>

        {/* Desktop constellation — decorative; names are read from the grid above */}
        <Reveal delay={100}>
          <div className="relative mt-16 hidden h-[380px] md:block" aria-hidden="true">
            {/* dashed connectors */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <line x1="12%" y1="26%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
              <line x1="88%" y1="22%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
              <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
              <line x1="80%" y1="66%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
              <line x1="46%" y1="14%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
              <line x1="34%" y1="92%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
              <line x1="64%" y1="88%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
              <line x1="96%" y1="46%" x2="50%" y2="50%" stroke="rgba(11,16,32,0.18)" strokeDasharray="4 6" />
            </svg>

            {TOOLS.map((t) => (
              <span
                key={t.name}
                className={`absolute ${t.pos} inline-flex items-center gap-2 rounded-2xl border border-navy/10 bg-white px-4 py-3 text-[13px] font-medium text-muted shadow-sm transition-colors hover:border-navy/30 hover:text-navy`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-navy/10 font-display text-[11px] font-bold text-navy">
                  {t.name[0]}
                </span>
                {t.name}
              </span>
            ))}

            {/* Hub */}
            <span className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-violet/40 bg-navy shadow-[0_0_60px_rgba(108,92,231,0.35)]">
              <svg viewBox="0 0 32 32" className="h-9 w-9">
                <rect x="1" y="1" width="30" height="30" rx="9" fill="none" stroke="#8175F0" strokeWidth="2" />
                <path d="M9.5 22.5 L14.5 13.5 L19 18.5 L22.5 9.5" fill="none" stroke="#8175F0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display mt-1.5 text-[11px] font-bold tracking-[0.14em] text-white">FUTUREX</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
