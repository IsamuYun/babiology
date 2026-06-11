import fs from "node:fs";
import path from "node:path";
import { withBasePath } from "@/lib/paths";

export const pages = [
  "surrogacy",
  "egg-donation",
  "how-it-works",
  "donors",
  "stories",
  "about",
  "faq",
  "blog",
  "contact"
] as const;

export type LegacySlug = (typeof pages)[number];

const pageFiles: Record<LegacySlug | "home", string> = {
  home: "index.html",
  surrogacy: "surrogacy.html",
  "egg-donation": "egg-donation.html",
  "how-it-works": "how-it-works.html",
  donors: "donors.html",
  stories: "stories.html",
  about: "about.html",
  faq: "faq.html",
  blog: "blog.html",
  contact: "contact.html"
};

const routeMap: Record<string, string> = {
  "index.html": "/",
  "surrogacy.html": "/surrogacy",
  "egg-donation.html": "/egg-donation",
  "how-it-works.html": "/how-it-works",
  "donors.html": "/donors",
  "stories.html": "/stories",
  "about.html": "/about",
  "faq.html": "/faq",
  "blog.html": "/blog",
  "contact.html": "/contact"
};

const routePaths = Object.values(routeMap).sort((a, b) => b.length - a.length);

type LegacyPageOptions = {
  omitHero?: boolean;
  omitMarquee?: boolean;
  omitServices?: boolean;
  omitStats?: boolean;
  omitOverview?: boolean;
  omitStory?: boolean;
  omitFeaturedGrid?: boolean;
  omitDonor?: boolean;
  omitPractice?: boolean;
  omitPress?: boolean;
  omitCTA?: boolean;
};

export function isLegacySlug(slug: string): slug is LegacySlug {
  return pages.includes(slug as LegacySlug);
}

function removeHomeHero(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*HERO\s*=+\s*-->\s*<section class="hero">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomeMarquee(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*MARQUEE\s*=+\s*-->\s*<div class="marquee">[\s\S]*?<\/div>\s*<\/div>\s*/i,
    "\n\n"
  );
}

function removeHomeServices(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*SERVICES\s*=+\s*-->\s*<section class="section">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomeStats(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*STATS\s*=+\s*-->\s*<section style="padding: 0;">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomeOverview(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*HOW IT WORKS\s*·\s*OVERVIEW\s*=+\s*-->\s*<section class="section">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomeStory(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*STORY\s*=+\s*-->\s*<section class="section is-sunk">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomeFeaturedGrid(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*FEATURED GRID\s*=+\s*-->\s*<section class="section">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomeDonor(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*DONOR PREVIEW\s*=+\s*-->\s*<section class="section is-sunk">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomePractice(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*PRACTICE \/ VALUES\s*=+\s*-->\s*<section class="section is-dark">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomePress(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*PRESS\s*=+\s*-->\s*<section>[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

function removeHomeCTA(content: string) {
  return content.replace(
    /\s*<!--\s*=+\s*CTA\s*=+\s*-->\s*<section class="cta-strip">[\s\S]*?<\/section>\s*/i,
    "\n\n"
  );
}

export function getLegacyPage(
  slug: LegacySlug | "home",
  options: LegacyPageOptions = {}
) {
  const file = pageFiles[slug];
  const html = fs.readFileSync(
    path.join(process.cwd(), "content", "legacy-pages", file),
    "utf8"
  );

  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "Babiology";
  const style = [...html.matchAll(/<style>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1].trim())
    .filter(Boolean)
    .join("\n\n");
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";

  let content = body
    .replace(/<div\s+data-slot=["']nav["']><\/div>/gi, "")
    .replace(/<div\s+data-slot=["']footer["']><\/div>/gi, "")
    .replace(/<script\s+src=["']partials\.js["']><\/script>/gi, "")
    .replace(/<script\s+src=["']tweaks\.js["']><\/script>/gi, "")
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/\s(?:data-screen-label)=["'][^"']*["']/gi, "");

  if (slug === "home" && options.omitHero) {
    content = removeHomeHero(content);
  }

  if (slug === "home" && options.omitMarquee) {
    content = removeHomeMarquee(content);
  }

  if (slug === "home" && options.omitServices) {
    content = removeHomeServices(content);
  }

  if (slug === "home" && options.omitStats) {
    content = removeHomeStats(content);
  }

  if (slug === "home" && options.omitOverview) {
    content = removeHomeOverview(content);
  }

  if (slug === "home" && options.omitStory) {
    content = removeHomeStory(content);
  }

  if (slug === "home" && options.omitFeaturedGrid) {
    content = removeHomeFeaturedGrid(content);
  }

  if (slug === "home" && options.omitDonor) {
    content = removeHomeDonor(content);
  }

  if (slug === "home" && options.omitPractice) {
    content = removeHomePractice(content);
  }

  if (slug === "home" && options.omitPress) {
    content = removeHomePress(content);
  }

  if (slug === "home" && options.omitCTA) {
    content = removeHomeCTA(content);
  }

  for (const [from, to] of Object.entries(routeMap)) {
    content = content.replaceAll(`href="${from}"`, `href="${withBasePath(to)}"`);
    content = content.replaceAll(`href='${from}'`, `href='${withBasePath(to)}'`);
  }

  for (const routePath of routePaths) {
    content = content.replaceAll(`href="${routePath}"`, `href="${withBasePath(routePath)}"`);
    content = content.replaceAll(`href='${routePath}'`, `href='${withBasePath(routePath)}'`);
  }

  content = content
    .replaceAll('src="assets/', `src="${withBasePath("/assets/")}`)
    .replaceAll("src='assets/", `src='${withBasePath("/assets/")}`);

  return { title, style, content };
}
