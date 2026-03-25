import type { MetadataRoute } from "next";

import { itineraryList, siteConfig, tools } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/tools", "/itinerary", "/guides", "/about", "/contact", "/privacy"];
  const toolRoutes = tools.map((tool) => tool.href);
  const itineraryRoutes = itineraryList.map((itinerary) => `/itinerary/${itinerary.slug}`);
  const guideRoutes = [
    "/guides/best-time-to-visit-japan",
    "/guides/where-to-stay-in-tokyo",
    "/guides/where-to-stay-in-osaka",
  ];

  return [...staticRoutes, ...toolRoutes, ...itineraryRoutes, ...guideRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("/tools/") || route.includes("/itinerary/") ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
