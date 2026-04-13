import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Best Time to Visit Japan (Month-by-Month Guide)",
  description:
    "Find the best time to visit Japan by season and month. Cherry blossoms in spring, autumn foliage, winter snow, and summer festivals — all compared for weather, crowds, and price.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com/guides/best-time-to-visit-japan" },
  openGraph: {
    title: "Best Time to Visit Japan (Month-by-Month Guide) | Japan Toolkit",
    description:
      "Find the best time to visit Japan by season and month. Cherry blossoms in spring, autumn foliage, winter snow, and summer festivals — all compared for weather, crowds, and price.",
    url: "https://japantoolkit.cepathosting.com/guides/best-time-to-visit-japan",
    images: [{ url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=80", width: 1200, height: 630 }],
  },
};

const seasons = [
  {
    name: "Spring",
    months: "Mar – May",
    emoji: "🌸",
    weather: "Mild, 10–20 °C. Gradually warming from cool March to warm May.",
    highlights: ["Cherry blossoms (late Mar–Apr)", "Hanami picnics", "Golden Week festivals (late Apr–early May)"],
    crowd: "Very High",
    crowdBadge: "bg-red-100 text-red-700",
    price: "Peak",
    priceBadge: "bg-red-100 text-red-700",
    borderClass: "border-l-4 border-l-pink-400",
  },
  {
    name: "Summer",
    months: "Jun – Aug",
    emoji: "🏮",
    weather: "Hot and humid, 25–35 °C. Rainy season June–mid-July.",
    highlights: ["Gion Matsuri (Jul, Kyoto)", "Obon lantern festivals (Aug)", "Fuji climbing season"],
    crowd: "High",
    crowdBadge: "bg-red-100 text-red-700",
    price: "Mid–Peak",
    priceBadge: "bg-amber-100 text-amber-700",
    borderClass: "border-l-4 border-l-blue-400",
  },
  {
    name: "Autumn",
    months: "Sep – Nov",
    emoji: "🍁",
    weather: "Crisp and clear, 10–22 °C. Best visibility of the year.",
    highlights: ["Autumn foliage (Nov)", "Nikko & Kyoto temple colours", "Fewer typhoons after Oct"],
    crowd: "High",
    crowdBadge: "bg-red-100 text-red-700",
    price: "Mid–Peak",
    priceBadge: "bg-amber-100 text-amber-700",
    borderClass: "border-l-4 border-l-amber-500",
  },
  {
    name: "Winter",
    months: "Dec – Feb",
    emoji: "❄️",
    weather: "Cold, 0–10 °C in cities. Heavy snow in Hokkaido and the Japan Alps.",
    highlights: ["Sapporo Snow Festival (Feb)", "Powder skiing in Niseko", "Illumination events Dec"],
    crowd: "Low",
    crowdBadge: "bg-green-100 text-green-700",
    price: "Budget",
    priceBadge: "bg-green-100 text-green-700",
    borderClass: "border-l-4 border-l-slate-400",
  },
];

const blossomData = [
  { city: "Tokyo", timing: "Late March" },
  { city: "Kyoto", timing: "Late Mar – early Apr" },
  { city: "Osaka", timing: "Late March" },
  { city: "Hiroshima", timing: "Late March" },
  { city: "Sapporo", timing: "Late April" },
];

const months = [
  { month: "Jan", temp: "2–10 °C", crowd: "Low", event: "Sapporo Yuki Matsuri prep" },
  { month: "Feb", temp: "2–11 °C", crowd: "Low", event: "Sapporo Snow Festival" },
  { month: "Mar", temp: "5–15 °C", crowd: "Medium", event: "First cherry blossoms" },
  { month: "Apr", temp: "12–20 °C", crowd: "Very High", event: "Peak cherry blossom & Golden Week" },
  { month: "May", temp: "16–24 °C", crowd: "High", event: "Golden Week (ends)" },
  { month: "Jun", temp: "20–27 °C", crowd: "Medium", event: "Rainy season begins" },
  { month: "Jul", temp: "24–32 °C", crowd: "High", event: "Gion Matsuri, Kyoto" },
  { month: "Aug", temp: "25–33 °C", crowd: "High", event: "Obon festival & fireworks" },
  { month: "Sep", temp: "20–28 °C", crowd: "Medium", event: "Tail end of typhoon season" },
  { month: "Oct", temp: "14–22 °C", crowd: "Medium", event: "Early autumn foliage" },
  { month: "Nov", temp: "8–18 °C", crowd: "High", event: "Peak autumn foliage" },
  { month: "Dec", temp: "3–12 °C", crowd: "Low–Medium", event: "Winter illuminations" },
];

// TODO: Replace AFFILIATE_ID_HERE with real Klook affiliate ID before going live
const klookCTAs = [
  {
    label: "Cherry Blossom Boat Tour – Tokyo",
    desc: "Float along the Meguro River beneath pink blossoms. Best in late March.",
    href: `https://www.klook.com/activity/2975-chidorigafuchi-moat-cherry-blossom-boat-ride-tokyo/?aid=AFFILIATE_ID_HERE`,
  },
  {
    label: "Autumn Foliage Day Trip – Nikko",
    desc: "Toshogu Shrine, cedar forests, and blazing foliage in early November.",
    href: `https://www.klook.com/activity/3016-nikko-day-trip-tokyo/?aid=AFFILIATE_ID_HERE`,
  },
  {
    label: "teamLab Planets – Tokyo",
    desc: "Immersive art year-round — reserve tickets well in advance.",
    href: `https://www.klook.com/activity/71889-teamlab-planets-tokyo/?aid=AFFILIATE_ID_HERE`,
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Time to Visit Japan (Month-by-Month Guide)",
  description:
    "Find the best time to visit Japan by season and month. Cherry blossoms in spring, autumn foliage, winter snow, and summer festivals — all compared for weather, crowds, and price.",
  image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=80",
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: {
    "@type": "Organization",
    name: "Japan Toolkit",
    url: "https://japantoolkit.cepathosting.com",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.cepathosting.com/guides/best-time-to-visit-japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.cepathosting.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.cepathosting.com/guides" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Time to Visit Japan",
      item: "https://japantoolkit.cepathosting.com/guides/best-time-to-visit-japan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What about typhoon season in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typhoon season runs roughly July to October, with the peak in August and September. Most storms track up the Pacific coast, so the Sea of Japan side (Kyoto, Osaka, Kanazawa) is less exposed. Disruptions are usually short-lived — trains resume within hours. Travel insurance is a sensible precaution if you're visiting in August or September.",
      },
    },
  ],
};

export default function BestTimeToVisitJapanPage() {
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
          <span className="text-stone-700">Best time to visit Japan</span>
        </nav>

        {/* Hero */}
        <section className="space-y-5">
          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Guide</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Best time to visit Japan
          </h1>
          <p className="text-sm text-stone-500">By Yiyan · Last reviewed: March 2026</p>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=80"
              alt="Cherry blossoms in Japan"
              fill
              className="object-cover"
            />
          </div>
          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            Japan is rewarding year-round — cherry blossoms draw spring crowds, summer hosts the biggest festivals, autumn turns every hillside amber and crimson, and winter opens up the best powder skiing on earth. Each season has a distinct trade-off between weather, crowds, and cost.
          </p>
        </section>

        {/* Season Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Japan by season</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s) => (
              <Card key={s.name} className={`border-stone-200 bg-white/85 shadow-sm ${s.borderClass}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span aria-hidden="true">{s.emoji}</span> {s.name}
                  </CardTitle>
                  <p className="text-sm text-stone-500">{s.months}</p>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-stone-600">
                  <p>{s.weather}</p>
                  <ul className="space-y-1">
                    {s.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 border-t border-stone-100 pt-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${s.crowdBadge}`}>
                      {s.crowd} crowds
                    </span>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${s.priceBadge}`}>
                      {s.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cherry Blossom Timing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Cherry blossom timing by city</h2>
          <p className="text-stone-700">
            Blossoms advance from south to north over roughly 6 weeks. Exact dates shift by ±1 week year to year — check the Japan Meteorological Corporation forecast closer to your trip.
          </p>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">City</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Typical peak</th>
                </tr>
              </thead>
              <tbody>
                {blossomData.map((b, i) => (
                  <tr key={b.city} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 font-medium text-stone-900">{b.city}</td>
                    <td className="px-5 py-3 text-stone-600">{b.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Month-by-month */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Month-by-month quick reference</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">Month</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Temp range</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Crowds</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 sm:table-cell">Key event</th>
                </tr>
              </thead>
              <tbody>
                {months.map((m, i) => (
                  <tr key={m.month} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 font-medium text-stone-900">{m.month}</td>
                    <td className="px-5 py-3 text-stone-600">{m.temp}</td>
                    <td className="px-5 py-3 text-stone-600">{m.crowd}</td>
                    <td className="hidden px-5 py-3 text-stone-600 sm:table-cell">{m.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Good to know</h2>
          <Card className="border-stone-200 bg-white/85 shadow-sm">
            <CardContent className="space-y-3 pt-6">
              <h3 className="font-semibold text-stone-900">What about typhoon season?</h3>
              <p className="text-stone-700">
                Typhoon season runs roughly July to October, peaking in August and September. Most storms track up the Pacific coast, so the Sea of Japan side — Kyoto, Osaka, Kanazawa — is less exposed. Disruptions are usually short-lived: trains resume within hours. Travel insurance is a sensible precaution if you&apos;re visiting in August or September, but typhoon season is not a dealbreaker for most itineraries.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Klook CTAs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Book seasonal experiences</h2>
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
