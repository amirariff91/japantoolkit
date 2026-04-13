import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Japan Toolkit",
  description: "Get in touch with the Japan Toolkit team.",
  alternates: { canonical: "https://japantoolkit.cepathosting.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="space-y-10 py-12 max-w-2xl">
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-700">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Get in touch</h1>
        <p className="text-lg leading-8 text-stone-600">
          Have a question about a tool, want to suggest a route, or spot an error in our data? We read every email.
        </p>
      </section>
      <section className="rounded-2xl border border-stone-200 bg-stone-50 p-8 space-y-3">
        <p className="font-semibold text-stone-900">Email</p>
        <a href="mailto:hello@japantoolkit.com" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
          hello@japantoolkit.com
        </a>
        <p className="text-sm text-stone-500">We aim to reply within 2 business days.</p>
      </section>
    </div>
  );
}
