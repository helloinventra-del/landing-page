import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ChatButton from "@/components/ChatButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helloinventra-del.github.io/landing-page"),
  title: {
    default: "OrinexSoft — Building what's next.",
    template: "%s — OrinexSoft",
  },
  description:
    "OrinexSoft is a product-driven technology company. We build intelligent software, digital products, and platforms that turn complex challenges into meaningful solutions.",
  openGraph: {
    title: "OrinexSoft — Building what's next.",
    description:
      "Technology products. Intelligent software. Digital platforms. Built by OrinexSoft.",
    siteName: "OrinexSoft",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "OrinexSoft — Building what's next.",
    description:
      "OrinexSoft is a product-driven technology company building intelligent software and digital platforms.",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OrinexSoft",
  url: "https://helloinventra-del.github.io/landing-page",
  description:
    "Product-driven technology company building intelligent software, digital products, and platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body className="bg-white font-sans text-navy antialiased">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <Navbar />
        <main id="main" className="relative overflow-x-clip">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <ChatButton />
      </body>
    </html>
  );
}
