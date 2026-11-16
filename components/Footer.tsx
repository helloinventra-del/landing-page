import Link from "next/link";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Products overview", href: "/#products" },
      { label: "In development", href: "/#products" },
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
      { label: "Capabilities", href: "/#technology" },
      { label: "Engineering philosophy", href: "/#philosophy" },
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
              A product-driven technology company. We build intelligent software,
              digital products, and platforms that solve real problems.
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

          <div>
            <h3 className="text-[13px] font-semibold text-navy">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:sales@orinexsoft.com"
                  className="text-[13.5px] text-muted transition-colors hover:text-navy"
                >
                  sales@orinexsoft.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[13.5px] text-muted transition-colors hover:text-navy"
                >
                  Contact page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-[12.5px] text-muted">
            © 2026 OrinexSoft. Building what&apos;s next.
          </p>
        </div>
      </div>
    </footer>
  );
}
