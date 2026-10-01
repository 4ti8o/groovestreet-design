import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * duck.design's two-tone illustrated icon set, on the GROOVESTREET palette.
 *
 * The template draws its icons as two filled shapes — a darker one over a
 * lighter one — rather than the flat single-weight glyphs this repo used
 * before. That chunky, two-tone style is most of what makes the template read
 * as illustrated rather than corporate, so the artwork is kept and the
 * surrounding tint carries the brand.
 *
 * Files live in public/icons and are served from the repo: no network request,
 * and next/image gives lazy loading and intrinsic sizing.
 */
export const duckIconNames = [
  "artdir",
  "brand",
  "chart",
  "coin",
  "files",
  "graph",
  "moneyback",
  "pm",
  "realtime",
  "requests",
  "revisions",
  "senior",
  "trello",
  "user",
  "bolt",
  "extra",
] as const;

export type DuckIconName = (typeof duckIconNames)[number];

const paths: Record<DuckIconName, string> = {
  artdir: "/icons/ic-artdir.svg",
  brand: "/icons/ic-brand.svg",
  chart: "/icons/ic-chart.svg",
  coin: "/icons/ic-coin.svg",
  files: "/icons/ic-files.svg",
  graph: "/icons/ic-graph.svg",
  moneyback: "/icons/ic-moneyback.svg",
  pm: "/icons/ic-pm.svg",
  realtime: "/icons/ic-realtime.svg",
  requests: "/icons/ic-requests.svg",
  revisions: "/icons/ic-revisions.svg",
  senior: "/icons/ic-senior.svg",
  trello: "/icons/ic-trello.svg",
  user: "/icons/ic-user.svg",
  bolt: "/icons/pl-bolt.svg",
  extra: "/icons/pl-extra.svg",
};

const sizes = {
  sm: "size-9 rounded-lg p-1.5",
  md: "size-11 rounded-xl p-2.5",
  lg: "size-14 rounded-xl p-3",
} as const;

const tones = {
  brand: "bg-brand-tint",
  accent: "bg-accent-tint",
  paper: "bg-paper",
  tan: "bg-tan",
} as const;

/**
 * A duck.design illustration inside a soft-cornered brand-tinted tile — the
 * chip the template uses for its service, feature and stat icons. Decorative
 * by default (`alt=""`); pass `label` when the icon is the only thing
 * conveying meaning.
 */
export function DuckIcon({
  name,
  size = "md",
  tone = "brand",
  label,
  className,
}: {
  name: DuckIconName;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  /** Accessible name. Omit for decorative icons sitting next to real text. */
  label?: string;
  className?: string;
}) {
  return (
    <span className={cn("flex shrink-0 items-center justify-center", sizes[size], tones[tone], className)}>
      <Image
        src={paths[name]}
        alt={label ?? ""}
        aria-hidden={label ? undefined : true}
        width={32}
        height={32}
        className="h-full w-full"
        unoptimized
      />
    </span>
  );
}