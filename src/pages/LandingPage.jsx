import { useEffect } from "react";
import Community from "../ui/Community";
import Faq from "../ui/FAQ";
import Features from "../ui/Features";
import Hero from "../ui/Hero";
import HowItWorks from "../ui/HowItWorks";
import MobileFeatures from "../ui/MobileFeatures";

function LandingPage() {
  useEffect(function () {
    console.log("Developed by David de Alencar.");
  }, []);

  return (
    <>
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Features />
      </div>
      <HowItWorks />
      <Community />
      <MobileFeatures />
      <Faq />
    </>
  );
}

export default LandingPage;
