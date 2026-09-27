import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import { organizationJsonLd, servicesJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { MotionProvider } from "@/components/ui/motion-provider";
import "./globals.css";

/** Two families, permanently (design.md §4): Space Grotesk + Inter, latin subset. */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
  // Next's Viewport type requires a literal colour string, so the token cannot
  // be referenced here; the value is --color-ink from globals.css §3.1.
  // eslint-disable-next-line no-restricted-syntax
  themeColor: "#0e1113",
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
      className={`${spaceGrotesk.variable} ${inter.variable}`}
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
