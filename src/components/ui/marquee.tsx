import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Logo / badge ticker (design.md §8): a single CSS transform on a duplicated
 * track, so the 40s loop runs at every screen size (touch included) and never
 * reflows. Pauses on hover and focus. Under prefers-reduced-motion the moving
 * track is replaced by a static wrapped row.
 *
 * Marquees carry non-interactive artwork only: the moving copy is aria-hidden
 * and the names are announced once from a screen-reader-only list.
 */
export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("group", className)}>
      {/* Announced once; hidden from sight (display:none) under reduced motion. */}
      <div className="sr-only motion-reduce:hidden">{children}</div>
      {/* Reduced motion: static, wrapping row. */}
      <div className="hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 motion-reduce:flex">
        {children}
      </div>
      {/* Moving track: content duplicated for a seamless -50% loop. */}
      <div className="overflow-hidden motion-reduce:hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
