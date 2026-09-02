import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StackSlide from "@/components/StackSlide";
import OneAccountShowcase from "@/components/OneAccountShowcase";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import CardShowcase from "@/components/CardShowcase";
import CardStats from "@/components/CardStats";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Business from "@/components/Business";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero pins to the viewport and holds while the user scrolls
            through it, then this next block scrolls up over it, rounded
            top and all — same beat as the reference video. Only the hero
            is pinned: it's short content we control, so it never clips.
            Active on every breakpoint, including mobile. */}
        <div className="relative">
          <StackSlide z={10} first>
            <Hero />
          </StackSlide>

          <div
            className="relative bg-base rounded-t-[36px] sm:rounded-t-[56px] shadow-[0_-60px_100px_-40px_rgba(0,0,0,0.6)]"
            style={{ zIndex: 20 }}
          >
            <OneAccountShowcase />
            <Features />
            <CardShowcase />
            <Security />
            <CardStats />
            <TrustStrip />
            <HowItWorks />
            <Testimonials />
            <Business />
            <Faq />
            <CtaBand />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
