"use client";

import { useState } from "react";

/**
 * A restrained, clearly-labeled interface sketch used wherever a product
 * has no shipped UI yet. Decorative chart line and skeleton blocks only —
 * no fabricated numbers, labels, or features.
 */
export default function InterfaceSketch({
  module = "Operations",
  className = "",
}: {
  /** Capability / module name shown in the chrome bar. */
  module?: string;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const nav = ["Overview", "Workflows", "Runs", "Data"];
  const bars = [42, 58, 46, 64, 55, 72, 66, 84, 78, 96];

  return (
    <div
      className={`overflow-hidden rounded-xl border border-navy/15 bg-white shadow-[0_12px_32px_rgba(16,19,34,0.10)] ${className}`}
    >
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-line bg-white px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <span className="text-[10.5px] font-medium text-muted/80">
          OrinexSoft · {module}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-soft px-2 py-0.5 text-[9.5px] font-semibold text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          In development
        </span>
      </div>

      {/* body: sidebar + content sketch */}
      <div className="grid grid-cols-[56px_1fr] divide-x divide-line bg-white">
        <div className="space-y-2 p-3">
          {nav.map((n, i) => (
            <button
              key={n}
              type="button"
              onClick={() => setActive(i)}
              className={`block w-full rounded-md px-2 py-1.5 text-left text-[10.5px] font-medium transition-colors ${
                i === active
                  ? "bg-soft text-navy"
                  : "text-muted/70 hover:text-navy"
              }`}
            >
              {n}
            </button>
          ))}
          <div className="mt-4 space-y-1.5 border-t border-line pt-3">
            <div className="h-1.5 w-9 rounded bg-soft" />
            <div className="h-1.5 w-7 rounded bg-soft" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-28 rounded bg-navy/15" />
            <div className="h-6 w-16 rounded-md border border-line bg-soft" />
          </div>
          {/* decorative chart sketch — no axes, no numbers */}
          <div className="mt-3 rounded-lg border border-line bg-soft p-3">
            <svg viewBox="0 0 220 72" className="h-[72px] w-full" preserveAspectRatio="none" aria-hidden="true">
              {[18, 36, 54].map((y) => (
                <line key={y} x1="0" y1={y} x2="220" y2={y} stroke="rgb(16 19 34 / 0.05)" />
              ))}
              <path
                d="M0 58 C 24 52, 40 44, 62 46 S 104 30, 128 34 S 176 16, 220 10"
                fill="none"
                stroke="#6655E8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M0 64 C 30 60, 56 56, 84 56 S 140 44, 172 46 S 200 42, 220 40"
                fill="none"
                stroke="rgb(16 19 34 / 0.18)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between rounded-md border border-line bg-soft px-3 py-2">
              <div className="h-1.5 w-24 rounded bg-navy/15" />
              <div className="h-1.5 w-10 rounded bg-navy/15" />
            </div>
            <div className="flex items-center justify-between rounded-md border border-line bg-soft px-3 py-2">
              <div className="h-1.5 w-28 rounded bg-navy/15" />
              <div className="h-1.5 w-8 rounded bg-navy/15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
