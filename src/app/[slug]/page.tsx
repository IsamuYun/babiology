import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyPage } from "@/components/legacy-page";
import { getLegacyPage, isLegacySlug, pages } from "@/lib/legacy-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return pages.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isLegacySlug(slug)) return {};
  const page = getLegacyPage(slug);

  return {
    title: page.title
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isLegacySlug(slug)) notFound();

  const page = getLegacyPage(slug);

  return <LegacyPage content={page.content} style={page.style} />;
}
