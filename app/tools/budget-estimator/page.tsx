import type { Metadata } from "next";

import { BudgetEstimator } from "@/components/budget-estimator";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Japan Travel Budget Estimator — Plan Your Trip Costs",
  description:
    "Estimate your Japan trip budget by travel style. Set accommodation type, food spending, transport, activities, and shopping to get a realistic cost range in yen and USD.",
  alternates: {
    canonical: "https://japantoolkit.cepathosting.com/tools/budget-estimator",
  },
  openGraph: {
    title: "Japan Travel Budget Estimator — Plan Your Trip Costs",
    description:
      "Estimate your Japan trip budget by travel style. Set accommodation type, food spending, transport, activities, and shopping to get a realistic cost range in yen and USD.",
    url: "https://japantoolkit.cepathosting.com/tools/budget-estimator",
    images: [{ url: "https://japantoolkit.cepathosting.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to estimate your Japan trip budget",
  description:
    "Select your trip length, number of travelers, accommodation style, food habits, transport needs, and shopping budget to get a realistic cost estimate.",
  step: [
    {
      "@type": "HowToStep",
      name: "Set trip length and travelers",
      text: "Choose how many days you are traveling and how many people are in your group.",
    },
    {
      "@type": "HowToStep",
      name: "Select spending style per category",
      text: "Pick your accommodation type, food style, transport pattern, activities level, and shopping budget.",
    },
    {
      "@type": "HowToStep",
      name: "Read the estimate",
      text: "The calculator shows a total range in yen and USD, broken down by category, with practical notes for your selections.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.cepathosting.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://japantoolkit.cepathosting.com/tools" },
    { "@type": "ListItem", position: 3, name: "Budget Estimator", item: "https://japantoolkit.cepathosting.com/tools/budget-estimator" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a trip to Japan cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A budget traveler spending 10 days in Japan can expect to spend around ¥100,000–¥150,000 (~$700–$1,000 USD) per person, excluding flights. A mid-range trip with business hotels and sit-down restaurants typically runs ¥200,000–¥350,000 (~$1,300–$2,300). Upscale trips with ryokan stays and omakase dining can exceed ¥600,000 per person for the same duration.",
      },
    },
    {
      "@type": "Question",
      name: "Is Japan expensive for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japan is moderately priced compared to Western Europe. Food is very affordable — a satisfying ramen lunch costs ¥900–¥1,200 (~$6–$8). Accommodation ranges from ¥3,000 capsule hotels to ¥50,000+ ryokan. The biggest variable is intercity transport: long-distance shinkansen tickets are expensive unless you cover multiple cities and use a JR Pass.",
      },
    },
    {
      "@type": "Question",
      name: "Should I budget in yen or USD for Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Budget in yen first, then convert. Japanese prices are quoted in yen, and the exchange rate fluctuates. As of 2026, ¥1 is roughly $0.0065 USD (about ¥150 per $1). Cash is widely used in Japan — have yen on hand. 7-Eleven and Japan Post ATMs reliably accept foreign cards.",
      },
    },
  ],
};

export default function BudgetEstimatorPage() {
  return (
    <div className="space-y-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="space-y-4">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Tool</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Japan budget estimator</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          Pick your travel style across accommodation, food, transport, activities, and shopping to get a realistic
          cost range for your trip — in both yen and USD.
        </p>
        <p className="text-xs text-stone-400 mt-1">By Amir · Last reviewed: March 2026</p>
      </section>

      <BudgetEstimator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">Common questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How much does a trip to Japan cost?",
              a: "A budget 10-day trip runs around ¥100,000–¥150,000 per person (~$700–$1,000) excluding flights. Mid-range with business hotels and restaurant dinners: ¥200,000–¥350,000. Ryokan stays and omakase dining can push well past ¥600,000.",
            },
            {
              q: "Is Japan expensive for tourists?",
              a: "Food is affordable — a ramen lunch is ¥900–¥1,200. Accommodation and intercity transport are the biggest variables. Budget carefully for shinkansen legs if you're visiting multiple cities.",
            },
            {
              q: "Should I budget in yen or USD?",
              a: "Budget in yen first. As of 2026, roughly ¥150 per $1 USD. Carry cash — 7-Eleven and Japan Post ATMs accept most foreign cards reliably.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-stone-200 bg-white/85 p-5">
              <p className="font-semibold text-stone-900">{q}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
