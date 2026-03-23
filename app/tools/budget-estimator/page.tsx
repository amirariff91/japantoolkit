import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Japan Budget Estimator",
  description:
    "Preview the upcoming Japan budget estimator and see which spending buckets matter most for transport, hotels, food, attractions, and connectivity.",
};

export default function BudgetEstimatorPage() {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Coming Soon</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Japan budget estimator</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          This page is reserved for a full trip budget estimator covering hotel class, regional transport, attraction
          mix, food style, and seasonal travel peaks.
        </p>
      </section>

      <Card className="border-dashed border-stone-300 bg-white/85">
        <CardHeader>
          <CardTitle>What it will cover</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-6 text-stone-600">
          <p>Hotel spend by city and room type, from compact business hotels to ryokan splurges.</p>
          <p>Transport cost planning for airport access, regional passes, IC cards, and long-distance rail.</p>
          <p>Daily food budgets for convenience-store breakfasts, casual ramen lunches, and omakase-heavy evenings.</p>
        </CardContent>
      </Card>
    </div>
  );
}
