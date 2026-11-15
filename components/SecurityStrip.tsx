import Reveal from "./Reveal";

const CONTROLS = [
  {
    icon: "M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3zM9.2 12l2 2 3.6-3.8",
    name: "SOC 2 Type II",
    detail: "Audited annually by independent assessors",
  },
  {
    icon: "M6 3h9l4 4v14H6V3zM9 12h6M9 16h6M9 8h4",
    name: "ISO 27001",
    detail: "Certified information security management",
  },
  {
    icon: "M12 21c-4-3-7-6.5-7-11a7 7 0 0114 0c0 4.5-3 8-7 11zM12 8v6M9 11h6",
    name: "GDPR",
    detail: "EU data residency options and DPA included",
  },
  {
    icon: "M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3zM12 8v8M8 12h8",
    name: "HIPAA-ready",
    detail: "BAAs available for healthcare deployments",
  },
];

export default function SecurityStrip() {
  return (
    <section className="px-5 pb-4 sm:px-8" aria-labelledby="security-strip-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="lg:max-w-sm">
                <h2
                  id="security-strip-heading"
                  className="font-display text-2xl font-bold text-navy"
                >
                  Enterprise controls, by default
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  SSO with SAML 2.0, role-based access, immutable audit logs, and
                  data encrypted in transit and at rest. The paperwork is ready
                  before your security review is.
                </p>
                <a
                  href="/security"
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy underline decoration-violet/50 decoration-2 underline-offset-4 transition-colors hover:text-violet"
                >
                  Read our security approach
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="grid flex-1 gap-3 sm:grid-cols-2">
                {CONTROLS.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-navy/10 bg-soft p-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-navy" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ height: 18, width: 18 }}>
                          <path d={c.icon} />
                        </svg>
                      </span>
                      <p className="text-[14px] font-bold text-navy">{c.name}</p>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
