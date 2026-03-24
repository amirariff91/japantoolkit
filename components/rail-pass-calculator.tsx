"use client";

import { useMemo, useState } from "react";


import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PASS_PRICES = {
  "7-day": 50000,
  "14-day": 80000,
  "21-day": 100000,
} as const;

type PassType = keyof typeof PASS_PRICES;

const routeOptions = [
  { id: "tokyo-kyoto", label: "Tokyo to Kyoto", cost: 14000 },
  { id: "kyoto-hiroshima", label: "Kyoto to Hiroshima", cost: 11000 },
  { id: "tokyo-osaka", label: "Tokyo to Shin-Osaka", cost: 14500 },
  { id: "tokyo-sendai", label: "Tokyo to Sendai", cost: 11000 },
  { id: "osaka-kanazawa", label: "Shin-Osaka to Kanazawa", cost: 8000 },
  { id: "tokyo-hakodate", label: "Tokyo to Hakodate", cost: 24000 },
];

export function RailPassCalculator() {
  const [selectedRoutes, setSelectedRoutes] = useState<string[]>(["tokyo-kyoto", "kyoto-hiroshima"]);
  const [travelers, setTravelers] = useState(1);
  const [extraTripCount, setExtraTripCount] = useState(0);
  const [extraTripCost, setExtraTripCost] = useState(12000);
  const [passType, setPassType] = useState<PassType>("7-day");
  const [email, setEmail] = useState("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const totals = useMemo(() => {
    const presetTotal = selectedRoutes.reduce((sum, routeId) => {
      const route = routeOptions.find((option) => option.id === routeId);
      return sum + (route?.cost ?? 0);
    }, 0);

    const totalTrips = selectedRoutes.length + extraTripCount;
    const extraCost = extraTripCount * extraTripCost;
    const costPerTraveler = presetTotal + extraCost;
    const totalCost = costPerTraveler * travelers;
    const passTotal = PASS_PRICES[passType] * travelers;

    return {
      totalTrips,
      costPerTraveler,
      totalCost,
      passTotal,
      isWorthIt: totalCost > passTotal,
      savings: Math.abs(totalCost - passTotal),
    };
  }, [extraTripCount, extraTripCost, passType, selectedRoutes, travelers]);

  const toggleRoute = (routeId: string) => {
    setSelectedRoutes((current) =>
      current.includes(routeId) ? current.filter((id) => id !== routeId) : [...current, routeId],
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <Card className="border-stone-200 bg-white/85">
        <CardHeader>
          <CardTitle>Trip inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Select your main shinkansen routes</Label>
            <div className="grid gap-3">
              {routeOptions.map((route) => (
                <label
                  key={route.id}
                  className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700"
                >
                  <div>
                    <p className="font-medium text-stone-900">{route.label}</p>
                    <p className="text-stone-600">Approx. one-way reserved seat fare</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">JPY {route.cost.toLocaleString()}</span>
                    <input
                      type="checkbox"
                      checked={selectedRoutes.includes(route.id)}
                      onChange={() => toggleRoute(route.id)}
                      className="h-4 w-4 rounded border-stone-300 text-amber-700 focus:ring-amber-600"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Pass type</Label>
            <div className="flex gap-3">
              {(Object.keys(PASS_PRICES) as PassType[]).map((type) => (
                <label
                  key={type}
                  className={`flex cursor-pointer flex-col rounded-2xl border px-4 py-3 text-sm ${
                    passType === type
                      ? "border-amber-700 bg-amber-50 text-amber-900"
                      : "border-stone-200 bg-stone-50 text-stone-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="pass-type"
                    value={type}
                    checked={passType === type}
                    onChange={() => setPassType(type)}
                    className="sr-only"
                  />
                  <span className="font-medium">{type}</span>
                  <span className="text-xs">JPY {PASS_PRICES[type].toLocaleString()}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="travelers">Travelers</Label>
              <Input
                id="travelers"
                min={1}
                type="number"
                value={travelers}
                onChange={(event) => setTravelers(Math.max(1, Number(event.target.value) || 1))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extra-trip-count">Extra trips</Label>
              <Input
                id="extra-trip-count"
                min={0}
                type="number"
                value={extraTripCount}
                onChange={(event) => setExtraTripCount(Math.max(0, Number(event.target.value) || 0))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extra-trip-cost">Cost per extra trip</Label>
              <Input
                id="extra-trip-cost"
                min={0}
                step={500}
                type="number"
                value={extraTripCost}
                onChange={(event) => setExtraTripCost(Math.max(0, Number(event.target.value) || 0))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-stone-200 bg-stone-900 text-stone-50">
        <CardHeader>
          <CardTitle>Recommendation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <Badge className={totals.isWorthIt ? "w-fit bg-emerald-500 text-white" : "w-fit bg-rose-500 text-white"}>
            {totals.isWorthIt ? "Worth it" : "Buy individual tickets"}
          </Badge>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-stone-300">Trips counted</p>
              <p className="mt-2 text-3xl font-semibold">{totals.totalTrips}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-stone-300">Shinkansen total</p>
              <p className="mt-2 text-3xl font-semibold">JPY {totals.totalCost.toLocaleString()}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-stone-300">JR Pass total</p>
              <p className="mt-2 text-3xl font-semibold">JPY {totals.passTotal.toLocaleString()}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-stone-300">Difference</p>
              <p className="mt-2 text-3xl font-semibold">JPY {totals.savings.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-stone-300">
            {totals.isWorthIt
              ? `Your selected routes cost more than the ${passType} pass. If these rides happen inside the pass window, the nationwide pass clears the simple break-even test.`
              : `Your selected routes stay under the ${passType} pass cost. Unless you need flexibility more than savings, separate tickets are likely the better buy.`}
          </p>
          <p className="text-xs leading-5 text-stone-400">
            Logic used: if total shinkansen cost is greater than the pass price, the pass is marked as worth it.
          </p>

          {/* TODO: Replace AFFILIATE_ID_HERE with your JRPass affiliate ID from jrpass.com/affiliates */}
          {totals.isWorthIt ? (
            <div className="space-y-2 pt-1">
              <a
                href="https://www.jrpass.com/?ref=AFFILIATE_ID_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-stone-950 hover:bg-amber-400"
              >
                Buy JR Pass →
              </a>
              <p className="text-center text-xs text-stone-400">We may earn a commission at no extra cost to you.</p>
            </div>
          ) : (
            <p className="pt-1 text-xs leading-5 text-stone-400">
              Based on your routes, individual tickets save money. You can still compare pass options at{" "}
              <a
                href="https://www.jrpass.com/?ref=AFFILIATE_ID_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-300"
              >
                JRPass.com
              </a>
              .
            </p>
          )}
        </CardContent>
      </Card>
      {saveStatus !== "success" ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 space-y-3">
          <p className="text-sm font-semibold text-stone-900">Save your results</p>
          <p className="text-xs text-stone-600">Get a copy of your calculation plus our Japan planning checklist.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={saveStatus === "loading"}
              className="flex-1 rounded-xl border border-stone-300 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none disabled:opacity-50"
            />
            <button
              disabled={saveStatus === "loading" || !email}
              onClick={async () => {
                if (!email) return;
                setSaveStatus("loading");
                try {
                  const res = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  });
                  setSaveStatus(res.ok ? "success" : "error");
                } catch {
                  setSaveStatus("error");
                }
              }}
              className="rounded-xl bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 disabled:opacity-50"
            >
              {saveStatus === "loading" ? "Sending…" : "Save"}
            </button>
          </div>
          {saveStatus === "error" && (
            <p className="text-xs text-red-600">Something went wrong. Try again.</p>
          )}
        </div>
      ) : (
        <p className="text-sm text-stone-500 text-center">✓ Checklist sent — check your inbox.</p>
      )}
    </div>
  );
}
