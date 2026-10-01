import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand wordmark. Set in the duck.design display serif with the "DESIGN"
 * suffix dropped into the italic accent — the template sets its own lockup
 * that way, and it keeps the wordmark legible at 20px.
 */
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
      className={cn("font-display text-[1.375rem] font-medium leading-none", className)}
    >
      GROOVESTREET
      <span aria-hidden="true" className={cn("ml-1.5 italic-accent text-brand", suffixClassName)}>
        design
      </span>
    </Link>
  );
}
