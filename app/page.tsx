import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calculator, CheckCircle2, Map, Route, Smartphone, Sparkles, TriangleAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailCaptureForm } from "@/components/email-capture-form";
import { itineraryList, tools } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Japan Itinerary Planner — Audit Your Route, JR Pass & Tokyo Base",
  },
  description:
    "Plan a Japan trip that actually works. Audit your itinerary, check if the JR Pass is worth it, choose where to stay in Tokyo, and compare 7, 10, 14 and 21 day Japan routes.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com" },
  openGraph: {
    title: "Japan Itinerary Planner — Audit Your Route Before It Gets Expensive",
    description:
      "Turn a Japan wish-list into a workable route. Catch JR Pass mistakes, bad hotel bases, impossible day plans, and expensive routing assumptions before you book.",
    url: "https://japantoolkit.cepathosting.com",
    images: [{ url: "https://japantoolkit.cepathosting.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const icons = {
  calculator: Calculator,
  smartphone: Smartphone,
  map: Map,
};

const productModes = [
  {
    verb: "Plan",
    title: "Turn the wish-list into a route",
    copy: "Pick a trip length, choose your bases, and see the flow before you commit hotels or trains.",
    href: "/itinerary",
  },
  {
    verb: "Audit",
    title: "Catch expensive assumptions",
    copy: "Check the stuff generic blog itineraries miss: pass value, bad transfers, wrong hotel area, and deadline tickets.",
    href: "/tools/rail-pass-calculator",
  },
  {
    verb: "Optimize",
    title: "Make it calmer without making it boring",
    copy: "Reduce one-night city hopping, group attractions by area, and leave slack where Japan planning actually needs it.",
    href: "/guides/japan-trip-checklist",
  },
];

const mistakes = [
  "Buying a nationwide JR Pass for a Tokyo–Kyoto–Osaka trip that does not clear the pass price.",
  "Changing hotels every night and losing the trip to checkout, lockers, and station transfers.",
  "Staying in the wrong Tokyo base for your actual days: west-side nightlife, east-side culture, Disney, or airport routing.",
  "Packing Kyoto with temples until the day becomes a blur of stairs, buses, and crowd fatigue.",
  "Forgetting ticket deadlines for Ghibli Museum, USJ Express Pass, Disney, teamLab, and popular restaurants.",
  "Ignoring luggage forwarding, then dragging suitcases through station stairs and crowded local trains.",
];

const examples = [
  {
    route: "Tokyo → Kyoto → Osaka",
    label: "7 days first-time",
    note: "Good first route. Usually not enough rail spend for a nationwide JR Pass unless you add a bigger long-distance leg.",
    href: "/itinerary/7-days-first-time",
  },
  {
    route: "Tokyo → Hakone → Kyoto → Nara → Osaka → Hiroshima",
    label: "14 days classic",
    note: "Better use of two weeks: fewer rushed days, one mountain reset, and a western extension that can change the rail math.",
    href: "/itinerary/14-days-classic",
  },
  {
    route: "Tokyo base → Kansai base → flex day",
    label: "Family route",
    note: "One anchor experience per day, fewer hotel changes, and enough recovery time for kids and luggage.",
    href: "/itinerary/7-days-family",
  },
];

const keywordProof = [
  "japan trip planner: 12k US searches/mo",
  "japan itinerary 2 weeks: 8.1k/mo, KD 19",
  "jr pass worth it: 14k/mo",
  "where to stay in Tokyo first time: 5.4k/mo",
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-12 pt-8 md:space-y-24 md:pt-14">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200/70 bg-stone-950 text-stone-50 shadow-[0_30px_80px_rgba(28,25,23,0.18)]">
        <div className="grid gap-10 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-10 lg:p-12">
          <div className="space-y-7">
            <Badge className="w-fit bg-amber-400 text-stone-950 hover:bg-amber-400">Japan planning chaos, corrected</Badge>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                Your Japan plan, audited before it becomes expensive.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-300 md:text-lg">
                Japan Toolkit turns a spreadsheet of Tokyo, Kyoto, Osaka, trains, tickets, hotels, and must-eats into a route that actually works. Start with itinerary examples, then check the costly assumptions: JR Pass value, Tokyo base, data setup, budget, and pacing.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-400 text-stone-950 hover:bg-amber-300">
                <Link href="/itinerary">
                  Start with a route
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white">
                <Link href="/tools/rail-pass-calculator">Audit JR Pass cost</Link>
              </Button>
            </div>
            <div className="grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
              {productModes.map((mode) => (
                <Link key={mode.verb} href={mode.href} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-300/60 hover:bg-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">{mode.verb}</p>
                  <p className="mt-2 font-semibold text-white">{mode.title}</p>
                  <p className="mt-2 leading-6">{mode.copy}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-200">Route board</p>
              <Sparkles className="h-5 w-5 text-amber-200" />
            </div>
            <div className="space-y-3">
              {["Tokyo · 4 nights · west-side base", "Hakone · 1 night · onsen reset", "Kyoto · 4 nights · temples + Nara", "Osaka · 3 nights · food + USJ", "Hiroshima · 2 nights · maybe rail pass"].map((row, index) => (
                <div key={row} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-stone-900/70 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-stone-950">{index + 1}</div>
                  <p className="text-sm text-stone-200">{row}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
              Assumption check: a Tokyo–Kyoto–Osaka loop is often cheaper with individual tickets. Add Hiroshima, Kanazawa, Nagano, or a tight 7-day long-distance window before assuming the JR Pass wins.
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-4">
        {keywordProof.map((proof) => (
          <div key={proof} className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-sm font-medium text-stone-700 shadow-sm">
            <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-600" />
            {proof}
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-700">Mistakes we catch</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">The enemy is not planning. It is false confidence.</h2>
          <p className="mt-3 leading-7 text-stone-700">
            Japan advice often looks polished while hiding the real constraints: pass math, hotel base fit, queue deadlines, weather, luggage, and human energy. These are the failure modes Japan Toolkit is built around.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((mistake) => (
            <Card key={mistake} className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="flex gap-3 pt-5 text-sm leading-6 text-stone-700">
                <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                <span>{mistake}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">Tools</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">Audit the expensive questions first</h2>
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
                    <Button variant="ghost" disabled className="cursor-not-allowed px-0 text-stone-900 opacity-50 hover:bg-transparent">
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-700">Worked examples</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">Routes with an opinion, not just a list of cities</h2>
          </div>
          <Link className="text-sm font-medium text-stone-700 underline-offset-4 hover:underline" href="/itinerary">
            Visit itinerary hub
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {examples.map((example) => (
            <Card key={example.href} className="border-stone-200 bg-gradient-to-br from-white to-stone-50">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                  <Route className="h-5 w-5" />
                </div>
                <CardTitle>{example.label}</CardTitle>
                <CardDescription>{example.route}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-stone-700">{example.note}</p>
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href={example.href}>Read route</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">More itineraries</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">Compare by length and travel style</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {itineraryList.slice(0, 4).map((itinerary) => (
            <Card key={itinerary.slug} className="border-stone-200 bg-white/85">
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

      <section id="audit" className="rounded-[2rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,251,235,0.95),rgba(255,237,213,0.85))] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <Badge className="bg-amber-700 text-white hover:bg-amber-700">Free</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900">Audit your Japan plan with the free checklist</h2>
            <p className="leading-7 text-stone-700">
              A printable checklist for the checks most travelers forget: routing, passes, hotel base, cash, data, luggage, and reservation deadlines. Last updated March 2026.
            </p>
          </div>
          <div className="w-full max-w-md space-y-3">
            <EmailCaptureForm source="homepage-audit" />
            <p className="text-xs text-stone-500">
              No spam. Just the checklist, once. <Link href="/guides/japan-trip-checklist" className="underline underline-offset-4 hover:text-stone-700">Preview the checklist →</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
