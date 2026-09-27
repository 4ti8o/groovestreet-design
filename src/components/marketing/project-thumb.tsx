import type { Project } from "@/content/projects";
import { suppressSubtree } from "@/lib/hydration";

const palettes: Record<Project["palette"], { bg: string; fg: string; hi: string }> = {
  green: { bg: "var(--color-brand)", fg: "var(--color-paper)", hi: "var(--color-accent)" },
  orange: { bg: "var(--color-accent)", fg: "var(--color-ink)", hi: "var(--color-brand)" },
  sand: { bg: "var(--color-accent-tint)", fg: "var(--color-ink)", hi: "var(--color-accent-text)" },
  ink: { bg: "var(--color-ink)", fg: "var(--color-paper)", hi: "var(--color-accent)" },
};

/**
 * Concept artwork for case studies (§9): a stylized layout drawn from the
 * project's accent palette, so cards stay on-brand before real screenshots land.
 * Colours are the design tokens (globals.css §3.1) referenced through var(), so
 * the strict-palette lint rule stays satisfied and the art re-tints with the
 * brand automatically.
 */
export function ProjectThumb({ project, className }: { project: Project; className?: string }) {
  const palette = palettes[project.palette];
  const initial = project.client.charAt(0).toUpperCase();
  return (
    <svg
      suppressHydrationWarning
      viewBox="0 0 800 600"
      role="img"
      aria-label={`Concept artwork for ${project.client}: a stylized website layout`}
      className={className}
    >
      {suppressSubtree(
        <>
          <rect width="800" height="600" fill={palette.bg} />
          <circle cx="682" cy="96" r="120" fill={palette.hi} opacity="0.85" />
          <circle
            cx="96"
            cy="512"
            r="150"
            fill="none"
            stroke={palette.fg}
            strokeWidth="2"
            opacity="0.25"
          />
          <text
            x="700"
            y="540"
            textAnchor="middle"
            fontSize="180"
            fontWeight="700"
            fill={palette.fg}
            opacity="0.18"
            fontFamily="sans-serif"
          >
            {initial}
          </text>
          <g>
            <rect x="150" y="90" width="500" height="420" rx="16" fill="var(--color-surface)" />
            <rect x="150" y="90" width="500" height="56" rx="16" fill={palette.bg} opacity="0.08" />
            <circle cx="182" cy="118" r="7" fill={palette.hi} />
            <circle cx="204" cy="118" r="7" fill={palette.bg} opacity="0.35" />
            <circle cx="226" cy="118" r="7" fill={palette.bg} opacity="0.35" />
            <rect x="182" y="176" width="260" height="26" rx="6" fill={palette.bg} />
            <rect x="182" y="212" width="180" height="26" rx="6" fill={palette.hi} />
            <rect x="182" y="262" width="300" height="12" rx="6" fill={palette.bg} opacity="0.35" />
            <rect x="182" y="284" width="240" height="12" rx="6" fill={palette.bg} opacity="0.35" />
            <rect x="182" y="326" width="150" height="44" rx="22" fill={palette.hi} />
            <rect
              x="348"
              y="326"
              width="150"
              height="44"
              rx="22"
              fill="none"
              stroke={palette.bg}
              strokeWidth="3"
            />
            <rect
              x="510"
              y="176"
              width="108"
              height="238"
              rx="10"
              fill={palette.bg}
              opacity="0.12"
            />
            <rect x="182" y="410" width="436" height="2" fill={palette.bg} opacity="0.15" />
            <rect x="182" y="428" width="120" height="12" rx="6" fill={palette.bg} opacity="0.5" />
            <rect x="318" y="428" width="120" height="12" rx="6" fill={palette.bg} opacity="0.5" />
            <rect x="454" y="428" width="120" height="12" rx="6" fill={palette.bg} opacity="0.5" />
          </g>
        </>,
      )}
    </svg>
  );
}
