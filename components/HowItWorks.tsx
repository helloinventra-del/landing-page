import Image from "next/image";
import Reveal from "./Reveal";

const STACK_LOGOS = [
  { slug: "google", name: "Google" },
  { slug: "github", name: "GitHub" },
  { slug: "notion", name: "Notion" },
  { slug: "jira", name: "Jira" },
  { slug: "hubspot", name: "HubSpot" },
  { slug: "zapier", name: "Zapier" },
  { slug: "figma", name: "Figma" },
  { slug: "dropbox", name: "Dropbox" },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] font-semibold text-violet">
            How it works
          </p>
          <h2
            id="how-heading"
            className="font-display mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl"
          >
            Live in a week. Measured from day one.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Step 1 — connect your stack */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
              <span className="font-display text-[13px] font-bold tracking-[0.2em] text-muted">
                STEP 01
              </span>
              <h3 className="font-display mt-3 text-xl font-bold text-navy">Connect your stack</h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">
                Link the tools your teams already run on. OrinexSoft syncs data in both
                directions across 200+ integrations, so records stay identical everywhere.
              </p>
              <div className="mt-6 grid grid-cols-4 gap-2">
                {STACK_LOGOS.map((l) => (
                  <span
                    key={l.slug}
                    title={l.name}
                    className="flex aspect-square items-center justify-center rounded-xl border border-navy/10 bg-white p-2 shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${l.slug}`}
                      alt={l.name}
                      loading="lazy"
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Step 2 — design the workflow */}
          <Reveal delay={90}>
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
              <span className="font-display text-[13px] font-bold tracking-[0.2em] text-muted">
                STEP 02
              </span>
              <h3 className="font-display mt-3 text-xl font-bold text-navy">Design the workflow</h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">
                Build approvals, routing, and reporting visually. AI agents handle the
                repetitive paths, and every trigger lands in an audit log your compliance
                team can read.
              </p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=70"
                  alt="Team designing a workflow on a planning whiteboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Step 3 — measure everything */}
          <Reveal delay={180}>
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
              <span className="font-display text-[13px] font-bold tracking-[0.2em] text-muted">
                STEP 03
              </span>
              <h3 className="font-display mt-3 text-xl font-bold text-navy">Measure everything</h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">
                Dashboards update the second data changes. Forecasts arrive with
                confidence intervals, and anomalies surface before they cost money.
              </p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70"
                  alt="Analytics charts on a laptop measuring business performance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
