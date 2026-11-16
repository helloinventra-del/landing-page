import Link from "next/link";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "OrinexFlow", href: "/#products" },
      { label: "OrinexAnalytics", href: "/#products" },
      { label: "OrinexCloud", href: "/#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "AI & Intelligence", href: "/#technology" },
      { label: "Cloud Infrastructure", href: "/#technology" },
      { label: "Software Engineering", href: "/#technology" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Support", href: "/contact" },
    ],
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    d: "M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0012 2z",
  },
  {
    label: "LinkedIn",
    d: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9z",
  },
  {
    label: "YouTube",
    d: "M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 001.76-1.77A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3L10 15z",
  },
  {
    label: "X",
    d: "M18.9 2H22l-7 8 8.2 12h-6.4l-5-6.9L5.6 22H2.5l7.5-8.6L2.2 2h6.6l4.5 6.2L18.9 2zm-1.1 18h1.8L7.4 3.9H5.5L17.8 20z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo light={false} id="footer" />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-muted">
              A product-driven technology company. Building intelligent
              solutions for a better tomorrow.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-violet/40 hover:text-violet"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold text-navy">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-muted transition-colors hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-muted">© 2026 OrinexSoft. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[12.5px] text-muted">Privacy Policy</span>
            <span className="text-[12.5px] text-muted">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
