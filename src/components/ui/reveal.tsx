"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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
 *
 * Pass `as="li"` whenever this sits directly inside a <ul>/<ol>. The default
 * <div> wrapper would leave the <li> as a grandchild, so the list reports no
 * items to assistive tech (WCAG 1.3.1 — Lighthouse "list" and "listitem").
 */
export function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  className,
}: {
  as?: "div" | "li";
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // No IntersectionObserver (very old browser): render the final state immediately.
  // Lazy initializer keeps this out of the effect entirely.
  const [shown, setShown] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  // Callback ref rather than useRef<HTMLDivElement>: the element is sometimes an
  // <li>, and a callback widens to HTMLElement without a cast at every call site.
  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

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
    <Tag
      ref={setRef}
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
    </Tag>
  );
}
