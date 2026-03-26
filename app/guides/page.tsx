import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Japan Travel Guides",
  description:
    "Practical Japan travel guides — best time to visit, where to stay in Tokyo and Osaka, and more. Written from real trip experience.",
  alternates: { canonical: "https://japantoolkit.com/guides" },
  openGraph: {
    title: "Japan Travel Guides | Japan Toolkit",
    description:
      "Practical Japan travel guides — best time to visit, where to stay in Tokyo and Osaka, and more. Written from real trip experience.",
    url: "https://japantoolkit.com/guides",
    images: [{ url: "https://japantoolkit.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const guides = [
  {
    href: "/guides/best-time-to-visit-japan",
    title: "Best time to visit Japan",
    description: "Season-by-season breakdown with cherry blossom timings, typhoon info, and a month-by-month quick reference.",
    detail: "Covers Spring, Summer, Autumn, Winter · Cherry blossom city guide · Month-by-month table",
  },
  {
    href: "/guides/where-to-stay-in-tokyo",
    title: "Where to stay in Tokyo",
    description: "7 Tokyo neighbourhoods compared — Shinjuku, Shibuya, Asakusa, Akihabara, Ginza, Ueno, and Harajuku.",
    detail: "Vibe, budget range, transport rating · Stay here / skip if for each area",
  },
  {
    href: "/guides/where-to-stay-in-osaka",
    title: "Where to stay in Osaka",
    description: "5 Osaka neighbourhoods compared — Namba, Shinsaibashi, Umeda, Shin-Osaka, and Tennoji.",
    detail: "Budget ranges, transport access · Best areas for food, nightlife, and day trips",
  },
  {
    href: "/guides/cash-and-currency-in-japan",
    title: "Cash & currency in Japan",
    description: "Where to get yen, how 7-Eleven ATMs work, when cards are accepted, and how IC cards like Suica save time.",
    detail: "ATM guide · IC cards · Credit card tips · Tipping rules",
  },
  {
    href: "/guides/japan-trip-checklist",
    title: "Japan trip checklist",
    description: "A comprehensive pre-trip checklist — visas, money, transport cards, phone data, packing, and day-1 logistics.",
    detail: "6 checklist sections · Free printable PDF · Day-1 prep guide",
  },
  {
    href: "/guides/ic-card-japan",
    title: "IC cards in Japan",
    description: "Suica vs Pasmo vs ICOCA — which one to get, how to top up, deposit rules, and Mobile Suica on iPhone.",
    detail: "Card comparison table · Mobile Suica setup · Where it works / doesn't",
  },
  {
    href: "/guides/japan-food-guide",
    title: "Japan food guide",
    description: "Must-eat dishes across Tokyo and Osaka, halal dining options, food budget tiers, and a Japanese vocabulary card.",
    detail: "14 essential dishes · Tokyo & Osaka spots · Halal section · Budget guide",
  },
];

export default function GuidesHubPage() {
  return (
    <div className="space-y-10 py-10">
      <section className="space-y-4">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Guides Hub</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Japan travel guides</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          Practical, no-fluff guides written from real travel experience. Use these alongside the planning tools to build a trip that suits your style, timing, and budget.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {guides.map((guide) => (
          <Card key={guide.href} className="border-stone-200 bg-white/85 shadow-sm">
            <CardHeader>
              <CardTitle>{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-stone-600">{guide.detail}</p>
              <Button asChild variant="outline" className="border-stone-300 bg-white">
                <Link href={guide.href}>Read guide</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
