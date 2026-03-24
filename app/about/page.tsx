import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Japan Toolkit",
  description:
    "Meet the people behind Japan Toolkit — two frequent Japan travelers building the practical trip-planning resource they wished existed.",
};

const team = [
  {
    name: "Amir",
    role: "Co-founder",
    avatar: "https://i.pravatar.cc/300?img=12",
    bio: "Malaysian software developer and three-time Japan visitor. Spends more time than is reasonable researching JR Pass vs. IC card strategies, bullet-train seat assignments, and the exact optimal rail route between any two points in the country.",
  },
  {
    name: "Yiyan",
    role: "Co-founder",
    avatar: "https://i.pravatar.cc/300?img=47",
    bio: "Based in Kuala Lumpur. The itinerary brain of the operation — responsible for building the day-by-day plans that actually fit how real people travel. Happiest wandering Kyoto temple grounds at dawn or hunting down the next great Osaka street-food stall.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-2xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-700">About</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Built by travelers, for travelers
        </h1>
        <p className="text-lg leading-8 text-stone-600">
          Japan Toolkit is a practical trip-planning resource — no fluff, no generic &ldquo;top 10 temples&rdquo; lists. Just
          honest, tested advice from people who have been there and keep going back.
        </p>
      </section>

      {/* Team cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">The team</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center gap-5 rounded-2xl border border-stone-200 bg-white/85 p-8 text-center shadow-sm sm:flex-row sm:text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.avatar}
                alt={`Photo of ${person.name}`}
                className="h-24 w-24 flex-shrink-0 rounded-full object-cover ring-4 ring-amber-100"
              />
              <div className="space-y-1">
                <p className="text-xl font-semibold text-stone-900">{person.name}</p>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-700">{person.role}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why section */}
      <section className="max-w-3xl space-y-6 rounded-2xl border border-stone-200 bg-stone-50 p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Why Japan Toolkit?</h2>
        <div className="space-y-4 text-stone-600 leading-7">
          <p>
            Most Japan travel content is written by people who visited once and want to tell you that Kyoto is
            beautiful. We know that already. What we actually needed — and couldn&apos;t find in one place — was
            practical, decision-ready information.
          </p>
          <p>
            Which rail pass is worth buying for <em>your</em> specific route? How do you handle baggage between cities?
            What does a realistic day in Osaka actually look like? These are the questions Japan Toolkit is built to
            answer.
          </p>
          <p>
            We&apos;re not a travel agency and we don&apos;t take sponsored trips. We just keep going back to Japan,
            keep refining the playbook, and share what works.
          </p>
        </div>
      </section>
    </div>
  );
}
