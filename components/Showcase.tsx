import Image from "next/image";
import Reveal from "./Reveal";

const MODULES = [
  { label: "AI Suite", icon: "M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4L12 3z" },
  { label: "Automation", icon: "M4 6h10M4 12h7M4 18h13M17 4v4M17 14v4" },
  { label: "Analytics", icon: "M4 20V10M10 20V4M16 20v-7M22 20H2" },
  { label: "Security", icon: "M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6l8-3z" },
  { label: "Integrations", icon: "M8 12a4 4 0 118 0 4 4 0 01-8 0zM2 12h6m8 0h6" },
];

export default function Showcase() {
  return (
    <section id="product" className="relative px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative rounded-[2rem] border border-navy/10 bg-white p-2 shadow-[0_24px_80px_rgba(11,16,32,0.12)] sm:p-3">
            <div className="overflow-hidden rounded-[1.6rem] border border-navy/40 bg-navy">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
                </div>
                <p className="text-[12px] font-medium text-cool">OrinexSoft Control Center</p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-cool">acme.com</span>
              </div>
              {/* live operations view */}
              <div className="relative aspect-video w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=75"
                  alt="OrinexSoft operations dashboard showing live workflow metrics"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-navy/80 px-3 py-1.5 text-[11px] font-medium text-cool backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live operations view · acme.com
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {MODULES.map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center gap-2 rounded-xl border border-navy/10 bg-white px-4 py-2.5 text-[13px] font-medium text-navy shadow-sm"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={m.icon} />
                </svg>
                {m.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
