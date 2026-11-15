import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — FutureX Technologies",
  description:
    "FutureX Technologies builds intelligent operations software: enterprise systems, AI-driven automation, and data intelligence for companies that scale.",
};

const PILLARS = [
  {
    title: "Intelligent systems",
    body: "Software that observes, decides, and acts. Our AI agents run inside customer workflows, with every decision logged and reviewable.",
  },
  {
    title: "Business automation",
    body: "We remove the approval chains, manual routing, and status meetings that slow companies down. The work moves itself; people steer it.",
  },
  {
    title: "Scalable foundations",
    body: "One customer runs ten workflows; another runs ten thousand. The same infrastructure serves both, and nothing gets rebuilt in between.",
  },
];

const STATS = [
  { v: "150+", l: "companies run operations on FutureX" },
  { v: "99.99%", l: "uptime across our infrastructure" },
  { v: "41,209", l: "hours automated last quarter" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We build the software"
        highlight="that runs the business."
        sub="FutureX Technologies is an intelligent technology company. We build scalable digital solutions, enterprise software, and AI-driven automation under one roof."
      />

      <section className="px-5 pb-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
                <h2 className="font-display text-lg font-bold text-navy">{p.title}</h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=75"
                alt="The FutureX team working together around a shared desk"
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/15" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-5 rounded-3xl border border-white/10 bg-navy p-8 sm:grid-cols-3 sm:p-10">
              {STATS.map((s) => (
                <div key={s.v} className="text-center">
                  <p className="font-display text-3xl font-bold text-violet-soft">{s.v}</p>
                  <p className="mt-1.5 text-[13px] leading-snug text-cool">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
              See it on your own operations
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15.5px] leading-relaxed text-muted">
              Bring one real process to a 30-minute walkthrough and we&apos;ll set
              it up live. No slides.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-violet px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_36px_rgba(108,92,231,0.45)] hover:ring-2 hover:ring-violet-soft"
            >
              Book a walkthrough
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
