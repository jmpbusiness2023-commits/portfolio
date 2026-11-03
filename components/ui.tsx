import type { ReactNode } from "react";
import { DownloadSimpleIcon } from "@phosphor-icons/react/ssr";
import { cvs, tmrcStats } from "@/content/site";

export function SectionHeading({
  title,
  intro,
  eyebrow,
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`} data-reveal>
      {eyebrow && <p className="mb-4 font-mono text-xs tracking-wide text-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-[2.5rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
    </div>
  );
}

/** Bandeau des seuls chiffres autorisés pour TMRC FX. */
export function StatsBand() {
  return (
    <dl className="ticks grid grid-cols-2 border border-line lg:grid-cols-4" data-reveal>
      {tmrcStats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col gap-2 p-6 md:p-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
            i >= 2 ? "border-t border-line lg:border-t-0" : ""
          } ${i === 2 ? "lg:border-l" : ""}`}
        >
          <dt className="order-2 text-sm leading-snug text-muted">{stat.label}</dt>
          <dd className="order-1 font-mono text-5xl font-medium tracking-tighter text-accent tabular-nums md:text-6xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CvButton({
  which,
  variant = "secondary",
}: {
  which: keyof typeof cvs;
  variant?: "primary" | "secondary";
}) {
  const cv = cvs[which];
  return (
    <a href={cv.href} download className={`btn btn-${variant}`}>
      <DownloadSimpleIcon size={18} aria-hidden />
      {cv.label}
    </a>
  );
}

export function TagList({ tags, label }: { tags: string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {tags.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  );
}
