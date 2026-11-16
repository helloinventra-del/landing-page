"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const PRODUCTS_MENU = [
  { name: "OrinexFlow", desc: "Intelligent process automation", status: "Live" },
  { name: "OrinexAnalytics", desc: "Data insights and reporting", status: "Beta" },
  { name: "OrinexCloud", desc: "Next-gen cloud platform", status: "Coming Soon" },
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
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <nav className="relative mx-auto flex h-[52px] items-center justify-between pl-5 sm:pl-8">
        <Link href="/" aria-label="OrinexSoft — home" className="shrink-0">
          <Logo light={false} id="nav" />
        </Link>

        {/* Desktop nav — centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {/* Products with dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3.5 py-1.5 text-[13.5px] font-medium text-muted transition-colors hover:bg-soft hover:text-navy"
              aria-haspopup="true"
            >
              Products
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 4.5L6 8l3.5-3.5" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-line bg-white p-2 shadow-[0_12px_32px_rgba(17,18,36,0.12)]">
                {PRODUCTS_MENU.map((p) => (
                  <Link
                    key={p.name}
                    href="/#products"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-soft"
                  >
                    <span>
                      <span className="block text-[13.5px] font-semibold text-navy">{p.name}</span>
                      <span className="block text-[11.5px] text-muted">{p.desc}</span>
                    </span>
                    <span className="text-[10px] font-semibold text-muted">{p.status}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-1.5 text-[13.5px] font-medium text-muted transition-colors hover:bg-soft hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 pr-2 md:flex">
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 rounded-full bg-violet px-4 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-violet-soft"
          >
            Explore Products
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:bg-soft md:hidden"
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
          <p className="px-3 pb-1 pt-2 text-[11px] font-semibold tracking-[0.12em] text-muted/80 uppercase">
            Products
          </p>
          {PRODUCTS_MENU.map((p) => (
            <Link
              key={p.name}
              href="/#products"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-soft"
            >
              <span>
                <span className="block text-[14px] font-semibold text-navy">{p.name}</span>
                <span className="block text-[11.5px] text-muted">{p.desc}</span>
              </span>
              <span className="text-[10px] font-semibold text-muted">{p.status}</span>
            </Link>
          ))}
          <p className="px-3 pb-1 pt-3 text-[11px] font-semibold tracking-[0.12em] text-muted/80 uppercase">
            Company
          </p>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-[14px] font-medium text-muted transition-colors hover:bg-soft hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#products"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-violet px-4 py-3 text-center text-[14px] font-semibold text-white"
          >
            Explore Products
          </Link>
        </div>
      )}
    </header>
  );
}
