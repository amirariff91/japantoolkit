import Link from "next/link";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { itineraryList } from "@/lib/itineraries";

export const metadata: Metadata = {
  title: "Japan Itinerary Ideas by Trip Length and Travel Style",
  description:
    "Browse Japan itinerary templates for first-timers, anime fans, families, solo travelers, and budget trips. Each route has a day-by-day outline built from real travel notes.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com/itinerary" },
  openGraph: {
    title: "Japan Itinerary Ideas by Trip Length and Travel Style",
    description:
      "Browse Japan itinerary templates for first-timers, anime fans, families, solo travelers, and budget trips. Each route has a day-by-day outline built from real travel notes.",
    url: "https://japantoolkit.cepathosting.com/itinerary",
    images: [{ url: "https://japantoolkit.cepathosting.com/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function ItineraryHubPage() {
  return (
    <div className="space-y-10 py-10">
      <section className="space-y-4">
        <Badge className="bg-rose-700 text-white hover:bg-rose-700">Itinerary Hub</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Japan itinerary ideas by trip style</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          Start with length and travel intent, then refine from there. These static itinerary pages are scoped for
          common search patterns, but each one still gives a clear rhythm, highlight set, and daily route outline.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {itineraryList.map((itinerary) => (
          <Card key={itinerary.slug} className="border-stone-200 bg-white/85 shadow-sm">
            <CardHeader>
              <CardTitle>{itinerary.title}</CardTitle>
              <CardDescription>{itinerary.intro}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-stone-600">
                {itinerary.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <Button asChild variant="outline" className="border-stone-300 bg-white">
                <Link href={`/itinerary/${itinerary.slug}`}>Open itinerary</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
