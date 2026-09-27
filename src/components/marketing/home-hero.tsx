import { site } from "@/lib/site";
import { stats } from "@/content/proof";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { ContactTrio } from "@/components/marketing/contact-channels";
import { ArrowRightIcon, CalendarIcon } from "@/components/ui/icons";

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
            Websites that get you found — and get you calls.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted">
            We design fast, mobile-first websites for service businesses, then help
            you rank, convert and grow. Strategy, words, design and build.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/book" variant="primary">
              <CalendarIcon size={18} />
              Book a free discovery call
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
