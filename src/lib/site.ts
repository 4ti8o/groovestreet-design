/**
 * Single source of truth for brand + contact + navigation data.
 * Every value can be overridden in .env.local (see .env.example) so the studio's
 * real contact details can go live without touching code.
 */

function env(name: string, fallback: string): string {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : fallback;
}

/** Hoisted so the WhatsApp social link can reuse the same env override. */
const whatsappE164 = env("NEXT_PUBLIC_WHATSAPP_E164", "256774778164");

/**
 * Live contact data for the Kampala, Uganda studio.
 * Everything here can be overridden from .env.local — code never needs to change.
 */
export const site = {
  name: "GROOVESTREET DESIGN",
  legalName: "Groovestreet Design",
  shortName: "Groovestreet",
  tagline: "Digitizing Your Business.",
  description:
    "GROOVESTREET DESIGN is a website design studio based in Kampala, Uganda. We craft clean, affordable, professional and intuitive websites to bring your business online. Get ranked by search engines, convert website traffic and grow.",
  url: env("NEXT_PUBLIC_SITE_URL", "http://localhost:3000"),
  email: env("NEXT_PUBLIC_CONTACT_EMAIL", "groovestreetsoftware@gmail.com"),
  phoneE164: env("NEXT_PUBLIC_CONTACT_PHONE_E164", "256774778164"),
  phoneDisplay: env("NEXT_PUBLIC_CONTACT_PHONE_DISPLAY", "+256 774 778 164"),
  whatsappE164,
  whatsappDisplay: env("NEXT_PUBLIC_WHATSAPP_DISPLAY", "+256 774 778 164"),
  calendarUrl: env("NEXT_PUBLIC_CALENDAR_URL", ""),
  location: "Kampala, Uganda",
  hours: "Mon–Fri, 9:00–18:00 (EAT)",
  coverage: "Based in Kampala, Uganda — serving clients across East Africa and worldwide",
  founded: "2026",
  analyticsDomain: env("NEXT_PUBLIC_ANALYTICS_DOMAIN", ""),
  /** Rendered as icons in the footer, so each entry carries its glyph key. */
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/groovestreet-design",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/groovestreet.design",
      icon: "instagram",
    },
    { label: "X (Twitter)", href: "https://x.com/groovestreet", icon: "x" },
    { label: "WhatsApp", href: `https://wa.me/${whatsappE164}`, icon: "whatsapp" },
  ],
  regions: [
    { name: "Uganda", cities: ["Kampala", "Entebbe", "Jinja", "Mbarara", "Gulu"] },
    {
      name: "East Africa",
      cities: ["Nairobi", "Kigali", "Dar es Salaam", "Addis Ababa", "Bujumbura"],
    },
    {
      name: "Worldwide (remote)",
      cities: ["London", "Amsterdam", "New York", "Toronto", "Dubai"],
    },
  ],
} as const;

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Studio", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "/resources" },
] as const;

export const contactNav = [{ label: "Contact", href: "/contact" }] as const;

export const footerNav = [
  {
    heading: "Services",
    links: [
      { label: "Website design & build", href: "/services/website-design" },
      { label: "Landing pages", href: "/services/landing-pages" },
      { label: "Graphic design", href: "/services/graphic-design" },
      { label: "SEO & performance", href: "/services/seo-performance" },
      { label: "Care plan", href: "/care-plan" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Work", href: "/work" },
      { label: "Partners", href: "/partners" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Articles", href: "/resources" },
      { label: "Who we help", href: "/industries" },
      { label: "Get in touch", href: "/contact#book" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;
