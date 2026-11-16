import Link from "next/link";
import Reveal from "./Reveal";

/* Status badge styling per real product state. */
const STATUS_STYLES: Record<string, string> = {
  Live: "bg-emerald-50 text-emerald-700",
  Beta: "bg-lavender text-violet",
  "Coming Soon": "border border-line bg-soft text-muted",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] uppercase ${STATUS_STYLES[status] ?? "border border-line bg-soft text-muted"}`}
    >
      {status}
    </span>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Workflow steps for the illustrative OrinexFlow editor sketch. */
const FLOW_STEPS = [
  {
    title: "Trigger",
    sub: "New request",
    glyph: "M13 2L4.5 13.5h6L10 22l8.5-11.5h-6L13 2z",
  },
  {
    title: "Validate",
    sub: "Rules check",
    glyph: "M4.5 12.5l4.5 4.5 10-11",
  },
  {
    title: "Route",
    sub: "Assign owner",
    glyph: "M6 4v9a4 4 0 004 4h8m0 0l-3.5-3.5M18 17l-3.5 3.5",
  },
  {
    title: "Resolve",
    sub: "Sync & log",
    glyph: "M12 3l8 4.5-8 4.5-8-4.5L12 3zM4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5",
  },
];

/**
 * Illustrative OrinexFlow workflow editor — sample UI showing how a process
 * moves through automation steps. Clearly labeled, no real customer data.
 */
function FlowDiagram() {
  return (
    <div className="rounded-lg border border-line bg-soft p-4" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.1em] text-muted uppercase">
          Sample workflow
        </span>
        <span className="rounded-full border border-line bg-white px-2 py-0.5 text-[9px] font-semibold text-muted">
          Illustrative UI
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {FLOW_STEPS.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="rounded-lg border border-line bg-white px-2 py-3 text-center">
              <svg viewBox="0 0 24 24" className="mx-auto h-4 w-4 text-violet" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={step.glyph} />
              </svg>
              <p className="mt-1.5 text-[11.5px] font-bold text-navy">{step.title}</p>
              <p className="mt-0.5 text-[9.5px] text-muted">{step.sub}</p>
            </div>
            {/* connector between steps on wider screens */}
            {i < FLOW_STEPS.length - 1 && (
              <svg
                viewBox="0 0 16 16"
                className="absolute -right-[18px] top-1/2 z-[1] hidden h-3.5 w-3.5 -translate-y-1/2 text-violet/60 sm:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-[10.5px] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
        Every run is logged and auditable.
      </p>
    </div>
  );
}

/* Real product data — statuses reflect actual availability. */
const COMPACT_PRODUCTS = [
  {
    name: "OrinexAnalytics",
    area: "Analytics & reporting",
    desc: "Turn data into insights with powerful analytics tools.",
    status: "Beta",
    href: "/contact",
  },
  {
    name: "OrinexCloud",
    area: "Cloud platform",
    desc: "Scale your ideas with our next-gen cloud platform.",
    status: "Coming Soon",
    href: "/contact",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white" aria-labelledby="products-heading">
      <div className="container-x pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
              Our Products
            </p>
            <h2
              id="products-heading"
              className="font-display mt-3 text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
            >
              Products built to make a difference.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              An ecosystem of products designed to solve real problems, from
              productivity to automation and beyond.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric showcase: featured OrinexFlow, compact siblings */}
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Featured — OrinexFlow */}
          <Reveal className="lg:col-span-7">
            <article className="flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(16,19,34,0.05)] transition-shadow hover:shadow-[0_16px_40px_rgba(17,18,36,0.10)] sm:p-7">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-[19px] font-bold text-navy">OrinexFlow</h3>
                <StatusBadge status="Live" />
              </div>
              <p className="mt-1 text-[12.5px] font-medium text-muted">Operations automation</p>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted">
                Automate your workflows and boost productivity with intelligent
                process automation.
              </p>

              <div className="mt-6">
                <FlowDiagram />
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-violet transition-colors hover:text-navy"
                >
                  Explore OrinexFlow
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Compact — OrinexAnalytics + OrinexCloud */}
          <div className="grid gap-5 lg:col-span-5">
            {COMPACT_PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={80 + i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(16,19,34,0.05)] transition-shadow hover:shadow-[0_16px_40px_rgba(17,18,36,0.10)] sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[17px] font-bold text-navy">{p.name}</h3>
                    <StatusBadge status={p.status} />
                  </div>
                  <p className="mt-1 text-[12.5px] font-medium text-muted">{p.area}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{p.desc}</p>
                  <div className="mt-auto pt-5">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-violet transition-colors hover:text-navy"
                    >
                      Learn more
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
