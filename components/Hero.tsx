"use client";

import Link from "next/link";
import WaveMesh from "@/components/ui/wave-mesh";
import PreviewFrame from "./PreviewFrame";

/* Stable reference: a new array per render would restart the canvas effect. */
const WAVE_COLORS: [string, string, string] = ["#FFFFFF", "#9AA3B6", "#6655E8"];

export default function Hero() {
  return (
    <WaveMesh colors={WAVE_COLORS} crests className="relative overflow-hidden border-b border-line">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:pb-28">
          {/* Copy */}
          <div className="max-w-xl">
            <h1 className="font-display text-[40px] font-bold leading-[1.06] tracking-tight text-navy sm:text-[56px]">
              Building technology for a smarter tomorrow.
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted">
              We create intelligent software, digital products, and technology
              platforms that turn complex challenges into meaningful solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-violet-soft"
              >
                Explore Our Products
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3 text-[15px] font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-soft"
              >
                Discover OrinexSoft
              </Link>
            </div>
          </div>

          {/* Layered interface previews — clearly marked, not a launched product */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden="true">
            <PreviewFrame
              label="Interface preview"
              className="absolute -left-4 top-6 w-[92%] -rotate-1 opacity-70"
              compact
            />
            <PreviewFrame label="Interface preview · in development" className="relative ml-auto w-[88%]" />
          </div>
        </div>
      </section>
    </WaveMesh>
  );
}
