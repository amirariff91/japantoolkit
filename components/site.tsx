import Link from "next/link";
import type { ReactNode } from "react";

type ToolSummary = {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  featured?: boolean;
  status?: "live" | "coming-soon";
};

type Itinerary = {
  slug: string;
  title: string;
  intro: string;
  duration: string;
  type: string;
  cities: string;
  cardDescription: string;
};

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base text-ink-secondary sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

type BadgeProps = {
  children: ReactNode;
  tone?: "red" | "blue" | "gray" | "green";
};

export function Badge({ children, tone = "gray" }: BadgeProps) {
  const styles = {
    red: "bg-primary-muted text-primary",
    blue: "bg-accent-light text-accent",
    gray: "bg-surface-2 text-ink-secondary",
    green: "bg-green-50 text-success",
  }[tone];

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${styles}`}
    >
      {children}
    </span>
  );
}

export function ToolCard({ tool }: { tool: ToolSummary }) {
  const isLive = tool.status === "live";

  return (
    <article
      className={`group rounded-xl border bg-surface p-8 ${
        tool.featured ? "border-2 border-surface-3" : "border-surface-3"
      } shadow-sm transition-shadow duration-200 hover:shadow-md`}
    >
      <div className="mb-6 border-t-4 border-primary pt-6">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-primary-muted text-sm font-semibold text-primary">
          JT
        </div>
        <div className="mb-4 flex items-center gap-3">
          <Badge tone={isLive ? "red" : "gray"}>{tool.eyebrow}</Badge>
          {tool.status === "coming-soon" ? <Badge>Coming soon</Badge> : null}
        </div>
        <h3 className="text-xl">{tool.title}</h3>
        <p className="mt-3 text-sm text-ink-secondary">{tool.description}</p>
      </div>
      {isLive ? (
        <Link
          href={tool.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 hover:underline"
        >
          Open tool <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <span className="text-sm font-medium text-ink-muted">
          In development
        </span>
      )}
    </article>
  );
}

export function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
  return (
    <article className="overflow-hidden rounded-xl border border-surface-3 bg-surface shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="h-48 bg-[linear-gradient(135deg,rgba(26,26,46,0.88),rgba(192,57,43,0.78)),url('/itinerary-banner.svg')] bg-cover bg-center" />
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          <Badge tone="red">{itinerary.duration}</Badge>
          <Badge tone="blue">{itinerary.type}</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl">{itinerary.title}</h3>
          <p className="text-sm text-ink-secondary">{itinerary.cardDescription}</p>
        </div>
        <p className="text-sm text-ink-muted">{itinerary.cities}</p>
        <Link
          href={`/itinerary/${itinerary.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          View itinerary <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
