import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
          Japan Toolkit
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-stone-600">
          <Link className="transition hover:text-stone-950" href="/tools">
            Tools
          </Link>
          <Link className="transition hover:text-stone-950" href="/guides">
            Guides
          </Link>
          <Link className="transition hover:text-stone-950" href="/itinerary">
            Itineraries
          </Link>
          <Link className="transition hover:text-stone-950" href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
