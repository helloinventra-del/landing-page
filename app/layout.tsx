import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helloinventra-del.github.io/landing-page"),
  title: {
    default: "FutureX Technologies — The operations platform that runs itself",
    template: "%s — FutureX Technologies",
  },
  description:
    "FutureX Technologies builds AI-driven systems, enterprise software, and business automation for companies that scale. Intelligent Technology | Business Automation | Enterprise Solutions | Scalable Systems | Future Ready.",
  keywords: [
    "Intelligent Technology",
    "Business Automation",
    "Enterprise Solutions",
    "Scalable Systems",
    "Future Ready",
  ],
  openGraph: {
    title: "FutureX Technologies — The operations platform that runs itself",
    description:
      "Enterprise software, AI-driven automation, and data intelligence in one platform. Live in a week, measured from day one.",
    siteName: "FutureX Technologies",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FutureX Technologies",
    description:
      "Enterprise software, AI-driven automation, and data intelligence in one platform.",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FutureX Technologies",
  url: "https://helloinventra-del.github.io/landing-page",
  description:
    "Intelligent technology company building scalable digital solutions, enterprise software, and AI-driven business automation.",
  knowsAbout: [
    "Intelligent Technology",
    "Business Automation",
    "Enterprise Solutions",
    "Scalable Systems",
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
