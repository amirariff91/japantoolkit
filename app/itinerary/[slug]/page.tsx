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

const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  anime: {
    src: "https://images.unsplash.com/photo-1519181258491-889d47eb9f2d?w=1200&q=80",
    alt: "Akihabara electric town at night, neon signs and anime billboards",
  },
  family: {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
    alt: "Osaka Castle surrounded by cherry blossoms with families walking the grounds",
  },
  budget: {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    alt: "Quiet lantern-lit alley in Kyoto at dusk",
  },
  default: {
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    alt: "Tokyo skyline at night with Rainbow Bridge and city lights",
  },
};

function getHeroImage(slug: string): { src: string; alt: string } {
  if (slug.includes("anime")) return HERO_IMAGES.anime;
  if (slug.includes("family")) return HERO_IMAGES.family;
  if (slug.includes("budget") || slug.includes("solo") || slug.includes("slow")) return HERO_IMAGES.budget;
  return HERO_IMAGES.default;
}

export default function ItineraryDetailPage({ params }: ItineraryPageProps) {
  const itinerary = getItineraryBySlug(params.slug);

  if (!itinerary) {
    notFound();
  }

  const hero = getHeroImage(params.slug);

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

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hero.src}
        alt={hero.alt}
        className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
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

      {/* TODO: Replace AFFILIATE_ID_HERE with your Klook affiliate ID from affiliate.klook.com */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">Affiliate</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Recommended experiences</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white/85 p-4 space-y-3">
            <p className="font-semibold text-stone-900">Tokyo Skytree Observation Deck</p>
            <p className="text-sm leading-6 text-stone-600">Skip the queue with a reserved entry ticket to Tokyo&apos;s iconic 634 m tower.</p>
            <a
              href="https://www.klook.com/activity/1393-tokyo-skytree/?aid=AFFILIATE_ID_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-stone-300 px-3 py-2 text-xs font-medium text-stone-700 hover:border-stone-500 hover:text-stone-900"
            >
              Book on Klook →
            </a>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white/85 p-4 space-y-3">
            <p className="font-semibold text-stone-900">Fushimi Inari Early Morning Tour</p>
            <p className="text-sm leading-6 text-stone-600">Walk the thousand torii gates before the crowds arrive with a small-group guided tour.</p>

            <a
              href="https://www.klook.com/activity/52231-fushimi-inari-early-morning-tour-kyoto/?aid=AFFILIATE_ID_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-stone-300 px-3 py-2 text-xs font-medium text-stone-700 hover:border-stone-500 hover:text-stone-900"
            >
              Book on Klook →
            </a>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white/85 p-4 space-y-3">
            <p className="font-semibold text-stone-900">TeamLab Planets Tokyo</p>
            <p className="text-sm leading-6 text-stone-600">Immersive digital art installation in Toyosu — timed entry tickets sell out fast.</p>
            <a
              href="https://www.klook.com/activity/56448-teamlab-planets-tokyo/?aid=AFFILIATE_ID_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-stone-300 px-3 py-2 text-xs font-medium text-stone-700 hover:border-stone-500 hover:text-stone-900"
            >
              Book on Klook →
            </a>
          </div>
        </div>
        <p className="text-xs text-stone-400">Links may earn us a small commission. Prices shown on Klook.</p>
      </div>
    </div>
  );
}
