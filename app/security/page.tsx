import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Security — OrinexSoft",
  description:
    "How OrinexSoft protects your data: SOC 2 and ISO 27001 controls, SAML SSO, role-based access, immutable audit logs, encryption in transit and at rest.",
};

const SECTIONS = [
  {
    title: "Compliance",
    body: "Independent auditors review our controls annually. Current reports and certificates are available under NDA for your security review.",
    items: ["SOC 2 Type II", "ISO 27001", "GDPR & DPA", "HIPAA-ready deployment"],
  },
  {
    title: "Data protection",
    body: "Customer data is encrypted in transit with TLS 1.3 and at rest with AES-256. Backups run continuously across regions, and deletion requests complete within 30 days.",
    items: ["TLS 1.3 in transit", "AES-256 at rest", "Cross-region backups", "30-day deletion SLA"],
  },
  {
    title: "Access control",
    body: "Nobody holds keys they don't need. Access follows roles, sessions expire, and every privileged action lands in an immutable log your auditors can export.",
    items: ["SSO with SAML 2.0", "Role-based access", "Immutable audit log", "SCIM provisioning"],
  },
  {
    title: "Infrastructure",
    body: "Runs on isolated cloud environments across multiple regions with a 99.99% uptime target. Changes ship through peer-reviewed, audit-logged pipelines.",
    items: ["Multi-region", "99.99% uptime target", "Isolated tenancy", "Change audit trail"],
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Security"
        title="Your review,"
        highlight="pre-answered."
        sub="The controls your security team asks about, documented here so the review takes hours instead of weeks."
      />

      <section className="px-5 pb-10 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
                <h2 className="font-display text-xl font-bold text-navy">{s.title}</h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1.5 text-[12px] font-semibold text-violet">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left">
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                Need the full questionnaire?
              </h2>
              <p className="mt-1.5 text-[14.5px] text-muted">
                We return completed security questionnaires (SIG, CAIQ, or yours)
                within five business days.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-violet px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-violet hover:ring-2 hover:ring-violet-soft"
            >
              Request the security pack
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
