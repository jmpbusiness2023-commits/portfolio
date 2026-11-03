import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/ssr";
import {
  contact,
  contactSection,
  cvs,
  education,
  environments,
  experiences,
  experiencesSection,
  hero,
  profile,
  projects,
  projectsSection,
  site,
  stack,
  tmrcCase,
  tmrcFeature,
  twoWays,
  useCases,
} from "@/content/site";
import heroPhoto from "@/public/hero-jeremy.jpeg";
import { CvButton, SectionHeading, StatsBand, TagList } from "./ui";

export function Hero() {
  const [first, ...rest] = site.name.split(" ");
  const last = rest.join(" ");
  const [roleA, roleB] = site.title.split(" & ");
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="blueprint absolute inset-0 -z-10" />
      <div className="container-site grid gap-12 pt-12 pb-20 md:grid-cols-12 md:items-center md:gap-10 md:pt-20 md:pb-28">
        <div className="md:col-span-7">
          <p className="font-mono text-xs text-muted">{hero.availability}</p>
          <h1 className="mt-6 text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-[5.25rem]">
            {first}
            <br />
            {last}
          </h1>
          <p className="mt-6 text-xl tracking-tight text-fg md:text-2xl">
            {roleA} <span className="text-accent">&amp;</span> {roleB}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">{hero.pitch}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <ArrowRightIcon size={18} className="btn-arrow" aria-hidden />
            </Link>
            <Link href="/#contact" className="btn btn-secondary">
              {contact.ctaLabel}
            </Link>
          </div>
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <a className="link" href={cvs.projet.href} download>
              {cvs.projet.label}
            </a>
            <a className="link" href={cvs.data.href} download>
              {cvs.data.label}
            </a>
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[12px] border border-line bg-surface-2 md:col-span-5">
          <Image
            src={heroPhoto}
            alt={hero.photoAlt}
            priority
            placeholder="blur"
            sizes="(min-width: 1200px) 460px, (min-width: 768px) 40vw, 100vw"
            className="aspect-[4/5] w-full object-cover object-[50%_22%]"
          />
        </div>
      </div>
    </section>
  );
}

export function Profile() {
  return (
    <section id="profil" className="border-t border-line">
      <div className="container-site grid gap-8 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <h2
          className="text-3xl font-semibold tracking-tight text-balance md:col-span-5 md:text-[2.5rem] md:leading-[1.1]"
          data-reveal
        >
          {profile.heading}
        </h2>
        <p
          className="text-lg leading-relaxed text-muted text-pretty md:col-span-6 md:col-start-7 md:text-xl"
          data-reveal
        >
          {profile.text}
        </p>
      </div>
    </section>
  );
}

export function TwoWays() {
  const [projet, data] = twoWays.tracks;
  return (
    <section id="expertise">
      <div className="container-site pb-20 md:pb-28">
        <SectionHeading title={twoWays.heading} intro={twoWays.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <TrackBlock track={projet} className="card p-7 md:col-span-7 md:p-10" which="projet" />
          <TrackBlock
            track={data}
            className="rounded-[12px] border border-line bg-accent-soft p-7 md:col-span-5 md:p-10"
            which="data"
          />
        </div>
      </div>
    </section>
  );
}

function TrackBlock({
  track,
  className,
  which,
}: {
  track: (typeof twoWays.tracks)[number];
  className: string;
  which: "projet" | "data";
}) {
  return (
    <article className={`flex flex-col ${className}`} data-reveal>
      <h3 className="text-2xl font-semibold tracking-tight">{track.title}</h3>
      <p className="mt-3 text-muted">{track.lead}</p>
      <ul className="mt-8 flex-1 space-y-5">
        {track.proofs.map((proof) => (
          <li key={proof} className="flex gap-3 leading-relaxed">
            <CheckIcon size={20} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <span>{proof}</span>
          </li>
        ))}
      </ul>
      <div className="mt-9">
        <CvButton which={which} variant={which === "projet" ? "secondary" : "primary"} />
      </div>
    </article>
  );
}

export function TmrcFeature() {
  return (
    <section id="tmrc-fx" className="border-y border-line bg-surface">
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <SectionHeading eyebrow={tmrcFeature.eyebrow} title={tmrcFeature.heading} className="md:col-span-7" />
          <div className="space-y-6 md:col-span-5" data-reveal>
            <p className="text-lg leading-relaxed text-muted text-pretty">{tmrcFeature.context}</p>
            <TagList tags={tmrcFeature.tags} label="Thèmes du projet" />
          </div>
        </div>
        <div className="mt-12">
          <StatsBand />
        </div>
        <div className="mt-10" data-reveal>
          <Link href={tmrcFeature.cta.href} className="btn btn-primary">
            {tmrcFeature.cta.label}
            <ArrowRightIcon size={18} className="btn-arrow" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <section id="experiences">
      <div className="container-site grid gap-12 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading title={experiencesSection.heading} intro={experiencesSection.intro} />
          </div>
        </div>

        <div className="md:col-span-8">
          <ol className="border-l border-line">
            {experiences.map((xp) => (
              <li key={xp.title} className="relative pb-14 pl-8 last:pb-0 md:pl-10" data-reveal>
                <span aria-hidden className="absolute top-3 left-0 h-px w-5 bg-line-strong" />
                <p className="font-mono text-sm text-muted">
                  {xp.period} · {xp.place}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">{xp.title}</h3>
                <p className="mt-1 text-muted">{xp.org}</p>
                {xp.summary && <p className="mt-4 max-w-2xl leading-relaxed text-pretty">{xp.summary}</p>}
                {xp.bullets.length > 0 && (
                  <ul className="mt-4 max-w-2xl space-y-3 leading-relaxed text-pretty">
                    {xp.bullets.map((b) => (
                      <li key={b} className="relative pl-5">
                        <span aria-hidden className="absolute top-[0.75em] left-0 h-px w-2.5 bg-faint" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {xp.link && (
                  <Link
                    href={xp.link.href}
                    className="link mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    {xp.link.label}
                    <ArrowRightIcon size={16} aria-hidden />
                  </Link>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-20" data-reveal>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{experiencesSection.educationHeading}</h3>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {education.map((ed) => (
                <div key={ed.title} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="font-mono text-sm text-muted">{ed.period}</dt>
                  <dd>
                    <p className="font-medium">{ed.title}</p>
                    <p className="mt-1 text-sm text-muted">{ed.org}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectLinks({ slug, repo }: { slug: string; repo: string }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
      <Link href={`/use-cases/${slug}`} className="link inline-flex items-center gap-1.5">
        {projectsSection.detailLabel}
        <ArrowRightIcon size={16} aria-hidden />
      </Link>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="link inline-flex items-center gap-1.5"
      >
        <GithubLogoIcon size={16} aria-hidden />
        {projectsSection.githubLabel}
      </a>
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const [lead, ...rest] = featured;

  return (
    <section id="projects" className="border-t border-line">
      <div className="container-site py-20 md:py-28">
        <SectionHeading title={projectsSection.heading} intro={projectsSection.intro} />

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <article
            className="card card-hover relative isolate flex flex-col overflow-hidden p-7 md:col-span-7 md:p-10"
            data-reveal
          >
            <div aria-hidden className="blueprint absolute inset-0 -z-10" />
            <p className="font-mono text-xs text-muted">
              {lead.subtitle} · {lead.period}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">{lead.title}</h3>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted text-pretty">{lead.summary}</p>
            <ol className="mt-8 max-w-lg space-y-3 text-sm leading-relaxed">
              {lead.details.map((d, i) => (
                <li key={d} className="grid grid-cols-[2rem_1fr]">
                  <span className="font-mono text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-pretty">{d}</span>
                </li>
              ))}
            </ol>
            <div className="mt-auto pt-10">
              <TagList tags={lead.tags} label="Technologies" />
              <ProjectLinks slug={lead.slug} repo={lead.repos[0].href} />
            </div>
          </article>

          <div className="grid gap-6 md:col-span-5">
            {rest.map((p) => (
              <article key={p.slug} className="card card-hover flex flex-col p-7" data-reveal>
                <p className="font-mono text-xs text-muted">
                  {p.subtitle} · {p.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted text-pretty">{p.summary}</p>
                <div className="mt-6">
                  <TagList tags={p.tags} label="Technologies" />
                </div>
                <ProjectLinks slug={p.slug} repo={p.repos[0].href} />
              </article>
            ))}
          </div>
        </div>

        {others.length > 0 && (
          <p className="mt-8 text-sm text-muted" data-reveal>
            {projectsSection.othersLabel}{" "}
            {others.map((p, i) => (
              <span key={p.slug}>
                <Link href={`/use-cases/${p.slug}`} className="link">
                  {p.title}
                </Link>
                {i < others.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

export function Environments() {
  return (
    <section id="clients" className="border-t border-line bg-surface">
      <div className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <SectionHeading title={environments.heading} intro={environments.text} className="md:col-span-5" />
        <ul className="divide-y divide-line border-y border-line md:col-span-7" data-reveal>
          {environments.items.map((env) => (
            <li
              key={env.name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 md:py-6"
            >
              <span className="text-2xl font-semibold tracking-tight md:text-[2rem]">{env.name}</span>
              <span className="font-mono text-xs text-muted">{env.context}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-line">
      <div className="container-site py-20 md:py-28">
        <SectionHeading title={useCases.heading} intro={useCases.intro} />

        <Link
          href={`/use-cases/${tmrcCase.slug}`}
          className="card card-hover group mt-12 grid gap-6 p-7 md:grid-cols-12 md:items-center md:p-10"
          data-reveal
        >
          <div className="md:col-span-9">
            <p className="font-mono text-xs text-muted">{useCases.tmrcLabel}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{tmrcCase.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted text-pretty">{tmrcCase.challenge}</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-accent md:col-span-3 md:justify-end">
            {tmrcFeature.cta.label}
            <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </div>
        </Link>

        <ul className="mt-6 border-t border-line" data-reveal>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/use-cases/${p.slug}`}
                className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-line py-5 transition-colors hover:bg-surface md:grid-cols-12 md:px-3"
              >
                <span className="font-medium md:col-span-5">{p.title}</span>
                <span className="col-start-1 text-sm text-muted md:col-span-4 md:col-start-auto">
                  {p.subtitle}
                </span>
                <span className="hidden font-mono text-sm text-muted md:col-span-2 md:block">{p.period}</span>
                <ArrowUpRightIcon
                  size={18}
                  className="col-start-2 row-span-2 row-start-1 justify-self-end text-muted transition-colors group-hover:text-accent md:col-span-1 md:col-start-auto md:row-span-1"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="border-t border-line">
      <div className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <SectionHeading title={stack.heading} intro={stack.intro} className="md:col-span-4" />
        <dl className="border-t border-line md:col-span-8" data-reveal>
          {stack.families.map((family) => (
            <div
              key={family.name}
              className="grid gap-3 border-b border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <dt className="font-medium">{family.name}</dt>
              <dd>
                <TagList tags={family.items} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Contact() {
  const l = contactSection.labels;
  const rows = [
    { label: l.email, value: contact.email, href: `mailto:${contact.email}` },
    { label: l.phone, value: contact.phone, href: contact.phoneHref },
    { label: l.linkedin, value: l.linkedinShort, href: contact.linkedin, external: true },
    { label: l.github, value: l.githubShort, href: contact.github, external: true },
  ];
  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7" data-reveal>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance md:text-6xl md:leading-[1.02]">
            {contactSection.heading}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted text-pretty">{contactSection.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              <EnvelopeSimpleIcon size={18} aria-hidden />
              {contact.ctaLabel}
            </a>
            <CvButton which="projet" />
            <CvButton which="data" />
          </div>
        </div>
        <dl className="self-end border-t border-line md:col-span-5" data-reveal>
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4"
            >
              <dt className="text-sm text-muted">{row.label}</dt>
              <dd className="font-mono text-sm">
                <a
                  href={row.href}
                  className="link"
                  {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {row.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
