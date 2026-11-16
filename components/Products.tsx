import Link from "next/link";
import Reveal from "./Reveal";

/* Workflow node-graph sketch for the OrinexFlow preview — decorative. */
function WorkflowSketch() {
  const nodes = [
    { x: 24, y: 18, c: "#10B981" },
    { x: 88, y: 10, c: "#6945F5" },
    { x: 150, y: 26, c: "#8A68FF" },
    { x: 60, y: 62, c: "#6945F5" },
    { x: 130, y: 70, c: "#10B981" },
    { x: 182, y: 52, c: "#38BDF8" },
  ];
  const links = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [4, 5],
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex items-center gap-1.5 border-b border-line bg-soft px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="ml-2 h-2 w-24 rounded bg-line/70" />
      </div>
      <div className="flex">
        <div className="w-8 shrink-0 space-y-2 border-r border-line bg-deep p-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 w-full rounded-sm bg-white/10" />
          ))}
        </div>
        <svg viewBox="0 0 210 92" className="h-full min-h-[120px] w-full bg-white" aria-hidden="true">
          {links.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="rgb(105 69 245 / 0.35)"
              strokeWidth="1.5"
            />
          ))}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="10" fill="white" stroke={n.c} strokeWidth="2" />
              <circle cx={n.x} cy={n.y} r="4" fill={n.c} />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function ArrowCircle() {
  return (
    <span className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-violet/40 group-hover:bg-lavender group-hover:text-violet">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-white" aria-labelledby="products-heading">
      <div className="container-x py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
                Our Products
              </p>
              <h2
                id="products-heading"
                className="font-display mt-2.5 text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
              >
                Products built to make a difference.
              </h2>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-muted">
                An ecosystem of products designed to solve real problems, from
                productivity to automation and beyond.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-violet transition-colors hover:text-navy"
            >
              View all products
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {/* Featured: OrinexFlow */}
          <Reveal className="lg:col-span-2">
            <Link
              href="/contact"
              className="group block h-full rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(16,19,34,0.05)] transition-all hover:shadow-[0_16px_40px_rgba(17,18,36,0.10)] sm:p-6"
            >
              <div className="grid h-full items-center gap-6 sm:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender">
                    <svg viewBox="0 0 24 24" className="h-5.5 w-5.5 text-violet" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ height: 22, width: 22 }}>
                      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
                    </svg>
                  </span>
                  <div className="mt-4 flex items-center gap-2.5">
                    <h3 className="font-display text-[19px] font-bold text-navy">OrinexFlow</h3>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted">
                    Automate your workflows and boost productivity with
                    intelligent process automation.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-violet">
                    Explore OrinexFlow
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <WorkflowSketch />
              </div>
            </Link>
          </Reveal>

          {/* Stacked: OrinexAnalytics + OrinexCloud */}
          <div className="flex flex-col gap-4">
            <Reveal delay={80} className="flex-1">
              <Link
                href="/contact"
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(16,19,34,0.05)] transition-all hover:shadow-[0_16px_40px_rgba(17,18,36,0.10)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender">
                  <svg viewBox="0 0 24 24" className="text-violet" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ height: 22, width: 22 }}>
                    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-[16px] font-bold text-navy">OrinexAnalytics</span>
                    <span className="rounded-full bg-lavender px-2 py-0.5 text-[10px] font-bold text-violet">
                      Beta
                    </span>
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-muted">
                    Turn data into insights with powerful analytics tools.
                  </span>
                </span>
                <ArrowCircle />
              </Link>
            </Reveal>
            <Reveal delay={140} className="flex-1">
              <Link
                href="/contact"
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(16,19,34,0.05)] transition-all hover:shadow-[0_16px_40px_rgba(17,18,36,0.10)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender">
                  <svg viewBox="0 0 24 24" className="text-violet" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ height: 22, width: 22 }}>
                    <path d="M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.6 1.6A4 4 0 007 19h10.5z" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-[16px] font-bold text-navy">OrinexCloud</span>
                    <span className="rounded-full border border-line bg-soft px-2 py-0.5 text-[10px] font-bold text-muted">
                      Coming Soon
                    </span>
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-muted">
                    Scale your ideas with our next-gen cloud platform.
                  </span>
                </span>
                <ArrowCircle />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
