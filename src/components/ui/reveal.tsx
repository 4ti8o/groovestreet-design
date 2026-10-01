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
      // Fires as soon as any sliver of the element clears the fold. The old
      // 0.15 / -8% pair could leave a tall element waiting for a lot of scroll
      // before it moved, which read as "there is no animation on this page".
      { threshold: 0, rootMargin: "0px 0px -4% 0px" },
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
        //
        // Duration and easing are duck.design's own: a 700ms settle on
        // cubic-bezier(.16,.84,.44,1). That curve holds the movement back for
        // longer at the start and releases it late, which is why their sections
        // feel unhurried. Swapping it back to --ease-groove is visible.
        //
        // The travel is 40px and settles with a slight scale so the motion is
        // legible on a phone. At 24px on a small screen the whole thing read as
        // a page that simply loaded, with no animation at all.
        "transition-[opacity,transform] duration-[var(--dur-reveal)] ease-[var(--ease-duck)] motion-reduce:transition-none",
        shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-[0.97] opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
