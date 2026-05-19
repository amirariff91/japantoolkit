import type { Metadata } from "next";

import { RailPassCalculator } from "@/components/rail-pass-calculator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "JR Pass Calculator — Is the Japan Rail Pass Worth It?",
  description:
    "Use this free JR Pass calculator to see if the Japan Rail Pass saves you money. Add your shinkansen routes and compare the total against the current pass price.",
  alternates: {
    canonical: "https://japantoolkit.cepathosting.com/tools/rail-pass-calculator",
  },
  openGraph: {
    title: "JR Pass Calculator — Is the Japan Rail Pass Worth It?",
    description:
      "Use this free JR Pass calculator to see if the Japan Rail Pass saves you money. Add your shinkansen routes and compare the total against the current pass price.",
    url: "https://japantoolkit.cepathosting.com/tools/rail-pass-calculator",
    images: [{ url: "https://japantoolkit.cepathosting.com/opengraph-image", width: 1200, height: 630 }],
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.cepathosting.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://japantoolkit.cepathosting.com/tools" },
    { "@type": "ListItem", position: 3, name: "JR Pass Calculator", item: "https://japantoolkit.cepathosting.com/tools/rail-pass-calculator" },
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
        text: "The JR Pass is worth it if your long-distance shinkansen costs exceed the pass price within the active pass window. It usually needs more than a simple Tokyo, Kyoto, and Osaka loop to pay off.",
      },
    },
    {
      "@type": "Question",
      name: "Should I buy the JR Pass or individual train tickets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buy individual tickets if your trip is mostly within one region or only uses one return shinkansen route. Consider the JR Pass when you stack several long-distance JR rides in a short window, such as Tokyo to Kyoto to Hiroshima and back east.",
      },
    },
    {
      "@type": "Question",
      name: "Which trains are not fully covered by the JR Pass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Nozomi and Mizuho shinkansen require a supplement even with a JR Pass. Private railways, local subways, most non-JR buses, and many airport or city transit options are also outside the nationwide pass.",
      },
    },
    {
      "@type": "Question",
      name: "How do I activate the JR Pass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exchange your voucher or online order with your passport at a JR exchange office, then choose the pass start date. The pass validity begins on the start date you select.",
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
        <p className="text-xs text-stone-400 mt-1">By Amir · Last reviewed: March 2026</p>
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
              q: "Which Shinkansen are covered, and can I use it on the Nozomi?",
              a: "Most Shinkansen lines are covered by the JR Pass — but the Nozomi (Tokaido/Sanyo) and Mizuho (Sanyo) require a separate supplement ticket even with an active pass. Use Hikari or Sakura trains at no extra cost. Regional trains, subways, and private railways are not covered.",
            },
            {
              q: "What routes does the JR Pass cover?",
              a: "All JR-operated trains nationwide: most Shinkansen, JR local and rapid trains, JR buses on selected routes, and the JR ferry to Miyajima. Private railways and subway lines are not covered.",
            },
            {
              q: "How much does the JR Pass cost?",
              a: "The 7-day ordinary pass is around ¥50,000 (~USD 330). The 14-day is ~¥80,000 and the 21-day is ~¥100,000. Check the official JR site or authorized resellers for current pricing.",
            },
            {
              q: "Should I buy the JR Pass or individual tickets?",
              a: "Buy individual tickets if your trip is mostly within one region (e.g., just Tokyo and nearby day trips). Buy the JR Pass if you are making 3+ long-distance shinkansen trips across different cities in a week.",
            },
            {
              q: "Is the JR Pass valid on all trains in Japan?",
              a: "No. It covers JR trains only. Private railways (Keio, Odakyu, Hankyu, Kintetsu) and subway lines in Tokyo, Osaka, and Kyoto are not included. Neither are most non-JR bus companies.",
            },
            {
              q: "Can tourists buy the JR Pass?",
              a: "Only foreign tourists visiting Japan as temporary visitors are eligible. You can purchase an Exchange Order from an authorised reseller online before you travel, or buy directly through the official JR online shop (with some limitations). Exchange your voucher at a JR office at the airport or in major stations.",
            },
            {
              q: "Can I buy a JR Pass after I arrive in Japan?",
              a: "Yes. You can purchase a JR Pass after arrival in Japan through the official JR online shop (with a valid credit card and passport), or buy an Exchange Order from resellers within Japan and exchange it at a JR office. Note: prices may differ from overseas rates and some resellers charge more for in-Japan purchase.",
            },
            {
              q: "How do I activate the JR Pass?",
              a: "Present your Exchange Order and passport at a JR exchange office (major airports and stations like Tokyo/Kyoto Station). Choose your start date within 30 days — the pass is valid from that date.",
            },
            {
              q: "Is a 7-day pass enough for Tokyo, Kyoto, and Osaka?",
              a: "For a Tokyo → Kyoto → Osaka → Tokyo triangle, individual tickets are usually cheaper. The JR Pass only pays off if you add at least one more long leg like Hiroshima or Nagano.",
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
