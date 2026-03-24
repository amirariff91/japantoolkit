import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-stone-200/80 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-stone-600 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>Japan Toolkit helps travelers compare rail, connectivity, and itinerary options before they book.</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:text-stone-900 underline-offset-4 hover:underline">Contact</Link>
          <Link href="/privacy" className="hover:text-stone-900 underline-offset-4 hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
