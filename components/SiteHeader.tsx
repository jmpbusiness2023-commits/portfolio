"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { EnvelopeSimpleIcon, LinkedinLogoIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { ThemeToggle } from "./ThemeToggle";

export type HeaderText = {
  brand: { name: string; subtitle: string };
  /** Accueil de la langue courante ("/" ou "/en") */
  home: string;
  nav: { label: string; href: string }[];
  ctaLabel: string;
  linkedin: { href: string; label: string };
  switchTo: { label: string; ariaLabel: string; hrefLang: string };
  ui: {
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    newTab: string;
    themeToggle: string;
  };
};

/**
 * Chemin de la même page dans l'autre langue. Le français est servi à la racine
 * (réécrit en interne vers /fr), l'anglais sous /en.
 */
function otherLanguagePath(pathname: string, target: string) {
  const path = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
  if (target === "en") return path === "/" ? "/en" : `/en${path}`;
  return path;
}

function LanguageSwitch({ switchTo }: { switchTo: HeaderText["switchTo"] }) {
  const href = otherLanguagePath(usePathname(), switchTo.hrefLang);
  // Garde la section en cours (#contact, #projects…) d'une langue à l'autre.
  const keepHash = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.hash) e.currentTarget.href = href + window.location.hash;
  };
  return (
    <a
      href={href}
      hrefLang={switchTo.hrefLang}
      lang={switchTo.hrefLang}
      aria-label={switchTo.ariaLabel}
      onClick={keepHash}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line font-mono text-xs font-semibold tracking-wide text-muted transition-colors hover:border-line-strong hover:text-fg sm:size-10"
    >
      {switchTo.label}
    </a>
  );
}

export function SiteHeader({ t }: { t: HeaderText }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-3 sm:gap-6">
        <Link href={`${t.home}#top`} className="flex shrink-0 flex-col leading-tight">
          <span className="text-[0.9375rem] font-semibold tracking-tight whitespace-nowrap">{t.brand.name}</span>
          <span className="hidden text-xs whitespace-nowrap text-muted sm:block">{t.brand.subtitle}</span>
        </Link>

        <nav aria-label={t.ui.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-5 text-sm text-muted">
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="whitespace-nowrap transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <span aria-hidden className="mr-1 hidden h-6 w-px bg-line xl:block" />
          <Link
            href={`${t.home}#contact`}
            className="btn btn-primary min-h-9 px-2.5 py-2 text-sm sm:min-h-10 sm:px-4"
          >
            <EnvelopeSimpleIcon size={18} className="sm:hidden" aria-hidden />
            <span className="sr-only sm:not-sr-only">{t.ctaLabel}</span>
          </Link>
          <a
            href={t.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.linkedin.label} (${t.ui.newTab})`}
            // Sous 768 px, LinkedIn reste dans le menu pour laisser la place au bouton de langue.
            className="btn btn-secondary hidden min-h-10 px-4 py-2 text-sm md:inline-flex"
          >
            <LinkedinLogoIcon size={18} weight="fill" className="text-accent" aria-hidden />
            <span>{t.linkedin.label}</span>
          </a>
          <LanguageSwitch switchTo={t.switchTo} />
          <ThemeToggle label={t.ui.themeToggle} />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon size={18} aria-hidden /> : <ListIcon size={18} aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label={t.ui.mobileNav}
        hidden={!open}
        className="border-t border-line bg-bg xl:hidden"
      >
        <ul className="container-site flex flex-col py-3">
          {t.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3 text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={t.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-base"
            >
              <LinkedinLogoIcon size={18} weight="fill" className="text-accent" aria-hidden />
              {t.linkedin.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
