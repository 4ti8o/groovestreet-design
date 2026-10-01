import Image from "next/image";
import { cn } from "@/lib/utils";
import { suppressSubtree } from "@/lib/hydration";
import type { TeamMember } from "@/content/team";

/**
 * Illustrated portrait placeholder for a team member.
 *
 * These are deliberately **illustrations, not photographs**. We have no real
 * photos of the team yet, and dropping in stock photos of strangers would put
 * a face to a name that does not belong to them (design.md §1.5, §9, §15).
 * A drawn silhouette in the brand palette is honest about being a placeholder
 * and still looks designed.
 *
 * To swap in a real photo, set `member.image` to a path in `public/images/team`
 * and this component renders it instead. The `tone` then only tints the frame.
 */
const tones: Record<TeamMember["tone"], { bg: string; figure: string; chip: string; onChip: string }> = {
  brand: {
    bg: "var(--color-brand-tint)",
    figure: "var(--color-brand)",
    chip: "var(--color-brand)",
    onChip: "var(--color-paper)",
  },
  accent: {
    bg: "var(--color-accent-tint)",
    figure: "var(--color-accent-text)",
    chip: "var(--color-accent)",
    onChip: "var(--color-ink)",
  },
  tan: {
    bg: "var(--color-tan)",
    figure: "var(--color-ink-3)",
    chip: "var(--color-ink)",
    onChip: "var(--color-paper)",
  },
};

/** First letters of the first and last real words, ignoring bracket placeholders. */
export function memberInitials(name: string): string {
  // An unfilled seat is written as "[ Role name ]". Initials for that are
  // meaningless, so fall back to a person glyph instead (see below).
  if (name.includes("[")) return "";
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function TeamPortrait({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  const tone = tones[member.tone];
  const initials = memberInitials(member.name);
  const image = (member as { image?: string }).image;

  if (image) {
    // next/image handles a local /public path fine as long as it is given
    // intrinsic dimensions — 4:5 to match the illustrated frame's aspect.
    return (
      <Image
        src={image}
        alt={`${member.name}, ${member.role}`}
        width={400}
        height={500}
        className={cn("w-full object-cover", className)}
        unoptimized
      />
    );
  }

  return (
    <svg
      suppressHydrationWarning
      viewBox="0 0 400 460"
      role="img"
      aria-label={`Placeholder portrait for ${member.name}, ${member.role}`}
      className={cn("w-full", className)}
    >
      {suppressSubtree(
        <>
          <rect width="400" height="460" fill={tone.bg} />
          {/* A soft warm corner, the duck.design card treatment. */}
          <circle cx="356" cy="52" r="96" fill={tone.figure} opacity="0.12" />
          <circle cx="44" cy="416" r="78" fill={tone.figure} opacity="0.08" />

          {/* Bust silhouette: head, shoulders, torso. */}
          <g fill={tone.figure}>
            <circle cx="200" cy="168" r="68" />
            <ellipse cx="200" cy="300" rx="152" ry="96" />
            <rect x="48" y="300" width="304" height="160" />
          </g>

          {/* Initial chip, bottom-left. Empty for an unfilled placeholder seat,
              where the silhouette alone carries the frame. */}
          {initials ? (
            <>
              <circle cx="70" cy="392" r="40" fill={tone.chip} />
              <text
                x="70"
                y="392"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="var(--font-sentient), Georgia, serif"
                fontSize="34"
                fontWeight="500"
                fill={tone.onChip}
              >
                {initials}
              </text>
            </>
          ) : null}
        </>,
      )}
    </svg>
  );
}