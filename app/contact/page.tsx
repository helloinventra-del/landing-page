import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have an idea, a challenge, or a vision for a new product? Tell OrinexSoft what you are working on. A real engineer replies within one business day.",
};

const NEXT_STEPS = [
  {
    n: "1",
    t: "We reply within one business day",
    d: "An engineer reads your message and answers directly. No autoresponder chains.",
  },
  {
    n: "2",
    t: "A focused conversation",
    d: "We discuss the problem, the context, and whether OrinexSoft is the right fit to build it.",
  },
  {
    n: "3",
    t: "A written plan, if we proceed",
    d: "Scope, timeline, and success metrics before any commitment is made.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Have an idea, a challenge,"
        highlight="or a vision?"
        sub="Tell us what you are working on. If OrinexSoft can build it better, we will show you exactly how."
      />

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(16,19,34,0.05)]">
              <h2 className="font-display text-lg font-bold text-navy">
                What happens next
              </h2>
              <ol className="mt-5 space-y-5">
                {NEXT_STEPS.map((s) => (
                  <li key={s.n} className="flex gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-soft font-display text-[13px] font-bold text-navy">
                      {s.n}
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold text-navy">{s.t}</span>
                      <span className="mt-0.5 block text-[13.5px] leading-relaxed text-muted">{s.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-7 border-t border-line pt-5">
                <p className="text-[13px] text-muted">Prefer email directly?</p>
                <a
                  href="mailto:sales@orinexsoft.com"
                  className="mt-1 inline-block text-[14px] font-semibold text-violet underline decoration-violet/40 decoration-2 underline-offset-4"
                >
                  sales@orinexsoft.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
