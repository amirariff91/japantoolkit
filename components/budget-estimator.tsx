"use client";

import { useMemo, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

// ── Cost tables (JPY per person per day) ──────────────────────────
const ACCOMMODATION: Record<string, { label: string; low: number; high: number; note: string }> = {
  budget: { label: "Budget (hostel / capsule)", low: 3000, high: 5000, note: "Shared dorms, capsule hotels" },
  business: { label: "Business hotel", low: 8000, high: 14000, note: "Toyoko Inn, APA, Dormy Inn" },
  midrange: { label: "Mid-range hotel", low: 14000, high: 22000, note: "3–4 star, good location" },
  ryokan: { label: "Ryokan / upscale", low: 22000, high: 50000, note: "Traditional inn, often includes meals" },
};

const FOOD: Record<string, { label: string; low: number; high: number; note: string }> = {
  budget: { label: "Budget (konbini + casual)", low: 1500, high: 2500, note: "7-Eleven meals, ramen, gyudon" },
  mixed: { label: "Mixed (sit-down lunches)", low: 3000, high: 5500, note: "Sushi conveyor, izakaya dinners" },
  restaurant: { label: "Restaurant-heavy", low: 6000, high: 14000, note: "Omakase, kaiseki, premium sushi" },
};

const TRANSPORT: Record<string, { label: string; low: number; high: number; note: string }> = {
  city: { label: "City-focused (IC card only)", low: 600, high: 1200, note: "Subway + bus in 1–2 cities" },
  multicity: { label: "Multi-city (some intercity)", low: 2500, high: 5000, note: "Mix of local + shinkansen" },
  extensive: { label: "Extensive travel (lots of shinkansen)", low: 5000, high: 9000, note: "Consider JR Pass separately" },
};

const ACTIVITIES: Record<string, { label: string; low: number; high: number; note: string }> = {
  light: { label: "Light sightseeing", low: 500, high: 1500, note: "Shrines, parks, free museums" },
  moderate: { label: "Moderate (mix of paid)", low: 2000, high: 4500, note: "Museums, teamLab, castle entry" },
  heavy: { label: "Heavy (parks + experiences)", low: 5000, high: 12000, note: "Universal Studios, robot cafes" },
};

const SHOPPING: Record<string, { label: string; low: number; high: number; note: string }> = {
  minimal: { label: "Minimal (souvenirs only)", low: 500, high: 1500, note: "Omiyage for family / friends" },
  moderate: { label: "Moderate (clothing + gifts)", low: 2000, high: 5000, note: "Uniqlo, konbini finds, misc" },
  heavy: { label: "Heavy shopper", low: 6000, high: 20000, note: "Electronics, fashion, anime merch" },
};

const DURATION_OPTIONS = [7, 10, 14, 21];
const USD_RATE = 150; // approximate ¥ per $1

type AccomKey = keyof typeof ACCOMMODATION;
type FoodKey = keyof typeof FOOD;
type TransportKey = keyof typeof TRANSPORT;
type ActivitiesKey = keyof typeof ACTIVITIES;
type ShoppingKey = keyof typeof SHOPPING;

function fmt(yen: number) {
  return `¥${yen.toLocaleString()}`;
}
function fmtUsd(yen: number) {
  return `~$${Math.round(yen / USD_RATE).toLocaleString()}`;
}

function OptionButton({
  selected,
  onClick,
  label,
  note,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  note: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full flex-col gap-0.5 rounded-2xl border px-4 py-3 text-left text-sm transition ${
        selected
          ? "border-amber-500 bg-amber-50 text-stone-900"
          : "border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-300 hover:bg-white"
      }`}
    >
      <span className="font-medium">{label}</span>
      <span className={`text-xs ${selected ? "text-amber-700" : "text-stone-400"}`}>{note}</span>
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-stone-800 font-medium">{title}</Label>
      <div className="grid gap-2 sm:grid-cols-2">{children}</div>
    </div>
  );
}

export function BudgetEstimator() {
  const [duration, setDuration] = useState(10);
  const [travelers, setTravelers] = useState(2);
  const [accom, setAccom] = useState<AccomKey>("business");
  const [food, setFood] = useState<FoodKey>("mixed");
  const [transport, setTransport] = useState<TransportKey>("multicity");
  const [activities, setActivities] = useState<ActivitiesKey>("moderate");
  const [shopping, setShopping] = useState<ShoppingKey>("moderate");

  const estimate = useMemo(() => {
    const a = ACCOMMODATION[accom];
    const f = FOOD[food];
    const t = TRANSPORT[transport];
    const ac = ACTIVITIES[activities];
    const sh = SHOPPING[shopping];

    const perPersonLow = (a.low + f.low + t.low + ac.low + sh.low) * duration;
    const perPersonHigh = (a.high + f.high + t.high + ac.high + sh.high) * duration;
    const totalLow = perPersonLow * travelers;
    const totalHigh = perPersonHigh * travelers;

    const breakdown = [
      { label: "Accommodation", low: a.low * duration * travelers, high: a.high * duration * travelers },
      { label: "Food & drink", low: f.low * duration * travelers, high: f.high * duration * travelers },
      { label: "Local transport", low: t.low * duration * travelers, high: t.high * duration * travelers },
      { label: "Activities", low: ac.low * duration * travelers, high: ac.high * duration * travelers },
      { label: "Shopping", low: sh.low * duration * travelers, high: sh.high * duration * travelers },
    ];

    return { totalLow, totalHigh, perPersonLow, perPersonHigh, breakdown };
  }, [duration, travelers, accom, food, transport, activities, shopping]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Inputs */}
      <Card className="border-stone-200 bg-white/85">
        <CardHeader>
          <CardTitle>Trip details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Duration */}
          <div className="space-y-2">
            <Label className="font-medium text-stone-800">Trip length</Label>
            <div className="flex gap-2">
              {DURATION_OPTIONS.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDuration(d)}
                  className={`flex-1 rounded-2xl border py-2 text-sm font-medium transition ${
                    duration === d
                      ? "border-amber-500 bg-amber-50 text-stone-900"
                      : "border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300 hover:bg-white"
                  }`}
                >
                  {d} days
                </button>
              ))}
            </div>
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <Label className="font-medium text-stone-800">Number of travelers</Label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="h-9 w-9 rounded-xl border border-stone-200 bg-stone-50 text-lg font-medium text-stone-700 hover:border-stone-300 hover:bg-white"
              >
                −
              </button>
              <span className="w-8 text-center text-lg font-semibold text-stone-900">{travelers}</span>
              <button
                type="button"
                onClick={() => setTravelers(Math.min(8, travelers + 1))}
                className="h-9 w-9 rounded-xl border border-stone-200 bg-stone-50 text-lg font-medium text-stone-700 hover:border-stone-300 hover:bg-white"
              >
                +
              </button>
              <span className="text-sm text-stone-400">{travelers === 1 ? "solo traveler" : `${travelers} people`}</span>
            </div>
          </div>

          {/* Accommodation */}
          <Section title="Accommodation style">
            {(Object.keys(ACCOMMODATION) as AccomKey[]).map((k) => (
              <OptionButton
                key={k}
                selected={accom === k}
                onClick={() => setAccom(k)}
                label={ACCOMMODATION[k].label}
                note={ACCOMMODATION[k].note}
              />
            ))}
          </Section>

          {/* Food */}
          <Section title="Food & drink style">
            {(Object.keys(FOOD) as FoodKey[]).map((k) => (
              <OptionButton
                key={k}
                selected={food === k}
                onClick={() => setFood(k)}
                label={FOOD[k].label}
                note={FOOD[k].note}
              />
            ))}
          </Section>

          {/* Transport */}
          <Section title="Transport style">
            {(Object.keys(TRANSPORT) as TransportKey[]).map((k) => (
              <OptionButton
                key={k}
                selected={transport === k}
                onClick={() => setTransport(k)}
                label={TRANSPORT[k].label}
                note={TRANSPORT[k].note}
              />
            ))}
          </Section>

          {/* Activities */}
          <Section title="Activities & attractions">
            {(Object.keys(ACTIVITIES) as ActivitiesKey[]).map((k) => (
              <OptionButton
                key={k}
                selected={activities === k}
                onClick={() => setActivities(k)}
                label={ACTIVITIES[k].label}
                note={ACTIVITIES[k].note}
              />
            ))}
          </Section>

          {/* Shopping */}
          <Section title="Shopping budget">
            {(Object.keys(SHOPPING) as ShoppingKey[]).map((k) => (
              <OptionButton
                key={k}
                selected={shopping === k}
                onClick={() => setShopping(k)}
                label={SHOPPING[k].label}
                note={SHOPPING[k].note}
              />
            ))}
          </Section>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <Card className="border-stone-200 bg-stone-900 text-stone-50">
          <CardHeader>
            <CardTitle className="text-stone-100">Your estimate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Total budget range</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {fmt(estimate.totalLow)} – {fmt(estimate.totalHigh)}
              </p>
              <p className="mt-1 text-sm text-stone-400">
                {fmtUsd(estimate.totalLow)} – {fmtUsd(estimate.totalHigh)}
              </p>
              <p className="mt-3 text-xs text-stone-400">
                {travelers > 1 && (
                  <>
                    Per person: {fmt(estimate.perPersonLow)} – {fmt(estimate.perPersonHigh)} ·{" "}
                  </>
                )}
                {duration} days · {travelers} {travelers === 1 ? "traveler" : "travelers"}
              </p>
            </div>

            {/* Breakdown */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Breakdown (total)</p>
              {estimate.breakdown.map(({ label, low, high }) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-stone-300">{label}</span>
                  <span className="font-medium text-stone-100">
                    {fmt(low)} – {fmt(high)}
                  </span>
                </div>
              ))}
            </div>

            {/* JR Pass note */}
            {transport === "extensive" && (
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs leading-5 text-amber-200">
                <strong>JR Pass tip:</strong> With extensive travel, run the Rail Pass Calculator to see if the ¥50,000 7-day pass saves money vs. buying individual shinkansen tickets.
              </div>
            )}

            {/* Ryokan note */}
            {accom === "ryokan" && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-stone-300">
                Many ryokan include dinner and breakfast in the room rate. If meals are included, your food budget can drop significantly.
              </div>
            )}

            <p className="text-xs leading-5 text-stone-500">
              Estimates based on 2024–2025 travel data. Exchange rate: ¥{USD_RATE}/$1. Flights and travel insurance are not included. Actual costs vary by season, city, and booking timing.
            </p>
          </CardContent>
        </Card>

        {/* Schema hint */}
        <Card className="border-stone-200 bg-white/85">
          <CardContent className="pt-5 space-y-3">
            <p className="text-sm font-medium text-stone-900">Good to know</p>
            <ul className="space-y-2 text-sm text-stone-600 leading-6">
              <li>• Tokyo and Osaka are cheaper for food than Kyoto in most categories</li>
              <li>• Autumn foliage (Oct–Nov) and cherry blossom (Mar–Apr) push accommodation prices up 20–40%</li>
              <li>• IC cards (Suica / ICOCA) cover almost all city transit — load ¥3,000–5,000 per person on arrival</li>
              <li>• Cash is still widely preferred — ATMs at 7-Eleven and Japan Post accept foreign cards</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
