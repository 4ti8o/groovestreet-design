import { testimonials, guarantees } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { TestimonialRail } from "@/components/marketing/testimonial-rail";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

const ratingEntries = testimonials.flatMap((t) => [
  t.ratings.quality,
  t.ratings.schedule,
  t.ratings.cost,
  t.ratings.referral,
]);
const averageRating = ratingEntries.reduce((sum, value) => sum + value, 0) / ratingEntries.length;

export function HomeTestimonials() {
  const rounded = Math.round(averageRating);
  return (
    <Section ariaLabel="What clients say">
      <SectionHeading
        eyebrow="Client words"
        title="Rated on what actually matters"
        lede="Quality, schedule, cost and willingness to refer. Here is what business owners have to say."
      />
      <Reveal className="mt-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg border border-line bg-surface px-6 py-5">
          <span
            className="flex items-center gap-1"
            role="img"
            aria-label={`${averageRating.toFixed(1)} out of 5 overall`}
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <StarIcon key={index} size={18} filled={index < rounded} />
            ))}
          </span>
          <p className="text-sm">
            <span className="font-display text-h4 font-bold tabular">
              <CountUp value={averageRating.toFixed(1)} />
            </span>{" "}
            out of 5 · {ratingEntries.length} ratings across {testimonials.length} reviews
          </p>
          <p className="text-sm text-muted sm:ml-auto">
            Published with each client&apos;s permission
          </p>
        </div>
      </Reveal>
      <TestimonialRail testimonials={testimonials} />
    </Section>
  );
}

export function HomeGuarantees() {
  return (
    <Section tone="surface" ariaLabel="Our guarantees">
      <SectionHeading
        eyebrow="Guarantees"
        title="Promises you can hold us to"
        lede="Adjectives are cheap. These three promises hold on every project we take on."
      />
      <ul className="mt-10 max-w-[68ch] space-y-8">
        {guarantees.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <li className="flex gap-4 border-t border-line pt-8">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-success-tint text-success">
                <CheckIcon size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-h4 font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted">{g.detail}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
