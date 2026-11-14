"use client";

import { useState } from "react";

const INTERESTS = ["Book a demo", "Start a free trial", "Talk to sales"];
const SIZES = ["1–20", "21–100", "101–500", "500+"];
const NEXT_STEPS = [
  {
    n: "1",
    title: "We reply within one business day",
    body: "A solutions engineer answers, never an autoresponder chain.",
  },
  {
    n: "2",
    title: "30-minute walkthrough on your data",
    body: "We set up one of your real processes live on FutureX infrastructure.",
  },
  {
    n: "3",
    title: "Pilot plan in writing",
    body: "Scope, timeline, and success metrics before you commit to anything.",
  },
];

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[14px] text-navy placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-violet";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: INTERESTS[0],
    size: SIZES[1],
    message: "",
    company_url: "", // honeypot
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company_url) return; // bot hit the honeypot
    if (!/.+@.+\..+/.test(form.email)) {
      setError("Enter a valid work email so we can reply.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-violet/30 bg-white p-8 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet/15">
          <svg viewBox="0 0 20 20" className="h-6 w-6 text-violet" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10.5l4 4 8-9" />
          </svg>
        </span>
        <h2 className="font-display mt-5 text-2xl font-bold text-navy">
          Message received, {form.name.split(" ")[0] || "thanks"}.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-muted">
          A solutions engineer will reply within one business day about your{" "}
          <strong className="text-navy">{form.interest.toLowerCase()}</strong>{" "}
          request for {form.company || "your team"}.
        </p>
        <p className="mt-5 text-[13px] text-muted">
          In a hurry?{" "}
          <a href="mailto:sales@futurex.tech" className="font-semibold text-violet underline decoration-2 underline-offset-2">
            sales@futurex.tech
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
      {/* honeypot */}
      <input
        type="text"
        name="company_url"
        value={form.company_url}
        onChange={set("company_url")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-[13px] font-semibold text-navy">
            Full name
          </label>
          <input id="cf-name" required value={form.name} onChange={set("name")} placeholder="Ada Lovelace" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-[13px] font-semibold text-navy">
            Work email
          </label>
          <input id="cf-email" type="email" required value={form.email} onChange={set("email")} placeholder="ada@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-company" className="mb-1.5 block text-[13px] font-semibold text-navy">
            Company
          </label>
          <input id="cf-company" required value={form.company} onChange={set("company")} placeholder="Company Ltd." className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-size" className="mb-1.5 block text-[13px] font-semibold text-navy">
            Team size
          </label>
          <select id="cf-size" value={form.size} onChange={set("size")} className={inputClass}>
            {SIZES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <span className="mb-1.5 block text-[13px] font-semibold text-navy">
            What do you need?
          </span>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="What do you need">
            {INTERESTS.map((opt) => (
              <button
                key={opt}
                type="button"
                role="radio"
                aria-checked={form.interest === opt}
                onClick={() => setForm((f) => ({ ...f, interest: opt }))}
                className={`rounded-xl border px-3 py-2.5 text-[13px] font-semibold transition-colors ${
                  form.interest === opt
                    ? "border-violet bg-violet/10 text-violet"
                    : "border-navy/15 bg-white text-muted hover:border-navy/30"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-[13px] font-semibold text-navy">
            Which process should we look at? <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="cf-message"
            rows={4}
            value={form.message}
            onChange={set("message")}
            placeholder="For example: claims handling, invoice approvals, client onboarding…"
            className={inputClass + " resize-none"}
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-3 rounded-xl bg-red-50 px-4 py-2.5 text-[13px] font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-violet py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_28px_rgba(108,92,231,0.4)] hover:ring-2 hover:ring-violet-soft"
      >
        Send request
      </button>
      <p className="mt-3 text-center text-[12px] text-muted">
        We reply within one business day. No newsletters, no cold calls.
      </p>
    </form>
  );
}
