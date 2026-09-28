"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * One-shot scroll reveal per design.md §8: a soft rise settling to zero, 650ms,
 * firing once when the element is comfortably in view. `delay` staggers grouped
 * items (60ms steps). Renders the final state immediately for reduced motion
 * (globals.css) and for browsers without IntersectionObserver.
 *
 * Only transform and opacity are animated: both composite off the main thread,
 * so scrolling stays smooth. Do not add filter or blur here — that animates
 * pixels on the main thread and Lighthouse flags it as non-composited.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // No IntersectionObserver (very old browser): render the final state immediately.
  // Lazy initializer keeps this out of the effect entirely.
  const [shown, setShown] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        // Transform and opacity only: both are composited, so the reveal animates
        // off the main thread. An earlier version also transitioned a blur filter,
        // which Lighthouse rightly flags as a non-composited animation.
        "transition-[opacity,transform] duration-[var(--dur-reveal)] ease-[var(--ease-groove)] motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
