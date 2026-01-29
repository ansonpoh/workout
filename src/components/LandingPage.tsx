import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
