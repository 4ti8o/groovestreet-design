import type { Graphic } from "@/components/ui/graphic-marquee";

/**
 * The hero image strip.
 *
 * This reproduces the duck.design `.hero__examples` block — a full-bleed row
 * of artwork that fades out at both edges and drifts slowly.
 *
 * ⚠ PLACEHOLDER IMAGERY — REPLACE BEFORE LAUNCH.
 * These are files lifted from the duck.design mirror at
 * `public/images/duck/hero/`. They are that agency's work, not ours, and some
 * carry third-party marks (a bank billboard, a UNHCR-co-branded print piece, a
 * bar menu, a BNB Smart Chain site). They are wired in so the layout reads
 * correctly while real work is being shot.
 *
 * The labels below are deliberately GENERIC ("Design example 01"). They do not
 * name a client or claim delivery, so nothing on the page asserts a false
 * attribution while these are in place. When real project shots land, replace
 * each `src` and give each entry a truthful label.
 */
export const heroShowcase: Graphic[] = [
  { src: "/images/duck/hero/hero-c139b6.webp", label: "Design example 01" },
  { src: "/images/duck/hero/hero-c239b6.webp", label: "Design example 02" },
  { src: "/images/duck/hero/hero-c339b6.webp", label: "Design example 03" },
  { src: "/images/duck/hero/hero-c439b6.webp", label: "Design example 04" },
  { src: "/images/duck/hero/hero-c539b6.webp", label: "Design example 05" },
  { src: "/images/duck/case-1.webp", label: "Design example 06" },
  { src: "/images/duck/case-2.webp", label: "Design example 07" },
  { src: "/images/duck/case-3.webp", label: "Design example 08" },
];

/**
 * The graphic-design strip.
 *
 * ⚠ PLACEHOLDER IMAGERY — REPLACE BEFORE LAUNCH. Same caveat as `heroShowcase`
 * above: these are duck.design template files standing in for real design work.
 * The eight `gfx/` pieces are the template's own graphic-design examples; the
 * `hero-new-` files are its campaign and collateral photography. Together they
 * give the strip enough variety to read as a real body of work.
 *
 * Replace each entry with a design the studio actually produced — a flyer, a
 * brand mark, a social pack — and the strip re-labels itself automatically.
 */
export const graphics: Graphic[] = [
  { src: "/images/gfx/01-referral-banner.webp", label: "Design example 01" },
  { src: "/images/duck/hero/hero-new-139b6.webp", label: "Design example 02" },
  { src: "/images/gfx/02-social-mockups.webp", label: "Design example 03" },
  { src: "/images/duck/hero/hero-new-639b6.webp", label: "Design example 04" },
  { src: "/images/gfx/03-lottery-mascot.webp", label: "Design example 05" },
  { src: "/images/duck/hero/hero-new-1639b6.webp", label: "Design example 06" },
  { src: "/images/gfx/04-banking-diagram.webp", label: "Design example 07" },
  { src: "/images/duck/hero/hero-new-239b6.webp", label: "Design example 08" },
  { src: "/images/gfx/05-brand-mockup-flatlay.webp", label: "Design example 09" },
  { src: "/images/duck/hero/hero-new-439b6.webp", label: "Design example 10" },
  { src: "/images/gfx/06-aerial-brand.webp", label: "Design example 11" },
  { src: "/images/duck/hero/hero-new-539b6.webp", label: "Design example 12" },
  { src: "/images/gfx/07-affiliate-infographic.webp", label: "Design example 13" },
  { src: "/images/duck/hero/hero-new-739b6.webp", label: "Design example 14" },
  { src: "/images/gfx/08-ai-stat-card.webp", label: "Design example 15" },
  { src: "/images/duck/hero/hero-new-839b6.webp", label: "Design example 16" },
];

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  typicalProjects: string[];
  cta: string;
};

export const industries: Industry[] = [
  {
    slug: "coaches-consultants",
    name: "Coaches & Consultants",
    headline: "Sell the outcome, not the hour.",
    description:
      "Your clients buy transformation, not sessions. We build authority sites with clear offers, proof and a booking path that turns readers into discovery calls.",
    typicalProjects: ["Authority website", "Booking funnel", "Lead-magnet landing page"],
    cta: "Book more discovery calls",
  },
  {
    slug: "professional-services",
    name: "Legal, Finance & Agencies",
    headline: "Look as credible as your advice.",
    description:
      "Trust is the product. We design restrained, corporate sites with team pages, service depth and contact paths that respect how professionals buy.",
    typicalProjects: ["Corporate website", "Practice-area pages", "Team & careers pages"],
    cta: "Win higher-value retainers",
  },
  {
    slug: "health-wellness",
    name: "Clinics & Wellness",
    headline: "Reassure before they arrive.",
    description:
      "Patients choose the clinic that feels safe online. Service pages, doctor profiles, hours, directions and one-tap calling and WhatsApp — plus the words and local search that lead them there.",
    typicalProjects: ["Clinic website", "Practitioner profiles", "Appointment funnel"],
    cta: "Fill your appointment book",
  },
  {
    slug: "home-services",
    name: "Home Services & Trades",
    headline: "Be the obvious call in an emergency.",
    description:
      "Plumbers, electricians, cleaners, movers: customers search on their phone and call the first credible result. We make that you — with local SEO baked in.",
    typicalProjects: ["Lead-gen website", "Service-area pages", "Google Business setup"],
    cta: "Own your service area",
  },
  {
    slug: "saas-startups",
    name: "SaaS & Startups",
    headline: "Explain it in five seconds.",
    description:
      "Investor decks and waitlists need a site that states the value prop instantly. Product-led pages, docs-ready structure and launch analytics included.",
    typicalProjects: ["Marketing site", "Waitlist landing page", "Docs & changelog setup"],
    cta: "Launch with a site that converts",
  },
  {
    slug: "hospitality-tourism",
    name: "Safari, Hotels & Hospitality",
    headline: "Sell the trip before the trip.",
    description:
      "Travelers book the experience they can picture. Galleries, itineraries, reviews and Mobile Money / card-ready booking paths for tours, lodges and restaurants.",
    typicalProjects: ["Booking website", "Tour & itinerary pages", "Review & gallery systems"],
    cta: "Take direct bookings",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    headline: "Turn browsers into buyers.",
    description:
      "Product pages that answer every doubt, checkout with Mobile Money and cards, and post-purchase emails — built to convert on a mid-range Android phone.",
    typicalProjects: ["Storefront build", "Product page redesign", "Checkout optimization"],
    cta: "Sell online across Uganda",
  },
  {
    slug: "nonprofits-education",
    name: "NGOs & Education",
    headline: "Make donors and parents believe.",
    description:
      "Impact pages, transparent reporting, donation paths and admissions funnels — designed for trust and built to survive low bandwidth.",
    typicalProjects: ["NGO website", "Donation funnel", "School admissions site"],
    cta: "Fund your mission",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
