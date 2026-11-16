import Reveal from "./Reveal";

/* Generated capability-stack artwork — the OrinexSoft platform drawn as
   layered foundation levels. Labels are real capability areas. */
function StackArt() {
  const layers = [
    { label: "Products", w: 300, fill: "#6842FF", text: "#FFFFFF" },
    { label: "Intelligence", w: 330, fill: "#8A68FF", text: "#FFFFFF" },
    { label: "Automation", w: 360, fill: "#B7ABFA", text: "#111225" },
    { label: "Data", w: 390, fill: "#D9D9F5", text: "#111225" },
    { label: "Infrastructure", w: 420, fill: "#E7E8F1", text: "#111225" },
  ];
  return (
    <svg
      viewBox="0 0 560 320"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of the OrinexSoft platform stack, from infrastructure up to products"
    >
      <rect width="560" height="320" fill="#F7F6FF" />
      {/* faint vertical guide */}
      <line x1="280" y1="30" x2="280" y2="290" stroke="#6842FF" strokeOpacity="0.2" strokeDasharray="3 6" />
      {layers.map((l, i) => {
        const y = 236 - i * 42;
        const x = 280 - l.w / 2 + (i % 2 === 0 ? -14 : 14) * (4 - i) * 0.5;
        return (
          <g key={l.label}>
            <rect
              x={x}
              y={y}
              width={l.w}
              height={30}
              rx={8}
              fill={l.fill}
            />
            <text
              x={280}
              y={y + 19}
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="700"
              fill={l.text}
            >
              {l.label}
            </text>
            {i < layers.length - 1 && (
              <path
                d={`M280 ${y - 6} l-5 8 h10 z`}
                fill="#6842FF"
                opacity="0.55"
                transform={`rotate(180 280 ${y - 2})`}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

const CAPABILITIES = [
  {
    title: "Software Engineering",
    body: "Typed codebases, reviewed changes, tested surfaces.",
  },
  {
    title: "Artificial Intelligence",
    body: "Models where they earn their place — routing, summarization, anomaly detection.",
  },
  {
    title: "Automation",
    body: "Workflows that remove repetitive paths and log every step.",
  },
  {
    title: "Cloud & Infrastructure",
    body: "Multi-region deployments and uptime treated as a feature.",
  },
  {
    title: "Data Intelligence",
    body: "Pipelines and dashboards that turn events into decisions.",
  },
  {
    title: "Digital Platforms",
    body: "Web products designed for daily use, not demos.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="border-t border-line bg-white" aria-labelledby="technology-heading">
      <div className="container-x py-20 sm:py-24">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
            Technology &amp; Capabilities
          </p>
          <h2
            id="technology-heading"
            className="font-display mt-3 max-w-2xl text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
          >
            Capabilities that power our products.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            A strong foundation of modern technologies to build scalable,
            intelligent and secure solutions.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Generated stack artwork */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <StackArt />
            </div>
          </Reveal>

          {/* Minimal capability index */}
          <Reveal delay={120}>
            <div>
              {CAPABILITIES.map((c, i) => (
                <div
                  key={c.title}
                  className={`py-5 ${i > 0 ? "border-t border-line" : ""}`}
                >
                  <h3 className="text-[15.5px] font-bold text-navy">{c.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
              <div className="border-t border-line" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
