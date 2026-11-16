import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    icon: "M8 6l-5 6 5 6M16 6l5 6-5 6",
    title: "Software Engineering",
    body: "Build robust, scalable applications.",
  },
  {
    icon: "M12 3a4 4 0 014 4c0 1.7-.9 2.6-1.5 3.5-.4.6-.5 1-.5 1.5h-4c0-.5-.1-.9-.5-1.5C9 9.6 8 8.7 8 7a4 4 0 014-4zM10 15h4M10.5 18h3",
    title: "Artificial Intelligence",
    body: "Integrate intelligence into everyday tools.",
  },
  {
    icon: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
    title: "Automation",
    body: "Automate work, amplify productivity.",
  },
  {
    icon: "M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.6 1.6A4 4 0 007 19h10.5z",
    title: "Cloud & Infrastructure",
    body: "Scale with confidence.",
  },
  {
    icon: "M4 7h16v13H4zM4 7l3-4h10l3 4M9 12h6",
    title: "Data Intelligence",
    body: "Turn data into value.",
  },
  {
    icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
    title: "Digital Platforms",
    body: "Create seamless digital experiences.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-white" aria-labelledby="technology-heading">
      <div className="container-x py-16 sm:py-20">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
            Technology &amp; Capabilities
          </p>
          <h2
            id="technology-heading"
            className="font-display mt-2.5 text-[30px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]"
          >
            Capabilities that power our products.
          </h2>
          <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            A strong foundation of modern technologies to build scalable,
            intelligent and secure solutions.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-6">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-line bg-soft/60 p-4 transition-colors hover:border-violet/40 hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet/25 bg-white">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-violet" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={c.icon} />
                  </svg>
                </span>
                <h3 className="mt-3.5 text-[13.5px] font-bold text-navy">{c.title}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
