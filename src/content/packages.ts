export type Package = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type CarePlan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
};

/**
 * Build packages use tier inheritance: every tier includes everything in the
 * tier below it (Landing Page → Launchpad → Signature → Authority). Prices are
 * fixed UGX quotes — the number shown is the number you pay.
 */
export const packages: Package[] = [
  {
    name: "Landing Page",
    price: "UGX 200,000",
    cadence: "fixed price · 3–5 days",
    tagline:
      "A fast, single-page site focused on one goal: turning visitors into calls and messages.",
    features: [
      "One high-converting single page",
      "Fast mobile loading for all devices",
      "One-tap WhatsApp & phone buttons",
      "Google map and local search setup",
      "Full handover & ownership from day one",
    ],
    cta: "Start with Landing Page",
  },
  {
    name: "Launchpad",
    price: "UGX 500,000",
    cadence: "fixed price · 2–3 weeks",
    tagline: "A sharp one-to-five page site for new businesses that need to look real, fast.",
    features: [
      "Everything in Landing Page",
      "Custom design, up to 5 pages",
      "Build + search setup, tested on real devices",
      "Clear headlines and calls to action",
      "Form + WhatsApp integration",
      "Full handover + 2 weeks support",
    ],
    cta: "Start with Launchpad",
  },
  {
    name: "Signature",
    price: "UGX 1,300,000",
    cadence: "fixed price · 3–6 weeks",
    tagline: "The full custom website: strategy, design and build for growing businesses.",
    features: [
      "Everything in Launchpad",
      "Up to 12 pages + blog setup",
      "Brand refresh (logo touch-up + palette)",
      "Advanced search visibility + analytics setup",
      "Mobile Money payments: MTN MoMo & Airtel Money set up and tested",
      "Simple online store for a handful of products, orders on WhatsApp",
      "Priority support for 30 days",
    ],
    cta: "Start with Signature",
    featured: true,
  },
  {
    name: "Authority",
    price: "from UGX 3,000,000",
    cadence: "fixed quote · 6–8 weeks",
    tagline:
      "Website plus the engine behind it: online store, search growth, content plan and conversion tracking.",
    features: [
      "Everything in Signature",
      "Full e-commerce store: catalogue, cart and checkout",
      "Bank transfer and card payments alongside Mobile Money",
      "Full search audit + 90-day content plan",
      "Dedicated landing page for your main offer",
      "Client review + referral engine",
      "Team training session",
    ],
    cta: "Start with Authority",
  },
];

/**
 * Monthly care plans — same tier ladder as the builds: each tier includes
 * everything in the tier below it.
 */
export const carePlans: CarePlan[] = [
  {
    name: "Care · Launchpad",
    price: "UGX 50,000/mo",
    cadence: "monthly · cancel anytime",
    tagline: "Essential care for landing pages and small brochure sites.",
    features: [
      "Daily backups & security monitoring",
      "Managed hosting & SSL kept current",
      "2 reserved hours per month",
      "48-hour response on issues",
      "Two weeks free support after launch",
    ],
    cta: "Add Launchpad care",
  },
  {
    name: "Care · Signature",
    price: "UGX 120,000/mo",
    cadence: "monthly · cancel anytime",
    tagline: "Closer watching for busy sites that sell and take bookings.",
    features: [
      "Everything in Launchpad care",
      "4 reserved hours per month",
      "Weekly uptime, form and checkout checks",
      "Monthly performance report you can read in 5 minutes",
      "24-hour response on issues",
    ],
    cta: "Add Signature care",
  },
  {
    name: "Care · Authority",
    price: "UGX 200,000/mo",
    cadence: "monthly · cancel anytime",
    tagline: "Full-service care for stores and high-traffic sites, growth work included.",
    features: [
      "Everything in Signature care",
      "8 reserved hours per month",
      "Same-day response on weekdays",
      "Quarterly growth review with next steps",
      "Payment and booking flows tested monthly",
    ],
    cta: "Add Authority care",
  },
];

export type SiteFaq = { question: string; answer: string };

export const homeFaqs: SiteFaq[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Landing pages start at UGX 200,000, multi-page Launchpad sites at UGX 500,000, full custom Signature sites at UGX 1,300,000, and Authority builds start from UGX 3,000,000. You get a fixed quote before we start — the price never moves without your approval.",
  },
  {
    question: "How do you keep prices low without cutting quality?",
    answer:
      "We stay small and senior: the person who designs your site is the person you talk to, so you are not paying for account-manager layers or handoffs. We build on our own tested components instead of rebuilding every element from scratch, quote a fixed scope so you only pay for the pages you need, and invoice in UGX so the exchange rate never pads the price. The standard never changes — a UGX 200,000 landing page passes the same 60-point checklist as a UGX 3,000,000 build.",
  },
  {
    question: "How long does it take?",
    answer:
      "Landing pages ship in 3–5 days, Launchpad sites in 2–3 weeks, and full Signature websites in 3–6 weeks. Every project gets a launch date, not a season.",
  },
  {
    question: "What do the care plans cost?",
    answer:
      "Care plans follow the same tiers as the builds: UGX 50,000/mo for Launchpad sites, UGX 120,000/mo for Signature sites and UGX 200,000/mo for Authority builds. Each tier includes everything below it, and you can move up or down with 30 days' notice.",
  },
  {
    question: "Do you design flyers and posters?",
    answer:
      "Yes. Flyers, posters and social media graphics are UGX 20,000 each, or UGX 50,000 for three, usually delivered within 48 hours.",
  },
  {
    question: "Do you work with clients outside Uganda?",
    answer:
      "Yes — we are based in Kampala and work across East Africa and worldwide. Calls run on EAT; async updates mean time zones never block a project.",
  },
];
