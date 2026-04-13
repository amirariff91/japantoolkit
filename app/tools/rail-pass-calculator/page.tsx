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
    {
      "@type": "Question",
      name: "Should I buy the JR Pass or individual train tickets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buy individual tickets if your trip is mostly within one region (e.g., just Tokyo and nearby day trips). Buy the JR Pass if you are making 3+ long-distance shinkansen trips across different cities in a week, such as Tokyo → Kyoto → Hiroshima → Tokyo.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the JR Pass on the Nozomi bullet train?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The JR Pass does not cover Nozomi trains on the Tokaido and Sanyo Shinkansen, or Mizuho trains on the Sanyo Shinkansen. You must take Hikari (Tokaido), Sakura (Sanyo), or other non-express shinkansen instead. The Nozomi saves about 30 minutes per leg but is not covered.",
      },
    },
    {
      "@type": "Question",
      name: "Is the JR Pass valid on all trains in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The JR Pass covers JR (Japan Railways) trains only. It does not cover private railways like the Keio Line, Odakyu Line, Hankyu, Kintetsu, or subway lines in Tokyo, Osaka, and Kyoto. It also does not cover most bus companies outside JR.",
      },
    },
    {
      "@type": "Question",
      name: "Can tourists buy the JR Pass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but only foreign tourists visiting Japan as temporary visitors (tourist visa status). Japanese citizens or residents are not eligible for the tourist JR Pass. You must purchase an Exchange Order (voucher) from an authorised reseller before arriving in Japan, then exchange it for the actual pass at a JR office in Japan.",
      },
    },
    {
      "@type": "Question",
      name: "How do I activate the JR Pass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Present your Exchange Order and passport at a JR Pass exchange office (usually found at major airports and train stations like Tokyo Station, Kyoto Station). The JR staff will activate your pass and you will choose a start date within 30 days of exchange. The pass is valid from the start date you choose.",
      },
    },
    {
      "@type": "Question",
      name: "Is a 7-day JR Pass enough for Tokyo, Kyoto, and Osaka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a Tokyo → Kyoto → Osaka → Tokyo triangle with one Shinkansen leg each way, individual tickets are usually cheaper than a 7-day JR Pass. The pass only pays off if you add at least one more long leg (like Hiroshima, Nagano, or a return trip to Tokyo from Kansai).",
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
            {
              q: "Should I buy the JR Pass or individual tickets?",
              a: "Buy individual tickets if your trip is mostly within one region (e.g., just Tokyo and nearby day trips). Buy the JR Pass if you are making 3+ long-distance shinkansen trips across different cities in a week.",
            },
            {
              q: "Can I use the JR Pass on the Nozomi bullet train?",
              a: "No. The JR Pass does not cover Nozomi (Tokaido/Sanyo) or Mizuho (Sanyo) trains. You must take Hikari or Sakura instead. The Nozomi saves ~30 minutes per leg but is not covered.",
            },
            {
              q: "Is the JR Pass valid on all trains in Japan?",
              a: "No. It covers JR trains only. Private railways (Keio, Odakyu, Hankyu, Kintetsu) and subway lines in Tokyo, Osaka, and Kyoto are not included. Neither are most non-JR bus companies.",
            },
            {
              q: "Can tourists buy the JR Pass?",
              a: "Only foreign tourists on temporary visitor status. Japanese citizens and residents are not eligible. Purchase an Exchange Order from an authorised reseller before arriving in Japan, then exchange it at a JR office.",
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
