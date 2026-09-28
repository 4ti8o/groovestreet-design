import Link from "next/link";
import { cn } from "@/lib/utils";

/** Brand wordmark per design.md §2: GROOVESTREET, 700, -0.02em, accent DESIGN suffix. */
export function Logo({
  className,
  suffixClassName,
}: {
  className?: string;
  suffixClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="GROOVESTREETDESIGN — home"
      className={cn(
        "font-display text-[1.25rem] font-bold leading-none tracking-[-0.02em]",
        className,
      )}
    >
      GROOVESTREET
      <span
        aria-hidden="true"
        className={cn("ml-1.5 font-mono text-[0.6875rem] font-medium text-accent-text", suffixClassName)}
      >
        DESIGN
      </span>
    </Link>
  );
}
