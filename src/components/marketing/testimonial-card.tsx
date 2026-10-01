import Image from "next/image";
import { cn } from "@/lib/utils";
import { StarIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import type { Testimonial } from "@/content/proof";

function RatingRow({ label, value }: { label: string; value: number }) {
  return (
    <li className="flex items-center justify-between gap-3 text-sm">
      <span className="text-muted">{label}</span>
      <span className="inline-flex items-center gap-1 font-semibold tabular">
        <StarIcon size={14} filled />
        {value.toFixed(1)}
      </span>
    </li>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

/** Testimonial wall card with per-axis ratings (the Duck.design pattern, §10).
 *  Set as the duck.design `.review`: white card, the quote lifted into the
 *  display serif, a dashed divider, then the rating table. */
export function TestimonialCard({
  testimonial,
  delay = 0,
  className,
}: {
  testimonial: Testimonial;
  delay?: number;
  className?: string;
}) {
  const { quality, schedule, cost, referral } = testimonial.ratings;
  const average = (quality + schedule + cost + referral) / 4;
  return (
    <Reveal delay={delay} className={className}>
      <figure className="card flex h-full flex-col gap-4 [--color-card-glow:var(--color-brand-tint)]">
        <div className="flex items-start justify-between gap-3">
          <span className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-tint font-display text-sm font-bold text-brand-dark"
            >
              {initials(testimonial.name)}
            </span>
            <span>
              <span className="block font-semibold">{testimonial.name}</span>
              <span className="block text-sm text-muted">
                {testimonial.role} · {testimonial.company}
              </span>
            </span>
          </span>
          <span className="shrink-0 font-display text-base italic" aria-label={`${average.toFixed(1)} out of 5 overall`}>
            {average.toFixed(1)}
          </span>
        </div>
        <span className="flex shrink-0 gap-0.5 text-accent-text" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((index) => (
            <StarIcon key={index} size={14} filled={index < Math.round(average)} />
          ))}
        </span>
        {/* duck.design `.review__qmark` — the oversized quote glyph that opens
            each review. Purely decorative; the quote text follows it. */}
        <blockquote className="relative font-display text-lg italic leading-snug text-ink">
          <Image
            src="/images/duck/quote.svg"
            alt=""
            width={30}
            height={26}
            aria-hidden="true"
            className="mb-2 opacity-30"
          />
          {testimonial.quote}
        </blockquote>
        <figcaption className="mt-auto">
          <p className="text-sm text-muted">Project: {testimonial.service}</p>
          <ul className={cn("mt-4 space-y-1.5 border-t border-dashed border-line pt-4")}>
            <RatingRow label="Quality" value={quality} />
            <RatingRow label="Schedule" value={schedule} />
            <RatingRow label="Cost" value={cost} />
            <RatingRow label="Willing to refer" value={referral} />
          </ul>
        </figcaption>
      </figure>
    </Reveal>
  );
}
