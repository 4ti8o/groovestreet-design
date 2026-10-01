import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Service } from "@/content/services";

/**
 * duck.design illustrated icons, on the GROOVESTREET palette.
 *
 * The template draws its icons as two-tone filled SVGs (a dark shape over a
 * lighter one) rather than the flat single-colour glyphs this repo used before.
 * That two-tone, chunky style is most of what makes duck.design read as
 * illustrated rather than corporate, so we keep the artwork and let the
 * surrounding tint carry the brand: the tile behind the icon supplies the
 * GROOVESTREET colour, and the icon itself stays a warm neutral so it never
 * looks like a pasted-in foreign asset.
 *
 * Files live in public/icons and are served straight from the repo — no
 * network request, and next/image adds lazy loading and intrinsic sizing.
 */
const duckIcons: Record<Service["icon"], string> = {
  monitor: "/icons/ic-trello.svg",
  target: "/icons/ic-graph.svg",
  palette: "/icons/ic-artdir.svg",
  search: "/icons/ic-chart.svg",
  refresh: "/icons/ic-realtime.svg",
  artdir: "/icons/ic-files.svg",
  graph: "/icons/ic-requests.svg",
};

/**
 * Renders a duck.design illustration inside the GROOVESTREET icon tile — the
 * soft-cornered square the template uses for its service and feature chips.
 */
export function ServiceIcon({
  icon,
  size = 44,
  className,
}: {
  icon: Service["icon"];
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl bg-brand-tint p-2.5",
        className,
      )}
    >
      <Image
        src={duckIcons[icon]}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="h-auto w-full"
        unoptimized
      />
    </span>
  );
}

/** Star used by StatsIcon units. */
export { GaugeIcon as StatsIcon } from "@/components/ui/icons";
