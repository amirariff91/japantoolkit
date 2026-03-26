import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailCaptureForm } from "@/components/email-capture-form";

export const metadata: Metadata = {
  title: "Japan Food Guide 2026: Must-Eat Dishes, Where to Find Them & Halal Options",
  description:
    "Everything you need to eat in Japan: ramen, sushi, takoyaki, tempura, and more. Plus halal-friendly restaurants in Tokyo and Osaka for Muslim travellers.",
  alternates: { canonical: "https://japantoolkit.com/guides/japan-food-guide" },
  openGraph: {
    title: "Japan Food Guide 2026: Must-Eat Dishes, Where to Find Them & Halal Options | Japan Toolkit",
    description:
      "Everything you need to eat in Japan: ramen, sushi, takoyaki, tempura, and more. Plus halal-friendly restaurants in Tokyo and Osaka for Muslim travellers.",
    url: "https://japantoolkit.com/guides/japan-food-guide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1200&q=80",
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

type CardVariant = keyof typeof CARD_VARIANTS;

// ─── Data ─────────────────────────────────────────────────────────────────────
const DISHES = [
  {
    name: "Ramen",
    emoji: "🍜",
    description: "Wheat noodles in tonkotsu (rich pork), shoyu (soy), shio (salt), or miso broth. Each region has its own style.",
    where: { tokyo: "Shinjuku (Fuunji, Ichiran), Shibuya (Afuri)", osaka: "Dotonbori, Nipponbashi (Kinryu)" },
    budget: "¥900–1,400",
    tip: "Ichiran has individual booths — great for solo travellers who want to eat without pressure.",
  },
  {
    name: "Sushi & Sashimi",
    emoji: "🍣",
    description: "Fresh fish pressed over vinegared rice (nigiri) or sliced and served alone (sashimi). Quality ranges from ¥1,500 conveyor belt to ¥30,000+ omakase.",
    where: { tokyo: "Tsukiji Outer Market, Ginza, Shinjuku", osaka: "Kuromon Ichiba Market, Dotonbori" },
    budget: "¥1,500–30,000+",
    tip: "Tsukiji Outer Market (breakfast 7–9 am) is the best value fresh sushi in Tokyo.",
  },
  {
    name: "Tempura",
    emoji: "🍤",
    description: "Lightly battered, deep-fried seafood and vegetables. At good tempura counters, each piece is served immediately from the oil.",
    where: { tokyo: "Asakusa (Daikokuya), Ginza", osaka: "Namba, Shinsaibashi" },
    budget: "¥1,500–4,000",
    tip: "Dip in tentsuyu broth with grated daikon, not soy sauce, for the authentic approach.",
  },
  {
    name: "Tonkatsu",
    emoji: "🥩",
    description: "Thick breaded and deep-fried pork cutlet, served with shredded cabbage and tonkatsu sauce. A filling, hearty meal.",
    where: { tokyo: "Shinjuku (Saburo), Ueno (Tonki)", osaka: "Namba, Tennoji" },
    budget: "¥1,000–2,500",
    tip: "Loin (rosu) is fattier and more flavourful; fillet (hire) is leaner. Rosu is the default order.",
  },
  {
    name: "Takoyaki",
    emoji: "🐙",
    description: "Osaka's iconic street snack — round balls of batter filled with octopus, topped with bonito flakes and sauce.",
    where: { tokyo: "Asakusa street stalls, Harajuku Takeshita-dori", osaka: "Dotonbori (Aizuya, Wanaka), Shinsekai" },
    budget: "¥400–700 (6–8 pieces)",
    tip: "Osaka's takoyaki is definitive. Don't form an opinion until you've had it in Dotonbori.",
  },
  {
    name: "Okonomiyaki",
    emoji: "🥞",
    description: "Savoury pancake with shredded cabbage and your choice of seafood, pork, or vegetables. Kansai-style is mixed in; Hiroshima-style is layered.",
    where: { tokyo: "Shibuya, Shinjuku (Sakura-tei in Harajuku)", osaka: "Dotonbori (Mizuno), Namba" },
    budget: "¥900–1,800",
    tip: "At most restaurants you cook your own on a teppan hotplate at the table — part of the experience.",
  },
  {
    name: "Yakitori",
    emoji: "🍢",
    description: "Skewered chicken grilled over charcoal. Every part of the chicken is used: breast, thigh, skin, gizzard, heart. Order a mixed set (moriawase) to try everything.",
    where: { tokyo: "Yurakucho under the railway arches, Shinjuku alley bars", osaka: "Osaka Station area, Shinsekai" },
    budget: "¥150–300 per skewer",
    tip: "Yurakucho's yakitori alley under the Yamanote Line tracks is one of Tokyo's best dining experiences.",
  },
  {
    name: "Udon",
    emoji: "🍲",
    description: "Thick wheat noodles served hot in dashi broth or cold with dipping sauce. Sanuki udon from Kagawa Prefecture sets the standard.",
    where: { tokyo: "Shibuya, Shinjuku (Tsurutontan)", osaka: "Dotombori, Umeda (Ippudo Udon)" },
    budget: "¥700–1,200",
    tip: "Cold zaru udon in summer is refreshing and underrated. Order the kamaage style for a warm, silky bowl.",
  },
  {
    name: "Conveyor Belt Sushi (Kaiten-zushi)",
    emoji: "🔄",
    description: "Plates of sushi travel past you on a belt — take what you like, pay by the plate count. Fun, affordable, and kid-friendly.",
    where: { tokyo: "Hamazushi, Sushiro chains (multiple locations)", osaka: "Namba, Umeda (Sushiro, Kaiten Sushi Choshi-maru)" },
    budget: "¥1,500–3,000",
    tip: "Sushiro and Hamazushi apps let you pre-order, reducing wait time significantly.",
  },
  {
    name: "Yakiniku",
    emoji: "🥓",
    description: "Korean-influenced Japanese BBQ — grill your own sliced beef, pork, and offal over a charcoal grill at the table. Wagyu sets are a splurge worth considering once.",
    where: { tokyo: "Shibuya, Roppongi, Shinjuku", osaka: "Dotonbori, Namba, Tsuruhashi (Osaka's Koreatown)" },
    budget: "¥2,000–8,000+",
    tip: "Tsuruhashi in Osaka is the best place for value yakiniku — authentic Koreatown quality at lower prices.",
  },
  {
    name: "Gyoza",
    emoji: "🥟",
    description: "Pan-fried dumplings, crisped on the bottom and filled with pork and cabbage. Different from Chinese jiaozi — thinner skin, more garlicky filling.",
    where: { tokyo: "Harajuku (Gyoza Lou), Shinjuku", osaka: "Dotombori, any Chinese-influenced street in Namba" },
    budget: "¥400–700 (6 pieces)",
    tip: "Order a beer. Gyoza and cold draft beer is one of Japan's best combinations.",
  },
  {
    name: "Onigiri",
    emoji: "🍙",
    description: "Rice balls filled with tuna, salmon, pickled plum (umeboshi), or mentaiko (spicy cod roe), wrapped in nori. Available 24/7 at every convenience store.",
    where: { tokyo: "Any 7-Eleven, Lawson, or FamilyMart", osaka: "Any convenience store" },
    budget: "¥130–200",
    tip: "The three-step tear-and-pull packaging keeps the nori crispy. Watch the illustrations on the wrapper carefully.",
  },
  {
    name: "Curry Rice (Karē Raisu)",
    emoji: "🍛",
    description: "Japanese curry is milder and sweeter than South Asian varieties. Served thick over white rice, sometimes with a breaded katsu on top.",
    where: { tokyo: "CoCo Ichibanya (chain, everywhere)", osaka: "CoCo Ichibanya, local curry shops in Namba" },
    budget: "¥800–1,500",
    tip: "CoCo Ichibanya lets you customize spice level (1–10) and toppings — level 3–4 is pleasantly warming without pain.",
  },
  {
    name: "Matcha Desserts",
    emoji: "🍵",
    description: "Matcha (green tea powder) flavoured soft serve, mochi, parfaits, and cake rolls. Everywhere in Kyoto; widely available in Tokyo and Osaka too.",
    where: { tokyo: "Harajuku, Shibuya, Asakusa (Nakamise-dori stalls)", osaka: "Namba, Shinsaibashi, Dotonbori" },
    budget: "¥300–800",
    tip: "Kyoto's Nakamura Tokichi and Tsujiri are the gold standard for matcha desserts if you do a day trip.",
  },
] as const;

const HALAL_SPOTS = [
  { city: "Tokyo", name: "Naritaya", area: "Asakusa", type: "Ramen", certified: true, note: "Halal-certified tonkotsu and shoyu ramen. Queue expected at weekends." },
  { city: "Tokyo", name: "Asakusa Gyukatsu", area: "Asakusa", type: "Beef Katsu", certified: true, note: "Halal beef cutlet. Popular with halal-conscious travellers visiting Senso-ji." },
  { city: "Tokyo", name: "Halal Food Market", area: "Akihabara", type: "Market & Café", certified: true, note: "Pre-packed halal bento, snacks, and a small café. Good for grabbing supplies." },
  { city: "Tokyo", name: "Gyumon (Muslim-friendly)", area: "Shinjuku", type: "Yakiniku BBQ", certified: false, note: "Muslim-friendly pork-free menu. Confirm current status before visiting." },
  { city: "Tokyo", name: "Salam Restaurant", area: "Harajuku", type: "Japanese & Middle Eastern", certified: true, note: "Near Meiji Jingu. Halal certified, Japanese-influenced set meals." },
  { city: "Osaka", name: "Namba Yasaka Shrine Area", area: "Namba", type: "Mixed", certified: false, note: "Several halal-friendly stalls near Dotonbori. Look for the halal certification poster." },
  { city: "Osaka", name: "MOS Burger (halal-certified branch)", area: "Dotonbori area", type: "Burgers", certified: true, note: "Specific branches near Dotonbori are halal certified — verify which location before ordering." },
  { city: "Osaka", name: "Halal Gyoza & Takoyaki stalls", area: "Shinsekai", type: "Street Food", certified: false, note: "Increasing number of halal-marked stalls. Ask and look for Arabic signage." },
] as const;

const BUDGET_TIERS = [
  { tier: "Convenience store", variant: "tip" as CardVariant, examples: "Onigiri, sandwiches, hot foods", cost: "¥300–600 per meal", note: "7-Eleven, Lawson, and FamilyMart have remarkably good fresh food. A full konbini meal costs under ¥800." },
  { tier: "Ramen / Udon / Soba shop", variant: "tip" as CardVariant, examples: "Ramen, udon, soba, gyudon", cost: "¥700–1,400 per meal", note: "Most casual restaurant meals fall here. Solo, quick, and satisfying." },
  { tier: "Sit-down casual", variant: "info" as CardVariant, examples: "Tonkatsu, sushi-go-round, yakiniku", cost: "¥1,500–3,000 per meal", note: "Conveyor belt sushi, tonkatsu sets, and family restaurants. Great quality-to-price ratio." },
  { tier: "Mid-range restaurant", variant: "info" as CardVariant, examples: "Izakaya courses, sushi bar, tempura", cost: "¥3,000–8,000 per meal", note: "A 2-hour izakaya session with food and drinks often lands here. The social highlight of most Japan trips." },
  { tier: "Fine dining / Kaiseki", variant: "recommended" as CardVariant, examples: "Kaiseki, omakase, high-end wagyu", cost: "¥10,000–30,000+", note: "A kaiseki or omakase meal is worth doing once. Book 1–2 months in advance for the top restaurants." },
] as const;

const KONBINI_PICKS = [
  { item: "Onigiri (rice ball)", store: "All chains", note: "Tuna mayo and salmon are entry-level. Try mentaiko (spicy cod roe) for something stronger." },
  { item: "Egg salad sandwich", store: "7-Eleven, Lawson", note: "Japan's convenience store sandwiches are a revelation. The egg salad has a specific fluffy texture." },
  { item: "Nikuman (steamed bun)", store: "All chains, heated case near counter", note: "Pork-filled steamed bun for ¥170. Best eaten standing up in the cold." },
  { item: "Karaage chicken", store: "Lawson, FamilyMart", note: "Lawson's Karaage-kun is a cult item. The regular and spicy red versions are both excellent." },
  { item: "Hot matcha latte", store: "7-Eleven machine", note: "The self-serve coffee/matcha machines at 7-Eleven produce a surprisingly good matcha latte for ¥200." },
  { item: "Choco Pie / seasonal pastry", store: "Lawson, FamilyMart", note: "Lawson's baked goods section has premium items that rival café patisseries. Check the seasonal shelf." },
] as const;

const FOOD_VOCAB = [
  { japanese: "Sumimasen", romaji: "soo-mee-mah-sen", meaning: "Excuse me / waiter call" },
  { japanese: "Ikura desu ka?", romaji: "ee-koo-rah des-kah", meaning: "How much is this?" },
  { japanese: "Kore wo kudasai", romaji: "koh-reh woh koo-dah-sai", meaning: "I'd like this one please" },
  { japanese: "Osusume wa?", romaji: "oh-soo-soo-meh wah", meaning: "What do you recommend?" },
  { japanese: "Eigo no menyu wa arimasu ka?", romaji: "ay-go no men-yoo wah ah-ree-mas-kah", meaning: "Do you have an English menu?" },
  { japanese: "Tabemono arerugi ga arimasu", romaji: "tah-beh-mono ah-reh-roo-gee gah ah-ree-mas", meaning: "I have food allergies" },
  { japanese: "Bejitarian desu", romaji: "beh-jee-tah-ree-an des", meaning: "I am vegetarian" },
  { japanese: "Niku nashi de", romaji: "nee-koo nah-shee deh", meaning: "Without meat please" },
  { japanese: "Oishii!", romaji: "oh-ee-shee", meaning: "Delicious!" },
  { japanese: "Okaikei onegaishimasu", romaji: "oh-kai-keh oh-neh-gai-shee-mas", meaning: "Bill please" },
] as const;

// ─── JSON-LD Schemas ───────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Japan Food Guide 2026: Must-Eat Dishes, Where to Find Them & Halal Options",
  description:
    "Everything you need to eat in Japan: ramen, sushi, takoyaki, tempura, and more. Plus halal-friendly restaurants in Tokyo and Osaka for Muslim travellers.",
  image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1200&q=80",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  author: { "@type": "Person", name: "Yiyan" },
  publisher: { "@type": "Organization", name: "Japan Toolkit", url: "https://japantoolkit.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://japantoolkit.com/guides/japan-food-guide" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://japantoolkit.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://japantoolkit.com/guides" },
    { "@type": "ListItem", position: 3, name: "Japan Food Guide", item: "https://japantoolkit.com/guides/japan-food-guide" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Japan easy for vegetarians?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japan can be challenging for strict vegetarians. Many broths (ramen, udon, miso soup) contain dashi made from fish or bonito. However, Buddhist-influenced shojin ryori restaurants are entirely vegetarian. Convenience stores carry many vegetarian-friendly options. Always carry a printed Japanese vegetarian card explaining your dietary needs.",
      },
    },
    {
      "@type": "Question",
      name: "What is conveyor belt sushi and is it halal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kaiten-zushi (conveyor belt sushi) are restaurants where sushi plates circulate on a belt and you take what you like, paying by plate count. For halal travellers: the fish and seafood pieces are generally permissible, but sauces, broths, and marinades may contain mirin (rice wine). Look for halal-certified kaiten-zushi chains or confirm with the restaurant.",
      },
    },
    {
      "@type": "Question",
      name: "How do I order at an izakaya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Izakayas are Japanese gastropubs where you order multiple small dishes to share alongside drinks. Press the call button on your table or say 'sumimasen' to get a waiter's attention. Most izakayas have picture menus. Order a drink first (drinks are almost mandatory at izakayas), then order food in rounds throughout the evening. A typical izakaya session for two with food and drinks costs ¥4,000–8,000.",
      },
    },
    {
      "@type": "Question",
      name: "What sushi etiquette should I know?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can eat nigiri sushi with your hands — this is traditional and acceptable even at high-end counters. Dip the fish into soy sauce, not the rice (the rice absorbs too much). Eat each piece in one bite if possible. Don't mix wasabi into soy sauce at formal sushi counters — the chef adds the right amount. Say 'oishii' (delicious) and the chef will be pleased.",
      },
    },
    {
      "@type": "Question",
      name: "Are there halal restaurants in Tokyo and Osaka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both cities have halal and Muslim-friendly options, concentrated around tourist areas. Tokyo's Asakusa neighbourhood has several halal-certified restaurants including halal ramen. Osaka's Dotonbori area has an increasing number of halal-marked food stalls. Use the Halal Gourmet Japan app to find certified restaurants near your location.",
      },
    },
    {
      "@type": "Question",
      name: "How much should I budget for food per day in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A realistic food budget is ¥3,000–5,000 per day for budget travel (convenience store meals + one sit-down), ¥8,000–12,000 for mid-range dining (two restaurant meals per day), and ¥15,000+ for comfortable dining with one higher-end meal. Japan is extremely good value for food quality relative to cost — even budget eating is excellent.",
      },
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function JapanFoodGuidePage() {
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
            <span className="text-stone-800">Japan Food Guide</span>
          </nav>

          <Badge className="bg-amber-700 text-white hover:bg-amber-700">Food &amp; Drink</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Japan Food Guide: What to Eat, Where to Find It, and Halal Options
          </h1>
          <p className="text-sm text-stone-500">By Yiyan · Last reviewed: March 2026</p>

          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            Japanese food is one of the strongest reasons to visit the country. This guide covers the 14 essential dishes to try, where to find the best versions in Tokyo and Osaka, a full halal dining section, food budget tiers, and a Japanese vocabulary card for ordering confidently. Whether you&rsquo;re planning a{" "}
            <Link href="/itinerary/7-days-first-time" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              7-day first trip
            </Link>{" "}
            or a longer food-focused journey, this guide has you covered.
          </p>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1200&q=80"
              alt="Assorted Japanese dishes including ramen, sushi and street food"
              width={1200}
              height={630}
              className="w-full object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Quick-links bar (in-body internal links) ── */}
        <section className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-500">Related planning guides</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-stone-300 bg-white">
              <Link href="/guides/cash-and-currency-in-japan">Cash &amp; currency in Japan</Link>
            </Button>
            <Button asChild variant="outline" className="border-stone-300 bg-white">
              <Link href="/guides/where-to-stay-in-tokyo">Where to stay in Tokyo</Link>
            </Button>
            <Button asChild variant="outline" className="border-stone-300 bg-white">
              <Link href="/guides/where-to-stay-in-osaka">Where to stay in Osaka</Link>
            </Button>
            <Button asChild variant="outline" className="border-stone-300 bg-white">
              <Link href="/tools/esim-vs-pocket-wifi">eSIM vs Pocket Wi-Fi</Link>
            </Button>
            <Button asChild variant="outline" className="border-stone-300 bg-white">
              <Link href="/itinerary/7-days-first-time">7-day Japan itinerary</Link>
            </Button>
          </div>
        </section>

        {/* ── Must-eat dishes ── */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-stone-900">14 must-eat dishes in Japan</h2>
          <p className="text-stone-700">
            These are the dishes every first-time visitor should try at least once. Budget-wise, most of Japan&rsquo;s best food costs less than ¥1,500 per meal — see the{" "}
            <Link href="#budget" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              food budget guide below
            </Link>{" "}
            for realistic spending by category. For cash strategy at restaurants (many are still cash-only), see the{" "}
            <Link href="/guides/cash-and-currency-in-japan" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              Cash &amp; Currency guide
            </Link>
            .
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DISHES.map((dish) => (
              <Card key={dish.name} className="border-stone-200 bg-white/85 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="text-2xl">{dish.emoji}</span>
                    {dish.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-stone-600">
                  <p>{dish.description}</p>
                  <div className="rounded-lg bg-stone-50 px-3 py-2 text-xs">
                    <span className="font-medium text-stone-800">Tokyo:</span> {dish.where.tokyo}
                  </div>
                  <div className="rounded-lg bg-stone-50 px-3 py-2 text-xs">
                    <span className="font-medium text-stone-800">Osaka:</span> {dish.where.osaka}
                  </div>
                  <div className="flex items-start gap-1 pt-1 text-xs text-stone-500">
                    <span className="font-medium text-stone-700">{dish.budget}</span>
                    <span>·</span>
                    <span>{dish.tip}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Where to eat in Tokyo ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-stone-900">Where to eat in Tokyo by neighbourhood</h2>
          <p className="text-stone-700">
            Tokyo&rsquo;s food scene is organised by neighbourhood. Knowing which areas to head to for which food cuts travel time significantly. If you&rsquo;re using our{" "}
            <Link href="/guides/where-to-stay-in-tokyo" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              Tokyo neighbourhood guide
            </Link>{" "}
            to pick your base, use this alongside it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { area: "Shinjuku", variant: "tip" as CardVariant, food: "Ramen (Fuunji, Ichiran Kabukicho), izakaya alleys in Omoide Yokocho (Memory Lane), curry at CoCo Ichibanya." },
              { area: "Asakusa", variant: "recommended" as CardVariant, food: "Street food on Nakamise-dori (ningyo-yaki, matcha soft serve), traditional tempura at Daikokuya, halal ramen at Naritaya." },
              { area: "Tsukiji Outer Market", variant: "recommended" as CardVariant, food: "Morning sushi and sashimi from 7–11 am. Tuna, uni, and tamagoyaki from market stalls. The closest thing to restaurant-grade fish at street prices." },
              { area: "Shibuya / Harajuku", variant: "tip" as CardVariant, food: "Crepes and Harajuku street food on Takeshita-dori. Gyudon chains (Yoshinoya, Matsuya) for fast budget meals. Afuri ramen for lighter shio broth." },
              { area: "Akihabara", variant: "info" as CardVariant, food: "Maid cafés if that&rsquo;s your thing. More practically: multi-floor buildings with cheap restaurant floors. Ramen and gyoza options are abundant around the station." },
              { area: "Ginza", variant: "info" as CardVariant, food: "High-end sushi bars and kaiseki — this is where you book if you&rsquo;re splurging. Lunch menus at Ginza restaurants often offer the same quality at 40–60% of dinner prices." },
            ].map((nb) => (
              <div key={nb.area} className={`rounded-xl border border-stone-200 p-4 ${CARD_VARIANTS[nb.variant]}`}>
                <h3 className="mb-1 font-semibold text-stone-900">{nb.area}</h3>
                <p className="text-sm text-stone-700">{nb.food}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Where to eat in Osaka ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-stone-900">Where to eat in Osaka by neighbourhood</h2>
          <p className="text-stone-700">
            Osaka has a reputation as Japan&rsquo;s food capital — <em>kuidaore</em> (&ldquo;eat until you drop&rdquo;) is the city motto. If your{" "}
            <Link href="/itinerary/7-days-first-time" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              itinerary includes Osaka
            </Link>
            , plan at least two dedicated food evenings. Read the{" "}
            <Link href="/guides/where-to-stay-in-osaka" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              Osaka neighbourhood guide
            </Link>{" "}
            to choose a base that keeps you close to the best eating.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { area: "Dotonbori", variant: "recommended" as CardVariant, food: "The epicentre of Osaka food. Takoyaki at Aizuya and Wanaka, okonomiyaki at Mizuno, conveyor belt sushi, and the famous crab sign for photos. Crowded after 7 pm — arrive early or go late." },
              { area: "Kuromon Ichiba Market", variant: "recommended" as CardVariant, food: "The 'Osaka kitchen' — 170+ stalls selling fresh seafood, meat, and produce. Breakfast or lunch here is the move: fresh oysters, fugu sashimi, and wagyu skewers for ¥500–1,500 each." },
              { area: "Shinsekai", variant: "tip" as CardVariant, food: "Old Osaka street food: kushikatsu (breaded fried skewers) is the local speciality. Never double-dip the sauce — the golden rule of Shinsekai. Also home to some of Osaka's best takoyaki." },
              { area: "Namba / Shinsaibashi", variant: "tip" as CardVariant, food: "Dense concentration of mid-range restaurants, izakayas, and international food. Good for halal options and late-night eating. Ramen at Kinryu on Dotonbori runs 24/7." },
              { area: "Umeda / Osaka Station", variant: "info" as CardVariant, food: "Underground restaurant floors beneath Osaka Station and Grand Front Osaka mall. Best for Korean food, sushi, and ramen in a less touristy environment." },
              { area: "Tsuruhashi", variant: "info" as CardVariant, food: "Osaka&rsquo;s Koreatown — the best yakiniku and Korean BBQ outside Korea. Cheaper than the tourist-facing restaurants in Namba, and more authentic." },
            ].map((nb) => (
              <div key={nb.area} className={`rounded-xl border border-stone-200 p-4 ${CARD_VARIANTS[nb.variant]}`}>
                <h3 className="mb-1 font-semibold text-stone-900">{nb.area}</h3>
                <p className="text-sm text-stone-700">{nb.food}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Halal section ── */}
        <section id="halal" className="space-y-6">
          <h2 className="text-2xl font-semibold text-stone-900">Halal &amp; Muslim-friendly dining in Japan</h2>
          <p className="text-stone-700">
            Japan&rsquo;s halal food scene has grown considerably in the last five years, concentrated in tourist-facing neighbourhoods. The most reliable resource is the{" "}
            <strong>Halal Gourmet Japan app</strong>, which lists certified and Muslim-friendly restaurants with live GPS search. Always verify certification status before visiting as it can change.
          </p>

          <div className={`rounded-xl border border-stone-200 p-5 ${CARD_VARIANTS.warning}`}>
            <h3 className="mb-2 font-semibold text-stone-900">Important note on &ldquo;Muslim-friendly&rdquo; vs &ldquo;halal certified&rdquo;</h3>
            <p className="text-sm text-stone-700">
              In Japan, &ldquo;Muslim-friendly&rdquo; typically means pork-free and alcohol-minimised but may not be formally certified. &ldquo;Halal certified&rdquo; means a recognised body has verified the supply chain. If you require strict halal compliance, look for certified restaurants specifically. Carrying a{" "}
              <strong>Japanese-language halal dietary card</strong> explaining your requirements is strongly recommended — many restaurant staff will accommodate you if they understand the request clearly.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-stone-900">Tokyo halal spots</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {HALAL_SPOTS.filter((s) => s.city === "Tokyo").map((spot) => (
                <div
                  key={spot.name}
                  className={`rounded-xl border border-stone-200 p-4 ${CARD_VARIANTS.recommended}`}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-semibold text-stone-900">{spot.name}</h4>
                    {spot.certified && (
                      <Badge className="bg-emerald-700 text-xs text-white hover:bg-emerald-700">Certified</Badge>
                    )}
                    {!spot.certified && (
                      <Badge variant="outline" className="border-amber-400 text-xs text-amber-700">Muslim-friendly</Badge>
                    )}
                  </div>
                  <p className="mb-1 text-xs font-medium text-stone-500">
                    {spot.area} · {spot.type}
                  </p>
                  <p className="text-sm text-stone-700">{spot.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-stone-900">Osaka halal spots</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {HALAL_SPOTS.filter((s) => s.city === "Osaka").map((spot) => (
                <div
                  key={spot.name}
                  className={`rounded-xl border border-stone-200 p-4 ${CARD_VARIANTS.recommended}`}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-semibold text-stone-900">{spot.name}</h4>
                    {spot.certified && (
                      <Badge className="bg-emerald-700 text-xs text-white hover:bg-emerald-700">Certified</Badge>
                    )}
                    {!spot.certified && (
                      <Badge variant="outline" className="border-amber-400 text-xs text-amber-700">Muslim-friendly</Badge>
                    )}
                  </div>
                  <p className="mb-1 text-xs font-medium text-stone-500">
                    {spot.area} · {spot.type}
                  </p>
                  <p className="text-sm text-stone-700">{spot.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-xl border border-stone-200 p-5 ${CARD_VARIANTS.tip}`}>
            <h3 className="mb-2 font-semibold text-stone-900">Useful halal travel tips</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>
                <strong>Halal Gourmet Japan app</strong> — the most comprehensive halal restaurant directory in Japan, with certification status and user reviews.
              </li>
              <li>
                <strong>Muslim Pro app</strong> — prayer times, qibla direction, and nearby halal food search integrated.
              </li>
              <li>
                <strong>Convenience stores</strong> — onigiri filled with fish (salmon, tuna) are generally permissible. Avoid pork-based fillings (look for buta/pork kanji: 豚).
              </li>
              <li>
                <strong>Sushi and sashimi</strong> — fish and seafood pieces at sushi restaurants are generally halal. Caution: some sauces contain mirin (rice wine) or sake. Ask if unsure.
              </li>
              <li>
                <strong>Vegetarian-friendly overlap</strong> — many Buddhist shojin ryori restaurants near temples are entirely plant-based and naturally halal.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Budget guide ── */}
        <section id="budget" className="space-y-6">
          <h2 className="text-2xl font-semibold text-stone-900">Food budget guide</h2>
          <p className="text-stone-700">
            Japan is outstanding value for the food quality you get at every price point. Even budget travellers eat extremely well. For cash planning (most restaurants below ¥3,000 are cash-only), see the{" "}
            <Link href="/guides/cash-and-currency-in-japan" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              Cash &amp; Currency guide
            </Link>{" "}
            — and make sure you have yen in hand before heading out to eat.
          </p>
          <div className="space-y-3">
            {BUDGET_TIERS.map((tier) => (
              <div key={tier.tier} className={`rounded-xl border border-stone-200 p-4 ${CARD_VARIANTS[tier.variant]}`}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-semibold text-stone-900">{tier.tier}</h3>
                  <span className="rounded-full bg-white/80 px-2 py-0.5 text-sm font-medium text-stone-700 ring-1 ring-stone-200">
                    {tier.cost}
                  </span>
                </div>
                <p className="mt-1 text-sm text-stone-500">{tier.examples}</p>
                <p className="mt-1 text-sm text-stone-700">{tier.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Convenience store ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-stone-900">Convenience store essentials</h2>
          <p className="text-stone-700">
            Japan&rsquo;s convenience stores — 7-Eleven, Lawson, and FamilyMart — are genuinely excellent. They&rsquo;re not a fallback; they&rsquo;re a food destination. You&rsquo;ll also need them for{" "}
            <Link href="/guides/cash-and-currency-in-japan" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              7-Eleven ATM withdrawals
            </Link>{" "}
            — so you&rsquo;ll be in there regularly anyway.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-xs uppercase tracking-wide text-stone-500">
                  <th className="pb-3 pr-4 font-semibold">Item</th>
                  <th className="pb-3 pr-4 font-semibold">Where</th>
                  <th className="pb-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {KONBINI_PICKS.map((pick, i) => (
                  <tr key={pick.item} className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}>
                    <td className="py-3 pr-4 font-medium text-stone-800">{pick.item}</td>
                    <td className="py-3 pr-4 text-stone-600">{pick.store}</td>
                    <td className="py-3 text-stone-600">{pick.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Email capture (mid-page) ── */}
        <section className="rounded-2xl bg-stone-900 px-6 py-8 text-center text-white">
          <h2 className="mb-2 text-xl font-semibold">Get the free 10-week Japan planning series</h2>
          <p className="mb-5 text-stone-400">
            Food, transport, money, and packing — one focused email per week as you plan your trip.
          </p>
          <EmailCaptureForm source="food-guide" className="mx-auto max-w-md" />
        </section>

        {/* ── Vocabulary card ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-stone-900">Japanese food vocabulary card</h2>
          <p className="text-stone-700">
            These 10 phrases cover 90% of restaurant interactions. You don&rsquo;t need fluency — a few key words and a pointing gesture goes a long way. For connectivity to use translation apps on the go, compare{" "}
            <Link href="/tools/esim-vs-pocket-wifi" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900">
              eSIM vs Pocket Wi-Fi options
            </Link>
            .
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-xs uppercase tracking-wide text-stone-500">
                  <th className="pb-3 pr-4 font-semibold">Japanese</th>
                  <th className="pb-3 pr-4 font-semibold">Pronunciation</th>
                  <th className="pb-3 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {FOOD_VOCAB.map((v, i) => (
                  <tr key={v.japanese} className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}>
                    <td className="py-3 pr-4 font-medium text-stone-900">{v.japanese}</td>
                    <td className="py-3 pr-4 italic text-stone-500">{v.romaji}</td>
                    <td className="py-3 text-stone-700">{v.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-stone-900">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="mb-2 font-semibold text-stone-900">{faq.name}</h3>
                <p className="text-sm leading-7 text-stone-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related guides ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-stone-900">Continue planning your trip</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/guides/cash-and-currency-in-japan",
                title: "Cash &amp; Currency",
                desc: "Where to get yen, how 7-Eleven ATMs work, and when cards are accepted.",
              },
              {
                href: "/guides/where-to-stay-in-tokyo",
                title: "Where to Stay in Tokyo",
                desc: "7 Tokyo neighbourhoods compared — Shinjuku, Shibuya, Asakusa and more.",
              },
              {
                href: "/guides/where-to-stay-in-osaka",
                title: "Where to Stay in Osaka",
                desc: "5 Osaka neighbourhoods compared — Namba, Umeda, Tennoji and more.",
              },
              {
                href: "/itinerary/7-days-first-time",
                title: "7-Day First-Timer Itinerary",
                desc: "Tokyo, Kyoto, and Osaka in 7 days — a classic first Japan route.",
              },
              {
                href: "/tools/budget-estimator",
                title: "Budget Estimator",
                desc: "Calculate your realistic Japan trip cost across accommodation, food, and transport.",
              },
              {
                href: "/guides/japan-trip-checklist",
                title: "Japan Trip Checklist",
                desc: "Everything to sort before you fly — visa, money, transport, packing.",
              },
            ].map((link) => (
              <Card key={link.href} className="border-stone-200 bg-white/85 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base" dangerouslySetInnerHTML={{ __html: link.title }} />
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-stone-600">{link.desc}</p>
                  <Button asChild variant="outline" className="border-stone-300 bg-white">
                    <Link href={link.href}>Read more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
