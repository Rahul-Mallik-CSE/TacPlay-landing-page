/** @format */

import HeroSection from "@/components/HeroComponents/HeroSection";
import FeaturesSections from "@/components/FeaturesComponents/FeaturesSections";
import HowItWorksSections from "@/components/HowItWorksComponents/HowItWorksSections";
import ManagementSections from "@/components/ManagementComponents/ManagementSections";
import PowerFeatureSections from "@/components/PowerFeatureComponents/PowerFeatureSections";
import FormFindingSections from "@/components/FormFindingComponents/FormFindingSections";
import CompetetivePaintballSections from "@/components/CompetetivePaintballComponents/CompetetivePaintballSections";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSection />
      <FeaturesSections />
      <HowItWorksSections />
      <ManagementSections />
      <PowerFeatureSections />
      <FormFindingSections />
      <CompetetivePaintballSections />
    </main>
  );
}
