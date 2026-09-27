import { cloneElement, Fragment, isValidElement, type ReactNode } from "react";

type SuppressibleProps = { children?: ReactNode; suppressHydrationWarning?: boolean };

/**
 * Clone one element, keeping its own key or a stable index-based one. Keys
 * matter because a rebuilt array is a list to React, and a keyless list
 * triggers "Each child in a list should have a unique key prop".
 */
function suppressElement(node: ReactNode, index: number): ReactNode {
  if (!isValidElement<SuppressibleProps>(node)) return node;
  const key = node.key ?? `hv-${index}`;
  const children = suppressSubtree(node.props.children);
  // Fragments only accept key/ref/children, so recurse without the prop.
  if (node.type === Fragment) return cloneElement(node, { key }, children);
  return cloneElement(node, { key, suppressHydrationWarning: true }, children);
}

/**
 * Extensions like Dark Reader inject `data-*` and `style` attributes into every
 * SVG node while hydrating, which React reports as console mismatches. Mark a
 * whole element subtree as ignorable so extension markup never surfaces as
 * errors; attributes we render ourselves are unaffected.
 */
export function suppressSubtree(node: ReactNode): ReactNode {
  if (Array.isArray(node)) return node.map((child, index) => suppressElement(child, index));
  return suppressElement(node, 0);
}
