import type { Metadata } from "next";

import { RailPassCalculator } from "@/components/rail-pass-calculator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "JR Pass Calculator — Is the Japan Rail Pass Worth It?",
  description:
    "Use this free JR Pass calculator to see if the Japan Rail Pass saves you money. Add your shinkansen routes and compare the total against the current pass price.",
  alternates: {
    canonical: "https://japantoolkit.com/tools/rail-pass-calculator",
  },
  openGraph: {
    title: "JR Pass Calculator — Is the Japan Rail Pass Worth It?",
    description:
      "Use this free JR Pass calculator to see if the Japan Rail Pass saves you money. Add your shinkansen routes and compare the total against the current pass price.",
    url: "https://japantoolkit.com/tools/rail-pass-calculator",
    images: [{ url: "https://japantoolkit.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to decide if the JR Pass is worth it",
  description:
    "Add your long-distance shinkansen routes, include any extra paid segments, and compare the total against the 7-day JR Pass price.",
  step: [
    {
      "@type": "HowToStep",
      name: "Select your routes",
      text: "Choose the shinkansen routes you expect to ride during the 7-day pass window.",
    },
    {
      "@type": "HowToStep",
      name: "Add extra paid segments",
      text: "Enter any extra long-distance trips not listed in the presets and include how many travelers are riding.",
    },
    {
      "@type": "HowToStep",
      name: "Compare against the pass",
      text: "If your total shinkansen spend is higher than the pass cost, the calculator marks the pass as worth it.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://japantoolkit.com/tools" },
    { "@type": "ListItem", position: 3, name: "JR Pass Calculator", item: "https://japantoolkit.com/tools/rail-pass-calculator" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the JR Pass worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The JR Pass is worth it if your long-distance shinkansen costs exceed the pass price within the 7-day validity window. It typically pays off for routes like Tokyo → Kyoto → Hiroshima or multi-city trips across Honshu.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the JR Pass on the Shinkansen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The nationwide JR Pass covers most Shinkansen lines including Tokaido, Sanyo, Tohoku, and Hokuriku. The Nozomi and Mizuho express services on the Tokaido and Sanyo Shinkansen are excluded — you must take Hikari or Sakura trains instead.",
      },
    },
    {
      "@type": "Question",
      name: "What routes does the JR Pass cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The JR Pass covers all JR-operated trains nationwide including most Shinkansen, JR local and rapid trains, JR buses on selected routes, and the JR ferry to Miyajima. It does not cover private railways, subway lines, or non-JR buses.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the JR Pass cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 7-day ordinary JR Pass currently costs around ¥50,000 (approximately USD 330). The 14-day pass is around ¥80,000 and the 21-day pass around ¥100,000. Check the official JR website or your country's authorized reseller for the latest pricing.",
      },
    },
  ],
};

export default function RailPassCalculatorPage() {
  return (
    <div className="space-y-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="space-y-4">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Tool</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">JR rail pass calculator</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          The nationwide JR Pass only makes sense for a narrow set of trips. Use this calculator to total the long
          shinkansen legs on your route and compare them against the current 7-day pass price.
        </p>
      </section>

      <RailPassCalculator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">Common questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is the JR Pass worth it?",
              a: "The JR Pass is worth it if your shinkansen costs exceed the pass price within the 7-day window. It typically pays off for multi-city routes like Tokyo → Kyoto → Hiroshima.",
            },
            {
              q: "Can I use the JR Pass on the Shinkansen?",
              a: "Yes — most Shinkansen lines are covered. The Nozomi and Mizuho express services are excluded. Use Hikari or Sakura trains instead.",
            },
            {
              q: "What routes does the JR Pass cover?",
              a: "All JR-operated trains nationwide: most Shinkansen, JR local and rapid trains, JR buses on selected routes, and the JR ferry to Miyajima. Private railways and subway lines are not covered.",
            },
            {
              q: "How much does the JR Pass cost?",
              a: "The 7-day ordinary pass is around ¥50,000 (~USD 330). The 14-day is ~¥80,000 and the 21-day is ~¥100,000. Check the official JR site or authorized resellers for current pricing.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-stone-200 bg-white/85 p-5">
              <p className="font-semibold text-stone-900">{q}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Best use case</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-stone-600">
            Travelers stacking multiple expensive intercity rides in one week, such as Tokyo to Kyoto to Hiroshima and
            back toward eastern Japan.
          </CardContent>
        </Card>
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Often not worth it</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-stone-600">
            Short city breaks focused on Tokyo, Kyoto, and Osaka where local transit and one return shinkansen ticket
            are cheaper than a nationwide pass.
          </CardContent>
        </Card>
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Planning note</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-stone-600">
            This tool is a quick screen, not a fare engine. Seat class, seasonal surcharges, and regional passes can
            change the exact math.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
