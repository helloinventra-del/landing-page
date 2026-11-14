import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import LogoCloud from "@/components/LogoCloud";
import SecurityStrip from "@/components/SecurityStrip";
import FeatureRows from "@/components/FeatureRows";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import Stories from "@/components/Stories";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <HowItWorks />
      <LogoCloud />
      <SecurityStrip />
      <FeatureRows />
      <Testimonials />
      <Integrations />
      <Stories />
      <CTA />
    </>
  );
}
