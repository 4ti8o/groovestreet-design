import Image from "next/image";
import { site } from "@/lib/site";
import { partners } from "@/content/proof";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { ContactTrio } from "@/components/marketing/contact-channels";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HomeHero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20"
    >
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 text-ink" />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-2 text-accent-text">
            <span aria-hidden="true" className="inline-block size-2 bg-accent" />
            Website design studio · {site.location}
          </p>
          <h1 className="mt-5 max-w-[16ch] text-display font-bold">
            <span className="sr-only">
              Find your next client or customer online - Your Website does the Work.
            </span>
            <span aria-hidden="true">
              Find your next{" "}
              <span className="relative inline-grid">
                <span className="col-start-1 row-start-1 motion-safe:animate-word-swap">
                  client
                </span>
                <span className="col-start-1 row-start-1 opacity-0 motion-safe:animate-word-swap-alt">
                  customer
                </span>
              </span>{" "}
              online - Your Website does the Work.
            </span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted">
            We craft clean, affordable, professional and intuitive websites to bring your business
            online. Get ranked by search engines, convert website traffic and grow.
          </p>
          <p className="mt-4 max-w-[52ch] text-base font-medium text-ink">
            Premium design and build at a price that fits your business — fixed before we start.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button href="/work" variant="outline">
              See the work
              <ArrowRightIcon size={18} />
            </Button>
          </div>
          <ContactTrio className="mt-8" />
        </Reveal>
      </Container>
    </section>
  );
}

/** Sliding partner logo wall: brand logo tiles on the seamless marquee loop. */
export function HomePartnerLogos() {
  const withLogos = partners.filter((partner) => partner.logo);
  return (
    <section aria-label="Our partners" className="border-y border-line bg-surface py-10">
      <Container>
        <p className="eyebrow text-center text-muted">Organisations we build alongside</p>
        <Marquee className="mt-6">
          {withLogos.map((partner) => {
            const logo = partner.logo;
            if (!logo) return null;
            return (
              <span
                key={partner.name}
                className="flex h-14 w-44 items-center justify-center rounded-md border border-line bg-paper px-5"
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
