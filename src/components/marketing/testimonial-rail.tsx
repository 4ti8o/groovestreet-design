"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Testimonial } from "@/content/proof";

const railButton =
  "flex size-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line";

/**
 * Testimonials as a slideshow: native scroll-snap does the work, so a finger
 * swipe scrolls left/right on touch and a trackpad scrolls on desktop. The
 * arrow buttons page one card at a time and disable at each end of the rail.
 */
export function TestimonialRail({ testimonials }: { testimonials: Testimonial[] }) {
  const railRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    sync();
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      rail.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const nudge = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="mt-12">
      <ul
        ref={railRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.company}
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%_-_2rem)/3)]"
          >
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          disabled={atStart}
          aria-label="Scroll testimonials left"
          className={railButton}
        >
          <ArrowRightIcon size={20} aria-hidden="true" className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          disabled={atEnd}
          aria-label="Scroll testimonials right"
          className={railButton}
        >
          <ArrowRightIcon size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
