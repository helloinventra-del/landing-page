"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) return;
    setDone(true);
  };

  if (done) {
    return (
      <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-cool">
        You&apos;re on the list. Expect one engineering note per month, no
        marketing blasts.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Work email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Work email"
        className="w-full max-w-[220px] rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-white placeholder:text-cool/70 focus:outline-none focus:ring-2 focus:ring-violet"
      />
      <button
        type="submit"
        className="rounded-full bg-violet px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-violet hover:ring-2 hover:ring-violet-soft"
      >
        Subscribe
      </button>
    </form>
  );
}
