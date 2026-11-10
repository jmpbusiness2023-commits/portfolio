"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Fait apparaître les éléments [data-reveal] quand ils entrent dans l'écran. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Chargement direct d'une URL avec ancre (ex. bascule FR/EN depuis /en#projects) :
  // le navigateur ne descend pas jusqu'à la section, on le fait une fois la page hydratée.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    if (target && Math.abs(target.getBoundingClientRect().top) > 120) {
      target.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return null;
}
