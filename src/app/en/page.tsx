import type { Metadata } from "next";
import { LegacyPage } from "@/components/legacy-page";
import { getLegacyPage } from "@/lib/legacy-pages";
import { CTASection } from "@/src/sections/en/CTASection";
import { DonorSection } from "@/src/sections/en/DonorSection";
import { FeaturedGridSection } from "@/src/sections/en/FeaturedGridSection";
import { HeroSection } from "@/src/sections/en/HeroSection";
import { OverviewSection } from "@/src/sections/en/OverviewSection";
import { PracticeSection } from "@/src/sections/en/PracticeSection";
import { PressSection } from "@/src/sections/en/PressSection";
import { ServicesSection } from "@/src/sections/en/ServicesSection";
import { StatsSection } from "@/src/sections/en/StatsSection";
import { StorySection } from "@/src/sections/en/StorySection";
import { Marquee } from "@/src/sections/home/Marquee";

export const metadata: Metadata = {
  title: "Babiology — Your family's story begins here"
};

export default function EnglishHomePage() {
  const page = getLegacyPage("home", {
    omitHero: true,
    omitMarquee: true,
    omitServices: true,
    omitStats: true,
    omitOverview: true,
    omitStory: true,
    omitFeaturedGrid: true,
    omitDonor: true,
    omitPractice: true,
    omitPress: true,
    omitCTA: true
  });

  return (
    <LegacyPage content={page.content} style={page.style}>
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <StatsSection />
      <OverviewSection />
      <StorySection />
      <FeaturedGridSection />
      <DonorSection />
      <PracticeSection />
      <PressSection />
      <CTASection />
    </LegacyPage>
  );
}
