import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Japan Toolkit",
  description: "Privacy policy for Japan Toolkit.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="space-y-10 py-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-700">Legal</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Privacy Policy</h1>
        <p className="text-sm text-stone-400">Last updated: March 2026</p>
      </section>
      <div className="space-y-8 text-stone-600 leading-7">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-stone-900">What we collect</h2>
          <p>We use Google Analytics 4 (GA4) to understand how visitors use the site. GA4 collects anonymized usage data including pages visited, time on site, and general geographic region. We do not collect names, emails, or any personally identifiable information unless you contact us directly.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-stone-900">Affiliate links</h2>
          <p>Some pages on Japan Toolkit contain affiliate links to third-party services such as Klook. If you click an affiliate link and make a purchase, we may earn a small commission at no extra cost to you. Clicking these links may set tracking cookies managed by the affiliate network. We only link to services we would personally use.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-stone-900">Cookies</h2>
          <p>This site uses GA4 analytics cookies to measure traffic. Affiliate links may set separate cookies managed by Klook or other third parties. You can disable cookies in your browser settings at any time.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-stone-900">Contact</h2>
          <p>For data-related requests, email us at <a href="mailto:hello@japantoolkit.com" className="text-amber-700 underline underline-offset-4">hello@japantoolkit.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
