import type { MetadataRoute } from "next";

import { itineraryList, siteConfig, tools } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/tools", "/itinerary"];
  const toolRoutes = tools.map((tool) => tool.href);
  const itineraryRoutes = itineraryList.map((itinerary) => `/itinerary/${itinerary.slug}`);

  return [...staticRoutes, ...toolRoutes, ...itineraryRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("/tools/") || route.includes("/itinerary/") ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
