import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FutureX Technologies — Intelligent Enterprise Software",
  description:
    "FutureX Technologies builds AI-driven systems, enterprise software, and business automation for companies that scale. Intelligent Technology | Business Automation | Enterprise Solutions | Scalable Systems | Future Ready.",
  keywords: [
    "Intelligent Technology",
    "Business Automation",
    "Enterprise Solutions",
    "Scalable Systems",
    "Future Ready",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-soft font-sans text-navy antialiased">
        {/* Gates scroll-reveal hiding behind JS availability */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main"
          className="fixed left-4 top-[-64px] z-[70] rounded-full bg-violet px-5 py-2.5 text-[14px] font-semibold text-white transition-[top] duration-150 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
