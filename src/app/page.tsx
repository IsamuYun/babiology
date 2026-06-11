import type { Metadata } from "next";
import { LegacyPage } from "@/components/legacy-page";
import { getLegacyPage } from "@/lib/legacy-pages";
import { CTASection } from "@/src/sections/cn/CTASection";
import { DonorSection } from "@/src/sections/cn/DonorSection";
import { FeaturedGridSection } from "@/src/sections/cn/FeaturedGridSection";
import { HeroSection } from "@/src/sections/cn/HeroSection";
import { OverviewSection } from "@/src/sections/cn/OverviewSection";
import { PracticeSection } from "@/src/sections/cn/PracticeSection";
import { PressSection } from "@/src/sections/cn/PressSection";
import { ServicesSection } from "@/src/sections/cn/ServicesSection";
import { StatsSection } from "@/src/sections/cn/StatsSection";
import { StorySection } from "@/src/sections/cn/StorySection";
import { Marquee } from "@/src/sections/home/Marquee";

export const metadata: Metadata = {
  title: "Babiology — 让家的故事，从这里开始"
};

export default function HomePage() {
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
