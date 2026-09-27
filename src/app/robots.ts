import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** robots.ts (design.md §15): index everything, point at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
