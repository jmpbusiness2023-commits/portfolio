import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeftIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";
import { caseLabels, contact } from "@/content/site";
import { CvButton } from "./ui";

export function CaseHeader({
  eyebrow,
  title,
  lead,
  meta,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta: { label: string; value: ReactNode }[];
}) {
  return (
    <header className="band-halo relative isolate overflow-hidden">
      <div aria-hidden className="blueprint absolute inset-0 -z-10" />
      <div className="container-site pt-10 pb-14 md:pt-14 md:pb-20">
        <Link
          href="/#use-cases"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeftIcon size={16} aria-hidden />
          {caseLabels.back}
        </Link>
        <p className="mt-10 font-mono text-xs text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.035em] text-balance md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty md:text-xl">{lead}</p>
        )}
        <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="border-b border-line py-4 sm:pr-6 lg:border-b-0">
              <dt className="font-mono text-xs text-faint">{m.label}</dt>
              <dd className="mt-1.5 text-sm font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

/** Ligne éditoriale : titre à gauche, contenu à droite. */
export function CaseRow({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id}>
      <div className="container-site grid gap-6 py-14 md:grid-cols-12 md:gap-10 md:py-20" data-reveal>
        <h2 className="text-2xl font-semibold tracking-tight md:col-span-4 lg:col-span-3">{title}</h2>
        <div className="md:col-span-8 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export function CaseFooter() {
  return (
    <section>
      <div className="container-site flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <p className="max-w-md text-2xl font-semibold tracking-tight text-balance">
          {caseLabels.footerHeading}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            <EnvelopeSimpleIcon size={18} aria-hidden />
            {contact.ctaLabel}
          </a>
          <CvButton which="projet" />
          <CvButton which="data" />
        </div>
      </div>
    </section>
  );
}
