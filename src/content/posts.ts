export type Faq = { question: string; answer: string };

export const contactFaqs: Faq[] = [
  {
    question: "Can I pay in UGX or Mobile Money?",
    answer:
      "Absolutely. We invoice in UGX, and accept bank transfer, Mobile Money (MTN/Airtel) and cards. Projects are typically 50% to start, 50% at launch.",
  },
  {
    question: "Will I be able to update the site myself?",
    answer:
      "Yes. Every project ends with a handover video and an editing setup matched to your comfort level, plus two weeks of free support.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "One 30-minute call and one structured questionnaire, plus your logo and any photos you have. If you lack photos, we plan a shoot with a local photographer in week one.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Every site includes two weeks of free post-launch support. After that, the monthly care plan covers updates, backups, security and reserved design hours.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "SEO tips" | "Web design tips" | "Business";
  readingMinutes: number;
  published: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "five-seconds-test-homepage",
    title: "The 5-second test: does your homepage pass?",
    excerpt:
      "Show your homepage to a stranger for five seconds, then ask what you sell. If they cannot answer, your words — not your design — are the problem.",
    category: "Web design tips",
    readingMinutes: 4,
    published: "2026-09-01",
    body: [
      "Most websites fail on words, not pixels. Visitors decide in about five seconds whether you can help them, and a beautiful layout cannot save a confusing headline.",
      "Run the test yourself: open your homepage, cover it after five seconds, and write down what the business does, who it is for, and what to do next. If any answer is fuzzy, rewrite before you redesign.",
      "A headline that passes names the outcome, the audience and the action. Specific beats clever, every time.",
      "We run this test on every project in week one — it is the cheapest conversion research that exists.",
    ],
  },
  {
    slug: "google-business-profile-kampala",
    title: "Your Google Business Profile is your second homepage",
    excerpt:
      "For Kampala searches, the map pack decides before your website loads. Setting up your profile properly takes an afternoon and pays for years.",
    category: "SEO tips",
    readingMinutes: 5,
    published: "2026-09-10",
    body: [
      "When someone searches for a dentist in Kampala or a plumber in Ntinda, Google shows three map results above every website. If you are not there, you do not exist for that search.",
      "Claim your Google Business Profile, pick the right primary category, add real photos of your premises and team, and list your exact services with prices where possible.",
      "Then ask every happy client for a review — and reply to all of them. A profile with fresh reviews converts like a second homepage.",
      "This is step one of every SEO engagement we run, because it is fast, free, and compounds.",
    ],
  },
  {
    slug: "whatsapp-first-websites",
    title: "Why Ugandan websites should be WhatsApp-first",
    excerpt:
      "Your visitors would rather chat than fill a form. Wiring WhatsApp into your site properly can double your enquiry rate.",
    category: "Business",
    readingMinutes: 4,
    published: "2026-09-18",
    body: [
      "In Uganda, WhatsApp is the internet for millions of buyers. A contact form asking for name, email and message feels like paperwork; a chat button feels like talking to a person.",
      "Do it properly: prefill the message with context, show the button on every page, and answer within business hours. A dead WhatsApp number is worse than none at all.",
      "Pair it with click-to-call for urgent services — plumbers and clinics live on the phone — and keep the form as the quiet third option.",
      "On our builds, WhatsApp is a first-class channel from day one: button on mobile, inline CTAs on desktop, all prefilled.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
