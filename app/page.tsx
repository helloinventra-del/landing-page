import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import FeatureCards from "@/components/FeatureCards";
import LogoCloud from "@/components/LogoCloud";
import FeatureRows from "@/components/FeatureRows";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import Stories from "@/components/Stories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main" className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <LogoCloud />
      <FeatureRows />
      <Testimonials />
      <Integrations />
      <Stories />
      <CTA />
      <Footer />
    </main>
  );
}
