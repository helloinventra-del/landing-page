import Link from "next/link";
import Reveal from "./Reveal";

/* Generated ecosystem artwork — a flow of connected service nodes across the
   OrinexSoft platform. Pure SVG, brand palette, no fake data. */
function EcosystemArt() {
  const nodes = [
    { x: 150, y: 150 },
    { x: 320, y: 110 },
    { x: 480, y: 170 },
    { x: 645, y: 105 },
    { x: 810, y: 165 },
    { x: 960, y: 115 },
  ];
  const curves = [
    "M150 150 C 210 120, 260 104, 320 110",
    "M320 110 C 380 118, 430 148, 480 170",
    "M480 170 C 540 158, 590 116, 645 105",
    "M645 105 C 710 112, 760 148, 810 165",
    "M810 165 C 860 150, 910 128, 960 115",
    "M150 150 C 240 210, 340 240, 480 232 S 760 210, 960 115",
  ];
  return (
    <svg
      viewBox="0 0 1120 380"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of OrinexSoft products connected as one platform ecosystem"
    >
      <defs>
        <radialGradient id="eco-glow" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#6842FF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6842FF" stopOpacity="0" />
        </radialGradient>
        <pattern id="eco-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="rgb(255 255 255 / 0.07)" />
        </pattern>
      </defs>

      <rect width="1120" height="380" fill="url(#eco-dots)" />
      <rect width="1120" height="380" fill="url(#eco-glow)" />

      {/* connections */}
      {curves.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#6842FF" strokeOpacity={i === 5 ? 0.5 : 0.35} strokeWidth="1.6" />
      ))}

      {/* floating skeleton panels */}
      <g>
        <rect x="240" y="70" width="168" height="56" rx="10" fill="rgb(255 255 255 / 0.05)" stroke="rgb(255 255 255 / 0.10)" />
        <rect x="254" y="84" width="64" height="6" rx="3" fill="rgb(255 255 255 / 0.16)" />
        <rect x="254" y="98" width="96" height="6" rx="3" fill="rgb(255 255 255 / 0.09)" />
      </g>
      <g>
        <rect x="700" y="236" width="168" height="56" rx="10" fill="rgb(255 255 255 / 0.05)" stroke="rgb(255 255 255 / 0.10)" />
        <rect x="714" y="250" width="72" height="6" rx="3" fill="rgb(138 104 255 / 0.8)" />
        <rect x="714" y="264" width="100" height="6" rx="3" fill="rgb(255 255 255 / 0.09)" />
      </g>

      {/* service nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="14" fill="#101322" stroke="#8A68FF" strokeWidth="2" />
          <circle cx={n.x} cy={n.y} r="5" fill="#6842FF" />
          {i % 2 === 0 && (
            <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="#8A68FF" strokeOpacity="0.3" />
          )}
        </g>
      ))}
    </svg>
  );
}

const PRODUCT_INDEX = [
  {
    name: "OrinexFlow",
    area: "Operations automation",
    status: "Live",
    href: "/contact",
  },
  {
    name: "OrinexAnalytics",
    area: "Analytics & reporting",
    status: "Beta",
    href: "/contact",
  },
  {
    name: "OrinexCloud",
    area: "Cloud platform",
    status: "Coming Soon",
    href: "/contact",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white" aria-labelledby="products-heading">
      <div className="container-x py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
                Our Products
              </p>
              <h2
                id="products-heading"
                className="font-display mt-3 max-w-2xl text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
              >
                Products built to make a difference.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
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

        {/* Generated ecosystem artwork */}
        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-navy/10 bg-deep">
            <EcosystemArt />
          </div>
        </Reveal>

        {/* Minimal typographic product index */}
        <Reveal delay={140}>
          <div className="mt-2">
            {PRODUCT_INDEX.map((p, i) => (
              <div
                key={p.name}
                className={`grid items-baseline gap-2 py-6 sm:grid-cols-[1fr_auto_auto] sm:gap-8 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <div>
                  <h3 className="text-[17px] font-bold text-navy transition-colors hover:text-violet">
                    <Link href={p.href}>{p.name}</Link>
                  </h3>
                  <p className="mt-1 text-[13.5px] text-muted">{p.area}</p>
                </div>
                <span className="text-[12px] font-semibold text-muted sm:text-right">
                  {p.status}
                </span>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy transition-colors hover:text-violet sm:justify-self-end"
                >
                  Explore
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
