"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Mobile-only sticky conversion bar. Hidden on the contact page itself. */
export default function StickyCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md gap-2.5">
        <Link
          href="/#products"
          className="flex-1 rounded-lg bg-violet py-3 text-center text-[14px] font-semibold text-white"
        >
          Explore Products
        </Link>
        <Link
          href="/contact"
          className="flex-1 rounded-lg border border-line bg-white py-3 text-center text-[14px] font-semibold text-navy"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
