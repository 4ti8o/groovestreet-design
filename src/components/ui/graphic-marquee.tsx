import Image from "next/image";
import { cn } from "@/lib/utils";

export type Graphic = {
  /** Path under /public/images/gfx. */
  src: string;
  /** What it is, e.g. "Referral campaign". Used as the accessible name. */
  label: string;
};

/**
 * The duck.design graphic-design strip.
 *
 * Built from the template's `.hero__examples` + `.marquee`:
 *   - the track is duplicated and translated -50%, so the loop is seamless and
 *     runs on a single composited transform with no reflow;
 *   - `--dur-slow` on the animation, so the drift reads as a premium backdrop
 *     rather than a carousel the visitor might try to catch;
 *   - `marquee-fade` masks both edges so the artwork dissolves at the viewport;
 *   - `marquee-item` fixes the tile height and keeps the natural width, so a
 *     wide banner and a square piece sit on one baseline;
 *   - `media-zoom` gives each tile duck.design's 1.03 hover scale.
 *
 * Behaviour kept from design.md §8: it pauses on hover and focus, and under
 * `prefers-reduced-motion` it degrades to a static, scrollable row rather than
 * vanishing — the work still has to be reachable either way.
 */
export function GraphicMarquee({
  graphics,
  className,
  speed = "animate-marquee-slow",
}: {
  graphics: Graphic[];
  className?: string;
  /** Swap for `animate-marquee` to run the strip faster, or
   *  `animate-marquee-reverse` to drift the other way. */
  speed?: "animate-marquee" | "animate-marquee-slow" | "animate-marquee-reverse";
}) {
  const tiles = (hidden: boolean) =>
    graphics.map((graphic) => (
      <figure
        key={graphic.src}
        className="marquee-item group/tile bg-tan"
        {...(hidden ? { "aria-hidden": true } : {})}
      >
        <Image
          src={graphic.src}
          alt={`${graphic.label} — graphic design`}
          width={1600}
          height={900}
          className="media-zoom h-full w-full object-cover"
          unoptimized
        />
      </figure>
    ));

  return (
    <div className={cn("group", className)}>
      {/* Announced once for screen readers; the moving copy below is hidden. */}
      <ul className="sr-only motion-reduce:hidden">
        {graphics.map((graphic) => (
          <li key={`sr-${graphic.src}`}>{graphic.label} — graphic design</li>
        ))}
      </ul>

      {/* Reduced motion: a real, scrollable row. Nothing moves, everything is
          still reachable, and it is the same artwork in the same order. */}
      <ul className="motion-reduce:flex hidden snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {graphics.map((graphic) => (
          <li
            key={`rm-${graphic.src}`}
            className="aspect-[16/9] w-[85%] shrink-0 snap-start overflow-hidden rounded-lg bg-tan sm:w-[60%] lg:w-[calc((100%-2rem)/3)]"
          >
            <Image
              src={graphic.src}
              alt={`${graphic.label} — graphic design`}
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              unoptimized
            />
          </li>
        ))}
      </ul>

      {/* The moving strip. */}
      <div className="marquee-fade motion-reduce:hidden">
        <div
          className={cn(
            "flex w-max items-center group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none",
            speed,
          )}
        >
          {tiles(false)}
          {tiles(true)}
        </div>
      </div>
    </div>
  );
}