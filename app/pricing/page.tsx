import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing — OrinexSoft",
  description:
    "Straightforward per-seat pricing for OrinexSoft: Start for small teams, Growth for scaling operations, Enterprise for regulated organizations. Talk to sales for custom terms.",
};

const TIERS = [
  {
    name: "Start",
    price: "$49",
    per: "per seat / month",
    blurb: "For teams automating their first workflows.",
    features: [
      "Up to 10 seats",
      "Unlimited workflows",
      "50+ core integrations",
      "7-day audit history",
      "Community support",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$99",
    per: "per seat / month",
    blurb: "For operations that span departments.",
    features: [
      "Unlimited seats",
      "AI agents included",
      "200+ integrations",
      "1-year audit history",
      "SSO (SAML 2.0)",
      "Priority support",
    ],
    cta: "Book a demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "annual agreement",
    blurb: "For regulated organizations at scale.",
    features: [
      "Everything in Growth",
      "SOC 2 & ISO documentation",
      "Custom data residency",
      "Dedicated environment",
      "99.99% uptime SLA",
      "Named solutions engineer",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

const FAQ = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan starts with a 14-day trial on live infrastructure, with your own workflows. No credit card until you decide.",
  },
  {
    q: "How do seats work?",
    a: "A seat is any person who logs in. Viewers and auditors with read-only access are always free, so compliance teams never cost you a license.",
  },
  {
    q: "What happens after the trial ends?",
    a: "Workflows pause, nothing is deleted. Export everything at any time, in standard formats, with no exit fee.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pay for seats."
        highlight="Not surprises."
        sub="Every plan runs on the same infrastructure with the same uptime. Upgrade when your operations outgrow the seats, not before."
      />

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 90}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
                  tier.featured
                    ? "border-violet bg-navy text-white shadow-[0_24px_70px_rgba(108,92,231,0.25)]"
                    : "border-navy/10 bg-white shadow-sm"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-violet px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                    MOST TEAMS
                  </span>
                )}
                <h2 className={`font-display text-lg font-bold ${tier.featured ? "text-white" : "text-navy"}`}>
                  {tier.name}
                </h2>
                <p className={`mt-1.5 text-[13.5px] leading-relaxed ${tier.featured ? "text-cool" : "text-muted"}`}>
                  {tier.blurb}
                </p>
                <p className="mt-5">
                  <span className={`font-display text-4xl font-bold ${tier.featured ? "text-white" : "text-navy"}`}>
                    {tier.price}
                  </span>
                  <span className={`ml-2 text-[13px] ${tier.featured ? "text-cool" : "text-muted"}`}>
                    {tier.per}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-[14px] ${tier.featured ? "text-white/90" : "text-navy"}`}>
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tier.featured ? "bg-violet/30" : "bg-violet/15"}`}>
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-violet-soft" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 6.5l2.5 2.5 4.5-5" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 rounded-full py-3 text-center text-[14px] font-semibold transition-all ${
                    tier.featured
                      ? "bg-violet text-white hover:bg-violet hover:ring-2 hover:ring-violet-soft"
                      : "border border-navy/15 text-navy hover:border-violet/50 hover:bg-violet/5"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[13.5px] leading-relaxed text-muted">
            Read-only auditor seats are free on every plan. Prices exclude tax.
            Annual agreements include a 15% discount.
          </p>
        </Reveal>
      </section>

      <section className="px-5 pb-20 sm:px-8" aria-labelledby="pricing-faq">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 id="pricing-faq" className="font-display text-3xl font-bold tracking-tight text-navy">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="group rounded-2xl border border-navy/10 bg-white shadow-sm open:border-violet/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-[15px] font-semibold text-navy [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <svg viewBox="0 0 16 16" className="h-4 w-4 text-violet transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-muted">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
