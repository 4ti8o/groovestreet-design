"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Lazy motion bundle + global reduced-motion support (design.md §8).
 * Reveals use the IntersectionObserver-based <Reveal /> for reliability;
 * this provider keeps `motion` ready for drawer/transition work.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionConfig>
  );
}
