import type { Metadata } from "next";
import { LegacyPage } from "@/components/legacy-page";
import { getLegacyPage } from "@/lib/legacy-pages";

export const metadata: Metadata = {
  title: "Babiology — 让家的故事，从这里开始"
};

export default function HomePage() {
  const page = getLegacyPage("home");

  return <LegacyPage content={page.content} style={page.style} />;
}
