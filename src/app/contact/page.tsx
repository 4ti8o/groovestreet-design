import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { contactFaqs } from "@/content/posts";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ContactChannels } from "@/components/marketing/contact-channels";
import { ContactForm } from "@/components/marketing/contact-form";
import { CalendarIcon, CheckIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Call, WhatsApp or email GROOVESTREET DESIGN in Kampala, Uganda — send the form or book a free 30-minute call. We reply within one business day.",
  path: "/contact",
});

const expectations = [
  "What you sell and who it is for",
  "What your current site does (or doesn't do)",
  "Your timeline and budget range",
  "Whether we're the right studio",
];

const bookingSteps = [
  {
    step: "1",
    title: "Name the time that suits you",
    detail:
      "Pick a slot in the calendar, or send your preferred time on WhatsApp or the form above. We confirm within one business day.",
  },
  {
    step: "2",
    title: "Thirty minutes, no slide decks",
    detail: "Call or WhatsApp, your choice. We ask about your business, your clients and your goal.",
  },
  {
    step: "3",
    title: "You leave with a plan",
    detail: "Clear next steps for your website — whether we build it or not.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* duck.design `contact-bg.jpg` — the paper backdrop behind the whole
          contact page, held at low opacity so the form stays the focus. */}
      <Section
        id="contact-form"
        ariaLabel="Contact GROOVESTREET DESIGN"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/images/duck/contact-bg.jpg)" }}
        />
        <div className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to a human, not a ticket queue"
            lede="Call, WhatsApp, email — or send the form below."
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
        </div>
      </Section>
      <Section id="book" tone="surface" ariaLabel="Book a call">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Book a call"
              title="A free 30 minutes that pays for itself"
              lede="No pitch decks, no pressure. You leave the call knowing exactly what your website needs — whether we build it or not."
            />
            <ol className="mt-8 space-y-4">
              {bookingSteps.map((item, index) => (
                <Reveal as="li" key={item.step} delay={index * 60} className="card flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-tint font-display text-sm font-bold text-brand-dark">
                    {item.step}
                  </span>
                  <span>
                    <span className="block font-semibold">{item.title}</span>
                    <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={120}>
            <div className="card h-full">
              <h2 className="flex items-center gap-2.5 text-h3 font-semibold">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                  <CalendarIcon size={20} />
                </span>
                What happens on the call
              </h2>
              <ul className="mt-5 space-y-2.5">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckIcon size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {site.calendarUrl ? (
                  <Button href={site.calendarUrl}>Pick a time</Button>
                ) : (
                  <Button href="#contact-form">Request a time</Button>
                )}
                <Button
                  href={`https://wa.me/${site.whatsappE164}?text=${encodeURIComponent("Hi Groovestreet Design — I'd like to book a free 30-minute call.")}`}
                  variant="outline"
                >
                  Message on WhatsApp
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted">{site.hours}</p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
