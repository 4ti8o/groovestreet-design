export type Package = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    name: "Landing Page",
    price: "UGX 200,000",
    cadence: "fixed price · 3–5 days",
    tagline: "A fast, single-page site focused on one goal: turning visitors into calls and messages.",
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
    price: "UGX 3,500,000",
    cadence: "fixed price · 2–3 weeks",
    tagline: "A sharp one-to-five page site for new businesses that need to look real, fast.",
    features: [
      "Custom design, up to 5 pages",
      "Build + search setup, tested on real devices",
      "Clear, persuasive copywriting polish",
      "Form + WhatsApp integration",
      "Handover video + 2 weeks support",
    ],
    cta: "Start with Launchpad",
  },
  {
    name: "Signature",
    price: "UGX 7,000,000",
    cadence: "fixed price · 3–6 weeks",
    tagline: "The full custom website: strategy, copy, design and build for growing businesses.",
    features: [
      "Everything in Launchpad",
      "Up to 12 pages + blog setup",
      "From-scratch copywriting option",
      "Brand refresh (logo touch-up + palette)",
      "Advanced search visibility + analytics setup",
      "Priority support for 30 days",
    ],
    cta: "Start with Signature",
    featured: true,
  },
  {
    name: "Authority",
    price: "UGX 13,000,000",
    cadence: "fixed price · 6–8 weeks",
    tagline: "Website plus the engine behind it: search growth, content plan and conversion tracking.",
    features: [
      "Everything in Signature",
      "Full search audit + 90-day content plan",
      "Dedicated landing page for your main offer",
      "Client review + referral engine",
      "Team training session",
    ],
    cta: "Start with Authority",
  },
  {
    name: "Care plan",
    price: "UGX 350,000/mo",
    cadence: "monthly · cancel anytime",
    tagline: "Maintenance, backups, security and monthly design hours. Always improving.",
    features: [
      "Updates, backups & security monitoring",
      "Same-day response on issues",
      "Monthly design hours included",
      "Quarterly performance report",
    ],
    cta: "Add the care plan",
  },
];

export type SiteFaq = { question: string; answer: string };

export const homeFaqs: SiteFaq[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Landing pages start at UGX 200,000, multi-page Launchpad sites at UGX 3,500,000, full custom Signature sites at UGX 7,000,000, and Authority builds at UGX 13,000,000. You get a fixed written quote before we start — the price never moves without your approval.",
  },
  {
    question: "How long does it take?",
    answer:
      "Landing pages ship in 3–5 days, Launchpad sites in 2–3 weeks, and full Signature websites in 3–6 weeks. Every project gets a launch date in writing, not a season.",
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
