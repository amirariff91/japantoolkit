import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Where to Stay in Tokyo: Neighbourhood Guide",
  description:
    "Find the best neighbourhood to stay in Tokyo. Shinjuku, Shibuya, Asakusa, Ginza, Akihabara, Ueno, and Harajuku compared — vibes, prices, and who each area suits.",
  alternates: { canonical: "https://japantoolkit.com/guides/where-to-stay-in-tokyo" },
  openGraph: {
    title: "Where to Stay in Tokyo: Neighbourhood Guide | Japan Toolkit",
    description:
      "Find the best neighbourhood to stay in Tokyo. Shinjuku, Shibuya, Asakusa, Ginza, Akihabara, Ueno, and Harajuku compared — vibes, prices, and who each area suits.",
    url: "https://japantoolkit.com/guides/where-to-stay-in-tokyo",
    images: [{ url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80", width: 1200, height: 630 }],
  },
};

const neighbourhoods = [
  {
    name: "Shinjuku",
    vibe: "Neon-lit megahub — skyscraper hotels, Kabukicho nightlife, and Shinjuku Gyoen park all within walking distance.",
    bestFor: ["First-timers", "Nightlife", "Easy transport"],
    budget: "¥8,000 – ¥30,000",
    transport: "★★★★★",
    stayIf: "You want maximum convenience and don't mind crowds.",
    skipIf: "You're sensitive to noise or want a quieter base.",
  },
  {
    name: "Shibuya",
    vibe: "Home of the famous crossing — fashion, youth culture, and an energy that never quite turns off.",
    bestFor: ["Shopping", "Nightlife", "Young travellers"],
    budget: "¥8,000 – ¥28,000",
    transport: "★★★★★",
    stayIf: "You want to be in the centre of Tokyo's youth culture.",
    skipIf: "You prefer a calmer atmosphere or are on a tight budget.",
  },
  {
    name: "Asakusa",
    vibe: "Old Tokyo — Senso-ji temple, rickshaws, and craft shops along Nakamise-dori.",
    bestFor: ["Culture", "Old Tokyo feel", "Photographers"],
    budget: "¥5,000 – ¥20,000",
    transport: "★★★★☆",
    stayIf: "You want a traditional atmosphere and easy access to temples.",
    skipIf: "You need quick access to Shibuya or Shinjuku (extra train change).",
  },
  {
    name: "Akihabara",
    vibe: "The global capital of anime, manga, and electronics — electric in every sense.",
    bestFor: ["Anime fans", "Budget stays", "Tech lovers"],
    budget: "¥4,500 – ¥15,000",
    transport: "★★★★☆",
    stayIf: "Akihabara is your destination, not just a stop.",
    skipIf: "You're not into anime or electronics — not much else nearby.",
  },
  {
    name: "Ginza",
    vibe: "Tokyo's most polished district — flagship boutiques, Michelin restaurants, and understated luxury.",
    bestFor: ["Luxury", "Fine dining", "Business travel"],
    budget: "¥18,000 – ¥80,000+",
    transport: "★★★★☆",
    stayIf: "Budget is no concern and you want the best address in Tokyo.",
    skipIf: "You're on a budget or want lively neighbourhood energy.",
  },
  {
    name: "Ueno",
    vibe: "Culture and budget in one — world-class museums, a large park, and some of Tokyo's cheapest hostels.",
    bestFor: ["Budget", "Museums", "Families"],
    budget: "¥3,500 – ¥15,000",
    transport: "★★★★☆",
    stayIf: "You want value for money without sacrificing location.",
    skipIf: "You want a sleek, upscale neighbourhood feel.",
  },
  {
    name: "Harajuku / Omotesando",
    vibe: "Street fashion on Takeshita-dori, high design on Omotesando, and Meiji Jingu forest calm in between.",
    bestFor: ["Fashion", "Design lovers", "Couples"],
    budget: "¥10,000 – ¥35,000",
    transport: "★★★★☆",
    stayIf: "You want a stylish base between Shibuya and Shinjuku.",
    skipIf: "You need budget options — this area skews mid-to-high.",
  },
];

// TODO: Replace AFFILIATE_ID_HERE with real Klook affiliate ID before going live
const klookCTAs = [
  {
    label: "Tokyo Skytree Skip-the-Line Ticket",
    desc: "Best views of the city — book ahead, especially on weekends.",
    href: "https://www.klook.com/activity/3153-tokyo-skytree-observation-deck-ticket/?aid=AFFILIATE_ID_HERE",
  },
  {
    label: "Shibuya Crossing & Harajuku Walking Tour",
    desc: "3-hour guided walk through the most photogenic spots in west Tokyo.",
    href: "https://www.klook.com/activity/40399-shibuya-crossing-harajuku-walking-tour-tokyo/?aid=AFFILIATE_ID_HERE",
  },
  {
    label: "teamLab Planets Tokyo",
    desc: "Immersive digital art — tickets sell out weeks in advance.",
    href: "https://www.klook.com/activity/71889-teamlab-planets-tokyo/?aid=AFFILIATE_ID_HERE",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Where to Stay in Tokyo: Neighbourhood Guide",
  description:
    "Find the best neighbourhood to stay in Tokyo. Shinjuku, Shibuya, Asakusa, Ginza, Akihabara, Ueno, and Harajuku compared — vibes, prices, and who each area suits.",
  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: { "@type": "Organization", name: "Japan Toolkit", url: "https://japantoolkit.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.com/guides/where-to-stay-in-tokyo" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.com/guides" },
    { "@type": "ListItem", position: 3, name: "Where to Stay in Tokyo", item: "https://japantoolkit.com/guides/where-to-stay-in-tokyo" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Tokyo neighbourhood is best for first-time visitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shinjuku or Shibuya are the top picks for first-timers — both are on the Yamanote Line, have dozens of hotel options at every price point, and put you close to major attractions.",
      },
    },
    {
      "@type": "Question",
      name: "Is staying in Asakusa convenient in Tokyo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Asakusa sits on the Ginza metro line and is a short ride from Ueno and Akihabara. It's slightly further from Shibuya and Shinjuku but still manageable.",
      },
    },
  ],
};

export default function WhereToStayInTokyoPage() {
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
          <span className="text-stone-700">Where to stay in Tokyo</span>
        </nav>

        {/* Hero */}
        <section className="space-y-5">
          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Guide</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Where to stay in Tokyo: neighbourhood guide
          </h1>
          <p className="text-sm text-stone-500">By Yiyan · Last reviewed: March 2026</p>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80"
              alt="Tokyo city skyline at night"
              fill
              className="object-cover"
            />
          </div>
          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            Tokyo is enormous — 23 wards, 14 million people, and dozens of distinct neighbourhoods, each with a different personality. The right base depends on your travel style, budget, and which parts of the city you plan to spend the most time in.
          </p>
        </section>

        {/* Quick Picker */}
        <section className="space-y-3">
          <Card className="border-amber-200 bg-amber-50/60 shadow-sm">
            <CardContent className="pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">Quick pick</p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li><span className="font-semibold text-stone-900">First-timer →</span> Shinjuku or Shibuya</li>
                <li><span className="font-semibold text-stone-900">Old Tokyo feel →</span> Asakusa</li>
                <li><span className="font-semibold text-stone-900">Budget →</span> Ueno or Akihabara</li>
                <li><span className="font-semibold text-stone-900">Luxury →</span> Ginza</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Pro Tip */}
        <Card className="border-amber-200 bg-amber-50/60 shadow-sm">
          <CardContent className="pt-5">
            <p className="text-sm text-stone-700">
              <span className="font-semibold text-stone-900">Pro tip:</span> Stay near a{" "}
              <span className="font-semibold">Yamanote Line</span> station — it loops all major districts (Shinjuku, Shibuya, Harajuku, Ikebukuro, Ueno, Akihabara), runs until midnight, and costs under ¥200 per hop.
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
          <h2 className="text-2xl font-semibold text-stone-900">Top Tokyo experiences to book ahead</h2>
          <div className="grid gap-5 sm:grid-cols-3">
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
