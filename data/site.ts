export const SITE = {
  name: "BacklinkPrices",
  url: "https://backlinkprices.com",
  updated: "October 2026",
  disclosure:
    "Some links on this site are affiliate links. If you click through and buy, we may earn a commission at no extra cost to you.",
};

// Site stays noindex until real data is in place. Set SITE_INDEXABLE=true in the
// production environment (Vercel) to allow indexing and expose the sitemap.
export const INDEXABLE = process.env.SITE_INDEXABLE === "true";

export const NAV = [
  { href: "/backlink-prices", label: "Prices" },
  { href: "/best-backlink-services", label: "Best services" },
  { href: "/calculator", label: "Calculator" },
  { href: "/compare", label: "Compare providers" },
];
