import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getItineraryBySlug, itineraryList } from "@/lib/itineraries";

type ItineraryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return itineraryList.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}

export function generateMetadata({ params }: ItineraryPageProps): Metadata {
  const itinerary = getItineraryBySlug(params.slug);

  if (!itinerary) {
    return {
      title: "Itinerary Not Found",
    };
  }

  return {
    title: itinerary.seoTitle,
    description: itinerary.metaDescription,
  };
}

export default function ItineraryDetailPage({ params }: ItineraryPageProps) {
  const itinerary = getItineraryBySlug(params.slug);

  if (!itinerary) {
    notFound();
  }

  const structuredData = itinerary.highlights.map((highlight, index) => ({
    "@type": "TouristAttraction",
    name: highlight,
    description: itinerary.attractionDescriptions[index] ?? itinerary.intro,
  }));

  return (
    <div className="space-y-10 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": structuredData,
          }),
        }}
      />

      <section className="space-y-4">
        <Badge className="bg-rose-700 text-white hover:bg-rose-700">{itinerary.durationLabel}</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">{itinerary.title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">{itinerary.intro}</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Trip highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm leading-6 text-stone-700">
              {itinerary.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Day-by-day outline</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {itinerary.days.map((day) => (
                <li key={day.day} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">Day {day.day}</p>
                  <h2 className="mt-2 text-xl font-semibold text-stone-900">{day.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{day.description}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
