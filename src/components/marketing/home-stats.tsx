import { stats } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { ClockIcon, GlobeIcon, SparkleIcon, StarIcon } from "@/components/ui/icons";

const statIcons = [ClockIcon, GlobeIcon, StarIcon, SparkleIcon];

/**
 * Stat wall (stats template, reworked for this site): display-face numbers on
 * dark cards with count-up animation, one icon chip per stat.
 */
export function HomeStats() {
  return (
    <Section tone="ink" ariaLabel="Studio numbers">
      <SectionHeading
        dark
        eyebrow="By the numbers"
        title="The numbers behind the work"
        lede="Timelines, launches and reviews — the counts we can stand behind, every one earned."
      />
      <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = statIcons[index % statIcons.length];
          return (
            <Reveal
              key={stat.label}
              delay={Math.min(index, 3) * 60}
              className="flex h-full flex-col rounded-lg border border-line-invert bg-ink-2 p-6 md:p-8"
            >
              <dd>
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent"
                >
                  <Icon size={20} />
                </span>
                <span className="mt-6 block font-display text-h1 font-bold tabular text-paper">
                  <CountUp value={stat.value} />
                </span>
              </dd>
              <dt className="mt-2 text-sm text-muted-invert">{stat.label}</dt>
            </Reveal>
          );
        })}
      </dl>
    </Section>
  );
}
