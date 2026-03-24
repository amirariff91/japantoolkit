import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calculator, Map, Smartphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { itineraryList, tools } from "@/lib/site";

export const metadata: Metadata = {
  title: "Japan Toolkit: Rail Pass, eSIM, and Japan Itinerary Planning Tools",
  description:
    "Plan Japan with practical tools and itinerary templates. Compare eSIM vs pocket Wi-Fi, check if the JR Pass pays off, and browse trip plans for families, solo travelers, anime fans, and first-timers.",
  alternates: { canonical: "https://japantoolkit.com" },
};

const icons = {
  calculator: Calculator,
  smartphone: Smartphone,
  map: Map,
};

export default function HomePage() {
  return (
    <div className="space-y-16 pb-12 pt-8 md:space-y-24 md:pt-14">
      <section className="grid gap-10 rounded-[2rem] border border-stone-200/70 bg-[linear-gradient(135deg,rgba(255,251,235,0.95),rgba(255,237,213,0.92),rgba(254,242,242,0.9))] px-6 py-10 shadow-[0_30px_80px_rgba(120,53,15,0.10)] md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-14">
        <div className="space-y-6">
          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Japan Trip Planning Toolkit</Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 md:text-6xl">
              Plan a Japan trip with tools that answer the expensive questions first.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-stone-700 md:text-lg">
              Japan Toolkit is built for real trip planning: whether the rail pass is worth buying, whether your group
              should use eSIM or pocket Wi-Fi, and how to shape an itinerary around time, pace, and travel style.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-stone-900 text-stone-50 hover:bg-stone-800">
              <Link href="/tools">
                Explore tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-stone-300 bg-white/70 text-stone-900 hover:bg-white"
            >
              <Link href="/itinerary">Browse itineraries</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 self-stretch rounded-[1.5rem] bg-stone-900 p-5 text-stone-50">
          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Useful before you book</p>
            <p className="mt-3 text-2xl font-semibold">From rail math to SIM setup, skip generic advice.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">7</p>
              <p className="mt-2 text-sm text-stone-300">Prebuilt itinerary variations generated as static pages.</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">3</p>
              <p className="mt-2 text-sm text-stone-300">Core planning tools focused on transit, budget, and data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">Tools</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">Utility-first travel planning</h2>
          </div>
          <Link className="text-sm font-medium text-stone-700 underline-offset-4 hover:underline" href="/tools">
            View all tools
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tools.map((tool) => {
            const Icon = icons[tool.icon];
            return (
              <Card key={tool.href} className={`relative border-stone-200 bg-white/80 shadow-sm${tool.comingSoon ? " opacity-60" : ""}`}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {tool.comingSoon ? (
                    <Button variant="ghost" disabled className="px-0 text-stone-900 hover:bg-transparent opacity-50 cursor-not-allowed">
                      {tool.cta}
                    </Button>
                  ) : (
                    <Button asChild variant="ghost" className="px-0 text-stone-900 hover:bg-transparent">
                      <Link href={tool.href}>
                        {tool.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-700">Itineraries</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">
              Static itinerary pages with distinct angles
            </h2>
          </div>
          <Link className="text-sm font-medium text-stone-700 underline-offset-4 hover:underline" href="/itinerary">
            Visit itinerary hub
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {itineraryList.slice(0, 4).map((itinerary) => (
            <Card key={itinerary.slug} className="border-stone-200 bg-gradient-to-br from-white to-stone-50">
              <CardHeader>
                <CardTitle>{itinerary.title}</CardTitle>
                <CardDescription>{itinerary.intro}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {itinerary.highlights.slice(0, 3).map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="bg-stone-100 text-stone-700">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href={`/itinerary/${itinerary.slug}`}>Read itinerary</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-stone-900 px-6 py-10 text-stone-50 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Built for search intent</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Programmatic pages with enough substance to be useful.
            </h2>
            <p className="mt-3 text-stone-300">
              Each itinerary page has a unique opening, its own highlight set, and a realistic day-by-day outline so
              travelers can compare styles instead of reading duplicate templates.
            </p>
          </div>
          <Button asChild size="lg" className="bg-amber-500 text-stone-950 hover:bg-amber-400">
            <Link href="/itinerary">See itinerary coverage</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
