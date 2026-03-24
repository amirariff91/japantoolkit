import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Japan Travel Budget Estimator — Plan Your Trip Costs",
  description:
    "Plan your Japan trip budget with our upcoming estimator. Covering hotels, food, transport, attractions, and connectivity costs by travel style and trip length.",
  alternates: {
    canonical: "https://japantoolkit.com/tools/budget-estimator",
  },
  openGraph: {
    title: "Japan Travel Budget Estimator — Plan Your Trip Costs",
    description:
      "Plan your Japan trip budget with our upcoming estimator. Covering hotels, food, transport, attractions, and connectivity costs by travel style and trip length.",
    url: "https://japantoolkit.com/tools/budget-estimator",
    images: [{ url: "https://japantoolkit.com/og-image.svg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://japantoolkit.com/tools" },
    { "@type": "ListItem", position: 3, name: "Budget Estimator", item: "https://japantoolkit.com/tools/budget-estimator" },
  ],
};

export default function BudgetEstimatorPage() {
  return (
    <div className="space-y-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
