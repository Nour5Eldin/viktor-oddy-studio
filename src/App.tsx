import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { Pricing } from "@/components/sections/Pricing";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { Projects } from "@/components/sections/Projects";
import { Partner } from "@/components/sections/Partner";
import { Footer } from "@/components/layout/Footer";
import { CopyrightBar } from "@/components/layout/CopyrightBar";
import { BottomNav } from "@/components/layout/BottomNav";

function App() {
  return (
    <div className="relative min-h-screen bg-white pb-28">
      <main>
        <Hero />
        <Marquee />
        <TestimonialQuote />
        <Pricing />
        <TestimonialCarousel />
        <Projects />
        <Partner />
      </main>
      {/* "#book" is a placeholder contact anchor — wire this up to a real
          booking flow (Cal.com, Calendly, a contact form) before shipping. */}
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}

export default App;
