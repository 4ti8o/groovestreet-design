import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactTrio } from "@/components/marketing/contact-channels";
import { CalendarIcon } from "@/components/ui/icons";

/**
 * Closing conversion band (design.md §10): every page ends with a CTA,
 * never with a footer-adjacent dead end.
 */
export function CtaBand({
  eyebrow = "Let's work together",
  title = "Know what you want? Great. Got questions? Even better.",
  lede = "Tell us about your project in one call, one message, or one email — we'll reply within one business day with honest next steps.",
}: {
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <section aria-label="Get in touch" className="bg-ink py-20 text-paper md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-[72ch] text-center">
          <Eyebrow dark className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-4 text-h1 font-bold">{title}</h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-lg text-muted-invert">{lede}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/book" variant="accent">
              <CalendarIcon size={18} />
              Book a discovery call
            </Button>
            <Button href="/contact" variant="invert">
              Send a message
            </Button>
          </div>
          <ContactTrio dark className="mt-8 justify-center" />
          {site.calendarUrl ? null : (
            <p className="mt-4 text-sm text-muted-invert">
              Prefer email? {site.email} · {site.hours}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
