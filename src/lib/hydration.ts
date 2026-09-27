import { cloneElement, isValidElement, type ReactNode } from "react";

type SuppressibleProps = { children?: ReactNode; suppressHydrationWarning?: boolean };

/**
 * Extensions like Dark Reader inject `data-*` and `style` attributes into every
 * SVG node while hydrating, which React reports as console mismatches. Mark a
 * whole element subtree as ignorable so extension markup never surfaces as
 * errors; attributes we render ourselves are unaffected.
 */
export function suppressSubtree(node: ReactNode): ReactNode {
  if (Array.isArray(node)) return node.map(suppressSubtree);
  if (isValidElement<SuppressibleProps>(node)) {
    const child = node.props.children;
    return child === undefined
      ? cloneElement(node, { suppressHydrationWarning: true })
      : cloneElement(node, { suppressHydrationWarning: true }, suppressSubtree(child));
  }
  return node;
}
