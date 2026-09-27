import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** 1200px container with responsive gutters (design.md §5). */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>
  );
}
