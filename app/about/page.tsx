import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Japan Toolkit",
  description:
    "Meet the people behind Japan Toolkit — two frequent Japan travelers building the practical trip-planning resource they wished existed.",
  alternates: { canonical: "https://japantoolkit.com/about" },
  openGraph: {
    title: "About — Japan Toolkit",
    description: "Meet the people behind Japan Toolkit — two frequent Japan travelers building the practical trip-planning resource they wished existed.",
    url: "https://japantoolkit.com/about",
    images: [{ url: "https://japantoolkit.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const team = [
  {
    name: "Amir",
    role: "Co-founder",
    bio: "Malaysian software developer and Japan enthusiast who has visited three times (2019, 2022, 2024). Has ridden every major shinkansen corridor including Tokyo–Kyoto–Osaka, Hiroshima–Miyajima, and the Tohoku line to Sendai. Deeply opinionated about JR Pass math — it only pays off for specific multi-city itineraries, not short stays.",
  },
  {
    name: "Yiyan",
    role: "Co-founder",
    bio: "Four Japan visits, specializing in slow-travel and cultural deep-dives. Built every day-by-day itinerary on this site from real trip notes. Goes back specifically for Kyoto in shoulder season and has strong feelings about which temples are worth the early wake-up.",
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
            <article
              key={person.name}
              className="flex flex-col items-center gap-5 rounded-2xl border border-stone-200 bg-white/85 p-8 text-center shadow-sm sm:flex-row sm:text-left"
            >
                  <div className="h-24 w-24 flex-shrink-0 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-semibold text-amber-800">
                {person.name[0]}
              </div>
              <div className="space-y-1">
                <p className="text-xl font-semibold text-stone-900">{person.name}</p>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-700">{person.role}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-xs text-stone-400">Page last updated: March 2026</p>
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
          <p>
            Questions or feedback? Email us at{" "}
            <a href="mailto:hello@japantoolkit.com" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
              hello@japantoolkit.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
