import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * duck.design button system, re-tinted onto the GROOVESTREET palette.
 * Structure from the template (2px border, 100px pill, uppercase, 700, wide
 * tracking, soft ring on hover); colours stay ours — the accent fill takes ink
 * text at 6.6:1, the ink fill takes paper text at 17:1.
 */
const variants = {
  /** duck.design `.btn-primary` — a filled gradient pill. The template runs a
      94deg yellow gradient; ours runs the same 94deg angle through Groovestreet
      orange so the shape of the button is the template's and the hue is ours.
      Ring on hover, never a colour shift. */
  primary:
    "bg-linear-94 from-accent to-accent/55 text-ink hover:shadow-ring-accent",
  /** Ink fill · paper text. Site-wide dark CTA. */
  dark: "bg-ink text-paper hover:shadow-ring-ink",
  /** Brand fill · paper text (8.6:1). */
  brand: "bg-brand text-paper hover:bg-brand-dark",
  /** Hairline outline · ink text. Ring on hover. */
  outline: "border-ink bg-transparent text-ink hover:shadow-ring-soft",
  /** Inline text CTA with underline on hover. */
  ghost: "text-brand underline-offset-4 hover:underline",
  /** For dark sections. Paper fill · ink text. */
  invert: "bg-paper text-ink hover:shadow-ring-light",
} as const;

export type ButtonVariant = keyof typeof variants;

/** duck.design `.btn--sm`: 12px label, tighter padding. */
const sizes = {
  sm: "min-h-[40px] px-5 py-2.5 text-xs tracking-[0.08em]",
  md: "",
} as const;

function isInternal(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

type Common = {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = Common &
  (
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<"a">, "href" | "className">)
    | ({ href?: undefined } & Omit<React.ComponentPropsWithoutRef<"button">, "className">)
  );

/** Strict button shell per design.md §7.1 + the duck.design press. Pass `href` to render a link. */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", fullWidth = false, className } = props;
  const cls = cn("btn-shell btn-shell-press", variants[variant], sizes[size], fullWidth && "w-full", className);

  if (props.href) {
    // Strip the component-only props so they never reach the DOM element
    // (React warns on unknown camelCase attributes like `fullWidth`).
    const {
      href,
      onClick,
      target,
      rel,
      style,
      variant: _variant,
      size: _size,
      fullWidth: _fullWidth,
      className: _className,
      children,
      ...rest
    } = props;
    const external = !isInternal(href);
    if (external) {
      return (
        <a
          href={href}
          onClick={onClick}
          target={target}
          rel={rel ?? "noopener"}
          style={style as CSSProperties}
          className={cls}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} style={style as CSSProperties} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Common &
    Omit<React.ComponentPropsWithoutRef<"button">, "className" | "href">;
  const {
    type = "button",
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    children,
    ...rest
  } = buttonProps;
  return (
    <button type={type} className={cn(cls, "disabled:cursor-not-allowed disabled:opacity-40")} {...rest}>
      {children}
    </button>
  );
}
