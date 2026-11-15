import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "AI Suite", href: "/#product" },
      { label: "Automation", href: "/#solutions" },
      { label: "Analytics", href: "/#solutions" },
      { label: "Security", href: "/security" },
      { label: "Integrations", href: "/#product" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Case Studies", href: "/#stories" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "OrinexSoft for Enterprise", href: "/pricing" },
      { label: "OrinexSoft for Startups", href: "/pricing" },
      { label: "Book a Demo", href: "/contact" },
      { label: "OrinexSoft for B2B", href: "/pricing" },
    ],
  },
];

function SocialIcon({ d, label }: { d: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cool transition-colors hover:border-white/40 hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d={d} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-5 pb-8 pt-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light id="footer" />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-cool">
              OrinexSoft builds scalable digital solutions,
              enterprise software, and AI-driven business automation.
            </p>
            <div className="mt-6 flex gap-2.5">
              <SocialIcon
                label="X (Twitter)"
                d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-6.9L5.6 22H2.5l7.5-8.6L2.2 2h6.6l4.5 6.2L18.9 2zm-1.1 18h1.8L7.4 3.9H5.5L17.8 20z"
              />
              <SocialIcon
                label="LinkedIn"
                d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9z"
              />
              <SocialIcon
                label="GitHub"
                d="M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0012 2z"
              />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold tracking-[0.16em] text-white uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-cool transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-white">
              One engineering note per month
            </p>
            <p className="mt-1 text-[12.5px] text-cool">
              How we build the platform, what breaks, and what we learn.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-[12.5px] text-cool">
            © 2026 OrinexSoft. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[12.5px] text-cool transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-[12.5px] text-cool transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
