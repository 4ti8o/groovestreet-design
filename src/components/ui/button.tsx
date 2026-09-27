import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  /** Ink fill · paper text · brand on hover. Default conversion CTA. */
  primary: "bg-ink text-paper hover:bg-brand",
  /** Accent fill · ink text (6.6:1). Hero contrast CTA. */
  accent: "bg-accent text-ink hover:bg-accent-text hover:text-paper",
  /** Brand fill · paper text. */
  brand: "bg-brand text-paper hover:bg-brand-dark",
  /** Hairline outline. */
  outline: "border border-line bg-transparent text-ink hover:border-ink",
  /** Inline text CTA with underline on hover. */
  ghost: "text-brand underline-offset-4 hover:underline",
  /** For dark sections. Paper fill · ink text · accent on hover. */
  invert: "bg-paper text-ink hover:bg-accent",
} as const;

export type ButtonVariant = keyof typeof variants;

const sizes = {
  sm: "min-h-[40px] px-5 text-sm",
  md: "min-h-[48px] px-6",
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

/** Strict button shell per design.md §7.1. Pass `href` to render a link. */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", fullWidth = false, className } = props;
  const cls = cn("btn-shell", variants[variant], sizes[size], fullWidth && "w-full", className);

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
