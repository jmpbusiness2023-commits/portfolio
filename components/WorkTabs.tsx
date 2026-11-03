"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { CheckIcon } from "@phosphor-icons/react";

type Tab = { id: string; label: string; lead: string; items: string[] };

/** Onglets accessibles « Pilotage » / « Data » pour la double lecture de l'étude de cas. */
export function WorkTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = tabs.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Lecture de l'étude de cas"
        className="inline-flex rounded-full border border-line bg-surface p-1"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            id={`${base}-tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${base}-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKeyDown}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === i ? "bg-fg text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          id={`${base}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${tab.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="mt-8 rounded-[12px]"
        >
          <p className="text-muted">{tab.lead}</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {tab.items.map((item) => (
              <li key={item} className="flex gap-3 py-4 leading-relaxed">
                <CheckIcon size={20} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
