import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PLACEHOLDER_LABEL } from "@/lib/site";

const badgeTones = {
  brand: "bg-brand-tint text-brand-dark",
  accent: "bg-accent-tint text-accent-text",
  warning: "bg-warning-tint text-warning",
  neutral: "border border-line text-muted",
} as const;

export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof badgeTones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5",
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Rendered next to any testimonial, logo, metric or case study that is sample
 * content (design.md §14). Never style it away — remove it by supplying real data.
 */
export function PlaceholderBadge({ label = PLACEHOLDER_LABEL, className }: { label?: string; className?: string }) {
  return (
    <Badge tone="warning" className={className}>
      <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-warning" />
      {label}
    </Badge>
  );
}
