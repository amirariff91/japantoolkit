import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Where to Stay in Osaka: Neighbourhood Guide",
  description:
    "Find the best neighbourhood to stay in Osaka. Namba, Shinsaibashi, Umeda, Shin-Osaka, and Tennoji compared — vibes, prices, and who each area suits.",
  alternates: { canonical: "https://japantoolkit.com/guides/where-to-stay-in-osaka" },
  openGraph: {
    title: "Where to Stay in Osaka: Neighbourhood Guide | Japan Toolkit",
    description:
      "Find the best neighbourhood to stay in Osaka. Namba, Shinsaibashi, Umeda, Shin-Osaka, and Tennoji compared — vibes, prices, and who each area suits.",
    url: "https://japantoolkit.com/guides/where-to-stay-in-osaka",
    images: [{ url: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80", width: 1200, height: 630 }],
  },
};

const neighbourhoods = [
  {
    name: "Namba",
    vibe: "The epicentre of Osaka — Dotonbori canal, takoyaki stands, and neon signs in every direction.",
    bestFor: ["Food lovers", "First-timers", "Nightlife"],
    budget: "¥5,000 – ¥22,000",
    transport: "★★★★★",
    stayIf: "You want to walk to Dotonbori, street food, and late-night konbini without a train.",
    skipIf: "You're a light sleeper — Namba gets loud well past midnight.",
  },
  {
    name: "Shinsaibashi",
    vibe: "Shopping arcade meets nightlife strip — America-mura for vintage, Shinsaibashi-suji for mainstream.",
    bestFor: ["Nightlife", "Shopping", "Young travellers"],
    budget: "¥6,000 – ¥25,000",
    transport: "★★★★★",
    stayIf: "You want Namba energy but a slightly calmer base.",
    skipIf: "You need budget accommodation — hotels here skew mid and above.",
  },
  {
    name: "Umeda",
    vibe: "Osaka's business and transit hub — Osaka Station, department store labyrinths, and a rooftop skyline view at the Floating Garden Observatory.",
    bestFor: ["Business travel", "Transit hub", "Shopping"],
    budget: "¥6,500 – ¥30,000",
    transport: "★★★★★",
    stayIf: "You're taking day trips to Kyoto or Kobe and want fast JR access, with Shin-Osaka one stop north for the Shinkansen.",
    skipIf: "You want to be near Dotonbori — it's 2 metro stops south (quick, but not walking distance).",
  },
  {
    name: "Shin-Osaka",
    vibe: "Shinkansen gateway — practical rather than pretty, but excellent value and a 5-minute bullet train hop to Kyoto.",
    bestFor: ["Budget", "Day trippers", "Business travel"],
    budget: "¥4,000 – ¥14,000",
    transport: "★★★★☆",
    stayIf: "You're using Osaka as a base for day trips to Kyoto, Hiroshima, or Nara.",
    skipIf: "You want to experience Osaka's food and nightlife scene — it's a metro ride away.",
  },
  {
    name: "Tennoji",
    vibe: "Underrated local neighbourhood — Tennoji Zoo, Shinsekai retro food district, and Abeno Harukas (Japan's tallest building at 300m).",
    bestFor: ["Budget", "Local feel", "Off the beaten path"],
    budget: "¥3,500 – ¥13,000",
    transport: "★★★★☆",
    stayIf: "You want an authentic neighbourhood feel and great value for money.",
    skipIf: "You're only visiting Osaka's tourist highlights — Namba is closer for most of them.",
  },
];

// TODO: Replace AFFILIATE_ID_HERE with real Klook affiliate ID before going live
const klookCTAs = [
  {
    label: "Osaka Amazing Pass (1 or 2 day)",
    desc: "Unlimited subway + free entry to 40+ attractions including the Floating Garden Observatory.",
    href: "https://www.klook.com/activity/3201-osaka-amazing-pass/?aid=AFFILIATE_ID_HERE",
  },
  {
    label: "Dotonbori Night Food Tour",
    desc: "3-hour guided street food walk — takoyaki, okonomiyaki, and sake in Namba.",
    href: "https://www.klook.com/activity/48327-dotonbori-night-food-tour-osaka/?aid=AFFILIATE_ID_HERE",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Where to Stay in Osaka: Neighbourhood Guide",
  description:
    "Find the best neighbourhood to stay in Osaka. Namba, Shinsaibashi, Umeda, Shin-Osaka, and Tennoji compared — vibes, prices, and who each area suits.",
  image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80",
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: { "@type": "Organization", name: "Japan Toolkit", url: "https://japantoolkit.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.com/guides/where-to-stay-in-osaka" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.com/guides" },
    { "@type": "ListItem", position: 3, name: "Where to Stay in Osaka", item: "https://japantoolkit.com/guides/where-to-stay-in-osaka" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which area of Osaka is best for food and nightlife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Namba is the best base for food and nightlife — Dotonbori, street food stalls, and late-night bars are all walkable from hotels in the area.",
      },
    },
    {
      "@type": "Question",
      name: "Is Shin-Osaka a good base for day trips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Shin-Osaka Station is a Shinkansen stop, putting Kyoto at 15 minutes and Hiroshima at 90 minutes. It's ideal if you're using Osaka as a hub for wider Kansai or western Japan exploration.",
      },
    },
  ],
};

export default function WhereToStayInOsakaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="space-y-12 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-stone-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-stone-700">Guides</Link>
          <span>/</span>
          <span className="text-stone-700">Where to stay in Osaka</span>
        </nav>

        {/* Hero */}
        <section className="space-y-5">
          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Guide</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Where to stay in Osaka: neighbourhood guide
          </h1>
          <p className="text-sm text-stone-500">By Yiyan · Last reviewed: March 2026</p>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80"
              alt="Dotonbori canal in Osaka at night"
              fill
              className="object-cover"
            />
          </div>
          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            Osaka is far more manageable than Tokyo — the metro is clean, the city is compact, and most visitors base themselves in one of five key areas. The choice mostly comes down to food access, budget, and whether you&apos;re planning day trips to Kyoto or Hiroshima.
          </p>
        </section>

        {/* Quick Picker */}
        <section className="space-y-3">
          <Card className="border-amber-200 bg-amber-50/60 shadow-sm">
            <CardContent className="pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">Quick pick</p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li><span className="font-semibold text-stone-900">Food / First-timer →</span> Namba</li>
                <li><span className="font-semibold text-stone-900">Nightlife →</span> Shinsaibashi</li>
                <li><span className="font-semibold text-stone-900">Budget →</span> Shin-Osaka or Tennoji</li>
                <li><span className="font-semibold text-stone-900">Local feel →</span> Tennoji</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Osaka tip */}
        <Card className="border-amber-200 bg-amber-50/60 shadow-sm">
          <CardContent className="pt-5">
            <p className="text-sm text-stone-700">
              <span className="font-semibold text-stone-900">Osaka tip:</span> Namba is the epicentre —{" "}
              <span className="font-semibold">Dotonbori, street food, and late-night konbini</span> are all walking distance from any hotel in the area. If you only have one night in Osaka, stay here.
            </p>
          </CardContent>
        </Card>

        {/* Neighbourhood Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Neighbourhood breakdown</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {neighbourhoods.map((n) => (
              <Card key={n.name} className="border-stone-200 bg-white/85 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{n.name}</CardTitle>
                  <p className="text-sm text-stone-600">{n.vibe}</p>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex flex-wrap gap-2">
                    {n.bestFor.map((tag) => (
                      <span key={tag} className="rounded-full bg-stone-100 px-3 py-0.5 text-xs font-medium text-stone-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-stone-100 pt-3 mt-2 text-xs text-stone-600">
                    <span className="font-semibold text-stone-900">{n.budget}</span>
                    <span className="mx-2 text-stone-300">·</span>
                    <span>Transport {n.transport}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-stone-600">
                      <span className="font-semibold text-emerald-700">Stay if:</span> {n.stayIf}
                    </p>
                    <p className="text-sm text-stone-600">
                      <span className="font-semibold text-rose-600">Skip if:</span> {n.skipIf}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Klook CTAs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Top Osaka experiences to book ahead</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {klookCTAs.map((cta) => (
              <Card key={cta.label} className="border-stone-200 bg-white/85 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{cta.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-stone-600">{cta.desc}</p>
                  <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                    <a href={cta.href} target="_blank" rel="noopener noreferrer sponsored">
                      Book on Klook
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-stone-400">Affiliate links — we may earn a small commission at no extra cost to you.</p>
        </section>
      </div>
    </>
  );
}
