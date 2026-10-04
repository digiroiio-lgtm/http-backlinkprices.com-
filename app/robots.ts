import type { MetadataRoute } from "next";
import { INDEXABLE, SITE } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/go/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
