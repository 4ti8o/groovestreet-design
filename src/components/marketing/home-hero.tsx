import Image from "next/image";
import { site } from "@/lib/site";
import { partners } from "@/content/proof";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { ContactTrio } from "@/components/marketing/contact-channels";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Home hero.
 *
 * The colour treatment here is the original Groovestreet one: cream paper with
 * the accent orange doing the work, the duck.design hero artwork as a quiet
 * layer behind it. An earlier pass turned this into a full-bleed green band
 * with orange slabs — brand-correct but far too loud for a studio that sells
 * restraint, so it was reverted. What is kept from that pass is the larger
 * display type and the italic accent word.
 *
 * Copy is unchanged from the brief.
 */
export function HomeHero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden pb-20 pt-14 md:pb-24 md:pt-20"
    >
      {/* duck.design `.hero-section_home` artwork, kept low-contrast so it
          reads as paper texture behind the type. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-cover bg-top opacity-70 md:h-[520px]"
        style={{ backgroundImage: "url(/images/duck/hero-bg.png)" }}
      />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-4">
            Website design studio · {site.location}
            <span aria-hidden="true" className="eyebrow-line" />
          </p>
          {/* duck.design sets h1 at weight 700 — no medium step. The serif
              survives only in the swapping word below. */}
          <h1 className="mt-7 max-w-[18ch] text-display">
            <span className="sr-only">
              Find your next client or customer online - Your Website does the Work.
            </span>
            <span aria-hidden="true">
              Find your next{" "}
              <span className="relative inline-grid">
                <span className="col-start-1 row-start-1 italic-accent text-accent-text motion-safe:animate-word-swap">
                  client
                </span>
                <span className="col-start-1 row-start-1 italic-accent text-accent-text opacity-0 motion-safe:animate-word-swap-alt">
                  customer
                </span>
              </span>{" "}
              online - Your Website does the Work.
            </span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg text-muted">
            We craft clean, affordable, professional and intuitive websites to bring your business
            online. Get ranked by search engines, convert website traffic and grow.
          </p>
          <p className="mt-4 max-w-[52ch] text-base font-medium text-ink">
            Premium design and build at a price that fits your business — fixed before we start.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="dark">
              Get in Touch
            </Button>
            <Button href="/work" variant="outline">
              See the work
              <ArrowRightIcon size={18} />
            </Button>
          </div>
          <ContactTrio className="mt-9" />
        </Reveal>
      </Container>
    </section>
  );
}

/** Sliding partner logo wall: brand logo tiles on the seamless marquee loop. */
export function HomePartnerLogos() {
  const withLogos = partners.filter((partner) => partner.logo);
  return (
    <section aria-label="Our partners" className="border-y border-line bg-surface py-14">
      <Container>
        <p className="eyebrow justify-center text-muted">Organisations we build alongside</p>
        <Marquee className="mt-6">
          {withLogos.map((partner) => {
            const logo = partner.logo;
            if (!logo) return null;
            return (
              <span
                key={partner.name}
                className="flex h-16 w-40 shrink-0 items-center justify-center px-4"
              >
                <Image
                  src={logo.src}
                  alt={`${partner.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-9 w-auto max-w-full object-contain"
                />
              </span>
            );
          })}
        </Marquee>
      </Container>
    </section>
  );
}
