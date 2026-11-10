import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { alternatesFor, getContent, hasLocale, locales } from "@/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealObserver } from "@/components/RevealObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Deux langues générées au build. Toute autre valeur de [lang] donne une 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const { site, i18n } = await getContent(lang);
  const locale = hasLocale(lang) ? lang : "fr";
  return {
    metadataBase: new URL(site.url),
    title: site.seo.title,
    description: site.seo.description,
    alternates: alternatesFor("/", locale),
    openGraph: {
      type: "website",
      locale: i18n.ogLocale,
      url: alternatesFor("/", locale).canonical,
      siteName: site.name,
      title: site.seo.title,
      description: site.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.title,
      description: site.seo.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Appliqué avant le premier rendu pour éviter un flash de thème.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.dataset.theme=t;}catch(e){}})();`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const { site, contact, contactSection, nav, i18n, ui } = await getContent(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: `${site.url}${i18n.base}`,
    email: `mailto:${contact.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
    sameAs: [contact.linkedin, contact.github],
  };

  return (
    <html
      lang={i18n.lang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 btn btn-primary"
        >
          {ui.skipLink}
        </a>
        <SiteHeader
          t={{
            brand: site.brand,
            home: i18n.home,
            nav,
            ctaLabel: contact.ctaLabel,
            linkedin: { href: contact.linkedin, label: contactSection.labels.linkedin },
            switchTo: i18n.switchTo,
            ui,
          }}
        />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
