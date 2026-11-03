import type { Metadata } from "next";
import { caseLabels, tmrcCase } from "@/content/site";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CaseFooter, CaseHeader, CaseRow } from "@/components/case";
import { StatsBand, TagList } from "@/components/ui";
import { WorkTabs } from "@/components/WorkTabs";

const L = caseLabels.tmrc;
const path = `/use-cases/${tmrcCase.slug}`;

export const metadata: Metadata = {
  title: tmrcCase.seo.title,
  description: tmrcCase.seo.description,
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    url: path,
    images: ["/opengraph-image"],
    title: tmrcCase.seo.title,
    description: tmrcCase.seo.description,
  },
};

export default function TmrcFxPage() {
  const { pilotage, data } = tmrcCase.work;
  return (
    <article className="case-bands">
      <CaseHeader eyebrow={L.eyebrow} title={tmrcCase.heading} lead={tmrcCase.lead} meta={tmrcCase.meta} />

      <CaseRow title={L.context}>
        <p className="max-w-3xl text-lg leading-relaxed text-pretty md:text-xl">{tmrcCase.context}</p>
      </CaseRow>

      <CaseRow title={L.role}>
        <p className="max-w-3xl text-lg leading-relaxed text-pretty">{tmrcCase.role}</p>
      </CaseRow>

      <CaseRow title={L.challenge}>
        <blockquote className="max-w-3xl border-l-2 border-accent pl-6 text-2xl leading-snug font-medium tracking-tight text-balance md:text-3xl">
          {tmrcCase.challenge}
        </blockquote>
      </CaseRow>

      <CaseRow title={L.work}>
        <WorkTabs
          tabs={[
            { id: "pilotage", ...pilotage },
            { id: "data", ...data },
          ]}
        />
      </CaseRow>

      <section>
        <div className="container-site py-14 md:py-20">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight">{tmrcCase.architecture.heading}</h2>
          <ArchitectureDiagram />
        </div>
      </section>

      <section>
        <div className="container-site py-14 md:py-20">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight">{L.results}</h2>
          <StatsBand />
        </div>
      </section>

      <CaseRow title={L.stack}>
        <TagList tags={tmrcCase.stack} />
      </CaseRow>

      <CaseRow title={L.lessons}>
        <ul className="max-w-3xl space-y-5">
          {tmrcCase.lessons.map((lesson) => (
            <li key={lesson} className="text-lg leading-relaxed text-pretty">
              {lesson}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl font-mono text-xs leading-relaxed text-faint">{tmrcCase.disclaimer}</p>
      </CaseRow>

      <CaseFooter />
    </article>
  );
}
