import type { Metadata } from "next";
import { LegacyPage } from "@/components/legacy-page";
import { getLegacyPage } from "@/lib/legacy-pages";
import { HeroSection } from "@/src/sections/cn/HeroSection";

export const metadata: Metadata = {
  title: "Babiology — 让家的故事，从这里开始"
};

export default function HomePage() {
  const page = getLegacyPage("home", { omitHero: true });

  return (
    <LegacyPage content={page.content} style={page.style}>
      <HeroSection />
    </LegacyPage>
  );
}
