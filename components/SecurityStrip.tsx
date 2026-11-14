import Reveal from "./Reveal";

const CONTROLS = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA-ready"];

export default function SecurityStrip() {
  return (
    <section className="px-5 pb-4 sm:px-8" aria-labelledby="security-strip-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-navy/10 bg-white p-7 shadow-sm sm:p-8 lg:flex-row">
            <div>
              <h2
                id="security-strip-heading"
                className="font-display text-xl font-bold text-navy"
              >
                Enterprise controls, by default
              </h2>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted">
                SSO with SAML 2.0, role-based access, immutable audit logs, and
                data encrypted in transit and at rest. Compliance paperwork is
                ready before your security review is.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="flex flex-wrap gap-2">
                {CONTROLS.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1.5 text-[12px] font-semibold text-violet"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <a
                href="/security"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy underline decoration-violet/50 decoration-2 underline-offset-4 transition-colors hover:text-violet"
              >
                Read our security approach
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
