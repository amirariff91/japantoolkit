export type ToolSummary = {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  featured?: boolean;
  status?: "live" | "coming-soon";
};

export type Highlight = {
  label: string;
  value: string;
};

export type SampleDay = {
  title: string;
  city: string;
  summary: string;
};

export type Itinerary = {
  slug: string;
  title: string;
  intro: string;
  duration: string;
  type: string;
  cities: string;
  season: string;
  budget: string;
  cardDescription: string;
  highlights: Highlight[];
  sampleDays: SampleDay[];
};

export const tools: ToolSummary[] = [
  {
    href: "/tools/rail-pass-calculator",
    title: "Japan Rail Pass Calculator",
    description:
      "Price out your long-distance routes, compare them against current pass prices, and see if a JR Pass actually saves money.",
    eyebrow: "Cost planning",
    featured: true,
    status: "live",
  },
  {
    href: "/tools/esim-vs-pocket-wifi",
    title: "eSIM vs Pocket WiFi",
    description:
      "Choose the right connectivity setup based on battery life, setup friction, group travel, and real-world convenience.",
    eyebrow: "Connectivity",
    featured: true,
    status: "live",
  },
  {
    href: "#",
    title: "Japan Budget Estimator",
    description:
      "Estimate accommodation, transport, food, and attraction costs before you book a single thing.",
    eyebrow: "Coming soon",
    status: "coming-soon",
  },
];

export const itineraries: Itinerary[] = [
  {
    slug: "7-days-first-time",
    title: "7-Day Japan Itinerary for First-Timers",
    intro:
      "This route keeps your first Japan trip tight and efficient: Tokyo for energy, Kyoto for culture, and Osaka for food and easy airport access.",
    duration: "7 days",
    type: "First-time",
    cities: "Tokyo, Kyoto, Osaka",
    season: "Spring and autumn",
    budget: "Mid-range",
    cardDescription:
      "A smart first loop through Tokyo, Kyoto, and Osaka without overstuffing the week.",
    highlights: [
      { label: "Highlights", value: "Shibuya, Fushimi Inari, Dotonbori" },
      { label: "Cities", value: "Tokyo, Kyoto, Osaka" },
      { label: "Budget range", value: "¥140,000 to ¥220,000" },
      { label: "Best season", value: "March to May, October to November" },
    ],
    sampleDays: [
      {
        title: "Day 1",
        city: "Tokyo",
        summary:
          "Arrive, settle into Shinjuku or Ueno, then spend the evening around Shibuya Crossing and an izakaya backstreet.",
      },
      {
        title: "Day 2",
        city: "Tokyo",
        summary:
          "Start at Senso-ji, browse Kappabashi or Akihabara, and finish with skyline views from Shibuya Sky.",
      },
      {
        title: "Day 3",
        city: "Kyoto",
        summary:
          "Take an early shinkansen to Kyoto for Fushimi Inari, Higashiyama lanes, and a quiet dinner near Gion.",
      },
    ],
  },
  {
    slug: "7-days-anime",
    title: "7-Day Japan Itinerary for Anime Fans",
    intro:
      "Built for travellers who want arcades, merch floors, themed cafes, and a few classic sights without turning the trip into a shopping marathon.",
    duration: "7 days",
    type: "Anime",
    cities: "Tokyo, Yokohama, Kyoto",
    season: "Year-round",
    budget: "Flexible",
    cardDescription:
      "Akihabara, Ikebukuro, Nakano, and a few calmer stops so the week still feels like travel.",
    highlights: [
      { label: "Highlights", value: "Akihabara, Ikebukuro, Gundam Base" },
      { label: "Cities", value: "Tokyo, Yokohama, Kyoto" },
      { label: "Budget range", value: "¥150,000 to ¥250,000" },
      { label: "Best season", value: "Any season outside Golden Week" },
    ],
    sampleDays: [
      {
        title: "Day 1",
        city: "Tokyo",
        summary:
          "Base in Ueno or Akihabara, then dive into figure shops, retro arcades, and late-night ramen in Kanda.",
      },
      {
        title: "Day 2",
        city: "Tokyo",
        summary:
          "Spend the morning in Ikebukuro, stop by Nakano Broadway in the afternoon, and book a themed dinner in advance.",
      },
      {
        title: "Day 3",
        city: "Yokohama",
        summary:
          "Do a day trip for Gundam Base, Minato Mirai, and a quieter bayfront evening before heading back to Tokyo.",
      },
    ],
  },
  {
    slug: "14-days-classic",
    title: "14-Day Classic Japan Itinerary",
    intro:
      "Two weeks gives you room to see Japan’s biggest hits without constantly dragging luggage across the country.",
    duration: "14 days",
    type: "Classic",
    cities: "Tokyo, Hakone, Kyoto, Osaka, Hiroshima",
    season: "Spring and autumn",
    budget: "Mid to upper-mid",
    cardDescription:
      "A balanced nationwide route with city energy, onsen downtime, and one strong western Japan stop.",
    highlights: [
      { label: "Highlights", value: "Tokyo, Hakone onsen, Miyajima" },
      { label: "Cities", value: "Tokyo to Hiroshima" },
      { label: "Budget range", value: "¥260,000 to ¥420,000" },
      { label: "Best season", value: "Cherry blossom and fall foliage periods" },
    ],
    sampleDays: [
      {
        title: "Day 1",
        city: "Tokyo",
        summary:
          "Ease into the trip with Asakusa, Tokyo Station, and a simple dinner close to your hotel to beat jet lag.",
      },
      {
        title: "Day 2",
        city: "Tokyo",
        summary:
          "Mix Meiji Jingu, Harajuku, and Omotesando with an evening reservation in Shinjuku or Ebisu.",
      },
      {
        title: "Day 3",
        city: "Hakone",
        summary:
          "Transfer to Hakone for an onsen ryokan, lake views, and a deliberate slower pace before Kyoto.",
      },
    ],
  },
  {
    slug: "21-days-slow-travel",
    title: "21-Day Slow Travel Japan Itinerary",
    intro:
      "This is for travellers who want depth over checklists: longer stays, neighborhood mornings, and enough slack to follow weather or energy levels.",
    duration: "21 days",
    type: "Slow travel",
    cities: "Tokyo, Kanazawa, Kyoto, Osaka, Hiroshima, Fukuoka",
    season: "Shoulder seasons",
    budget: "Mid-range",
    cardDescription:
      "Longer bases, fewer hotel changes, and time for everyday Japan between headline sights.",
    highlights: [
      { label: "Highlights", value: "Neighborhood stays, ryokan night, regional food" },
      { label: "Cities", value: "Tokyo to Fukuoka" },
      { label: "Budget range", value: "¥360,000 to ¥560,000" },
      { label: "Best season", value: "April, May, October, November" },
    ],
    sampleDays: [
      {
        title: "Day 1",
        city: "Tokyo",
        summary:
          "Arrive with no hard agenda beyond a local walk, convenience store essentials, and an early night.",
      },
      {
        title: "Day 2",
        city: "Tokyo",
        summary:
          "Use the second day for slow neighborhoods like Yanaka and Kiyosumi Shirakawa instead of major attractions.",
      },
      {
        title: "Day 3",
        city: "Tokyo",
        summary:
          "Keep a half-day free for laundry, shopping, or a museum, then map the next regional transfer with less pressure.",
      },
    ],
  },
  {
    slug: "7-days-family",
    title: "7-Day Japan Itinerary for Families",
    intro:
      "Designed for parents who need short transfer days, reliable meal options, and attractions that keep both adults and kids engaged.",
    duration: "7 days",
    type: "Family",
    cities: "Tokyo, Kyoto, Osaka",
    season: "School holidays",
    budget: "Mid-range",
    cardDescription:
      "Family-friendly pacing with practical train transfers and enough structure to reduce decision fatigue.",
    highlights: [
      { label: "Highlights", value: "Ueno, Kyoto Railway Museum, Osaka Aquarium" },
      { label: "Cities", value: "Tokyo, Kyoto, Osaka" },
      { label: "Budget range", value: "¥180,000 to ¥300,000 plus flights" },
      { label: "Best season", value: "Late spring, early summer, autumn" },
    ],
    sampleDays: [
      {
        title: "Day 1",
        city: "Tokyo",
        summary:
          "Stay near a major station, keep the first day local, and use Ueno Park for an easy outdoor reset after arrival.",
      },
      {
        title: "Day 2",
        city: "Tokyo",
        summary:
          "Combine teamLab Planets or Odaiba with plenty of snack and bathroom breaks built into the route.",
      },
      {
        title: "Day 3",
        city: "Kyoto",
        summary:
          "Move to Kyoto before lunch, visit the Railway Museum, and keep the evening simple near Kyoto Station.",
      },
    ],
  },
  {
    slug: "14-days-budget",
    title: "14-Day Budget Japan Itinerary",
    intro:
      "For travellers stretching two weeks in Japan without turning the trip into a constant compromise on convenience.",
    duration: "14 days",
    type: "Budget",
    cities: "Tokyo, Kyoto, Osaka, Nara, Hiroshima",
    season: "Low to shoulder season",
    budget: "Budget",
    cardDescription:
      "Prioritises efficient routes, lower nightly costs, and food strategies that keep spending under control.",
    highlights: [
      { label: "Highlights", value: "Hostel-friendly bases, cheap eats, day trips" },
      { label: "Cities", value: "Tokyo, Kansai, Hiroshima" },
      { label: "Budget range", value: "¥170,000 to ¥270,000" },
      { label: "Best season", value: "January, February, June, November" },
    ],
    sampleDays: [
      {
        title: "Day 1",
        city: "Tokyo",
        summary:
          "Choose an efficient budget base in Asakusa or Ueno and focus on free city views, shrines, and casual chain meals.",
      },
      {
        title: "Day 2",
        city: "Tokyo",
        summary:
          "Use local transit day planning, convenience store breakfasts, and one paid attraction instead of stacking admissions.",
      },
      {
        title: "Day 3",
        city: "Kyoto",
        summary:
          "Transfer west with luggage forwarding or light packs, then spend the afternoon on low-cost temple and river walks.",
      },
    ],
  },
];

export const itinerarySlugs = itineraries.map(({ slug }) => ({ slug }));

export const fareMatrix: Record<string, number> = {
  "Tokyo-Osaka": 13870,
  "Osaka-Tokyo": 13870,
  "Tokyo-Kyoto": 13320,
  "Kyoto-Tokyo": 13320,
  "Kyoto-Osaka": 2850,
  "Osaka-Kyoto": 2850,
  "Osaka-Hiroshima": 11220,
  "Hiroshima-Osaka": 11220,
  "Tokyo-Hiroshima": 19440,
  "Hiroshima-Tokyo": 19440,
  "Tokyo-Fukuoka": 22950,
  "Fukuoka-Tokyo": 22950,
};

export const passPrices = {
  "7-day": 50000,
  "14-day": 80000,
  "21-day": 100000,
} as const;

export type PassType = keyof typeof passPrices;
