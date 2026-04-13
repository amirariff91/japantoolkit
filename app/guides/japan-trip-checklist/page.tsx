import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailCaptureForm } from "@/components/email-capture-form";

export const metadata: Metadata = {
  title: "Japan Trip Checklist — Everything You Need to Plan Your Trip",
  description:
    "A comprehensive pre-trip checklist for Japan: visas, money, transport cards, phone data, packing, and day-1 prep. Free PDF version available by email.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com/guides/japan-trip-checklist" },
  openGraph: {
    title: "Japan Trip Checklist | Japan Toolkit",
    description:
      "A comprehensive pre-trip checklist for Japan: visas, money, transport cards, phone data, packing, and day-1 prep. Free PDF version available by email.",
    url: "https://japantoolkit.cepathosting.com/guides/japan-trip-checklist",
    images: [{ url: "https://japantoolkit.cepathosting.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Japan Trip Checklist — Everything You Need to Plan Your Trip",
  description:
    "A comprehensive pre-trip checklist for Japan: visas, money, transport cards, phone data, packing, and day-1 prep. Free PDF version available by email.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: { "@type": "Organization", name: "Japan Toolkit", url: "https://japantoolkit.cepathosting.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.cepathosting.com/guides/japan-trip-checklist" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.cepathosting.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.cepathosting.com/guides" },
    { "@type": "ListItem", position: 3, name: "Japan Trip Checklist", item: "https://japantoolkit.cepathosting.com/guides/japan-trip-checklist" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a visa to visit Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Western nationalities (US, UK, EU, Australia, Canada, and others) receive a 90-day visa-free entry stamp on arrival. Check your specific nationality at the Japanese Ministry of Foreign Affairs website before travel.",
      },
    },
    {
      "@type": "Question",
      name: "How much cash should I bring to Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Withdraw ¥30,000–50,000 on arrival from a 7-Eleven ATM. Japan is still heavily cash-dependent — most local restaurants, shrines, and smaller shops are cash-only. Plan to withdraw regularly throughout your trip.",
      },
    },
  ],
};

const checklist = [
  {
    section: "Pre-trip essentials",
    icon: "📋",
    items: [
      "Check passport validity — Japan only requires your passport to be valid for the duration of your stay (no 6-month rule)",
      "Check visa requirements for your nationality (most Western countries get 90-day visa-free entry)",
      "Book flights and note JR Pass purchase deadlines (must buy before arrival in many cases)",
      "Arrange travel insurance — include trip cancellation and medical cover",
      "Make digital copies of passport, travel insurance, and hotel confirmations",
      "Check if your bank cards work overseas and notify your bank of travel dates",
      "Download offline maps (Google Maps or Maps.me) for your cities",
      "Download Google Translate and cache the Japanese offline pack",
    ],
  },
  {
    section: "Money & payments",
    icon: "💴",
    items: [
      "Order or set up a Wise card or similar low-fee travel card",
      "Add Suica to Apple Wallet / Google Wallet before you fly (optional but very useful)",
      "Identify nearest 7-Eleven to your accommodation for first ATM run",
      "Plan to withdraw ¥30,000–50,000 on arrival to cover first few days",
      "Bring small emergency amount of USD or EUR as backup",
      "Set up a VPN if using banking apps on public Wi-Fi",
    ],
  },
  {
    section: "Transport",
    icon: "🚄",
    items: [
      "Decide whether JR Pass is worth it for your route (use the Rail Pass Calculator)",
      "Buy JR Pass in advance if needed — significantly cheaper before arrival",
      "Plan your airport transfer: Narita Express, Limousine Bus, or local rail",
      "Research IC card top-up options at your arrival airport",
      "Download Hyperdia or Google Maps for transit routing",
      "Book Shinkansen reserved seats for busy travel days (Golden Week, holidays)",
    ],
  },
  {
    section: "Phone & data",
    icon: "📱",
    items: [
      "Choose eSIM vs pocket Wi-Fi for your group (use the eSIM Comparison Tool)",
      "Purchase eSIM in advance — activate only on arrival in Japan",
      "Download your eSIM provider's app for management",
      "Save hotel addresses in Japanese characters (for taxis and asking locals)",
      "Add emergency contact numbers: Japan emergency 110 (police) / 119 (ambulance)",
      "Download Suica app if using mobile IC card",
    ],
  },
  {
    section: "Packing",
    icon: "🎒",
    items: [
      "Comfortable walking shoes — you will walk 15,000–25,000 steps per day",
      "IC card holder or phone with NFC for transit",
      "Universal power adapter (Japan uses Type A plugs, same as US — no adapter needed for US travelers)",
      "Cash wallet — many Japanese wallets have dedicated coin pouches",
      "Portable battery pack — long sightseeing days drain phones",
      "Small day bag or packable tote for day trips",
      "Light rain jacket or compact umbrella — pick one up at a 100-yen shop on arrival",
      "Modest cover-up for temple visits if travelling in summer",
      "Any prescription medication with documentation (some medications banned in Japan)",
    ],
  },
  {
    section: "Day 1 in Japan",
    icon: "🗾",
    items: [
      "Activate eSIM or pick up pocket Wi-Fi at the airport",
      "Get Suica / Pasmo IC card at the station if not using mobile version",
      "Withdraw yen from 7-Eleven ATM (look for them at or near the airport)",
      "Check in at accommodation and leave heavy luggage (takkyubin/luggage forwarding available)",
      "Locate nearest convenience store (FamilyMart, 7-Eleven, Lawson) — your best friend in Japan",
      "Download any remaining offline content (maps, translate) on airport/hotel Wi-Fi",
      "Check the day's temple/attraction hours — many are 9am–5pm",
      "Do not tip at restaurants, taxis, or hotels",
    ],
  },
];

export default function JapanTripChecklistPage() {
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
        <span className="text-stone-700">Japan trip checklist</span>
      </nav>

      {/* Hero + Email Capture */}
      <section className="space-y-6 rounded-[2rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,251,235,0.95),rgba(255,237,213,0.85))] px-6 py-10 md:px-10">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Free Checklist</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Japan trip checklist
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-stone-700">
          Everything you need to prepare for Japan — from passport checks to day-1 logistics. Use this page, or get the printable PDF version sent to your inbox.
        </p>

        <div className="max-w-xl space-y-3">
          <p className="font-semibold text-stone-900">Get the PDF version in your inbox</p>
          <EmailCaptureForm source="japan-checklist" />
          <p className="text-xs text-stone-500">No spam. Just the checklist, once.</p>
        </div>
      </section>

      {/* Checklist Sections */}
      {checklist.map((section) => (
        <section key={section.section} className="space-y-4">
          <h2 className="flex items-center gap-3 text-2xl font-semibold text-stone-900">
            <span aria-hidden="true">{section.icon}</span> {section.section}
          </h2>
          <Card className="border-stone-200 bg-white/85 shadow-sm">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-stone-300 bg-white text-stone-400 text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      ))}

      {/* Tools CTA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">Planning tools referenced above</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "Rail Pass Calculator", desc: "Check if the JR Pass pays off for your route", href: "/tools/rail-pass-calculator" },
            { title: "eSIM vs Pocket Wi-Fi", desc: "Quiz to choose the right data option for your group", href: "/tools/esim-vs-pocket-wifi" },
            { title: "Budget Estimator", desc: "Build a realistic daily cost estimate in yen and USD", href: "/tools/budget-estimator" },
          ].map((tool) => (
            <Card key={tool.href} className="border-stone-200 bg-white/85 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-stone-600">{tool.desc}</p>
                <Link href={tool.href} className="text-sm font-medium text-amber-700 underline-offset-4 hover:underline">
                  Open tool →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom email capture */}
      <section className="rounded-[2rem] border border-stone-200 bg-stone-900 px-6 py-10 text-stone-50 md:px-10">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Take it with you</p>
          <h2 className="text-2xl font-semibold tracking-tight">Get the printable PDF version</h2>
          <p className="text-stone-300">Formatted for printing or saving to your phone. All 6 sections, one page.</p>
          <EmailCaptureForm source="japan-checklist-bottom" className="[&_input]:bg-white/10 [&_input]:border-white/20 [&_input]:text-white [&_input]:placeholder:text-stone-400" />
        </div>
      </section>
    </div>
    </>
  );
}
