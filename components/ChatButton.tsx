"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Floating affordance for instant human contact. Hidden on /contact. */
export default function ChatButton() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      aria-label="Talk to us"
      className="fixed bottom-20 right-4 z-40 flex items-center justify-center rounded-full bg-navy text-white shadow-[0_8px_28px_rgba(11,16,32,0.35)] transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
      style={{ height: 52, width: 52 }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a8 8 0 01-8 8H4l2-3a8 8 0 1115-5z" />
      </svg>
    </Link>
  );
}
