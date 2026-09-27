import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ContactChannels } from "@/components/marketing/contact-channels";
import { CtaBand } from "@/components/marketing/cta-band";
import { CalendarIcon, CheckIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Get in Touch",
  description:
    "Book a free 30-minute discovery call with GROOVESTREET DESIGN. No pitch decks — honest advice on your website, whether we build it or not.",
  path: "/book",
});

const expectations = [
  "What you sell and who it is for",
  "What your current site does (or doesn't do)",
  "Your timeline and budget range",
  "Whether we're the right studio — honestly",
];

export default function BookPage() {
  return (
    <>
      <Section ariaLabel="Get in Touch">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Book a call"
            title="A free 30 minutes that pays for itself"
            lede="No pitch decks, no pressure. You leave the call knowing exactly what your website needs — whether we build it or not."
          />
          <Reveal delay={120}>
            <div className="card">
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
                  <Button href="/contact">Request a time</Button>
                )}
                <Button
                  href={`https://wa.me/${site.whatsappE164}?text=${encodeURIComponent("Hi Groovestreet Design — I'd like to Get in Touch.")}`}
                  variant="outline"
                >
                  Book via WhatsApp
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted">{site.hours}</p>
            </div>
          </Reveal>
        </div>
        <ContactChannels className="mt-12" />
      </Section>
      <CtaBand
        eyebrow="Not ready to talk?"
        title="Send the form instead"
        lede="Tell us about your project in writing — we reply within one business day."
      />
    </>
  );
}
