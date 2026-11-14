import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — FutureX Technologies",
  description:
    "Book a 30-minute walkthrough of FutureX on your own operations, start a free trial, or talk to sales. A solutions engineer replies within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="See your own operation"
        highlight="running on FutureX."
        sub="Tell us which process hurts the most. We'll show it automated live, on your data, in 30 minutes."
      />

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
              <h2 className="font-display text-lg font-bold text-navy">
                What happens next
              </h2>
              <ol className="mt-5 space-y-5">
                {[
                  {
                    n: "1",
                    t: "We reply within one business day",
                    d: "A solutions engineer answers, never an autoresponder chain.",
                  },
                  {
                    n: "2",
                    t: "30-minute walkthrough on your data",
                    d: "We set up one of your real processes live on FutureX infrastructure.",
                  },
                  {
                    n: "3",
                    t: "Pilot plan in writing",
                    d: "Scope, timeline, and success metrics before you commit to anything.",
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/15 font-display text-[13px] font-bold text-violet">
                      {s.n}
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold text-navy">{s.t}</span>
                      <span className="mt-0.5 block text-[13.5px] leading-relaxed text-muted">{s.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-7 border-t border-navy/10 pt-5">
                <p className="text-[13px] text-muted">
                  Prefer email directly?
                </p>
                <a
                  href="mailto:sales@futurex.tech"
                  className="mt-1 inline-block text-[14px] font-semibold text-violet underline decoration-2 underline-offset-4"
                >
                  sales@futurex.tech
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
