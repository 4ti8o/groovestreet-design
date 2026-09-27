import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { industries } from "@/content/industries";
import { posts } from "@/content/posts";

/** Sitemap (design.md §14): every public route, canonical origin. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/work",
    "/process",
    "/pricing",
    "/about",
    "/partners",
    "/resources",
    "/industries",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    ...services.map((s) => `/services/${s.slug}`),
    ...projects.map((p) => `/work/${p.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...posts.map((p) => `/resources/${p.slug}`),
  ];
  const lastModified = new Date("2026-09-27");
  return routes.map((route) => ({
    url: new URL(route || "/", site.url).toString(),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
