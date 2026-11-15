import Reveal from "./Reveal";

const LOGOS = [
  { name: "Spectrum", mark: "M12 2l9 18H3l9-18z" },
  { name: "NeoBits", mark: "M4 4h7v7H4zM13 13h7v7h-7z" },
  { name: "NextWave", mark: "M2 12c3-6 5-6 8 0s5 6 8 0" },
  { name: "Vertex Systems", mark: "M3 6l9 6 9-6M3 6v12l9 6 9-6V6" },
  { name: "Greenleaf", mark: "M12 21C7 16 4 12 4 8a8 8 0 0116 0c0 4-3 8-8 13z" },
  { name: "Lura", mark: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 8a4 4 0 100 8 4 4 0 000-8z" },
  { name: "Momentum", mark: "M4 18L12 4l8 14H4z" },
  { name: "Horizon", mark: "M3 16h18M6 12h12M9 8h6" },
];

function LogoMark({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export default function LogoCloud() {
  return (
    <section className="px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center text-[13px] font-medium tracking-wide text-muted">
            <span className="font-semibold text-navy">150+</span> companies run their operations on OrinexSoft
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-9 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-4">
            {LOGOS.map((logo) => (
              <span
                key={logo.name}
                className="inline-flex items-center gap-2.5 text-muted transition-colors duration-300 hover:text-navy"
              >
                <LogoMark path={logo.mark} />
                <span className="font-display text-[15px] font-semibold tracking-tight">{logo.name}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
