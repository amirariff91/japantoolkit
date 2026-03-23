import type { Metadata } from "next";

import { RailPassCalculator } from "@/components/rail-pass-calculator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "JR Rail Pass Calculator",
  description:
    "Calculate whether a 7-day JR Pass is worth it for your Japan trip by adding common shinkansen routes and comparing the total against the current pass price.",
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

export default function RailPassCalculatorPage() {
  return (
    <div className="space-y-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="space-y-4">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Tool</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">JR rail pass calculator</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          The nationwide JR Pass only makes sense for a narrow set of trips. Use this calculator to total the long
          shinkansen legs on your route and compare them against the current 7-day pass price.
        </p>
      </section>

      <RailPassCalculator />

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
