import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "IC Card Japan Guide: Suica vs Pasmo vs ICOCA — Which One Do You Need?",
  description:
    "Everything you need to know about IC cards in Japan: Suica vs Pasmo vs ICOCA, how to get one at the airport, how to top up, deposit and refund rules, and using Mobile Suica on iPhone before you land.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com/guides/ic-card-japan" },
  openGraph: {
    title: "IC Card Japan Guide: Suica vs Pasmo vs ICOCA | Japan Toolkit",
    description:
      "Everything you need to know about IC cards in Japan: Suica vs Pasmo vs ICOCA, how to get one at the airport, how to top up, deposit and refund rules, and using Mobile Suica on iPhone before you land.",
    url: "https://japantoolkit.cepathosting.com/guides/ic-card-japan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const IC_CARDS = [
  {
    name: "Suica",
    issuer: "JR East",
    region: "Tokyo & nationwide",
    bestFor: "First-timers, iPhone / Android users",
    nationwide: true,
    mobileWallet: true,
    notes: "The default choice. Works everywhere, loadable to Apple/Google Wallet before you land.",
    recommended: true,
  },
  {
    name: "Pasmo",
    issuer: "Tokyo Metro / private railways",
    region: "Tokyo & Kanto",
    bestFor: "Tokyo subway focus",
    nationwide: true,
    mobileWallet: true,
    notes: "Functionally identical to Suica for tourists. Pasmo Passport is a tourist-specific version (no deposit, but slightly different top-up rules).",
    recommended: false,
  },
  {
    name: "ICOCA",
    issuer: "JR West",
    region: "Osaka / Kyoto / Kobe / Hiroshima",
    bestFor: "Kansai-only trips",
    nationwide: true,
    mobileWallet: false,
    notes: "Issued at Kansai airports and JR West stations. Works nationally, but cannot be added to Apple Wallet.",
    recommended: false,
  },
  {
    name: "Manaca",
    issuer: "Meitetsu / Kintetsu / Nagoya City",
    region: "Nagoya & Chubu",
    bestFor: "Nagoya visitors",
    nationwide: true,
    mobileWallet: false,
    notes: "Only worth getting if you're spending significant time in Nagoya. A Suica will cover you anyway.",
    recommended: false,
  },
] as const;

const worksAt = [
  { category: "JR trains", detail: "All JR local and rapid trains across Japan", works: true },
  { category: "Tokyo Metro & Toei Subway", detail: "All subway lines in Tokyo", works: true },
  { category: "Osaka Metro & hankyu/Kintetsu lines", detail: "All major Kansai private railways", works: true },
  { category: "City buses", detail: "Most urban bus networks across Japan", works: true },
  { category: "Airport express trains", detail: "Narita Express, Haruka (Osaka), Monorails", works: true },
  { category: "Convenience stores", detail: "7-Eleven, Lawson, FamilyMart, NewDays, KIOSK", works: true },
  { category: "Vending machines", detail: "Most machines have a Suica/IC reader", works: true },
  { category: "Select taxis", detail: "Tokyo taxis increasingly accept IC cards, but not all", works: true },
  { category: "Station kiosks & NewDays shops", detail: "All kiosk chains inside stations", works: true },
  { category: "Some department stores & restaurants", detail: "Major chains with IC payment terminals", works: true },
] as const;

const doesNotWorkAt = [
  { category: "Shinkansen reserved seats", detail: "You still need a separate ticket or JR Pass — IC pays the Shinkansen base fare only on non-reserved free-seating cars on some routes, not for reserved/Green Car seats." },
  { category: "Non-IC rural buses", detail: "Remote town buses and many intercity highway buses use cash only. Always carry coins." },
  { category: "JR limited express surcharges", detail: "The IC card pays the base fare but not express surcharge fees. You'll need a separate ticket for the surcharge." },
  { category: "Some private ferries & cable cars", detail: "Tourist transport at scenic spots (e.g. Hakone Ropeway) typically has its own payment system." },
] as const;

const mobileSuicaSteps = [
  {
    step: 1,
    title: "Open Wallet on iPhone",
    detail: "Tap the + icon → search 'Suica' → tap 'Add' to install the Suica card. Requires iOS 16+ and an iPhone XR or later (or Apple Watch Series 4+).",
  },
  {
    step: 2,
    title: "Choose your balance and pay",
    detail: "Load an initial amount (minimum ¥1,000) using any foreign Visa, Mastercard, or Amex card — from home, before you fly. You do not need a Japanese card.",
  },
  {
    step: 3,
    title: "Arrive and tap",
    detail: "Hold your iPhone or Apple Watch to any Suica reader. No data connection required — IC chip works offline. Your phone doesn't even need to be unlocked (Express Transit mode).",
  },
  {
    step: 4,
    title: "Top up in Japan",
    detail: "Add more balance via Apple Pay in the Wallet app using your foreign card, or at any station ticket machine or convenience store ATM by selecting 'Suica'.",
  },
] as const;

const faqs = [
  {
    q: "Suica vs Pasmo — which is better?",
    a: "For tourists, they are functionally identical. Both work on every train, subway, bus, and convenience store across Tokyo and most of Japan. The only practical difference: Suica can be added to Apple Wallet and Google Wallet; Pasmo Passport (tourist version) cannot be topped up at all ATMs. Default to Suica.",
  },
  {
    q: "Can I use a Suica card in Osaka?",
    a: "Yes. Suica works on all Osaka Metro lines, Hankyu, Kintetsu, Nankai, and JR West trains in Kansai. There is no need to get a separate ICOCA card unless you specifically want a Kansai-issued card for a reason.",
  },
  {
    q: "How do I refund my IC card deposit?",
    a: "Physical cards have a ¥500 deposit refundable at any JR Green Window (Midori no Madoguchi) or staffed JR ticket office. There is a ¥220 processing fee deducted from the remaining balance at the time of refund. Budget at least 15–20 minutes. Mobile Suica has no deposit — just delete the card when done.",
  },
  {
    q: "Can I use my IC card on the Shinkansen?",
    a: "Partially. You can use an IC card for the base fare on some unreserved Shinkansen cars (Kodama on Tokaido, for example), but you cannot use it to pay for reserved seats, Green Car, or the full Nozomi/Hikari fare between Tokyo and Osaka. You still need a separate Shinkansen ticket or JR Pass for those.",
  },
  {
    q: "What if my IC card runs out of balance?",
    a: "Gates will reject you if you have insufficient balance. You'll need to go to the 'Fare Adjustment' machine (精算機) near the exit gate and pay the shortfall in cash. To avoid this, always keep at least ¥1,000 on your card — top up at any station machine or convenience store.",
  },
  {
    q: "Can I share an IC card between two people?",
    a: "No. IC cards are single-user — they register a fare when you tap in and deduct it when you tap out. Two people cannot share one card on the same journey.",
  },
  {
    q: "Do I get a receipt when I pay with IC?",
    a: "Not typically for small purchases. For transit, your journey history is stored on the card and readable at any station history printer (履歴印字機). Convenience stores can print receipts as normal.",
  },
] as const;

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IC Card Japan Guide: Suica vs Pasmo vs ICOCA — Which One Do You Need?",
  description:
    "Everything you need to know about IC cards in Japan: Suica vs Pasmo vs ICOCA, how to get one at the airport, how to top up, deposit and refund rules, and using Mobile Suica on iPhone before you land.",
  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: { "@type": "Organization", name: "Japan Toolkit", url: "https://japantoolkit.cepathosting.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.cepathosting.com/guides/ic-card-japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.cepathosting.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.cepathosting.com/guides" },
    { "@type": "ListItem", position: 3, name: "IC Cards in Japan", item: "https://japantoolkit.cepathosting.com/guides/ic-card-japan" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IcCardJapanPage() {
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
          <span className="text-stone-700">IC Cards in Japan</span>
        </nav>

        {/* Hero */}
        <section className="space-y-5">
          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Transport</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            IC Cards in Japan: Suica vs Pasmo vs ICOCA — Which One to Get
          </h1>
          <p className="text-sm text-stone-500">By Yiyan · Last reviewed: March 2026</p>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80"
              alt="Tokyo train station platform with passengers"
              fill
              className="object-cover"
            />
          </div>
          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            An IC card is the single most useful thing you can set up before a Japan trip. It replaces ticket queues, works on every train and subway in the country, pays for convenience store lunches, and — if you use a Suica on iPhone — can be loaded with yen from your home country before you even board the plane.
          </p>
        </section>

        {/* What is an IC card */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">What is an IC card?</h2>
          <p className="text-stone-700">
            IC stands for <em>Integrated Circuit</em> — a contactless stored-value card you load with cash and tap against readers. Think of it as a prepaid transit and payment card, similar to London&apos;s Oyster card or Hong Kong&apos;s Octopus. In Japan, IC cards work on:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-stone-700">
            <li>All major trains and subways (JR lines, Tokyo Metro, Osaka Metro, and most private railways)</li>
            <li>Most city buses</li>
            <li>Convenience stores (7-Eleven, Lawson, FamilyMart)</li>
            <li>Vending machines</li>
            <li>Some taxis, kiosks, and shops</li>
          </ul>
          <p className="text-stone-700">
            There is no need to figure out fares or queue at ticket machines — you tap in, tap out, and the correct fare is deducted automatically.
          </p>
        </section>

        {/* Recommendation callout */}
        <section>
          <Card className="border-amber-300 bg-amber-50/60">
            <CardContent className="pt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Our recommendation</p>
              <p className="text-stone-900 font-semibold text-lg">Just get a Suica.</p>
              <p className="text-stone-700 text-sm leading-6">
                Suica works everywhere in Japan, can be added to Apple Wallet or Google Wallet before you fly, and is issued at every major airport and JR station. Unless you have a specific reason to use a different card, Suica is the right choice for virtually every visitor.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Suica vs Pasmo vs ICOCA — comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">Card</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Issued by</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 sm:table-cell">Home region</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Works nationwide?</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 md:table-cell">Mobile wallet?</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 lg:table-cell">Best for</th>
                </tr>
              </thead>
              <tbody>
                {IC_CARDS.map((card, i) => (
                  <tr key={card.name} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 align-top font-medium text-stone-900">
                      <span>{card.name}</span>
                      {card.recommended && (
                        <Badge className="ml-2 bg-amber-700 text-white text-[10px] hover:bg-amber-700">
                          Recommended
                        </Badge>
                      )}
                    </td>
                    <td className="px-5 py-3 align-top text-stone-600">{card.issuer}</td>
                    <td className="hidden px-5 py-3 align-top text-stone-600 sm:table-cell">{card.region}</td>
                    <td className="px-5 py-3 align-top text-stone-600">
                      {card.nationwide ? "✅ Yes" : "⚠️ Limited"}
                    </td>
                    <td className="hidden px-5 py-3 align-top text-stone-600 md:table-cell">
                      {card.mobileWallet ? "✅ Yes" : "❌ No"}
                    </td>
                    <td className="hidden px-5 py-3 align-top text-stone-600 lg:table-cell">{card.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {IC_CARDS.map((card) => (
              <div key={card.name} className="rounded-xl border border-stone-200 bg-white/85 px-4 py-3">
                <p className="text-sm">
                  <span className="font-semibold text-stone-900">{card.name}:</span>{" "}
                  <span className="text-stone-600">{card.notes}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to get one */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">How to get an IC card</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-stone-200 bg-white/85 shadow-sm border-l-4 border-l-amber-400">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <span aria-hidden="true">✈️</span> Airport on arrival
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600">
                  JR East ticket machines at Narita Airport (Terminal 1 & 2) and Haneda Airport sell Suica. Kansai International and Osaka Itami sell ICOCA. Look for green JR ticket machines in the arrivals hall. Cost: ¥500 deposit + initial charge amount.
                </p>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm border-l-4 border-l-blue-400">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <span aria-hidden="true">🚉</span> Any JR station
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600">
                  Ticket machines at any JR East station sell Suica. Select &quot;Buy new Suica&quot; from the English menu. Machines accept ¥1,000, ¥5,000, and ¥10,000 notes. Minimum total: ¥1,500 (¥500 deposit + ¥1,000 charge).
                </p>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm border-l-4 border-l-emerald-400">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <span aria-hidden="true">📱</span> Apple / Google Wallet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600">
                  Add Suica to your iPhone Wallet app from anywhere in the world, before you fly. Load yen using a foreign Visa, Mastercard, or Amex. No physical card, no deposit. This is the best option for iPhone users.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50/60 px-5 py-4 text-sm text-stone-700">
            <span className="font-semibold">Note on Suica for tourists (2024–):</span> JR East periodically pauses physical tourist Suica cards during peak periods (Golden Week, cherry blossom season). Mobile Suica is unaffected. If physical cards are sold out at the airport, add Suica to Apple/Google Wallet instead.
          </div>
        </section>

        {/* How to top up */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">How to top up</h2>
          <p className="text-stone-700">
            You can add money to your IC card at any of these locations. Always top up before you need to — gates will reject entry if your balance is too low for the fare.
          </p>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">Where</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">How</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { where: "Station ticket machines", how: "Insert card → select 'Charge' → insert cash. ¥1,000 minimum. English interface available." },
                  { where: "Convenience stores", how: "Hand card to cashier and say 'Suica charge, [amount] yen please'. 7-Eleven, Lawson, and FamilyMart all work. Cash only." },
                  { where: "Apple Pay / Google Pay (Mobile Suica)", how: "Open Wallet → tap your Suica card → tap 'Add Money' → enter amount → pay with your card. Works from anywhere, any currency." },
                  { where: "Suica app (physical card holders)", how: "Register your physical card in the Suica app and top up using a Japanese credit card. Foreign cards not accepted in this flow." },
                ].map((row, i) => (
                  <tr key={row.where} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 font-medium text-stone-900 align-top">{row.where}</td>
                    <td className="px-5 py-3 text-stone-600">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-600">
            Maximum balance: ¥20,000 per card. Minimum top-up: ¥1,000.
          </p>
        </section>

        {/* Mobile Suica on iPhone */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Mobile Suica on iPhone — step by step</h2>
          <p className="text-stone-700">
            Mobile Suica on iPhone is the smoothest way to travel in Japan. Set it up at home, arrive with yen already loaded, and never touch a ticket machine. Your iPhone works as an IC card even when the battery is low, and you don&apos;t need internet to tap through gates.
          </p>
          <div className="space-y-3">
            {mobileSuicaSteps.map((s) => (
              <div key={s.step} className="flex gap-4 rounded-2xl border border-stone-200 bg-white/85 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-bold text-white">
                  {s.step}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-stone-900">{s.title}</p>
                  <p className="text-sm text-stone-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <Card className="border-blue-200 bg-blue-50/40">
            <CardContent className="pt-6 space-y-2">
              <p className="font-semibold text-stone-900 text-sm">Requirements</p>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• iPhone XR or later (iPhone 8/X do not support Express Transit mode)</li>
                <li>• iOS 16 or later (iOS 14+ works but Express Transit mode requires iOS 16+)</li>
                <li>• Apple Watch Series 4+ also supported</li>
                <li>• Any foreign Visa, Mastercard, or Amex card for loading balance</li>
              </ul>
              <p className="text-sm text-stone-600 pt-1">
                Android users: Google Wallet supports Mobile Suica on most NFC-enabled Android phones. Open Google Wallet → tap + → search &quot;Suica&quot;.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Deposit & Refund */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Deposit and refund</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white/85 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Physical card deposit</p>
              <p className="text-sm text-stone-700">
                Every physical Suica, Pasmo, and ICOCA card requires a <strong>¥500 refundable deposit</strong> when purchased. This is not a charge — it&apos;s held until you return the card.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/85 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">How to get your deposit back</p>
              <p className="text-sm text-stone-700">
                Go to any <strong>JR Green Window</strong> (みどりの窓口, Midori no Madoguchi) or staffed JR ticket office before departing Japan. Hand over the card. You&apos;ll receive the ¥500 deposit minus a <strong>¥220 handling fee</strong>, plus your remaining balance (minus the same ¥220 fee). Allow 15–20 minutes. Not available at ticket machines.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/85 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Mobile Suica</p>
              <p className="text-sm text-stone-700">
                No deposit. When you&apos;re done, simply remove the Suica card from your Wallet. Any remaining balance can be transferred to a new Suica later, or cashed out via the Suica app (requires Japanese account in some flows).
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/85 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Keep it for next time</p>
              <p className="text-sm text-stone-700">
                Cards don&apos;t expire and can be used on the next Japan trip. If you&apos;re planning to return, keep the card — skip the refund hassle and the ¥220 fee.
              </p>
            </div>
          </div>
        </section>

        {/* Where it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Where IC cards work</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/85">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-stone-700">Category</th>
                  <th className="hidden px-5 py-3 font-semibold text-stone-700 sm:table-cell">Detail</th>
                  <th className="px-5 py-3 font-semibold text-stone-700">Works?</th>
                </tr>
              </thead>
              <tbody>
                {worksAt.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="px-5 py-3 font-medium text-stone-900 align-top">{row.category}</td>
                    <td className="hidden px-5 py-3 text-stone-600 align-top sm:table-cell">{row.detail}</td>
                    <td className="px-5 py-3 align-top text-emerald-700 font-medium">✅ Yes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Where it does NOT work */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Where IC cards do <em>not</em> work</h2>
          <Card className="border-rose-200 bg-rose-50/40">
            <CardContent className="pt-6 space-y-4">
              {doesNotWorkAt.map((row) => (
                <div key={row.category} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-rose-600">✗</span>
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{row.category}</p>
                    <p className="text-sm text-stone-600">{row.detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-sm text-stone-600">
            The most important one to remember: your IC card will not pay for Shinkansen reserved seats. Always carry a separate Shinkansen ticket or JR Pass for bullet train journeys.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.q} className="border-stone-200 bg-white/85 shadow-sm">
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-stone-900">{faq.q}</h3>
                  <p className="text-stone-700 text-sm leading-6">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-stone-900">Related guides & tools</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <p className="font-semibold text-stone-900">Cash & Currency in Japan</p>
                <p className="text-sm text-stone-600">Where to get yen, how 7-Eleven ATMs work, and how cards compare to IC for daily spending.</p>
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href="/guides/cash-and-currency-in-japan">Read guide</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <p className="font-semibold text-stone-900">JR Rail Pass Calculator</p>
                <p className="text-sm text-stone-600">Check whether a JR Pass beats point-to-point Shinkansen tickets for your specific itinerary.</p>
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href="/tools/rail-pass-calculator">Calculate now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <p className="font-semibold text-stone-900">Japan Trip Checklist</p>
                <p className="text-sm text-stone-600">The full pre-trip checklist — transport cards, money, data, and everything else before you fly.</p>
                <Button asChild variant="outline" className="border-stone-300 bg-white">
                  <Link href="/guides/japan-trip-checklist">View checklist</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
