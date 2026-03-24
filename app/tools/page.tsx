import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tools } from "@/lib/site";

export const metadata: Metadata = {
  title: "Japan Travel Planning Tools",
  description:
    "Use Japan Toolkit calculators and comparison guides to plan rail costs, connectivity, and trip budgeting before you book flights or hotels.",
  alternates: { canonical: "https://japantoolkit.com/tools" },
};

export default function ToolsHubPage() {
  return (
    <div className="space-y-10 py-10">
      <section className="space-y-4">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Tools Hub</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Japan planning tools</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          These pages are designed to solve specific decisions travelers make while planning Japan: whether a rail
          pass saves money, how to stay connected on arrival, and what to watch for when estimating spend.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.href} className={`relative border-stone-200 bg-white/85 shadow-sm${tool.comingSoon ? " opacity-60" : ""}`}>
            <CardHeader>
              <CardTitle>{tool.title}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-stone-600">{tool.detail}</p>
              {tool.comingSoon ? (
                <Button variant="outline" disabled className="border-stone-300 bg-white opacity-50 cursor-not-allowed">
                  {tool.cta}
                </Button>
              ) : (
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href={tool.href}>
                    {tool.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
