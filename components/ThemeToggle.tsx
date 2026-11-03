"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Basculer entre thème clair et sombre"
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {/* Les deux icônes sont rendues, le CSS affiche la bonne selon le thème actif. */}
      <SunIcon size={18} className="theme-icon-sun" aria-hidden />
      <MoonIcon size={18} className="theme-icon-moon" aria-hidden />
    </button>
  );
}
