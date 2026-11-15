import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const STORIES = [
  {
    company: "Lura",
    mark: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 8a4 4 0 100 8 4 4 0 000-8z",
    photo: "photo-1586528116311-ad8dd3c8310d",
    alt: "Lura operations floor where claims are processed",
    story:
      "Lura moved its entire claims operation onto OrinexSoft AI workflows in a single quarter. Volume doubled. The queue did not.",
    metric: "-35%",
    metricLabel: "operational processing time",
  },
  {
    company: "NextWave",
    mark: "M2 12c3-6 5-6 8 0s5 6 8 0",
    photo: "photo-1522071820081-009f0129c71c",
    alt: "NextWave delivery team collaborating at their desks",
    story:
      "NextWave scaled from 40 to 400 enterprise clients in a single year, running every delivery workflow on OrinexSoft.",
    metric: "99.99%",
    metricLabel: "uptime across global infrastructure",
  },
  {
    company: "Spectrum",
    mark: "M3 6l9 6 9-6M3 6v12l9 6 9-6V6",
    photo: "photo-1497366216548-37526070297c",
    alt: "Spectrum headquarters office space",
    story:
      "Spectrum retired six legacy systems in favor of one OrinexSoft deployment, and every department now works from the same data.",
    metric: "-42%",
    metricLabel: "annual systems overhead",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="stories-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="stories-heading"
              className="font-display max-w-xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl"
            >
              Growing stronger with OrinexSoft:{" "}
              <span className="text-muted">stories from real businesses.</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-[13px] font-semibold text-navy shadow-sm transition-colors hover:border-navy/30 hover:bg-navy/5"
            >
              Explore more cases
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.company} delay={i * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_20px_50px_rgba(11,16,32,0.10)]">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${s.photo}?auto=format&fit=crop&w=800&q=70`}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/10" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2.5 text-muted">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.mark} />
                    </svg>
                    <span className="font-display text-[16px] font-semibold">{s.company}</span>
                  </div>
                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-navy/80">{s.story}</p>
                  <div className="mt-6 border-t border-navy/10 pt-5">
                    <p className="font-display text-3xl font-bold text-violet">{s.metric}</p>
                    <p className="mt-1 text-[12.5px] text-muted">{s.metricLabel}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
