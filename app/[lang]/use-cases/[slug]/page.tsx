import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr";
import { alternatesFor, getContent, hasLocale } from "@/content";
import { CaseFooter, CaseHeader, CaseRow } from "@/components/case";
import { TagList } from "@/components/ui";

export const dynamicParams = false;

// Les slugs sont identiques dans les deux langues.
export async function generateStaticParams() {
  const { projects } = await getContent("fr");
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/use-cases/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const { projects, site } = await getContent(lang);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} | ${site.name}`;
  const alternates = alternatesFor(`/use-cases/${project.slug}`, hasLocale(lang) ? lang : "fr");
  return {
    title,
    description: project.summary,
    alternates,
    openGraph: {
      type: "article",
      url: alternates.canonical,
      title,
      description: project.summary,
      images: [`/${lang}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/use-cases/[slug]">) {
  const { lang, slug } = await params;
  const { caseLabels, projects, ui, i18n } = await getContent(lang);
  const P = caseLabels.project;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <article className="case-bands">
      <CaseHeader
        eyebrow={project.subtitle}
        title={project.title}
        lead={project.summary}
        meta={[
          { label: P.frameLabel, value: P.frameValue },
          { label: P.periodLabel, value: project.period },
          { label: P.toolsLabel, value: project.tools.slice(0, 3).join(", ") },
          {
            label: P.codeLabel,
            value: (
              <a href={project.repos[0].href} target="_blank" rel="noopener noreferrer" className="link">
                {P.codeLink}
              </a>
            ),
          },
        ]}
      />

      <CaseRow title={P.approach}>
        <ol className="max-w-3xl divide-y divide-line border-y border-line">
          {project.details.map((d, i) => (
            <li key={d} className="grid grid-cols-[2.5rem_1fr] gap-2 py-5 text-lg leading-relaxed">
              <span className="font-mono text-sm leading-[1.9] text-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-pretty">{d}</span>
            </li>
          ))}
        </ol>
      </CaseRow>

      <CaseRow title={P.toolsAndSkills}>
        <div className="space-y-6">
          <TagList tags={project.tools} label={ui.tools} />
          <TagList tags={project.skills} label={ui.skills} />
        </div>
      </CaseRow>

      <CaseRow title={P.codeLabel}>
        <div className="flex flex-wrap gap-3">
          {project.repos.map((repo) => (
            <a
              key={repo.href}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubLogoIcon size={18} aria-hidden />
              {repo.label}
            </a>
          ))}
        </div>
      </CaseRow>

      <CaseRow title={P.others}>
        <ul className="border-t border-line">
          <li>
            <Link
              href={`${i18n.base}/use-cases/tmrc-fx`}
              className="group flex items-center justify-between gap-4 border-b border-line py-4 font-medium"
            >
              {P.tmrcLink}
              <ArrowRightIcon size={18} className="text-muted group-hover:text-accent" aria-hidden />
            </Link>
          </li>
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`${i18n.base}/use-cases/${p.slug}`}
                className="group flex items-center justify-between gap-4 border-b border-line py-4"
              >
                {p.title}
                <ArrowRightIcon size={18} className="text-muted group-hover:text-accent" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </CaseRow>

      <CaseFooter />
    </article>
  );
}
