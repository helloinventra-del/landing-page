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
      { label: "Support", href: "/contact" },
    ],
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
