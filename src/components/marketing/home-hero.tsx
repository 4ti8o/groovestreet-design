import { site } from "@/lib/site";
import { stats } from "@/content/proof";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { ContactTrio } from "@/components/marketing/contact-channels";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HomeHero() {
  return (
    <section aria-label="Introduction" className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
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
                <span className="col-start-1 row-start-1 motion-safe:animate-word-swap">client</span>
                <span className="col-start-1 row-start-1 opacity-0 motion-safe:animate-word-swap-alt">
                  customer
                </span>
              </span>{" "}
              online - Your Website does the Work.
            </span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted">
            We craft clean, affordable, professional and intuitive websites to bring your business online.
            Get ranked by search engines, convert website traffic and grow. 
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
        <Reveal delay={120}>
          <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card">
                <dd className="font-display text-h2 font-bold tabular">{stat.value}</dd>
                <dt className="mt-2 text-sm text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

const stack = ["Next.js", "WordPress", "Google Business", "MTN MoMo", "Airtel Money", "Analytics"];

export function HomeStack() {
  return (
    <section aria-label="Technologies we build with" className="border-y border-line bg-surface py-10">
      <Container>
        <p className="eyebrow text-center text-muted">Built on technology that lasts</p>
        <Marquee className="mt-6">
          {stack.map((name) => (
            <span key={name} className="font-display text-h4 font-semibold text-ink/70">
              {name}
            </span>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
