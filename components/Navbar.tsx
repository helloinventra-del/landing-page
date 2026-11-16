"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Escape closes the menu; lock page scroll while it is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 items-center container-x justify-between px-5 sm:px-8">
        <Link href="/" aria-label="OrinexSoft — home" className="shrink-0">
          <Logo light={false} id="nav" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-[14px] font-medium text-muted transition-colors hover:bg-soft hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#products"
            className="rounded-lg bg-violet px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-violet-soft"
          >
            Explore Products
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:bg-soft md:hidden"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white px-5 pb-6 pt-3 md:hidden"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-muted transition-colors hover:bg-soft hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#products"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-violet px-4 py-3 text-center text-[14px] font-semibold text-white"
          >
            Explore Products
          </Link>
        </div>
      )}
    </header>
  );
}
