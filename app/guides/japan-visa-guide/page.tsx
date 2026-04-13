import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailCaptureForm } from "@/components/email-capture-form";

export const metadata: Metadata = {
  title: "Japan Visa Guide 2026: Requirements for Malaysia, Singapore, US, UK & Australia",
  description:
    "Everything you need to know about visiting Japan visa-free: length of stay, passport validity, entry requirements, and what to prepare before you fly.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com/guides/japan-visa-guide" },
  openGraph: {
    title: "Japan Visa Guide 2026: Visa-Free Rules for Malaysia, Singapore, US, UK & Australia | Japan Toolkit",
    description:
      "Everything you need to know about visiting Japan visa-free: length of stay, passport validity, entry requirements, and what to prepare before you fly.",
    url: "https://japantoolkit.cepathosting.com/guides/japan-visa-guide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ─── Semantic variant map ─────────────────────────────────────────────────────
const CARD_VARIANTS = {
  tip: "border-l-4 border-l-amber-400 bg-amber-50/60",
  warning: "border-l-4 border-l-rose-400 bg-rose-50/60",
  recommended: "border-l-4 border-l-emerald-400 bg-emerald-50/60",
  info: "border-l-4 border-l-blue-400 bg-blue-50/60",
} as const;

// ─── Data ─────────────────────────────────────────────────────────────────────
const VISA_DATA = [
  {
    country: "Malaysia",
    flag: "🇲🇾",
    visaFree: true,
    stayDays: 15,
    passportValidity: "Valid for duration of stay",
    requirements: ["Return/onward ticket", "Proof of accommodation"],
    notes: "Extension to 30 days possible at an immigration office. Do not assume 90 days — Malaysia is 15 days only.",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    visaFree: true,
    stayDays: 90,
    passportValidity: "Valid for duration of stay",
    requirements: ["Return/onward ticket"],
    notes: null,
  },
  {
    country: "United States",
    flag: "🇺🇸",
    visaFree: true,
    stayDays: 90,
    passportValidity: "Valid for duration of stay",
    requirements: ["Return/onward ticket", "Proof of sufficient funds"],
    notes: "90 days per visit. Some sources cite a 180-day-per-year guideline — immigration officers may take prior entry history into account.",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    visaFree: true,
    stayDays: 90,
    passportValidity: "Valid for duration of stay",
    requirements: ["Return/onward ticket"],
    notes: null,
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    visaFree: true,
    stayDays: 90,
    passportValidity: "Valid for duration of stay",
    requirements: ["Return/onward ticket", "Proof of sufficient funds"],
    notes: null,
  },
] as const;

const PREPARE_ITEMS = [
  {
    icon: "📱",
    title: "eSIM or pocket Wi-Fi",
    body: "Japan has excellent mobile coverage. Set up an eSIM before you land, or pick up a pocket Wi-Fi at the airport. You'll need internet to show Visit Japan Web QR codes and navigate.",
    link: { href: "/tools/esim-vs-pocket-wifi", label: "eSIM vs Pocket Wi-Fi tool →" },
  },
  {
    icon: "💴",
    title: "Cash in yen",
    body: "Japan is still heavily cash-dependent. Withdraw ¥30,000–50,000 on arrival from a 7-Eleven ATM (open 24/7, accepts foreign cards). Don't rely on cards alone.",
    link: { href: "/guides/cash-and-currency-in-japan", label: "Cash & currency guide →" },
  },
  {
    icon: "🏠",
    title: "Accommodation confirmation",
    body: "Print or screenshot your hotel confirmation. Immigration officers sometimes ask for it. Having your first-night address ready avoids delays at the counter.",
    link: null,
  },
  {
    icon: "🎫",
    title: "Return or onward ticket",
    body: "A booked return or connecting flight is the most commonly cited entry requirement across all nationalities. Have it accessible on your phone.",
    link: null,
  },
  {
    icon: "🚇",
    title: "IC card (Suica or Pasmo)",
    body: "Load a Suica on Apple Wallet before you board — no physical card needed. It works on trains, buses, and convenience stores from the moment you land.",
    link: { href: "/guides/ic-card-japan", label: "IC card guide →" },
  },
] as const;

// ─── Schemas ──────────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Japan Visa Guide 2026: Requirements for Malaysia, Singapore, US, UK & Australia",
  description:
    "Everything you need to know about visiting Japan visa-free: length of stay, passport validity, entry requirements, and what to prepare before you fly.",
  image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: { "@type": "Organization", name: "Japan Toolkit", url: "https://japantoolkit.cepathosting.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.cepathosting.com/guides/japan-visa-guide" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.cepathosting.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.cepathosting.com/guides" },
    { "@type": "ListItem", position: 3, name: "Japan Visa Guide", item: "https://japantoolkit.cepathosting.com/guides/japan-visa-guide" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long can Malaysians stay in Japan without a visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malaysian passport holders can stay in Japan visa-free for up to 15 days. This is shorter than many other nationalities (who receive 90 days). An extension to 30 days may be possible at an immigration office, but this is not guaranteed. Always verify the current rules at the Japanese Ministry of Foreign Affairs website before travel.",
      },
    },
    {
      "@type": "Question",
      name: "Can I extend my stay in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In some cases, yes. You can apply for an extension at a Regional Immigration Services Bureau inside Japan. For Malaysian nationals on a 15-day stamp, an extension to 30 days is sometimes granted. For most other nationalities on a 90-day stamp, extensions are rarely approved for tourism purposes. Do not overstay — the consequences include a deportation record and multi-year ban.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need travel insurance to enter Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Travel insurance is not a formal visa-free entry requirement for most nationalities. However, it is strongly recommended. Japanese healthcare is excellent but expensive for foreigners without national insurance. A travel insurance policy with at least USD 100,000 medical cover is wise. Some policies also cover trip cancellation, which is worth having given Japan's occasional natural weather disruptions.",
      },
    },
    {
      "@type": "Question",
      name: "What is Visit Japan Web and do I need to register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit Japan Web is Japan's official digital pre-registration system for immigration and customs. You enter your passport details and flight information in advance, and receive a QR code that can speed up border processing at major airports. Registration is free and not mandatory, but it reduces queuing time significantly at busy airports like Narita and Haneda. Register at vjw-lp.digital.go.jp at least a few days before departure.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my passport expires soon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japan's entry requirement is that your passport is valid for the duration of your stay — there is no strict '6 months beyond travel' rule like some other countries impose. However, if your passport expires in fewer than 6 months, you should consider renewing it before travel anyway. Airlines may have their own passport validity rules that differ from Japan's, and some connecting countries may apply a 6-month rule in transit.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to show proof of funds at Japanese immigration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Officially, US, Australian, and some other passport holders may be asked to show proof of sufficient funds for their stay. In practice, immigration officers rarely ask, but you should be prepared to show a bank statement, credit card, or cash if requested. A rough guideline is ¥10,000–15,000 per day of planned stay. Having your hotel confirmation and return ticket ready makes the process smoother.",
      },
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function JapanVisaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-14 py-10">
        {/* ── Hero ── */}
        <section className="space-y-5">
          <nav aria-label="Breadcrumb" className="flex gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-stone-800">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-stone-800">Guides</Link>
            <span>/</span>
            <span className="text-stone-800">Japan Visa Guide</span>
          </nav>

          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Visa &amp; Entry</Badge>

          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Japan Visa Guide 2026: What You Need to Know Before You Go
          </h1>

          <p className="text-sm text-stone-500">By Yiyan · Last reviewed: March 2026</p>

          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            Japan is visa-free for travellers from over 60 countries — but the rules differ by nationality. This guide covers entry requirements for Malaysia, Singapore, the US, the UK, and Australia, plus what to prepare before you land and how to use Visit Japan Web to speed through immigration.
          </p>

          <div className={`rounded-lg p-4 ${CARD_VARIANTS.warning}`}>
            <p className="text-sm font-medium text-stone-800">
              <strong>Verify with official sources before travel.</strong> Visa rules change. Always confirm your nationality&apos;s requirements at the{" "}
              <a
                href="https://www.mofa.go.jp/j_info/visit/visa/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-600"
              >
                Japanese Ministry of Foreign Affairs
              </a>{" "}
              website before booking flights. This guide is for general reference only.
            </p>
          </div>

          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80"
              alt="Japan torii gate — Japan visa guide"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Quick Answer Bar ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Quick answer: am I visa-free?</h2>
          <div className={`rounded-lg p-5 ${CARD_VARIANTS.recommended}`}>
            <p className="text-base font-medium text-stone-800">
              🇲🇾 Malaysia — visa-free, <strong>15 days</strong> &nbsp;·&nbsp;
              🇸🇬 Singapore — visa-free, <strong>90 days</strong> &nbsp;·&nbsp;
              🇺🇸 United States — visa-free, <strong>90 days</strong> &nbsp;·&nbsp;
              🇬🇧 United Kingdom — visa-free, <strong>90 days</strong> &nbsp;·&nbsp;
              🇦🇺 Australia — visa-free, <strong>90 days</strong>
            </p>
            <p className="mt-2 text-sm text-stone-600">
              Holding a visa-free passport doesn&apos;t remove all entry requirements. Read the per-country details below — officers can still deny entry if you don&apos;t have the right documents.
            </p>
          </div>
        </section>

        {/* ── Per-Country Cards ── */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Visa-free entry details by country</h2>
          <p className="text-stone-600">
            Each card lists the key facts immigration officers care about. Malaysian travellers: note that Japan&apos;s 15-day limit is shorter than most other nationalities — plan accordingly.
          </p>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {VISA_DATA.map((entry) => (
              <Card key={entry.country} className="border-stone-200 bg-white/85 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">{entry.flag}</span>
                    {entry.country}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">Visa-free</Badge>
                    <span className="text-sm font-semibold text-stone-700">Up to {entry.stayDays} days</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-stone-700">Passport validity</p>
                    <p className="text-stone-600">{entry.passportValidity}</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-700">Entry requirements</p>
                    <ul className="mt-1 list-inside list-disc space-y-0.5 text-stone-600">
                      {entry.requirements.map((req) => (
                        <li key={req}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  {entry.notes && (
                    <div className="rounded-md bg-amber-50 px-3 py-2 text-amber-800">
                      <p className="text-xs">{entry.notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── What to Prepare ── */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">What to prepare before you fly</h2>
          <p className="text-stone-600">
            Having these ready before boarding avoids stress at immigration. Cross-reference with the full{" "}
            <Link href="/guides/japan-trip-checklist" className="font-medium text-amber-700 underline hover:text-amber-600">
              Japan trip checklist
            </Link>{" "}
            for a complete pre-departure rundown.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {PREPARE_ITEMS.map((item) => (
              <Card key={item.title} className="border-stone-200 bg-white/85 shadow-sm">
                <CardContent className="pt-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="space-y-1">
                      <p className="font-semibold text-stone-900">{item.title}</p>
                      <p className="text-sm leading-relaxed text-stone-600">{item.body}</p>
                      {item.link && (
                        <Link href={item.link.href} className="text-sm font-medium text-amber-700 hover:text-amber-600">
                          {item.link.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Visit Japan Web ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Visit Japan Web — the digital immigration card</h2>
          <div className={`rounded-lg p-5 ${CARD_VARIANTS.info}`}>
            <p className="text-sm font-medium text-blue-900">
              Visit Japan Web is Japan&apos;s official pre-registration system. Register your passport and flight details in advance to receive a QR code that speeds up immigration and customs. It is <strong>free</strong> and not mandatory, but it saves significant time at busy airports.
            </p>
          </div>

          <div className="space-y-4 text-stone-700">
            <h3 className="text-lg font-semibold text-stone-900">What Visit Japan Web covers</h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="mt-0.5 text-emerald-600">✓</span>
                <span><strong>Immigration card:</strong> replaces the paper disembarkation card you would otherwise fill in on the plane. Your details are pre-filled from your registration.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-emerald-600">✓</span>
                <span><strong>Customs declaration:</strong> submit your customs declaration digitally and show a QR code on landing instead of filling out paper forms.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-emerald-600">✓</span>
                <span><strong>Fast-track lanes:</strong> at Narita, Haneda, Kansai, and other major airports, registered travellers can use dedicated QR code lanes that are typically faster than standard queues.</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-stone-900">How to register</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm leading-relaxed">
              <li>Visit the Visit Japan Web portal (vjw-lp.digital.go.jp) — use the official .go.jp government domain only</li>
              <li>Create an account with your email address</li>
              <li>Enter your passport details, travel dates, and flight information</li>
              <li>Submit your registration at least 3 days before departure (earlier is fine)</li>
              <li>Save or screenshot your QR codes for immigration and customs</li>
            </ol>

            <div className={`rounded-lg p-4 ${CARD_VARIANTS.tip}`}>
              <p className="text-sm text-amber-900">
                <strong>Tip:</strong> Register your full trip before departure, not at the airport. Airport Wi-Fi can be slow and you don&apos;t want to scramble while in the immigration queue.
              </p>
            </div>
          </div>
        </section>

        {/* ── Overstay Warning ── */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Do not overstay</h2>
          <div className={`rounded-lg p-5 ${CARD_VARIANTS.warning}`}>
            <p className="text-sm text-stone-800">
              <strong>Overstaying your visa-free period is a serious offence.</strong> Consequences include detention, deportation at your own cost, and a ban from re-entering Japan (often 5 years or more). Japan tracks all entry and exit records. If your stay is approaching the limit, either depart or visit a Regional Immigration Services Bureau well before your permitted date expires.
            </p>
          </div>
        </section>

        {/* ── Email Capture ── */}
        <section>
          <EmailCaptureForm source="visa-guide" />
        </section>

        {/* ── FAQ ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Frequently asked questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "How long can Malaysians stay in Japan without a visa?",
                a: "Malaysian passport holders can stay visa-free for up to 15 days. This is one of the shorter allowances — many travellers mistakenly assume 90 days. An extension to 30 days may be possible at an immigration office but is not guaranteed. Always check the latest rules at the Japanese Ministry of Foreign Affairs website.",
              },
              {
                q: "Can I extend my stay in Japan?",
                a: "Sometimes. Applications are made at a Regional Immigration Services Bureau inside Japan. For Malaysian nationals on a 15-day stamp, an extension to 30 days is occasionally granted. For most other nationalities on a 90-day stamp, extensions are rarely approved for tourism. Do not overstay — the consequences include deportation and a ban from re-entering Japan.",
              },
              {
                q: "Do I need travel insurance to enter Japan?",
                a: "Travel insurance is not a formal entry requirement for most visa-free nationalities. However, Japanese healthcare is excellent but expensive for foreigners. A policy with at least USD 100,000 medical cover is strongly recommended. Some travellers' comprehensive policies include Japan coverage by default — check yours.",
              },
              {
                q: "What is Visit Japan Web and do I need to register?",
                a: "Visit Japan Web is Japan's official digital pre-registration system for immigration and customs. You enter your passport and flight details in advance to receive a QR code that speeds up border processing. Registration is free and not mandatory, but it reduces queuing time significantly at major airports like Narita and Haneda.",
              },
              {
                q: "What happens if my passport is expiring soon?",
                a: "Japan requires your passport to be valid for the duration of your stay only — there is no strict 6-month-beyond rule. However, renewing before travel is wise anyway, as airlines and transit countries may have their own rules. If you're connecting through any country with a 6-month validity requirement, that country's rules apply.",
              },
              {
                q: "Do I need to show proof of funds at Japanese immigration?",
                a: "Officially, US, Australian, and some other passport holders may be asked for proof of sufficient funds. In practice this is rare, but you should be prepared: a bank statement, credit card with adequate limit, or cash on hand. A rough guideline is ¥10,000–15,000 per day of your intended stay. Hotel confirmation and a return ticket reduce the chance of being asked.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-lg border border-stone-200 bg-white/85">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-stone-900 marker:content-none hover:text-stone-700">
                  {q}
                  <span className="ml-3 text-stone-400 transition-transform group-open:rotate-180">▾</span>
                </summary>
                <div className="border-t border-stone-100 px-4 pb-4 pt-3 text-sm leading-relaxed text-stone-700">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Related Guides ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Plan the rest of your trip</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-5">
                <p className="font-semibold text-stone-900">Japan Trip Checklist</p>
                <p className="mt-1 text-sm text-stone-600">Complete pre-departure checklist — visa, money, transport cards, SIM, and packing all in one place.</p>
                <Button asChild variant="outline" className="mt-3 border-stone-300 bg-white">
                  <Link href="/guides/japan-trip-checklist">Read the checklist →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-5">
                <p className="font-semibold text-stone-900">Cash &amp; Currency in Japan</p>
                <p className="mt-1 text-sm text-stone-600">Where to get yen, how 7-Eleven ATMs work, and when cash vs card is the smarter choice.</p>
                <Button asChild variant="outline" className="mt-3 border-stone-300 bg-white">
                  <Link href="/guides/cash-and-currency-in-japan">Read the guide →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-5">
                <p className="font-semibold text-stone-900">IC Cards in Japan</p>
                <p className="mt-1 text-sm text-stone-600">Suica vs Pasmo vs ICOCA — which one to get, how to top up, and how to add it to your iPhone before you land.</p>
                <Button asChild variant="outline" className="mt-3 border-stone-300 bg-white">
                  <Link href="/guides/ic-card-japan">Read the guide →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-stone-200 bg-white/85 shadow-sm">
              <CardContent className="pt-5">
                <p className="font-semibold text-stone-900">eSIM vs Pocket Wi-Fi</p>
                <p className="mt-1 text-sm text-stone-600">Stay connected from the moment you land. Compare eSIM and pocket Wi-Fi to find the right fit for your trip.</p>
                <Button asChild variant="outline" className="mt-3 border-stone-300 bg-white">
                  <Link href="/tools/esim-vs-pocket-wifi">Use the comparison tool →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <section>
          <div className={`rounded-lg p-5 ${CARD_VARIANTS.warning}`}>
            <p className="text-sm text-stone-700">
              <strong>Disclaimer:</strong> Visa and entry rules change without notice. This guide reflects publicly available information as of March 2026 and is intended for general reference only. Always verify your specific nationality&apos;s requirements at the official{" "}
              <a
                href="https://www.mofa.go.jp/j_info/visit/visa/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline hover:text-stone-600"
              >
                Japanese Ministry of Foreign Affairs
              </a>{" "}
              website before making any travel decisions. Japan Toolkit accepts no responsibility for decisions made based on information on this page.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
