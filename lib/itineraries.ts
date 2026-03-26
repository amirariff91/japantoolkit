export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Itinerary = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  durationLabel: string;
  intro: string;
  highlights: string[];
  attractionDescriptions: string[];
  days: ItineraryDay[];
};

export const itineraryList: Itinerary[] = [
  {
    slug: "7-days-first-time",
    title: "7 Days in Japan for First-Time Visitors",
    seoTitle: "7 Days in Japan Itinerary for First-Time Visitors",
    metaDescription:
      "Use this first-time 7-day Japan itinerary for a classic Tokyo, Kyoto, and Osaka route with manageable pacing and major highlights.",
    durationLabel: "7 Days",
    intro:
      "This first-time 7-day Japan route is built for travelers who want the classic sweep without rushing every hour. It pairs Tokyo's major neighborhoods with a Kyoto core and an Osaka finish, giving you a strong first look at how Japan's cities feel different from one another.",
    highlights: ["Shibuya and Asakusa in one Tokyo stay", "Kyoto temples with a geisha district evening", "Osaka food crawl around Dotonbori"],
    attractionDescriptions: [
      "Balance modern Tokyo energy with a historical district and easy transit between both.",
      "See Kyoto's heritage core without trying to cover the entire city in one day.",
      "Finish with Osaka's easier nightlife and casual dining scene.",
    ],
    days: [
      { day: 1, title: "Arrive in Tokyo", description: "Land, check into a Tokyo base, and keep the first afternoon light with Shinjuku or Tokyo Station surroundings." },
      { day: 2, title: "Tokyo classics", description: "Spend the day between Asakusa, Ueno, and Tokyo Skytree or Akihabara depending on energy." },
      { day: 3, title: "West-side Tokyo", description: "Cover Meiji Jingu, Harajuku, Shibuya Crossing, and a slow evening view from Shibuya Sky or a local izakaya." },
      { day: 4, title: "Shinkansen to Kyoto", description: "Travel to Kyoto in the morning, visit Fushimi Inari later in the day, and end in Gion after dark." },
      { day: 5, title: "Kyoto east side", description: "Focus on Higashiyama, Kiyomizu-dera, Sannenzaka, and a quiet tea stop rather than packing the city edge to edge." },
      { day: 6, title: "Osaka day and night", description: "Move to Osaka or day-trip in, then split time between Osaka Castle, Umeda, and Dotonbori." },
      { day: 7, title: "Final shopping and departure", description: "Use the final morning for souvenirs, airport transit, or a relaxed brunch before heading out." },
    ],
  },
  {
    slug: "7-days-anime",
    title: "7 Days in Japan for Anime Fans",
    seoTitle: "7 Days in Japan Anime Itinerary",
    metaDescription:
      "Plan a 7-day anime-focused Japan itinerary with Akihabara, Ikebukuro, Nakano, themed cafes, and Kansai stops for pop-culture fans.",
    durationLabel: "7 Days",
    intro:
      "This 7-day anime itinerary favors neighborhoods, stores, and themed stops that are actually enjoyable to browse instead of forcing a generic golden route into fandom clothing. Tokyo carries most of the weight, then Kansai adds a lighter second half with game shops, arcades, and character cafes.",
    highlights: ["Akihabara and Ikebukuro merch districts", "Nakano Broadway for secondhand finds", "Den Den Town in Osaka"],
    attractionDescriptions: [
      "Tokyo's biggest cluster of figure shops, arcades, and themed experiences.",
      "A strong stop for collectors chasing older or less mainstream items.",
      "Osaka's compact pop-culture district adds contrast without another huge Tokyo day.",
    ],
    days: [
      { day: 1, title: "Settle into Tokyo", description: "Stay near a Yamanote Line hub so late shop runs and district hopping stay easy." },
      { day: 2, title: "Full Akihabara day", description: "Hit figure stores, arcades, card shops, and one themed cafe with a reservation if needed." },
      { day: 3, title: "Ikebukuro and Nakano", description: "Split the day between Sunshine City, Otome Road, and Nakano Broadway's dense resale stores." },
      { day: 4, title: "Free Tokyo flex day", description: "Use this for museum crossovers, another merch run, or a lower-key neighborhood like Kichijoji." },
      { day: 5, title: "Travel to Osaka", description: "Ride west, settle in, then spend the evening in Den Den Town and Namba." },
      { day: 6, title: "Universal Studios or Osaka pop culture", description: "Choose between a full park day or a mix of arcades, cafes, and shopping streets." },
      { day: 7, title: "Last purchases and departure", description: "Keep luggage space in mind and use the final hours for targeted repeat buys." },
    ],
  },
  {
    slug: "14-days-classic",
    title: "14 Days in Japan for a Classic Route",
    seoTitle: "14 Days in Japan Classic Itinerary",
    metaDescription:
      "Follow a classic 14-day Japan itinerary across Tokyo, Hakone, Kyoto, Nara, Osaka, and Hiroshima with a balanced pace.",
    durationLabel: "14 Days",
    intro:
      "A 14-day classic Japan trip has enough breathing room to stop treating every transfer like a race. This version uses two weeks to connect Tokyo, Hakone, Kyoto, Nara, Osaka, and Hiroshima with a pace that lets you see major sights and still keep a few slower evenings.",
    highlights: ["Tokyo city districts plus a Hakone reset", "Kyoto with time for Arashiyama and Nara", "Hiroshima and Miyajima as a meaningful western extension"],
    attractionDescriptions: [
      "Start with a large city base before shifting into mountains and traditional neighborhoods.",
      "Use Kansai for temples, food, and easy side trips without constant hotel changes.",
      "End with a history-focused stop that adds depth beyond the standard route.",
    ],
    days: [
      { day: 1, title: "Arrive in Tokyo", description: "Keep the arrival day compact and use it to adapt to the time zone." },
      { day: 2, title: "Historic Tokyo", description: "Work through Asakusa, Ueno, and a slower museum or garden stop." },
      { day: 3, title: "Modern Tokyo", description: "Shibuya, Harajuku, Omotesando, and a night view make a clean west-side day." },
      { day: 4, title: "Tokyo flex day", description: "Save one day for shopping, a teamLab visit, or a neighborhood that matches your interests." },
      { day: 5, title: "Hakone overnight", description: "Shift to Hakone for onsen time, lake views, and a break from city rhythm." },
      { day: 6, title: "Travel to Kyoto", description: "Arrive in Kyoto and keep the evening focused on one area such as Pontocho or Gion." },
      { day: 7, title: "Kyoto temples", description: "Cover eastern Kyoto at a measured pace with room for cafes and alleys." },
      { day: 8, title: "Arashiyama and northwest Kyoto", description: "Bamboo grove early, then spread the day across gardens and quieter temple grounds." },
      { day: 9, title: "Nara day trip", description: "Spend a day with Todai-ji, Nara Park, and a gentler evening back in Kyoto or Osaka." },
      { day: 10, title: "Move to Osaka", description: "Switch bases and use the evening for street food and riverfront energy." },
      { day: 11, title: "Osaka discoveries", description: "Mix easy city sightseeing with markets and an unhurried dinner crawl." },
      { day: 12, title: "Hiroshima", description: "Travel west and dedicate the afternoon to the Peace Memorial area." },
      { day: 13, title: "Miyajima", description: "Use a full or half day on Miyajima before returning for your final night." },
      { day: 14, title: "Departure", description: "Position yourself for the airport or shinkansen with a calm final morning." },
    ],
  },
  {
    slug: "21-days-slow-travel",
    title: "21 Days in Japan for Slow Travel",
    seoTitle: "21 Days in Japan Slow Travel Itinerary",
    metaDescription:
      "Use this 21-day slow travel Japan itinerary to spend longer in Tokyo, Kansai, and regional stops without changing hotels every night.",
    durationLabel: "21 Days",
    intro:
      "Three weeks in Japan gives you permission to stop stacking checklist items and start noticing texture: neighborhood breakfasts, quieter museum time, slower temple mornings, and extra nights where laundry and rest are part of the plan. This itinerary favors fewer base changes and more lived-in pacing.",
    highlights: ["Longer stays in Tokyo and Kyoto", "Regional nights instead of rushed day trips", "Space for weather, rest, and repeat favorites"],
    attractionDescriptions: [
      "Using long city stays reduces friction and helps you explore beyond the obvious first layer.",
      "Regional overnights turn places like Kanazawa or Naoshima into actual experiences instead of transit detours.",
      "Built-in slack makes the itinerary resilient when weather or energy shifts.",
    ],
    days: [
      { day: 1, title: "Arrive in Tokyo", description: "Start with a simple neighborhood walk and an early night." },
      { day: 2, title: "Tokyo neighborhood day", description: "Pick one cluster such as Yanaka and Ueno instead of crossing the city constantly." },
      { day: 3, title: "Tokyo modern side", description: "Use Shibuya, Ebisu, or Daikanyama for a design-forward day." },
      { day: 4, title: "Tokyo flex", description: "Leave room for shopping, weather, or a museum without pressure." },
      { day: 5, title: "Nikko or Kamakura", description: "Take a measured day trip with enough time to return before exhaustion sets in." },
      { day: 6, title: "Travel onward", description: "Move to a regional stop such as Kanazawa or Hakone and keep the evening open." },
      { day: 7, title: "Regional exploration", description: "Spend a full day locally instead of using the place as a one-night transfer." },
      { day: 8, title: "Travel to Kyoto", description: "Shift west and settle into a multi-night Kansai base." },
      { day: 9, title: "Kyoto east side", description: "Focus on temple streets and slower meals rather than maximum coverage." },
      { day: 10, title: "Kyoto local day", description: "Browse craft shops, gardens, and cafes with no major checklist pressure." },
      { day: 11, title: "Arashiyama", description: "Start early, then give the rest of the day to scenic western Kyoto." },
      { day: 12, title: "Nara overnight or Osaka shift", description: "Either spend a night out of Kyoto or reposition for variety." },
      { day: 13, title: "Osaka easy day", description: "Keep the pace casual with markets, a river walk, and food-focused wandering." },
      { day: 14, title: "Himeji or Kobe", description: "Add a nearby side trip without packing and unpacking again." },
      { day: 15, title: "Travel to Hiroshima", description: "Move west for a history-heavy stop with enough decompression time." },
      { day: 16, title: "Miyajima", description: "Treat the island as a full day, not just a torii photo stop." },
      { day: 17, title: "Transit to another region", description: "Use this to reach Fukuoka, Naoshima, or return east depending on preferences." },
      { day: 18, title: "Regional depth day", description: "Stay put and see what the area feels like outside the main attraction." },
      { day: 19, title: "Return toward Tokyo", description: "Break the trip with one more stop if needed instead of forcing a long run." },
      { day: 20, title: "Tokyo finale", description: "Revisit favorite neighborhoods and buy the things you skipped on day one." },
      { day: 21, title: "Departure", description: "Use a buffer morning for packing, airport transfer, and a gentler exit." },
    ],
  },
  {
    slug: "7-days-family",
    title: "7 Days in Japan for Families",
    seoTitle: "7 Days in Japan Family Itinerary",
    metaDescription:
      "Use this family-friendly 7-day Japan itinerary with manageable transfers, kid-friendly stops, and a practical Tokyo-Kyoto-Osaka flow.",
    durationLabel: "7 Days",
    intro:
      "A family-focused 7-day route in Japan works best when each day has one anchor experience and enough slack for snacks, transit breaks, and early nights. This version keeps hotel changes limited and chooses neighborhoods where logistics stay easier with children.",
    highlights: ["Tokyo sights with room for downtime", "Kyoto highlights without overloading temple days", "Osaka attractions that keep evenings easy"],
    attractionDescriptions: [
      "Use large transport hubs and reliable meal options to reduce friction with kids.",
      "Select Kyoto sights that feel scenic and manageable instead of piling on shrine after shrine.",
      "Osaka is a strong family base thanks to food variety and straightforward navigation.",
    ],
    days: [
      { day: 1, title: "Arrive and settle in", description: "Choose a station-connected Tokyo hotel and keep day one very short." },
      { day: 2, title: "Tokyo with child-friendly stops", description: "Mix one major attraction with a park, department-store food floor, and early dinner." },
      { day: 3, title: "Flexible Tokyo day", description: "Use museums, character stores, or an aquarium depending on ages and interests." },
      { day: 4, title: "Travel to Kyoto", description: "Ride the shinkansen after breakfast and build in rest time after check-in." },
      { day: 5, title: "Kyoto highlights", description: "See one or two scenic temple areas and avoid trying to cover the city wall to wall." },
      { day: 6, title: "Osaka family day", description: "Pick between Osaka Aquarium, Universal Studios, or a slower city day with great food access." },
      { day: 7, title: "Departure", description: "Keep luggage and airport routing simple for a smoother final morning." },
    ],
  },
  {
    slug: "14-days-budget",
    title: "14 Days in Japan on a Budget",
    seoTitle: "14 Days in Japan Budget Itinerary",
    metaDescription:
      "Plan a 14-day budget Japan itinerary with efficient route choices, lower-cost food ideas, and a realistic mix of Tokyo, Kyoto, Osaka, and side trips.",
    durationLabel: "14 Days",
    intro:
      "A budget-conscious Japan trip is less about eliminating good experiences and more about sequencing them intelligently. This 14-day route uses efficient city pairs, slower hotel turnover, and realistic low-cost meals so you can keep the overall spend under control without making the trip feel stripped down.",
    highlights: ["Efficient city routing to reduce wasted transit", "Convenience-store breakfasts and lunch-set strategy", "Free viewpoints, shrines, markets, and neighborhood walks"],
    attractionDescriptions: [
      "Route design matters because redundant train hops quietly inflate the budget.",
      "Japan makes it easy to eat well cheaply if you lean on lunch sets and depachika options.",
      "Many of the most memorable parts of the trip cost very little beyond transit.",
    ],
    days: [
      { day: 1, title: "Arrive in Tokyo", description: "Settle into a budget-friendly business hotel or hostel near a strong train line." },
      { day: 2, title: "Low-cost Tokyo classics", description: "Use free shrine, market, and neighborhood stops while keeping paid attractions selective." },
      { day: 3, title: "Tokyo food and city walks", description: "Plan around affordable lunch sets, supermarkets, and one nightlife neighborhood." },
      { day: 4, title: "Tokyo flex", description: "Use discount passes only if they match your actual route, not by default." },
      { day: 5, title: "Travel to Kyoto", description: "Move once, not multiple times, and stay long enough to reduce check-in friction." },
      { day: 6, title: "Kyoto walking day", description: "String together temple districts and river walks that cost little beyond transport." },
      { day: 7, title: "Kyoto low-cost food day", description: "Use markets, noodle shops, and bakeries instead of formal dining." },
      { day: 8, title: "Nara or Osaka", description: "Choose the cheaper and more interesting day depending on what you've already seen." },
      { day: 9, title: "Shift to Osaka", description: "Use Osaka as a practical base with plenty of inexpensive meals." },
      { day: 10, title: "Osaka markets and neighborhoods", description: "Focus on lively districts and low-cost city energy rather than expensive tickets." },
      { day: 11, title: "Himeji or Kobe", description: "Pick one side trip instead of stacking several train fares into one day." },
      { day: 12, title: "Return buffer", description: "Add a lower-cost rest day to avoid spending by default." },
      { day: 13, title: "Final shopping plan", description: "Target souvenirs late so you avoid impulse buys throughout the trip." },
      { day: 14, title: "Departure", description: "Finish with an airport transfer plan that balances price and convenience." },
    ],
  },
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
    attractionDescriptions: [
      "Arrive before 7am and you'll have the lantern-lit approach almost entirely to yourself.",
      "The crossing is most dramatic at dusk — watch from the Starbucks or Shibuya Sky rooftop.",
      "Fresh tuna nigiri and tamagoyaki served from market stalls starting at 5am.",
      "Borderless or Planets — book timed entry well in advance, both sell out weeks ahead.",
      "90 minutes from Shinjuku and a complete contrast to the city — sea air, temples, and green hills.",
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
  },
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
    attractionDescriptions: [
      "Takoyaki, kushikatsu, and crab signs — Dotonbori is best explored on foot after 8pm when the neon peaks.",
      "The castle exterior and Nishinomaru Garden are free; the keep interior costs ¥600 and offers city views.",
      "Nara Park deer roam freely and approach you directly — buy deer crackers from vendors near the gate.",
      "Oysters, sea urchin, and grilled skewers from covered market stalls open from early morning.",
      "Set-course Kobe beef lunches start from around ¥4,000 — far cheaper than dinner equivalents.",
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
  },
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
    attractionDescriptions: [
      "On a clear day the Hikari from Tokyo passes Fuji on the right side (seats A/B) around Shin-Fuji station.",
      "Best experienced at dusk — the crossing is larger and more chaotic than photos suggest.",
      "Visit before 7am and the stone lanterns and incense smoke make it feel centuries away from modern Tokyo.",
      "Start at the base by 9am and you'll reach the summit before midday crowds block the lower gates.",
      "One street, many stalls — takoyaki, gyoza, crab legs, and matcha soft serve within 500 metres.",
    ],
    days: [
      { day: 1, title: "Arrive Tokyo — Shinjuku Base", description: "Arrive at Narita or Haneda. Pick up IC card (Suica or Pasmo). Check in Shinjuku. Evening: Tokyo Metropolitan Government Building free observation deck, ramen dinner in Kabukicho." },
      { day: 2, title: "Tokyo East — Asakusa & Shibuya", description: "Senso-ji at 7am before tour groups. Tsukiji Outer Market brunch (tuna nigiri, tamagoyaki). Shibuya Crossing in the evening. Rooftop at Shibuya Sky." },
      { day: 3, title: "Tokyo West — Harajuku, Akihabara", description: "Meiji Shrine morning. Harajuku Takeshita-dori. Omotesando. Afternoon in Akihabara (multi-floor game shops). Ueno for museum if energy allows." },
      { day: 4, title: "Shinkansen to Osaka — via Kyoto", description: "Hikari Shinkansen from Tokyo. Stop in Kyoto (store bags at station lockers). Fushimi Inari (arrives by 11am, crowd-free by 11:30). Nishiki Market lunch. Arrive Osaka Namba by 6pm." },
      { day: 5, title: "Osaka — Dotonbori & Osaka Castle", description: "Morning Osaka Castle. Shinsekai for kushikatsu lunch. Kuromon Ichiba afternoon. Dotonbori evening food crawl (takoyaki, gyoza, crab)." },
      { day: 6, title: "Nara Day Trip or Osaka Free Day", description: "30 min to Nara: deer park, Todai-ji Great Buddha. Or: slow morning at Hozenji Yokocho alley, shopping in Shinsaibashi, Abeno Harukas observation deck." },
      { day: 7, title: "Depart from Osaka or Tokyo", description: "Kansai International (45 min from Namba) for direct flights. Or Shinkansen back to Tokyo Narita/Haneda (2.5 hrs + transfer). Final souvenir: Pocky and Kit Kat flavours at Shin-Osaka station shops." },
    ],
  },
  {
    slug: "7-days-solo",
    title: "7 Days in Japan for Solo Travelers",
    seoTitle: "7 Days in Japan Solo Itinerary",
    metaDescription:
      "Use this 7-day solo Japan itinerary for flexible city days, easy dining options, and a route that works well for independent travelers.",
    durationLabel: "7 Days",
    intro:
      "Solo travel in Japan can be wonderfully easy if the route respects your freedom instead of overscheduling it. This 7-day itinerary gives you clear structure, but every day also leaves room to follow a food lead, return to a neighborhood you liked, or pivot when the weather changes.",
    highlights: ["Tokyo neighborhoods that reward wandering alone", "Kyoto mornings built for quiet starts", "Osaka evenings with easy solo dining"],
    attractionDescriptions: [
      "Tokyo is strong for solo travel because the city supports spontaneous browsing and solo meals well.",
      "Kyoto rewards early starts and unhurried walking more than checklist speed.",
      "Osaka offers a looser, more social finish without requiring group plans.",
    ],
    days: [
      { day: 1, title: "Arrive in Tokyo", description: "Check into a well-connected base and let the first evening stay open-ended." },
      { day: 2, title: "Old and new Tokyo", description: "Move from quieter historical streets into busier retail areas at your own pace." },
      { day: 3, title: "Solo Tokyo flex day", description: "Use this for bookstores, cafes, photography, shopping, or a half-day museum." },
      { day: 4, title: "Travel to Kyoto", description: "Ride west, keep luggage simple, and spend the evening in a compact walkable district." },
      { day: 5, title: "Kyoto early start", description: "Take advantage of a solo schedule to reach temples before crowds build." },
      { day: 6, title: "Osaka night energy", description: "Finish with food, neon, and people-watching without needing a fixed group plan." },
      { day: 7, title: "Departure", description: "Use your final morning however the trip feels like it should end: coffee, shopping, or one last walk." },
    ],
  },
];

export function getItineraryBySlug(slug: string) {
  return itineraryList.find((itinerary) => itinerary.slug === slug);
}
