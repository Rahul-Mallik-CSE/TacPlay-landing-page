/** @format */

import HeroSection from "@/components/HeroComponents/HeroSection";
import FeaturesSections from "@/components/FeaturesComponents/FeaturesSections";
import HowItWorksSections from "@/components/HowItWorksComponents/HowItWorksSections";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSection />
      <FeaturesSections />
      <HowItWorksSections />
    </main>
  );
}
