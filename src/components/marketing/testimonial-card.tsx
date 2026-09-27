import { cn } from "@/lib/utils";
import { PlaceholderBadge } from "@/components/ui/badge";
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

/** Testimonial wall card with per-axis ratings (the Duck.design pattern, §10). */
export function TestimonialCard({
  testimonial,
  delay = 0,
  className,
}: {
  testimonial: Testimonial;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <figure className="card flex h-full flex-col gap-4">
        {testimonial.isPlaceholder ? <PlaceholderBadge /> : null}
        <blockquote className="text-base leading-[1.65]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-auto">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted">
            {testimonial.role} · {testimonial.company}
          </p>
          <p className="mt-1 text-sm text-muted">Project: {testimonial.service}</p>
          <ul className={cn("mt-4 space-y-1.5 border-t border-line pt-4")}>
            <RatingRow label="Quality" value={testimonial.ratings.quality} />
            <RatingRow label="Schedule" value={testimonial.ratings.schedule} />
            <RatingRow label="Cost" value={testimonial.ratings.cost} />
            <RatingRow label="Willing to refer" value={testimonial.ratings.referral} />
          </ul>
        </figcaption>
      </figure>
    </Reveal>
  );
}
