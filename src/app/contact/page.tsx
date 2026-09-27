import { pageMetadata } from "@/lib/seo";
import { contactFaqs } from "@/content/posts";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { ContactChannels } from "@/components/marketing/contact-channels";
import { ContactForm } from "@/components/marketing/contact-form";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Call, WhatsApp or email GROOVESTREET DESIGN in Kampala, Uganda — or send the form and we'll reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section ariaLabel="Contact GROOVESTREET DESIGN">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to a human, not a ticket queue"
          lede="Call, WhatsApp, email — or send the form below. A real person replies within one business day."
        />
        <ContactChannels className="mt-10" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <Accordion items={contactFaqs} />
          </Reveal>
        </div>
      </Section>
      <CtaBand
        eyebrow="Prefer to talk first?"
        title="Or book a free discovery call instead"
        lede="Thirty minutes, no pitch decks — we'll tell you honestly if we're the right studio."
      />
    </>
  );
}
