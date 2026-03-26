import type { MetadataRoute } from "next";

import { guides, itineraryList, siteConfig, tools } from "@/lib/site";

const STATIC_PAGES: Array<{ route: string; lastModified: string; priority: number }> = [
  { route: "", lastModified: "2026-03-26", priority: 1 },
  { route: "/tools", lastModified: "2026-03-26", priority: 0.9 },
  { route: "/itinerary", lastModified: "2026-03-26", priority: 0.9 },
  { route: "/guides", lastModified: "2026-03-26", priority: 0.9 },
  { route: "/about", lastModified: "2026-03-20", priority: 0.5 },
  { route: "/contact", lastModified: "2026-03-20", priority: 0.5 },
  { route: "/privacy", lastModified: "2026-03-20", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PAGES.map(({ route, lastModified, priority }) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const toolEntries = tools.map((tool) => ({
    url: `${siteConfig.url}${tool.href}`,
    lastModified: new Date("2026-03-26"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const itineraryEntries = itineraryList.map((itinerary) => ({
    url: `${siteConfig.url}/itinerary/${itinerary.slug}`,
    lastModified: new Date("2026-03-26"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guideEntries = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: new Date(guide.lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...toolEntries, ...itineraryEntries, ...guideEntries];
}
