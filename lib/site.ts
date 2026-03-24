import { itineraryList } from "@/lib/itineraries";

export const siteConfig = {
  name: "Japan Toolkit",
  url: "https://japantoolkit.com",
  description:
    "Practical Japan travel planning tools and itinerary templates for rail passes, connectivity choices, and trip routing.",
};

export const tools = [
  {
    title: "JR Rail Pass Calculator",
    description: "Add long-distance routes and see if the 7-day nationwide pass clears a simple break-even check.",
    detail: "Useful for travelers comparing expensive shinkansen segments inside one tight travel window.",
    href: "/tools/rail-pass-calculator",
    icon: "calculator" as const,
    cta: "Calculate now",
    comingSoon: false,
  },
  {
    title: "eSIM vs Pocket Wi-Fi",
    description: "Compare setup, sharing, battery tradeoffs, and use a quick quiz to choose the better fit.",
    detail: "Best for arrival-day planning, family trips, and deciding how many devices need data.",
    href: "/tools/esim-vs-pocket-wifi",
    icon: "smartphone" as const,
    cta: "Compare options",
    comingSoon: false,
  },
  {
    title: "Budget Estimator",
    description: "Set your accommodation, food, transport, and shopping style to get a realistic trip cost range in yen and USD.",
    detail: "Covers 5 spending categories with tiered options — from capsule hostels to ryokan, konbini meals to omakase.",
    href: "/tools/budget-estimator",
    icon: "map" as const,
    cta: "Estimate budget",
    comingSoon: false,
  },
];

export { itineraryList };

export const itinerarySlugs = itineraryList.map((item) => item.slug);
