import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Logo / badge ticker (design.md §8): 40s loop, pauses on hover and focus,
 * collapses to a static grid on mobile.
 */
export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("group", className)}>
      {/* Mobile: static grid (no motion, no scrolling). */}
      <div className="grid grid-cols-2 gap-4 md:hidden">{children}</div>
      {/* Desktop: looped marquee; duplicated track for a seamless -50% loop. */}
      <div className="hidden overflow-hidden md:block" aria-hidden="true">
        <div className="flex w-max items-center gap-12 motion-safe:animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
