"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Mobile-only sticky conversion bar. Hidden on the contact page itself. */
export default function StickyCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-soft/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-md gap-2.5">
        <Link
          href="/contact"
          className="flex-1 rounded-full bg-violet py-3 text-center text-[14px] font-semibold text-white"
        >
          Start free
        </Link>
        <Link
          href="/contact"
          className="flex-1 rounded-full border border-navy/15 bg-white py-3 text-center text-[14px] font-semibold text-navy"
        >
          Book a demo
        </Link>
      </div>
    </div>
  );
}
