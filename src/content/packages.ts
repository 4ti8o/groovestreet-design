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
    name: "Launchpad",
    price: "$950",
    cadence: "fixed price · 2–3 weeks",
    tagline: "A sharp one-to-five page site for new businesses that need to look real, fast.",
    features: [
      "Custom design, up to 5 pages",
      "Mobile-first build + basic SEO",
      "Copy polish on every page",
      "Form + WhatsApp integration",
      "Handover video + 2 weeks support",
    ],
    cta: "Start with Launchpad",
  },
  {
    name: "Signature",
    price: "$1,900",
    cadence: "fixed price · 3–6 weeks",
    tagline: "The full custom website: strategy, copy, design and build for growing businesses.",
    features: [
      "Everything in Launchpad",
      "Up to 12 pages + blog setup",
      "From-scratch copywriting option",
      "Brand refresh (logo touch-up + palette)",
      "Advanced SEO + analytics setup",
      "Priority support for 30 days",
    ],
    cta: "Start with Signature",
    featured: true,
  },
  {
    name: "Authority",
    price: "$3,500",
    cadence: "fixed price · 6–8 weeks",
    tagline: "Website plus the engine behind it: SEO, content plan and conversion tracking.",
    features: [
      "Everything in Signature",
      "Full SEO audit + 90-day content plan",
      "Landing page for your main offer",
      "Review + referral engine",
      "Team training session",
    ],
    cta: "Start with Authority",
  },
  {
    name: "Care plan",
    price: "$95/mo",
    cadence: "monthly · cancel anytime",
    tagline: "Maintenance, backups, security and monthly design hours. Always improving.",
    features: [
      "Updates, backups & monitoring",
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
      "Launchpad sites start at $950, full custom Signature sites at $1,900, and Authority builds with SEO at $3,500. You get a fixed written quote before we start — the price never moves without your approval.",
  },
  {
    question: "How long does it take?",
    answer:
      "Landing pages ship in 1–2 weeks, Launchpad sites in 2–3 weeks, and full Signature websites in 3–6 weeks. Every agreement includes a launch date, not a season.",
  },
  {
    question: "Do you work with clients outside Uganda?",
    answer:
      "Yes — we are based in Kampala and work across East Africa and worldwide. Calls run on EAT; async updates mean time zones never block a project.",
  },
];
