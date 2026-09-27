"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * useLayoutEffect must not run during SSR (React warns); swap it out on the
 * server. The client still resets counters to zero before first paint.
 */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Parsed = { prefix: string; target: number | null; suffix: string; decimals: number };

function parse(value: string): Parsed {
  const match = /^(.*?)(\d[\d,]*\.?\d*)(.*)$/.exec(value);
  if (!match) return { prefix: "", target: null, suffix: "", decimals: 0 };
  const [, prefix, digits, suffix] = match;
  // Ranges like "2–4" or "24/7" carry a second number — render them as written.
  if (/\d/.test(prefix) || /\d/.test(suffix)) {
    return { prefix: "", target: null, suffix: "", decimals: 0 };
  }
  const cleaned = digits.replace(/,/g, "");
  const target = Number(cleaned);
  if (!Number.isFinite(target)) return { prefix: "", target: null, suffix: "", decimals: 0 };
  const dot = digits.indexOf(".");
  const decimals = dot === -1 ? 0 : digits.length - dot - 1;
  return { prefix, target, suffix, decimals };
}

function format(target: number, decimals: number): string {
  return target.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Counts a value up when it first scrolls into view (statistics animate).
 * SSR renders the final number, the client resets to zero before first paint,
 * then eases to the target — no Date.now() during render, so hydration never
 * mismatches. Static under prefers-reduced-motion; values without a single
 * clean number (ranges like "2–4") render exactly as written.
 */
export function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const { prefix, target, suffix, decimals } = parse(value);
  const [display, setDisplay] = useState(() =>
    target === null ? value : format(target, decimals),
  );
  const ref = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    if (target === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setDisplay(format(target, decimals));
    };
    // Reset to zero before the browser paints; the observer below starts the run.
    setDisplay(format(0, decimals));

    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        io.disconnect();
        const startedAt = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          setDisplay(
            format(
              decimals > 0 ? Number(current.toFixed(decimals)) : Math.round(current),
              decimals,
            ),
          );
          if (progress < 1) frame = requestAnimationFrame(tick);
          else finish();
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      finished = true;
    };
  }, [target, decimals, duration]);

  if (target === null) {
    return <span className={cn("tabular-nums", className)}>{value}</span>;
  }
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
