import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-stone-200/80 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-stone-900">Japan Toolkit</p>
            <p className="text-sm text-stone-500">Practical trip-planning tools built by travelers who keep going back.</p>
          </div>
          <div className="flex items-center gap-5 text-sm text-stone-600">
            <Link href="/about" className="hover:text-stone-900 underline-offset-4 hover:underline">About</Link>
            <Link href="/contact" className="hover:text-stone-900 underline-offset-4 hover:underline">Contact</Link>
            <Link href="/privacy" className="hover:text-stone-900 underline-offset-4 hover:underline">Privacy Policy</Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-stone-400">© {new Date().getFullYear()} Japan Toolkit. Some links are affiliate links — we may earn a commission if you book through them, at no extra cost to you.</p>
      </div>
    </footer>
  );
}
