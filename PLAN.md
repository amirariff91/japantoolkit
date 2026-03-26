# Japan Toolkit — Feature Implementation Plan

_Generated: 2026-03-26_

---

## Codebase Snapshot (Relevant Patterns)

Before the feature specs, a brief summary of conventions to follow:

- **Framework:** Next.js 14 App Router, TypeScript, Tailwind CSS
- **Guide pages:** Static `page.tsx` under `app/guides/[slug]/`, Article + BreadcrumbList + FAQPage JSON-LD, Unsplash hero images
- **Itineraries:** Data-driven via `lib/itineraries.ts`; dynamic route at `app/itinerary/[slug]/page.tsx`
- **Email:** Resend SDK at `app/api/subscribe/route.ts`; `<EmailCaptureForm />` client component
- **UI primitives:** `components/ui/{badge,button,card,input,label,table}.tsx`
- **Design tokens:** Stone neutrals, Amber accent (`bg-amber-700`), Rose highlights
- **SEO:** `export const metadata` + `dangerouslySetInnerHTML` JSON-LD scripts
- **Author byline:** "By Yiyan · Last reviewed: March 2026"
- **Affiliate hooks:** `<!-- TODO: AFFILIATE_ID_HERE -->` comments on Klook/Wise links

---

## Shared Components to Extract FIRST (DRY Improvements)

Extract these before building any feature — each feature will use them.

### 1. `<GuidePageHero />` — `components/guide-page-hero.tsx`

Every guide page repeats the same hero block verbatim. Extract into a server component.

```tsx
interface GuidePageHeroProps {
  breadcrumbs: { label: string; href?: string }[];  // e.g. [{label:"Home",href:"/"}, {label:"Guides",href:"/guides"}, {label:"Visa Guide"}]
  badge: string;                                     // e.g. "Visa & Entry"
  title: string;
  byline?: string;                                   // defaults to "By Yiyan · Last reviewed: March 2026"
  imageUrl: string;                                  // Unsplash URL
  imageAlt: string;
  intro: string;
}
```

Replaces 30–40 lines of repeated breadcrumb + badge + H1 + byline + image code in every guide.

### 2. `<FaqSection />` — `components/faq-section.tsx`

FAQ list rendering is repeated across guides and tools.

```tsx
interface FaqSectionProps {
  faqs: { q: string; a: string }[];
  heading?: string;  // defaults to "Frequently Asked Questions"
}
```

### 3. `<GuideCard />` — `components/guide-card.tsx`

The bordered card with a coloured left accent strip is used for neighbourhood cards, checklist sections, currency tips, etc.

```tsx
interface GuideCardProps {
  title: string;
  accentColor?: string;   // Tailwind border color class, e.g. "border-amber-500"
  children: React.ReactNode;
}
```

### 4. `<ComparisonTable />` — `components/comparison-table.tsx`

Generic table pattern seen in currency guide (credit cards, exchange rates) and eSIM tool.

```tsx
interface ComparisonTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}
```

### 5. Metadata helper — `lib/guide-metadata.ts`

```ts
export function guideMetadata(opts: {
  title: string;
  description: string;
  slug: string;           // e.g. "japan-visa-guide"
  imageUrl: string;
}): Metadata
```

Produces canonical URL, OpenGraph block, and Twitter card in one call. Eliminates ~15 duplicate lines per guide page.

**Estimated effort:** S — 1–2 hours, purely mechanical extraction. Do this first; it reduces diff noise in all subsequent features.

---

## Feature 1 — Visa Guide

**Route:** `/guides/japan-visa-guide`
**Complexity:** M

### File Structure

```
app/guides/japan-visa-guide/
└── page.tsx               (new — ~350 lines)
```

No new data files needed; all data lives inline in the page (static, changes infrequently).

### Key Content Sections

1. **Hero** — badge "Visa & Entry", title "Japan Visa Guide 2025: What You Need to Know Before You Go"
2. **Quick-answer bar** — "Malaysia ✓ · Singapore ✓ · United States ✓ · United Kingdom ✓ · Australia ✓ — all visa-free"
3. **Per-country cards** (one card per country, rendered from a data array)
   - Country name + flag emoji
   - Visa-free? Yes/No badge
   - Length of stay (e.g. 90 days)
   - Passport validity required (e.g. "Valid for duration of stay")
   - Entry requirements (onward ticket, proof of funds, accommodation)
   - Notes (e.g. Malaysia: 30 days only, extension possible)
4. **What to prepare before entry** — pocket Wi-Fi/SIM, cash, accommodation printout, Visit Japan Web QR
5. **Visit Japan Web** explainer — digital registration for immigration card
6. **FAQ** — "Can I extend my stay?", "Do I need travel insurance?", "What if my passport expires soon?"
7. **Related links** — Japan Trip Checklist, Cash & Currency guide, eSIM tool

### Data Structure

```ts
// Inline constant in page.tsx
const VISA_DATA = [
  {
    country: "Malaysia",
    flag: "🇲🇾",
    visaFree: true,
    stayDays: 15,  // note: Malaysia is 15 days, NOT 90
    passportValidity: "Valid for duration of stay",
    requirements: ["Return/onward ticket", "Proof of accommodation"],
    notes: "Extension to 30 days possible at immigration office.",
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
    notes: "90 days per visit, 180 days per year limit.",
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
```

### SEO Metadata

```ts
title: "Japan Visa Guide 2025: Requirements for Malaysia, Singapore, US, UK & Australia"
description: "Everything you need to know about visiting Japan visa-free: length of stay, passport validity, entry requirements, and what to prepare before you fly."
canonical: "https://japantoolkit.com/guides/japan-visa-guide"
keywords (natural): japan visa requirements, japan visa free countries, how long can i stay in japan, japan entry requirements 2025
```

### Schemas

- `Article` — headline, author: Yiyan, datePublished: 2026-03-26
- `BreadcrumbList` — Home › Guides › Japan Visa Guide
- `FAQPage` — 4–6 Q&A pairs (can I extend, travel insurance, Visit Japan Web, etc.)

### Component Reuse

- `<GuidePageHero />` (new shared)
- `<FaqSection />` (new shared)
- `<Badge />` — visa-free / requires visa status chips
- `<Card />` — per-country cards
- Internal link to `/guides/japan-trip-checklist` (existing)

### Affiliate Opportunities

- Visit Japan Web link (official, no affiliate)
- Klook: Japan airport transfer or Pocket Wi-Fi pickup CTA at bottom

---

## Feature 2 — 7-Day Itinerary Pages

**Routes:** `/itinerary/7-days-tokyo`, `/itinerary/7-days-osaka`, `/itinerary/7-days-tokyo-osaka`

> **Note:** The existing dynamic route is `/itinerary/[slug]` (no trailing "s"). New itineraries slot in by adding entries to `lib/itineraries.ts` — no new route files needed. The hub at `app/itinerary/page.tsx` will automatically pick them up.

**Complexity:** M (data-heavy, but zero new routing or component work)

### File Structure

```
lib/itineraries.ts          (modified — add 3 new itinerary objects)
```

That is the only change. The dynamic page, metadata, schema, and layout are already handled by `app/itinerary/[slug]/page.tsx`.

### New Itinerary Data Objects

Each follows the existing `Itinerary` type:

```ts
{
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  durationLabel: string;
  intro: string;
  highlights: string[];
  attractionDescriptions: string[];
  days: { day: number; title: string; description: string }[];
}
```

#### `7-days-tokyo`

```ts
{
  slug: "7-days-tokyo",
  title: "7 Days in Tokyo",
  seoTitle: "7-Day Tokyo Itinerary: The Complete First-Timer's Plan",
  metaDescription: "A detailed day-by-day 7-day Tokyo itinerary covering Shinjuku, Shibuya, Asakusa, Harajuku, Akihabara, and day trips to Nikko or Kamakura.",
  durationLabel: "7 Days",
  intro: "Seven days gives you enough time to cover Tokyo's headline neighbourhoods, squeeze in a day trip, and start to feel the city's rhythm rather than just seeing its surface.",
  highlights: [
    "Senso-ji Temple at dawn in Asakusa",
    "Shibuya Crossing — the world's busiest pedestrian scramble",
    "Tsukiji Outer Market breakfast",
    "teamLab digital art installations",
    "Day trip to Kamakura's Great Buddha",
  ],
  days: [
    { day: 1, title: "Arrive & Orient — Shinjuku", description: "Land at Narita or Haneda, collect your IC card, check in to Shinjuku. Evening: stroll Kabukicho, ride the Tokyo Metropolitan Government Building observation deck (free)." },
    { day: 2, title: "East Tokyo — Asakusa & Ueno", description: "Dawn visit to Senso-ji before the crowds. Nakamise shopping street. Ueno Park museums (Tokyo National Museum). Akihabara electronics in the evening." },
    { day: 3, title: "South & West — Shibuya & Harajuku", description: "Meiji Shrine morning walk. Harajuku Takeshita Street. Omotesando for architecture browsing. Shibuya Crossing and Scramble Square rooftop at dusk." },
    { day: 4, title: "Day Trip — Kamakura", description: "90-minute train from Shinjuku. Great Buddha (Kotoku-in), Hase-dera cave shrines, Zaimokuza beach, fresh sea food lunch. Back by evening." },
    { day: 5, title: "Culture & Food — Tsukiji, Ginza, Odaiba", description: "Tsukiji Outer Market breakfast (tuna, tamagoyaki). Ginza department store browsing. Toyosu Market (book ahead). teamLab Borderless or Planets." },
    { day: 6, title: "Nerdy & Local — Akihabara, Yanaka", description: "Akihabara deep dive: multi-floor game/manga/figure stores. Afternoon in Yanaka — Tokyo's best-preserved old town shitamachi. Sentō (public bath) evening." },
    { day: 7, title: "Flex & Depart", description: "Morning souvenir run (Tokyo Station Character Street, Ginza Itoya). Afternoon flight or Shinkansen to next destination." },
  ],
}
```

#### `7-days-osaka`

```ts
{
  slug: "7-days-osaka",
  title: "7 Days in Osaka",
  seoTitle: "7-Day Osaka Itinerary: Food, History & Day Trips from Japan's Kitchen",
  metaDescription: "The ultimate 7-day Osaka itinerary: Dotonbori street food, Osaka Castle, day trips to Nara and Kobe, and the best neighbourhood bases.",
  durationLabel: "7 Days",
  intro: "Osaka rewards slow travel. Seven days lets you eat your way through Dotonbori, see Kyoto without rushing it, and still have a lazy afternoon in Namba doing absolutely nothing productive.",
  highlights: [
    "Dotonbori street food crawl at night",
    "Osaka Castle and the surrounding park in cherry blossom season",
    "Day trip to Nara to hand-feed free-roaming deer",
    "Kuromon Ichiba Market fresh seafood breakfast",
    "Kobe beef lunch in Kobe (45 min away)",
  ],
  days: [
    { day: 1, title: "Arrive — Namba & Dotonbori", description: "Check in to Namba or Shinsaibashi. Evening Dotonbori walk: takoyaki at Aizuya, kushikatsu at Daruma, crab sign photos. Glico running man." },
    { day: 2, title: "Osaka Castle & Tennoji", description: "Morning Osaka Castle (exterior free, tower ¥600). Nishinomaru Garden. Tennoji Zoo or Abeno Harukas 300 observatory. Shin-Sekai for kushikatsu lunch." },
    { day: 3, title: "Day Trip — Nara", description: "30 minutes by Kintetsu or JR. Nara Park deer, Todai-ji (Great Buddha Hall), Kasuga Taisha shrine path. Back for Dotonbori dinner." },
    { day: 4, title: "Day Trip — Kyoto Highlights", description: "40 minutes by Shinkansen or Kintetsu. Fushimi Inari torii gates early AM. Arashiyama bamboo grove. Kinkaku-ji (Golden Pavilion). Return to Osaka for dinner." },
    { day: 5, title: "Kuromon, Honmachi & Amerika-mura", description: "Kuromon Ichiba breakfast (sea urchin, oysters). Honmachi for street art. Amerika-mura vintage shopping. Shinsaibashi covered arcade afternoon." },
    { day: 6, title: "Day Trip — Kobe", description: "45 minutes by Hankyu or JR. Kobe beef lunch (set menus from ¥4,000). Kitano-cho European-style hillside houses. Nada sake district brewery visits." },
    { day: 7, title: "Flex & Depart", description: "Last okonomiyaki breakfast at Mizuno on Dotonbori. Souvenir run (Shinsaibashi Sogo, Takashimaya). Depart via Kansai International or transfer to next city." },
  ],
}
```

#### `7-days-tokyo-osaka`

```ts
{
  slug: "7-days-tokyo-osaka",
  title: "7 Days: Tokyo to Osaka",
  seoTitle: "7-Day Tokyo to Osaka Itinerary: The Classic Japan Route by Shinkansen",
  metaDescription: "The most popular Japan itinerary: 3 nights Tokyo, Shinkansen to Kyoto, 2 nights Osaka. Day-by-day plan with transport tips and must-eat stops.",
  durationLabel: "7 Days",
  intro: "Tokyo to Osaka via Shinkansen is the classic Japan first trip. This plan gives you 3 full days in Tokyo, a Kyoto day trip, and 2 nights in Osaka — tight but deeply satisfying.",
  highlights: [
    "Ride the Shinkansen through Mount Fuji country",
    "Shibuya Crossing at rush hour",
    "Senso-ji Temple in Asakusa",
    "Fushimi Inari torii gates in Kyoto",
    "Dotonbori night food crawl in Osaka",
  ],
  days: [
    { day: 1, title: "Arrive Tokyo — Shinjuku Base", description: "Arrive at Narita or Haneda. Pick up IC card (Suica or Pasmo). Check in Shinjuku. Evening: Tokyo Metropolitan Government Building free observation deck, ramen dinner in Kabukicho." },
    { day: 2, title: "Tokyo East — Asakusa & Shibuya", description: "Senso-ji at 7am before tour groups. Tsukiji Outer Market brunch (tuna nigiri, tamagoyaki). Shibuya Crossing in the evening. Rooftop at Shibuya Sky." },
    { day: 3, title: "Tokyo West — Harajuku, Akihabara", description: "Meiji Shrine morning. Harajuku Takeshita-dori. Omotesando. Afternoon in Akihabara (multi-floor game shops). Ueno for museum if energy allows." },
    { day: 4, title: "Shinkansen to Osaka — via Kyoto", description: "Hikari Shinkansen from Tokyo. Stop in Kyoto (store bags at station lockers). Fushimi Inari (arrives by 11am, crowd-free by 11:30). Nishiki Market lunch. Arrive Osaka Namba by 6pm." },
    { day: 5, title: "Osaka — Dotonbori & Osaka Castle", description: "Morning Osaka Castle. Shinsekai for kushikatsu lunch. Kuromon Ichiba afternoon. Dotonbori evening food crawl (takoyaki, gyoza, crab). " },
    { day: 6, title: "Nara Day Trip or Osaka Free Day", description: "30 min to Nara: deer park, Todai-ji Great Buddha. Or: slow morning at Hozenji Yokocho alley, shopping in Shinsaibashi, Abeno Harukas observation deck." },
    { day: 7, title: "Depart from Osaka or Tokyo", description: "Kansai International (45 min from Namba) for direct flights. Or Shinkansen back to Tokyo Narita/Haneda (2.5 hrs + transfer). Final souvenir: Pocky and Kit Kat flavours at Shin-Osaka station shops." },
  ],
}
```

### SEO Metadata (per itinerary)

The dynamic page already generates metadata from the `seoTitle` and `metaDescription` fields. Confirm the `[slug]/page.tsx` produces:
- `<title>{seoTitle} | Japan Toolkit</title>`
- `<meta name="description" ...>`
- Canonical URL
- BreadcrumbList schema

If not, these fields should be wired up in the dynamic page — that may require a small edit to `app/itinerary/[slug]/page.tsx`.

### Component Reuse

- All existing: the dynamic route handles everything
- No new components needed

---

## Feature 3 — Food Guide

**Route:** `/guides/japan-food-guide`
**Complexity:** M

### File Structure

```
app/guides/japan-food-guide/
└── page.tsx               (new — ~400 lines)
```

### Key Content Sections

1. **Hero** — badge "Food & Drink", title "Japan Food Guide: What to Eat, Where to Find It, and Halal Options in Tokyo & Osaka"
2. **Must-eat dishes** — visual grid of cards, one per dish

   ```
   Ramen · Sushi/Sashimi · Tempura · Tonkatsu · Yakiniku · Yakitori
   Okonomiyaki · Takoyaki · Gyoza · Onigiri · Ramen · Conveyor-belt sushi
   Kaiseki · Udon · Soba · Curry rice · Matcha desserts
   ```

3. **Where to find each dish in Tokyo** — neighbourhood-specific recommendations
4. **Where to find each dish in Osaka** — Dotonbori vs Kuromon vs Shinsekai
5. **Halal & Muslim-friendly options**
   - Tokyo: Asakusa Halal Zone, Harajuku Halal-Gourmet, conveyor sushi (check fish/shellfish vs meat)
   - Osaka: Dotonbori Halal options, Namba Halal Market
   - Apps: Halal Gourmet Japan app (Japanese / English)
   - Tips: "Showing a halal card in Japanese" → printable card link
6. **Food budget guide** — convenience store (¥300–600), ramen shop (¥900–1,400), sushi (¥1,500–3,000+), kaiseki (¥10,000+)
7. **Convenience store essentials** — 7-Eleven, Lawson, FamilyMart must-buys
8. **Food vocabulary card** — 10 Japanese words for restaurant use
9. **FAQ** — vegetarian in Japan, sushi etiquette, izakaya ordering, how to read a menu

### Data Structure

```ts
// Inline in page.tsx
const DISHES = [
  {
    name: "Ramen",
    emoji: "🍜",
    description: "Wheat noodles in tonkotsu, shoyu, shio, or miso broth.",
    where: { tokyo: "Shinjuku (Fuunji, Ichiran), Shibuya", osaka: "Dotonbori, Nipponbashi" },
    budget: "¥900–1,400",
    tip: "Ichiran has individual booths — great for solo diners.",
  },
  // ... ~14 more
] as const;

const HALAL_SPOTS = [
  { city: "Tokyo", name: "Naritaya", area: "Asakusa", type: "Ramen", certified: true },
  // ...
] as const;
```

### SEO Metadata

```ts
title: "Japan Food Guide 2025: Must-Eat Dishes, Where to Find Them & Halal Options"
description: "Everything you need to eat in Japan: ramen, sushi, takoyaki, tempura, and more. Plus halal-friendly restaurants in Tokyo and Osaka for Muslim travellers."
canonical: "https://japantoolkit.com/guides/japan-food-guide"
keywords: japan food guide, what to eat in japan, halal food tokyo, halal food osaka, japanese food for tourists
```

### Schemas

- `Article`
- `BreadcrumbList`
- `FAQPage` — "Is Japan easy for vegetarians?", "What is a conveyor belt sushi?", "Is sushi touching everything halal?", "How do I order at an izakaya?"

### Component Reuse

- `<GuidePageHero />` (new shared)
- `<FaqSection />` (new shared)
- `<ComparisonTable />` (new shared) — for budget tiers
- `<Card />` — dish cards
- `<Badge />` — certified halal, vegetarian-friendly
- Link to `/guides/cash-and-currency-in-japan` (budget context)

### Affiliate Opportunities

- Klook: Tokyo food tour, Osaka street food tour
- Klook: Conveyor belt sushi experience booking

---

## Feature 4 — IC Card Explainer

**Route:** `/guides/ic-card-japan`
**Complexity:** S-M

> **Note:** The existing cash-and-currency guide has a short IC card section. This dedicated page goes much deeper. Add a "See full IC card guide →" cross-link from the currency guide.

### File Structure

```
app/guides/ic-card-japan/
└── page.tsx               (new — ~300 lines)
```

### Key Content Sections

1. **Hero** — badge "Transport", title "IC Cards in Japan: Suica vs Pasmo vs ICOCA — Which One to Get"
2. **What is an IC card?** — contactless stored-value card, works for trains, buses, convenience stores, vending machines
3. **Comparison table** — Suica vs Pasmo vs ICOCA vs Manaca vs Toica

   | Card    | Issued by        | Best for          | Works nationwide? |
   |---------|-----------------|-------------------|-------------------|
   | Suica   | JR East          | Tokyo + nationwide | Yes (most places) |
   | Pasmo   | Tokyo Metro      | Tokyo + Kanto      | Yes               |
   | ICOCA   | JR West          | Osaka/Kyoto/Kobe   | Yes               |

4. **Recommendation** — "Just get a Suica. It works everywhere and can be loaded on iPhone Wallet (Apple Pay) before you land."
5. **How to get one** — airport (Narita/Haneda machines), any JR station ticket machine, Apple Wallet (iOS/watchOS)
6. **How to top up** — ticket machines, convenience stores (7-Eleven, Lawson), Apple Pay
7. **Deposit & refund** — ¥500 deposit, refundable at JR Green Windows (takes time, fees may apply)
8. **Where it works** — JR trains, subway, bus, taxis (select), vending machines, convenience stores, department stores
9. **Where it does NOT work** — Shinkansen reserved seats (you still need a ticket), non-IC rural buses
10. **Mobile Suica on iPhone** — set up before landing, no physical card needed (iOS 16+)
11. **FAQ** — Can I share a card? What if I run out of balance? Can I use it in Osaka with a Suica?

### Data Structure

```ts
// Inline in page.tsx
const IC_CARDS = [
  { name: "Suica", issuer: "JR East", region: "Tokyo & nationwide", bestFor: "First-timers, iPhone users", nationwide: true },
  { name: "Pasmo", issuer: "Tokyo Metro", region: "Tokyo & Kanto", bestFor: "Tokyo subway focus", nationwide: true },
  { name: "ICOCA", issuer: "JR West", region: "Osaka / Kyoto / Kobe", bestFor: "Kansai-only trips", nationwide: true },
  { name: "Manaca", issuer: "Meitetsu/Kintetsu", region: "Nagoya", bestFor: "Nagoya visitors", nationwide: true },
] as const;
```

### SEO Metadata

```ts
title: "IC Card Japan Guide: Suica vs Pasmo vs ICOCA — Which One Do You Need?"
description: "Everything you need to know about IC cards in Japan: Suica vs Pasmo vs ICOCA, how to get one at the airport, how to top up, and using Mobile Suica on iPhone."
canonical: "https://japantoolkit.com/guides/ic-card-japan"
keywords: ic card japan, suica vs pasmo, suica card japan, how to get suica, mobile suica iphone, pasmo card
```

### Schemas

- `Article`
- `BreadcrumbList`
- `FAQPage` — "Suica vs Pasmo which is better?", "Can I use Suica in Osaka?", "How do I refund my IC card?", "Can I use IC card on Shinkansen?"

### Component Reuse

- `<GuidePageHero />`
- `<FaqSection />`
- `<ComparisonTable />` — main Suica/Pasmo/ICOCA table
- `<Card />` — where-it-works / where-it-doesn't sections
- `<Badge />` — "Recommended", "Works nationwide"
- Cross-link to `/guides/cash-and-currency-in-japan`

### Cross-link Update Needed

Edit `app/guides/cash-and-currency-in-japan/page.tsx` — add a "→ Full IC card guide" link in the existing IC card section.

---

## Feature 5 — Email Capture Drip ("10 Weeks to Japan")

**Complexity:** M

### What We're Building

1. **Improved email capture UI** — a more prominent inline capture section on the homepage and/or a dedicated `/japan-trip-planner` landing page
2. **"10 Weeks to Japan" first email template** — the welcome email sent immediately on subscribe
3. **Drip sequence structure** — define the 10-week email plan so subsequent emails can be built

### File Structure

```
app/api/subscribe/route.ts          (modified — new email template for first drip)
components/email-capture-form.tsx   (modified — optional: add source prop variants)
app/japan-trip-planner/
└── page.tsx                        (optional new landing page — see below)
```

### 5a. First Email — "10 Weeks to Japan: Week 1 — Your Game Plan"

**Replaces/augments** the current welcome email in `app/api/subscribe/route.ts`.

**Email content structure:**

```
Subject: 10 Weeks to Japan: Week 1 — Your Game Plan

Preview: You signed up. Now let's actually plan this trip. Here's where to start.

---
Hi,

Welcome to Japan Toolkit's 10 Weeks to Japan series. Every week for the next 10 weeks,
you'll get one focused email that moves you from "I want to go" to fully packed and ready.

Week 1 is all about foundations:

✅ Decide your travel window (spring cherry blossoms = Feb/March booking)
✅ Set a rough budget (¥15,000–25,000/day is comfortable for most travellers)
✅ Book flights first — Japan has low hotel cancellation fees so flights are the bottleneck
✅ Start a Japan folder: bookmark this email thread, save every tool you use

Your three tools for this week:
→ Best Time to Visit Japan: [link to /guides/best-time-to-visit-japan]
→ Budget Estimator: [link to /tools/budget-estimator]
→ Japan Trip Checklist: [link to /guides/japan-trip-checklist]

Next week: Getting to and around Japan — JR Pass, Shinkansen, and IC cards.

Safe travels,
Yiyan
Japan Toolkit

---
Unsubscribe: [unsubscribe link]
```

**Implementation in `route.ts`:** Replace the current `sendEmail` call body with this template. Keep the existing subscriber creation logic unchanged.

### 5b. Drip Sequence Map (Content Only — for reference when building Week 2–10)

| Week | Subject | Core content |
|------|---------|--------------|
| 1 | Your Game Plan | Budget, timing, flights first |
| 2 | Getting Around | IC card, Shinkansen, JR Pass calculator |
| 3 | Where to Sleep | Tokyo neighbourhood guide, price tiers |
| 4 | What to Eat | Food guide, halal options, konbini tips |
| 5 | Money & Payments | Cash, ATMs, 7-Bank, Wise card |
| 6 | Your Itinerary | 7-day Tokyo/Osaka picks |
| 7 | Day Trips | Hakone, Nara, Kyoto |
| 8 | Shopping & Souvenirs | Don Quijote, 100-yen shops, duty free |
| 9 | Packing List | What to bring, what to buy there |
| 10 | Final Week Checklist | SIM/eSIM, Visit Japan Web, cash top-up |

Note: Resend does not natively support drip sequences — you'd need to either use Resend Broadcasts (manual weekly sends) or a scheduled function (Vercel Cron or similar) to send weekly emails. This plan covers Week 1 only; the drip infrastructure is a separate build.

### 5c. Homepage Email Capture UI Improvement

Current state: the homepage has an email section at the bottom with `<EmailCaptureForm />`.

Proposed change: Add a second, more prominent inline capture in the hero section or after the tools section.

**Edit `app/page.tsx`:** Add a second `<EmailCaptureForm source="hero" />` CTA with the copy:

```
"Get the free 10-week Japan planning series →"
[your@email.com]  [Start planning]
```

Pass `source="hero"` vs `source="checklist"` to track which placement converts better (already supported by `route.ts` which logs `source`).

### 5d. Optional: Dedicated Landing Page

```
app/japan-trip-planner/
└── page.tsx
```

A simple one-page conversion landing page:
- Headline: "Plan a Japan trip without the guesswork"
- Bullet list of what subscribers get (the 10 weeks)
- Single email input (large, prominent)
- Social proof: "Join X travellers planning their Japan trip"

This page can be linked from the footer and shared on social. Low priority — build only if conversion testing suggests it's needed.

**SEO Metadata:**
```ts
title: "Free 10-Week Japan Trip Planning Series | Japan Toolkit"
description: "Get 10 weekly emails that walk you through planning a Japan trip — budget, itinerary, transport, food, and packing — from scratch."
```

---

## Build Order

```
Phase 0 (do first):
  □ Extract GuidePageHero component
  □ Extract FaqSection component
  □ Extract ComparisonTable component
  □ Create guideMetadata() helper

Phase 1 (parallel):
  □ Feature 1: Visa Guide — /guides/japan-visa-guide
  □ Feature 4: IC Card Guide — /guides/ic-card-japan  ← fastest, S complexity

Phase 2:
  □ Feature 3: Food Guide — /guides/japan-food-guide  ← content-heavy, write carefully

Phase 3:
  □ Feature 2: Itinerary data — add 3 objects to lib/itineraries.ts
  □ Verify /itinerary/[slug]/page.tsx generates correct metadata

Phase 4:
  □ Feature 5: Update email template in route.ts
  □ Feature 5: Update homepage email CTA copy
  □ Feature 5: (Optional) /japan-trip-planner landing page

After each phase:
  □ Update app/guides/page.tsx to add new guide cards
  □ Update lib/site.ts if any new tools/guides need to appear in nav or homepage
  □ Update app/sitemap.ts with new routes
```

---

## Guides Hub Updates Required

After building each guide, add a card to `app/guides/page.tsx`:

```ts
// New cards to add:
{ title: "Japan Visa Guide", href: "/guides/japan-visa-guide", description: "Visa-free rules for Malaysia, Singapore, US, UK & Australia." }
{ title: "Japan Food Guide", href: "/guides/japan-food-guide", description: "Must-eat dishes, where to find them, and halal options." }
{ title: "IC Cards in Japan", href: "/guides/ic-card-japan", description: "Suica vs Pasmo vs ICOCA — which one to get and how to use it." }
```

## Sitemap Updates Required

Add all new routes to `app/sitemap.ts`:
- `/guides/japan-visa-guide`
- `/guides/japan-food-guide`
- `/guides/ic-card-japan`
- `/itinerary/7-days-tokyo`
- `/itinerary/7-days-osaka`
- `/itinerary/7-days-tokyo-osaka`
- `/japan-trip-planner` (if built)

---

## Total Complexity Summary

| Feature | Files Changed | New Files | Complexity |
|---------|--------------|-----------|------------|
| Shared components (Phase 0) | 0 | 4 | S |
| Visa Guide | 2 (guides hub, sitemap) | 1 | M |
| 7-Day Itineraries | 2 (itineraries.ts, sitemap) | 0 | M |
| Food Guide | 2 (guides hub, sitemap) | 1 | M |
| IC Card Guide | 3 (guides hub, sitemap, currency guide cross-link) | 1 | S-M |
| Email Drip (Week 1 template + UI) | 2 (route.ts, page.tsx) | 0 | S |
| Email Landing Page (optional) | 1 (sitemap) | 1 | S |
