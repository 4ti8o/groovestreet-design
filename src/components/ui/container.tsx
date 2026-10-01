import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * duck.design `.container`:
 *   100% + 1.6rem gutters → 3.2rem at 834px → max 1240px at 1440px
 *   → max 1480px at 1920px.
 * The template widens the measure on very large displays rather than just
 * centring a fixed column, which is why there are two max-widths here.
 */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1240px] px-4 min-[834px]:px-8 min-[1920px]:max-w-[1480px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
