import type { MetadataRoute } from "next";
import { INDEXABLE, SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!INDEXABLE) return [];
  return ["", "/backlink-prices", "/best-backlink-services", "/calculator", "/compare"].map((p) => ({
    url: SITE.url + p,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
