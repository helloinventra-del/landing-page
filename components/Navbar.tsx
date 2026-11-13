"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#stories" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-navy/10 bg-soft/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="FutureX Technologies — home">
          <Logo light={false} id="nav" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-[14px] font-medium text-muted transition-colors hover:bg-navy/5 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="rounded-full border border-navy/15 px-5 py-2.5 text-[14px] font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-navy/5"
          >
            Login
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:bg-violet hover:shadow-[0_0_28px_rgba(108,92,231,0.45)] hover:ring-2 hover:ring-violet-soft"
          >
            Try for free
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger — 44px tap target */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy/5 lg:hidden"
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

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-navy/10 bg-soft/95 px-5 pb-6 pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-muted transition-colors hover:bg-navy/5 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-navy/15 px-5 py-3 text-center text-[14px] font-semibold text-navy"
            >
              Login
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-violet px-5 py-3 text-center text-[14px] font-semibold text-white"
            >
              Try for free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
