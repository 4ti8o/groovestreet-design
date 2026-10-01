import { stats } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { DuckIcon, type DuckIconName } from "@/components/marketing/duck-icon";

/** duck.design illustrations, cycled across the stat columns. */
const statIcons: DuckIconName[] = ["realtime", "trello", "senior", "graph"];
const statTones = ["brand", "accent", "tan", "brand"] as const;

/**
 * Stat wall.
 *
 * The restrained Groovestreet treatment: the numbers sit on the cream band with
 * duck.design's dashed vertical rules between columns, rather than in coloured
 * slabs. An earlier pass made each stat a full-bleed block of green / orange /
 * tan / ink — the palette was ours, but the weight of it was not, so it was
 * reverted. The duck.design illustrations and the italic serif numerals stay.
 */
export function HomeStats() {
  return (
    <Section ariaLabel="Studio numbers">
      <SectionHeading
        eyebrow="By the numbers"
        title="The numbers behind the work"
        lede="Timelines, launches and reviews — the counts we can stand behind, every one earned."
      />
      <dl className="mt-14 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {stats.map((stat, index) => {
          return (
            <Reveal
              key={stat.label}
              delay={Math.min(index, 3) * 60}
              className="relative flex flex-col items-center gap-4 px-4 text-center"
            >
              {/* duck.design `.stats__item + .stats__item::before` — a dashed
                  vertical rule between columns, hidden on the 2-up mobile grid
                  where the items stack. */}
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="absolute -left-px top-1 hidden h-[calc(100%-0.5rem)] border-l border-dashed border-line lg:block"
                />
              ) : null}
              <dd>
                <DuckIcon
                  name={statIcons[index % statIcons.length]}
                  tone={statTones[index % statTones.length]}
                  size="lg"
                />
                {/* The numerals stay in the italic serif. duck.design's own
                    stat wall sets its figures this way, and it is the one place
                    the serif still carries meaning rather than decoration —
                    so it is pinned to --font-serif explicitly rather than
                    inheriting the now-Inter --font-display. */}
                <span className="mt-5 block font-serif text-h1 italic tabular">
                  <CountUp value={stat.value} />
                </span>
              </dd>
              <dt className="text-sm text-muted">{stat.label}</dt>
            </Reveal>
          );
        })}
      </dl>
    </Section>
  );
}
