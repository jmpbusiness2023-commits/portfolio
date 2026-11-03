"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkedinLogoIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { contact, contactSection, nav, site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href="/#top" className="flex min-w-0 flex-col leading-tight">
          <span className="text-[0.9375rem] font-semibold tracking-tight whitespace-nowrap">{site.brand.name}</span>
          <span className="hidden text-xs whitespace-nowrap text-muted sm:block">{site.brand.subtitle}</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="whitespace-nowrap transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span aria-hidden className="mr-2 hidden h-6 w-px bg-line xl:block" />
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${contactSection.labels.linkedin} (nouvel onglet)`}
            className="btn btn-secondary min-h-10 px-3 py-2 text-sm sm:px-4"
          >
            <LinkedinLogoIcon size={18} weight="fill" className="text-accent" aria-hidden />
            <span className="hidden sm:inline">{contactSection.labels.linkedin}</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon size={18} aria-hidden /> : <ListIcon size={18} aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navigation mobile"
        hidden={!open}
        className="border-t border-line bg-bg xl:hidden"
      >
        <ul className="container-site flex flex-col py-3">
          {nav.map((item) => (
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
        </ul>
      </nav>
    </header>
  );
}
