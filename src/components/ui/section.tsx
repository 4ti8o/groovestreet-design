import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type Tone = "paper" | "surface" | "ink" | "brand";

/**
 * Tone → classes. `surface` also flips --card-fill to paper, so the white
 * cards inside it stay legible (white-on-white would be invisible).
 * design.md §5: never stack two sections on the same background without a
 * tone shift — alternate paper/surface for light bands, punctuate with ink.
 */
const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink [--card-fill:var(--color-paper)]",
  ink: "bg-ink text-paper",
  brand: "bg-brand text-paper",
};

/** Vertical section rhythm (design.md §5): 64px → 80px → 96px. */
export function Section({
  id,
  tone = "paper",
  className,
  children,
  ariaLabel,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("py-16 md:py-20 lg:py-24", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Uppercase mono micro-label with accent marker (design.md §4.1). */
export function Eyebrow({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-2",
        dark ? "text-accent" : "text-accent-text",
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block size-2 bg-accent" />
      {children}
    </p>
  );
}

/** Standard h2 block: eyebrow + title + optional lede. Every page uses one per section. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[62ch]", align === "center" && "mx-auto text-center", className)}>
      <Eyebrow dark={dark} className={align === "center" ? "justify-center" : undefined}>
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-4 text-h2 font-bold">{title}</h2>
      {lede ? (
        <p className={cn("mt-5 text-lg", dark ? "text-muted-invert" : "text-muted")}>{lede}</p>
      ) : null}
    </div>
  );
}
