import { ArrowDownIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { getContent } from "@/content";

/** Schéma d'architecture TMRC FX : horizontal en grand écran, vertical sur mobile. */
export async function ArchitectureDiagram() {
  const { tmrcCase, ui } = await getContent();
  const nodes = tmrcCase.architecture.nodes.map((node) => ({
    ...node,
    steps: node.pipeline ? tmrcCase.architecture.pipelineSteps : undefined,
  }));
  return (
    <figure data-reveal>
      <ol className="flex flex-col lg:flex-row">
        {nodes.map((node, i) => (
          <li
            key={node.title}
            className={`flex flex-col items-stretch lg:min-w-0 lg:flex-row ${node.steps ? "lg:flex-[1.6]" : "lg:flex-1"}`}
          >
            <div
              className={`flex flex-1 flex-col rounded-[12px] border p-4 ${
                node.human
                  ? "border-dashed border-line-strong"
                  : node.steps
                    ? "border-accent/40 bg-accent-soft"
                    : "border-line bg-surface"
              }`}
            >
              <span className="font-mono text-[0.6875rem] text-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-1.5 font-medium leading-snug">{node.title}</span>
              <span className="mt-1 text-sm leading-snug text-muted">{node.detail}</span>
              {node.steps && (
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={ui.pipelineSteps}>
                  {node.steps.map((s) => (
                    <li key={s} className="tag !text-[0.6875rem]">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {i < nodes.length - 1 && (
              <span aria-hidden className="flex shrink-0 items-center justify-center py-2 text-faint lg:w-7 lg:py-0">
                <ArrowDownIcon size={18} className="lg:hidden" />
                <ArrowRightIcon size={18} className="hidden lg:block" />
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
        {tmrcCase.architecture.caption}
      </figcaption>
    </figure>
  );
}
