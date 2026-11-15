import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const TOOLS = [
  { name: "Google", slug: "google", pos: "left-[6%] top-[16%]" },
  { name: "GitHub", slug: "github", pos: "right-[8%] top-[10%]" },
  { name: "Notion", slug: "notion", pos: "left-[42%] top-[2%]" },
  { name: "Jira", slug: "jira", pos: "left-[30%] top-[86%]" },
  { name: "Figma", slug: "figma", pos: "left-[6%] top-[16%]" },
  { name: "HubSpot", slug: "hubspot", pos: "right-[38%] top-[82%]" },
  { name: "Zapier", slug: "zapier", pos: "right-[4%] top-[38%]" },
  { name: "Okta", slug: "okta", pos: "right-[16%] top-[58%]" },
];

function BrandLogo({ slug, name, size = 20 }: { slug: string; name: string; size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      loading="lazy"
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}

/** Desktop: constellation around the OrinexSoft hub. Mobile: simple grid. */
export default function Integrations() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            Every tool your teams already use, talking to one system
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            OrinexSoft syncs data across 200+ tools in both directions, so when a
            deal closes in Salesforce, finance and operations already know.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_36px_rgba(108,92,231,0.45)] hover:ring-2 hover:ring-violet-soft"
          >
            Try for free
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        {/* Mobile grid — also the screen-reader source of truth */}
        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-md grid-cols-4 gap-3 md:hidden">
            {TOOLS.map((t) => (
              <span
                key={t.name}
                className="flex h-14 flex-col items-center justify-center gap-1 rounded-2xl border border-navy/10 bg-white text-[9px] font-medium text-muted shadow-sm"
              >
                <BrandLogo slug={t.slug} name={t.name} size={16} />
                <span>{t.name}</span>
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
                <span className="flex h-6 w-6 items-center justify-center">
                  <BrandLogo slug={t.slug} name={t.name} size={18} />
                </span>
                {t.name}
              </span>
            ))}

            {/* Hub */}
            <span className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-violet/40 bg-navy shadow-[0_0_60px_rgba(108,92,231,0.35)]">
              <Image
                src="/logo-mark.png"
                alt="OrinexSoft mark"
                width={720}
                height={364}
                className="h-9 w-auto"
              />
              <span className="font-display mt-2 text-[11px] font-bold tracking-[0.14em] text-white">ORINEXSOFT</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
