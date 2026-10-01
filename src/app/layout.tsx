import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { site } from "@/lib/site";
import { organizationJsonLd, servicesJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { MotionProvider } from "@/components/ui/motion-provider";
import "./globals.css";

/**
 * Two families, permanently (design.md §4), self-hosted from src/app/fonts.
 * The woff2 files are the duck.design template's own faces, copied into this
 * repo so the design is not broken by a network font request:
 *   - Sentient — the display serif. Headings run in it, and emphasised
 *     phrases inside a heading run in it italic (the `italic-accent` look).
 *   - Inter — the UI face. Body copy, nav, buttons, forms and micro-labels.
 * `display: swap` + a metric-matched fallback keeps CLS at 0 on a slow phone.
 */
const sentient = localFont({
  src: [
    { path: "./fonts/Sentient-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Sentient-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Sentient-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Sentient-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Sentient-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-sentient",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  preload: true,
});

const inter = localFont({
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_UG",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  // Next's Viewport type requires literal colour strings, so the tokens cannot
  // be referenced here; these mirror --color-paper and --color-ink from
  // globals.css §3.1. Two media entries so the browser chrome follows the
  // device theme: blending into the page in light, dark ink on a dark device.
  /* eslint-disable no-restricted-syntax */
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ed" },
    { media: "(prefers-color-scheme: dark)", color: "#161b26" },
  ],
  /* eslint-enable no-restricted-syntax */
  width: "device-width",
  initialScale: 1,
};

function jsonLdScript(data: unknown, id: string) {
  return (
    <script
      key={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // suppressHydrationWarning: browser extensions (Dark Reader) inject attributes
  // into <html>/<body> before hydration — extension markup, not an app bug.
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sentient.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <MobileActionBar />
        </MotionProvider>
        {jsonLdScript(organizationJsonLd(), "org")}
        {jsonLdScript(servicesJsonLd(), "services")}
        {site.analyticsDomain ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={site.analyticsDomain}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
