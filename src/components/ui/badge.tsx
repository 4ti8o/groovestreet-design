import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
