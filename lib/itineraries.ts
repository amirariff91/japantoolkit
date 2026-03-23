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
