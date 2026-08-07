import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FeaturedEvents from "@/components/landing/FeaturedEvents";
import BentoGrid from "@/components/landing/BentoGrid";
import WhyBunkGo from "@/components/landing/WhyBunkGo";
import Communities from "@/components/landing/Communities";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-neutral-950 antialiased">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <BentoGrid />
      <WhyBunkGo />
      <Communities />
      <CTA />
      <Footer />
    </main>
  );
}
