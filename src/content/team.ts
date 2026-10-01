export type TeamMember = {
  /** Stable key for React lists. */
  id: string;
  name: string;
  role: string;
  /** One line under the name — what they are known for inside the studio. */
  tagline: string;
  /** 2–3 sentences: who they are and what they actually do here. */
  bio: string;
  /** What they are into away from the studio. */
  interests: string[];
  /** What they do with their free time. */
  hobbies: string[];
  /** The thing that keeps them going. */
  motivation: string;
  /** Career and personal milestones. */
  achievements: string[];
  /** What they personally own on a project. */
  focus: string[];
  /** Portrait tone; maps to the palette in globals.css §3.1. */
  tone: "brand" | "accent" | "tan";
};

/**
 * The studio team.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * ⚠ PLACEHOLDERS — READ BEFORE PUBLISHING
 * Only Atigo Paul Odoch is a real person. The other three entries are
 * **brackets by design**: the names are deliberately written as `[ … ]` so an
 * unfilled slot can never be mistaken for a real hire and accidentally
 * shipped. Replace the name, then replace every line of copy underneath it.
 *
 * The same applies to Atigo's profile: the bio, interests, hobbies,
 * motivation and achievements below are a **draft written from the public site
 * copy**, not verified facts. Confirm every detail with him and correct
 * anything untrue before launch. Do not publish a claim about a real person
 * that they have not read and approved (design.md §1.5, §15).
 * ─────────────────────────────────────────────────────────────────────────
 */
export const team: TeamMember[] = [
  {
    id: "atigo-paul-odoch",
    name: "Atigo Paul Odoch",
    role: "Team Lead",
    tagline: "Founder. Turns a vague brief into a plan you can act on.",
    bio: "Atigo started GROOVESTREET DESIGN after watching the same story repeat too many times: a good business pays for a website, gets something slow and confusing, and the designer stops answering. He runs the studio end to end — the discovery call, the written quote, the design direction and the launch checklist. You deal with him directly, never a sales team.",
    interests: [
      "Digital strategy for small businesses",
      "Local search and how Kampala businesses get found",
      "Photography",
      "Football",
      "Afrobeat and hip-hop production",
    ],
    hobbies: [
      "Street photography on Sunday mornings",
      "Coaching a local youth football team",
      "Cooking for friends on weekends",
    ],
    motivation:
      "Too many businesses in Uganda are losing work they have already paid for — not because the product is bad, but because nobody could find it or trust it. Fixing that is the whole job, and doing it well is the part worth the effort.",
    achievements: [
      "Founded GROOVESTREET DESIGN in Kampala",
      "Took the studio past 100 websites delivered",
      "Built the 60-point launch checklist every page now ships against",
      "Put fixed, written pricing and launch dates at the centre of the studio",
    ],
    focus: [
      "Discovery calls and scoping",
      "Written quotes and pricing",
      "Design direction",
      "Launch and handover",
    ],
    tone: "brand",
  },
  {
    id: "placeholder-graphics",
    name: "[ Graphics Designer name ]",
    role: "Graphics Designer",
    tagline: "Logos, flyers and social graphics that survive being resized.",
    bio: "This seat covers everything that is not the website itself: logos, flyers, menus, social posts and the printed pieces a client hands out. The person here takes a rough idea and a business name and returns artwork a non-designer can use without breaking it.",
    interests: ["Typography and lettering", "Brand identity", "Poster design", "Photography", "Print production"],
    hobbies: [
      "Sketching logos in a notebook",
      "Visiting print shops to check colour on paper",
      "Redrawing old Ugandan poster art",
    ],
    motivation:
      "A logo has about two seconds to say what a business is. Getting that right — then making sure it still works on a banner, a business card and a phone screen — is a small job that looks effortless and is not.",
    achievements: [
      "[ Replace — e.g. years of professional design experience ]",
      "[ Replace — e.g. brands or campaigns you are proud of ]",
      "[ Replace — e.g. a qualification or certification you hold ]",
    ],
    focus: ["Logo and brand marks", "Flyers, posters and menus", "Social media graphics", "Print-ready exports"],
    tone: "accent",
  },
  {
    id: "placeholder-developer",
    name: "[ Web Developer name ]",
    role: "Web Designer & Developer",
    tagline: "Builds the fast, plain, mobile-first site the design promises.",
    bio: "This seat turns an approved design into a working, fast, accessible website — then keeps it that way. They handle the build, the hosting, the forms and the WhatsApp buttons, and they are the one checking that a page still works on a mid-range Android over mobile data.",
    interests: ["Front-end performance", "Accessibility", "Search engine optimisation", "Open-source tooling", "Coffee and cycling"],
    hobbies: [
      "Rebuilding slow websites for fun",
      "Cycling around the hills east of Kampala",
      "Reading about web standards at night",
    ],
    motivation:
      "Most Ugandan visitors are on a phone with limited data. A site that loads fast and reads clearly is not a technical nicety — it is the difference between the visitor staying and the visitor leaving.",
    achievements: [
      "[ Replace — e.g. sites built or shipped ]",
      "[ Replace — e.g. a performance or accessibility result you are proud of ]",
      "[ Replace — e.g. a certification or open-source contribution ]",
    ],
    focus: [
      "Responsive build",
      "Page speed and Core Web Vitals",
      "Forms, email and WhatsApp wiring",
      "Hosting, domains and handover",
    ],
    tone: "tan",
  },
  {
    id: "placeholder-support",
    name: "[ Content & Client Support name ]",
    role: "Content, SEO & Client Support",
    tagline: "Writes the words, gets you found, and answers the phone.",
    bio: "This seat covers the page copy, the on-page SEO and the inbox. They rewrite jargon into plain sentences, set up the titles and map listings that get a business found locally, and are the person a client messages when something needs explaining.",
    interests: ["Copywriting", "Local SEO and Google Business Profiles", "Customer support", "Email and WhatsApp marketing"],
    hobbies: ["Reading widely and rewriting bad sentences", "Keeping a swipe file of Ugandan business websites that need help", "Cooking"],
    motivation:
      "Most business owners are not bad at what they do — they are just bad at describing it. Clear words, in the right order, are often the cheapest thing you can do to win more work.",
    achievements: [
      "[ Replace — e.g. pages written or rewritten ]",
      "[ Replace — e.g. a local ranking or enquiry result you are proud of ]",
      "[ Replace — e.g. a certification or training you have done ]",
    ],
    focus: [
      "Website copy and proofreading",
      "On-page SEO and local listings",
      "Client replies and handovers",
      "Content updates after launch",
    ],
    tone: "brand",
  },
];