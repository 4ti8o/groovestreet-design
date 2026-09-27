import type { Metadata } from "next";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

const DEFAULT_TITLE = `${site.name} — ${site.tagline}`;

export function pageMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : DEFAULT_TITLE;
  const metaDescription = description ?? site.description;
  const url = absoluteUrl(path);
  return {
    title: fullTitle,
    description: metaDescription,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_UG",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

/** JSON-LD: local professional-service business (schema.org). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#business"),
    name: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    email: site.email,
    telephone: `+${site.phoneE164}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    areaServed: ["Uganda", "Kenya", "Rwanda", "Tanzania"],
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: site.socials.map((social) => social.href),
  };
}

/** JSON-LD: the studio's service catalogue. */
export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      "Website Design & Build",
      "Landing Pages & Campaign Pages",
      "Graphic Design",
      "SEO & Performance",
      "Copy & Messaging",
      "Care & Growth Plan",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name,
        provider: { "@id": absoluteUrl("/#business") },
        areaServed: "Worldwide",
      },
    })),
  };
}

/** JSON-LD: FAQ pages feed Google's FAQ rich results. */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
