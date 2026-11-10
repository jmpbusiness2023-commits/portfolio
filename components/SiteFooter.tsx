import Link from "next/link";
import { getContent } from "@/content";

export async function SiteFooter() {
  const { contact, contactSection, outsideWork, site, ui, i18n } = await getContent();
  return (
    <footer className="border-t border-line">
      <div className="container-site flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-medium text-fg">{site.name}</p>
          <p>
            {outsideWork.label}
            {ui.colon}
            {outsideWork.items.join(", ")}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="link" href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <Link className="link" href={`${i18n.home}#top`}>
            {contactSection.footerLinks.top}
          </Link>
        </div>
      </div>
    </footer>
  );
}
