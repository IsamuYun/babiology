import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyPage } from "@/components/legacy-page";
import { getLegacyPage, isLegacySlug, pages } from "@/lib/legacy-pages";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return pages.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLegacySlug(params.slug)) return {};
  const page = getLegacyPage(params.slug);

  return {
    title: page.title
  };
}

export default function SlugPage({ params }: PageProps) {
  if (!isLegacySlug(params.slug)) notFound();

  const page = getLegacyPage(params.slug);

  return <LegacyPage content={page.content} style={page.style} />;
}
