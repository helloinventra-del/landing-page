import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { DashboardWindow } from "@/components/DashboardMockup";
import { cn } from "@/lib/utils";
import * as React from "react";

/* Brand glyphs that orbit the hero — small violet icons on white chips. */
const ORBIT_ICONS = [
  "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  "M4 20V10M10 20V4M16 20v-7M22 20H2",
  "M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.6 1.6A4 4 0 007 19h10.5z",
  "M8 6l-5 6 5 6M16 6l5 6-5 6",
  "M4 7h16v13H4zM4 7l3-4h10l3 4M9 12h6",
  "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  "M12 3a4 4 0 014 4c0 1.7-.9 2.6-1.5 3.5-.4.6-.5 1-.5 1.5h-4c0-.5-.1-.9-.5-1.5C9 9.6 8 8.7 8 7a4 4 0 014-4zM10 15h4M10.5 18h3",
  "M13 3l7 7-7 7v-4H8a5 5 0 00-5 5v1",
];

export default function HeroSection06() {
  return (
    <div className="relative overflow-hidden border-b border-line bg-gradient-to-b from-soft via-white to-white">
      {/* orbiting brand glyphs — desktop only, decorative */}
      <div
        className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex"
        aria-hidden="true"
      >
        <OrbitingCircles radius={250} speed={0.6} iconSize={44} className="border border-line bg-white shadow-sm text-violet">
          {ORBIT_ICONS.slice(0, 4).map((d, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={d} />
            </svg>
          ))}
        </OrbitingCircles>
        <OrbitingCircles radius={380} speed={0.35} reverse iconSize={38} className="border border-line bg-white/80 shadow-sm text-muted">
          {ORBIT_ICONS.slice(4).map((d, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={d} />
            </svg>
          ))}
        </OrbitingCircles>
      </div>

      <div className="container-x relative flex flex-col items-center justify-center gap-y-8 pt-16 pb-20 sm:pt-20 sm:pb-24">
        {/* badge */}
        <Link
          href="/#products"
          className="group relative z-10 flex items-center gap-2 rounded-full border border-line bg-white px-2 py-1 shadow-[0_1px_2px_rgba(16,19,34,0.06)] transition-colors hover:border-violet/40"
        >
          <span className="rounded-full bg-violet px-2 py-0.5 text-[9px] font-bold tracking-wide text-white">
            NEW
          </span>
          <span className="pr-1.5 text-[12.5px] font-medium text-navy">
            OrinexFlow is live
          </span>
          <ArrowRightIcon className="h-3.5 w-3.5 text-violet transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* headline */}
        <h1 className="max-w-4xl text-center font-display text-[40px] font-bold !leading-[1.06] tracking-tight text-navy sm:text-[52px] lg:text-[56px]">
          Building technology for a smarter{" "}
          <span className="text-violet">tomorrow.</span>
        </h1>
        <p className="-mt-2 max-w-xl text-center text-[16px] leading-relaxed text-muted lg:text-[17px]">
          We create intelligent software, digital products, and technology
          platforms that turn complex challenges into meaningful solutions.
        </p>

        {/* CTAs */}
        <div className="z-10 -mt-2 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/#products" className="group inline-flex">
            <Button size="lg" className="rounded-xl">
              Explore Our Products
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/about" className="group inline-flex">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl bg-white shadow-[0_1px_2px_rgba(16,19,34,0.05)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lavender">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-violet" fill="currentColor">
                  <path d="M3.5 2l6 4-6 4V2z" />
                </svg>
              </span>
              Learn About OrinexSoft
            </Button>
          </Link>
        </div>

        {/* framed dashboard — demo data, labeled as such */}
        <div className="relative z-10 mx-auto mt-14 w-full max-w-[1080px]">
          <div
            className="absolute top-1/2 left-1/2 -z-10 h-1/3 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[6rem] animate-image-glow"
            aria-hidden="true"
          />
          <div className="rounded-xl border border-line p-2 backdrop-blur-sm sm:rounded-2xl sm:p-2.5">
            <div className="rounded-lg border border-line bg-white sm:rounded-xl">
              <DashboardWindow className="border-0 shadow-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
