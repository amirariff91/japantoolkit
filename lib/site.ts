import { itineraryList } from "@/lib/itineraries";

export const siteConfig = {
  name: "Japan Toolkit",
  url: "https://japan-toolkit.example.com",
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
  },
  {
    title: "eSIM vs Pocket Wi-Fi",
    description: "Compare setup, sharing, battery tradeoffs, and use a quick quiz to choose the better fit.",
    detail: "Best for arrival-day planning, family trips, and deciding how many devices need data.",
    href: "/tools/esim-vs-pocket-wifi",
    icon: "smartphone" as const,
  },
  {
    title: "Budget Estimator",
    description: "A placeholder for the next tool in the stack, covering hotels, food, transit, and attraction spend.",
    detail: "This page is live as a coming-soon entry so the tools hub stays aligned with the product roadmap.",
    href: "/tools/budget-estimator",
    icon: "map" as const,
  },
];

export { itineraryList };

export const itinerarySlugs = itineraryList.map((item) => item.slug);
