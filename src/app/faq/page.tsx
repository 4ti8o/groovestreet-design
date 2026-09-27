import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/content/packages";
import { contactFaqs } from "@/content/posts";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers on website cost, timelines, working across time zones, payments in UGX and Mobile Money, updates, and ongoing support.",
  path: "/faq",
});

const allFaqs = [...homeFaqs, ...contactFaqs];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allFaqs)) }}
      />
      <Section ariaLabel="Frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Everything clients ask before they hire us"
            lede="Straight answers on price, timelines, payments and support. Still curious? Ask us directly — we reply within one business day."
          />
          <Reveal>
            <Accordion items={allFaqs} />
          </Reveal>
        </div>
      </Section>
      <CtaBand
        eyebrow="Still have a question?"
        title="Ask us — a human replies"
        lede="Call, WhatsApp or email. No ticket queues, no chatbots pretending to be people."
      />
    </>
  );
}
