import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cash & Currency in Japan: What You Actually Need to Know",
  description:
    "Japan is still heavily cash-based. Learn where to get yen, how 7-Eleven ATMs work, whether your card is accepted, and how IC cards like Suica save you time every day.",
  alternates: { canonical: "https://japantoolkit.com/guides/cash-and-currency-in-japan" },
  openGraph: {
    title: "Cash & Currency in Japan: What You Actually Need to Know | Japan Toolkit",
    description:
      "Japan is still heavily cash-based. Learn where to get yen, how 7-Eleven ATMs work, whether your card is accepted, and how IC cards like Suica save you time every day.",
    url: "https://japantoolkit.com/guides/cash-and-currency-in-japan",
    images: [{ url: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?w=1200&q=80", width: 1200, height: 630 }],
  },
};

const quickTips = [
  {
    icon: "🏧",
    title: "Use 7-Eleven ATMs",
    body: "7Bank (inside every 7-Eleven) and Japan Post ATMs reliably accept foreign Visa and Mastercard. Skip bank ATMs — they often reject foreign cards.",
    borderClass: "border-l-4 border-l-amber-400",
  },
  {
    icon: "💴",
    title: "JPY only — carry cash",
    body: "Most restaurants, shrines, local shops, and vending machines are cash-only. Don't rely on your card outside major hotels and department stores.",
    borderClass: "border-l-4 border-l-rose-400",
  },
  {
    icon: "🚇",
    title: "Get a Suica or Pasmo IC card",
    body: "Load cash at any station or airport machine. Use it on trains, buses, taxis, and convenience stores. Saves queuing for tickets every trip.",
    borderClass: "border-l-4 border-l-blue-400",
  },
  {
    icon: "🚫",
    title: "Don't tip — ever",
    body: "Tipping is not a custom in Japan and can be considered rude at traditional restaurants, ryokan, and taxis. Excellent service is simply the standard.",
    borderClass: "border-l-4 border-l-emerald-400",
  },
];

const atm = {
  title: "7-Eleven (7Bank) ATMs — the reliable choice",
  tips: [
    "Available 24/7 inside every 7-Eleven convenience store",
    "English-language interface built in",
    "Accepts Visa, Mastercard, Maestro, Cirrus, Plus, UnionPay, and most foreign cards",
    "Fee: ¥110–220 per withdrawal (varies by time of day)",
    "Withdraw ¥30,000–50,000 at once to minimise fee trips",
    "Japan Post ATMs (at post offices) are the second-best option — same card support",
  ],
  avoid: "Avoid ATMs at regular Japanese banks (Mizuho, MUFG, Sumitomo) — they commonly reject foreign-issued cards.",
};

const icCard = {
  sections: [
    {
      label: "What it is",
      text: "Suica (Tokyo/East Japan) and Pasmo are prepaid IC cards that work on virtually all trains, subways, and buses in Japan. They also work at convenience stores, some taxis, and vending machines.",
    },
    {
      label: "How to get one",
      text: "Buy at any JR station ticket machine or airport arrivals hall. You can also load a Suica card directly to your iPhone or Android in the Wallet app before you leave home.",
    },
    {
      label: "Loading money",
      text: "Top up with cash at any station machine, or link a compatible credit card through the Suica app. Minimum load is ¥1,000.",
    },
    {
      label: "Suica vs Pasmo",
      text: "They are functionally identical for tourists. Either works across Tokyo's entire rail network and most of Japan. If you buy in Tokyo, Suica is the default — just get whichever is available.",
    },
  ],
};

const cardTips = [
  { label: "Best networks", text: "Visa and Mastercard are accepted almost everywhere cards work. Amex is hit-or-miss. JCB works well domestically but foreign-issued JCBs can be declined." },
  { label: "Where cards work", text: "Department stores (Isetan, Takashimaya), large chain restaurants, convenience stores (for larger purchases), international hotels, and most tourist-facing shops." },
  { label: "Where cards don't work", text: "Local izakaya, ramen shops, most neighbourhood restaurants, shrines, temples, food markets, and taxis outside major cities." },
  { label: "Carry backup cash", text: "Even if your card is generally accepted, always have ¥5,000–10,000 in cash as a backup. Card terminals go down and many smaller places are cash-only by choice." },
  { label: "Notify your bank", text: "Tell your home bank you're travelling to Japan. Some banks flag Japanese transactions as unusual and freeze your card — the worst time to find out is at an ATM." },
];

const exchangeTips = [
  { where: "Airport ATMs (7Bank or Post)", verdict: "✅ Best", detail: "Withdraw yen on arrival. Bank rate applies, small ATM fee. Most convenient." },
  { where: "Money changers (Shinjuku, Akihabara)", verdict: "✅ Good", detail: "Competitive rates at Travelex alternatives. Good for exchanging leftover USD/EUR." },
  { where: "Airport currency exchange counters", verdict: "⚠️ Mediocre", detail: "Convenience premium baked into the rate. OK in a pinch, not optimal." },
  { where: "Hotel exchange desks", verdict: "❌ Avoid", detail: "Worst rates consistently. Hotels mark up heavily — use only as absolute last resort." },
  { where: "Post office exchange", verdict: "✅ Reliable", detail: "Decent rates at major post offices. English-speaking staff, consistent service." },
];

const budgetTable = [
  { style: "Budget backpacker", accommodation: "Capsule/hostel dorm", food: "Konbini meals + ramen", daily: "¥3,000–5,000", usd: "~$20–35/day" },
  { style: "Mid-range", accommodation: "Business hotel", food: "Sit-down restaurants, some splurges", daily: "¥8,000–15,000", usd: "~$55–100/day" },
  { style: "Comfortable", accommodation: "3–4 star hotel", food: "Mix of casual and nicer dining", daily: "¥15,000–25,000", usd: "~$100–165/day" },
  { style: "Luxury", accommodation: "Boutique hotel or ryokan", food: "Omakase, high-end kaiseki", daily: "¥30,000+", usd: "$200+/day" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cash & Currency in Japan: What You Actually Need to Know",
  description:
    "Japan is still heavily cash-based. Learn where to get yen, how 7-Eleven ATMs work, whether your card is accepted, and how IC cards like Suica save you time every day.",
  image: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?w=1200&q=80",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: { "@type": "Organization", name: "Japan Toolkit", url: "https://japantoolkit.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.com/guides/cash-and-currency-in-japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.com/guides" },
    { "@type": "ListItem", position: 3, name: "Cash & Currency in Japan", item: "https://japantoolkit.com/guides/cash-and-currency-in-japan" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Japan still a cash-based country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While card acceptance has grown since the 2020 Olympics push, Japan remains heavily cash-dependent. Many restaurants, shrines, local shops, vending machines, and public transport ticket machines are cash-only. Always carry at least ¥5,000–10,000 in yen even if you plan to use a card.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the best place to get yen in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "7-Eleven ATMs (7Bank) are the most reliable option for foreign cardholders. They accept Visa, Mastercard, and most international networks, are available 24/7, and have English interfaces. Japan Post ATMs are a solid second choice.",
      },
    },
    {
      "@type": "Question",
      name: "Should I bring USD to exchange in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's worth bringing a small amount of USD or EUR as an emergency backup in case your card stops working or you can't find a working ATM. In practice, most travelers get by fine with ATM withdrawals only. If you do exchange cash, money changers in Shinjuku and Akihabara offer competitive rates.",
      },
    },
  ],
};

export default function CashAndCurrencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="space-y-12 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-stone-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-stone-700">Guides</Link>
          <span>/</span>
          <span className="text-stone-700">Cash & currency in Japan</span>
        </nav>

        {/* Hero */}
        <section className="space-y-5">
          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Guide</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Cash vs card in Japan: what you actually need to know
          </h1>
          <p className="text-sm text-stone-500">By Yiyan · Last reviewed: March 2026</p>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?w=1200&q=80"
              alt="Japanese yen banknotes and coins"
              fill
              className="object-cover"
            />
          </div>
          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            Japan consistently surprises first-time visitors: despite being one of the most technologically advanced countries on earth, it remains deeply cash-dependent. Knowing exactly where to get yen, which ATMs reliably accept your card, and when to pull out cash vs a card makes the difference between a smooth trip and an embarrassing moment at a restaurant counter.
          </p>
        </section>

        {/* Quick Tip Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Four things to get right before you land</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickTips.map((tip) => (
              <Card key={tip.title} className={`border-stone-200 bg-white/85 shadow-sm ${tip.borderClass}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span aria-hidden="true">{tip.icon}</span> {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-stone-600">{tip.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Getting Cash — 7-Eleven ATMs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Getting cash: the 7-Eleven ATM guide</h2>
          <p className="text-stone-700">
            The single most reliable way to withdraw yen with a foreign debit or credit card is the 7Bank ATM network inside every 7-Eleven convenience store. There are over 20,000 7-Eleven stores in Japan — you will never be far from one.
          </p>
          <Card className="border-amber-200 bg-amber-50/60">
            <CardContent className="pt-6 space-y-4">
              <p className="font-semibold text-stone-900 text-lg">{atm.title}</p>
              <ul className="space-y-2">
                {atm.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className="mt-0.5 text-amber-600">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
              <p className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-800">
                ⚠️ {atm.avoid}
              </p>
            </CardContent>
          </Card>
          <div className="rounded-2xl border border-stone-200 bg-white/85 p-5">
            <p className="font-semibold text-stone-900">ATM fee reality check</p>
            <p className="mt-2 text-sm text-stone-600">
              7Bank charges ¥110–220 per withdrawal (day rate vs night rate). Your home bank will likely charge an additional international withdrawal fee (typically $3–5 or 1–3%). Withdraw larger amounts — ¥30,000–50,000 at a time — to keep the number of fee-attracting transactions low. Current exchange rate (2026): approximately <strong>1 USD ≈ 145–150 JPY</strong>.
            </p>
          </div>
        </section>

        {/* IC Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">IC cards: Suica and Pasmo</h2>
          <p className="text-stone-700">
            An IC card is the single biggest quality-of-life upgrade for any Japan trip. Load it once, tap to pay everywhere — trains, buses, convenience stores, some taxis. No queuing for individual tickets.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {icCard.sections.map((s) => (
              <div key={s.label} className="rounded-2xl border border-stone-200 bg-white/85 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">{s.label}</p>
                <p className="mt-2 text-sm text-stone-700">{s.text}</p>
              </div>
            ))}
          </div>
          <Card className="border-blue-200 bg-blue-50/40">
            <CardContent className="pt-6">
              <p className="text-sm text-stone-700">
                <span className="font-semibold">iPhone/Android tip:</span> Add Suica to Apple Wallet or Google Wallet before you fly. You can load yen onto it from your home country using a foreign card — meaning you hit arrivals with transit money already loaded.
              </p>
            </CardContent>
          </Card>
          <p className="text-sm text-stone-600">
            Want the full picture?{" "}
            <Link href="/guides/ic-card-japan" className="underline underline-offset-4 text-amber-700 hover:text-amber-800">
              Read the IC card guide →
            </Link>{" "}
            Suica vs Pasmo vs ICOCA, Mobile Suica setup on iPhone, deposit rules, and where IC cards don&apos;t work.
          </p>
        </section>

        {/* Credit Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Credit cards: when they work, when they don&apos;t</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">Situation</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Details</th>
                </tr>
              </thead>
              <tbody>
                {cardTips.map((tip, i) => (
                  <tr key={tip.label} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 font-medium text-stone-900 align-top">{tip.label}</td>
                    <td className="px-5 py-3 text-stone-600">{tip.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Currency Exchange */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Currency exchange: where to go (and what to skip)</h2>
          <p className="text-stone-700">
            If you do want to exchange physical cash — USD, EUR, GBP — here&apos;s how the options stack up:
          </p>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">Where</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Verdict</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {exchangeTips.map((row, i) => (
                  <tr key={row.where} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 font-medium text-stone-900 align-top">{row.where}</td>
                    <td className="px-5 py-3 text-stone-600 align-top">{row.verdict}</td>
                    <td className="hidden px-5 py-3 text-stone-600 align-top sm:table-cell">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tipping */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Tipping in Japan</h2>
          <Card className="border-stone-200 bg-white/85 shadow-sm">
            <CardContent className="pt-6 space-y-2">
              <p className="text-stone-700">
                <strong>Do not tip in Japan.</strong> Tipping is not part of the culture and can cause genuine discomfort — particularly at traditional ryokan, high-end restaurants, and with taxi drivers. Staff may chase you down the street to return money they think you left by mistake.
              </p>
              <p className="text-stone-700">
                The price you pay includes the service. Japanese hospitality (<em>omotenashi</em>) is built around a standard of care that exists independent of gratuity. Simply saying &quot;oishikatta desu&quot; (it was delicious) or &quot;arigatou gozaimasu&quot; is the right expression of appreciation.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Daily Budget Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Daily cash budget reference</h2>
          <p className="text-stone-700">
            Figures are per person per day, excluding accommodation costs. Transport not included (use the{" "}
            <Link href="/tools/budget-estimator" className="underline underline-offset-4 text-amber-700 hover:text-amber-800">
              Budget Estimator
            </Link>{" "}
            for a full breakdown).
          </p>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">Style</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 sm:table-cell">Accommodation</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 md:table-cell">Food</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Daily spend</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">USD approx</th>
                </tr>
              </thead>
              <tbody>
                {budgetTable.map((row, i) => (
                  <tr key={row.style} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 font-medium text-stone-900">{row.style}</td>
                    <td className="hidden px-5 py-3 text-stone-600 sm:table-cell">{row.accommodation}</td>
                    <td className="hidden px-5 py-3 text-stone-600 md:table-cell">{row.food}</td>
                    <td className="px-5 py-3 font-semibold text-stone-900">{row.daily}</td>
                    <td className="px-5 py-3 text-stone-500">{row.usd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wise CTA */}
        <section className="rounded-[2rem] border border-stone-200 bg-stone-900 px-6 py-10 text-stone-50 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Recommended</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Wise card — spend in yen at the real exchange rate
              </h2>
              <p className="mt-3 text-stone-300">
                The Wise multi-currency card converts your home currency to JPY at the mid-market rate with a small transparent fee. Withdraw up to ~£200/month from ATMs fee-free. Useful as a backup to your main card — and for keeping ATM withdrawal fees low.
              </p>
            </div>
            <Button asChild size="lg" className="bg-amber-500 text-stone-950 hover:bg-amber-400">
              <a href="https://wise.com" target="_blank" rel="noopener noreferrer sponsored">
                Get Wise card
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-stone-400">Affiliate link — we may earn a commission at no extra cost to you.</p>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Frequently asked questions</h2>
          <div className="space-y-4">
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-6 space-y-2">
                <h3 className="font-semibold text-stone-900">Is Japan still a cash-based country?</h3>
                <p className="text-stone-700 text-sm">
                  Yes. Card acceptance has improved since the 2020 Tokyo Olympics push, but the majority of everyday transactions — local restaurants, shrines, markets, vending machines — remain cash-only. Carry at least ¥5,000–10,000 at all times, even if you plan to use a card where possible.
                </p>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-6 space-y-2">
                <h3 className="font-semibold text-stone-900">Should I bring USD or EUR to exchange?</h3>
                <p className="text-stone-700 text-sm">
                  Bring a small amount (USD 100–200) as an emergency backup only. In practice most travelers get by fine using ATMs. USD and EUR are widely exchangeable at money changers in major cities — Shinjuku and Akihabara have multiple competitive options.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Related guides & tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <p className="font-semibold text-stone-900">Japan Budget Estimator</p>
                <p className="text-sm text-stone-600">Calculate your total trip cost across accommodation, food, transport, and activities — in yen and USD.</p>
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href="/tools/budget-estimator">Open estimator</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <p className="font-semibold text-stone-900">JR Rail Pass Calculator</p>
                <p className="text-sm text-stone-600">Check whether the 7-day JR Pass pays off for your specific route before you buy.</p>
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href="/tools/rail-pass-calculator">Calculate now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
