export type LinkType = "guest-post" | "niche-edit" | "digital-pr" | "editorial";
export type Niche = "general" | "saas" | "finance" | "casino";

export type Provider = {
  slug: string;
  name: string;
  initials: string;
  tagline: string;
  startingPrice: number; // USD per link
  drMin: number;
  drMax: number;
  monthlyTraffic: number; // typical minimum monthly organic visits
  turnaroundDays: [number, number];
  replacement: boolean;
  model: "managed" | "self-service";
  linkTypes: LinkType[];
  niches: Niche[];
  bestFor: string;
  pros: string[];
  cons: string[];
  badge?: "Best overall" | "Best value" | "Cheapest" | "Best for SaaS";
  /** Replace with the real affiliate URL. `null` keeps the CTA pointing at /compare. */
  affiliateUrl: string | null;
  /** Flip to true only after the numbers have been checked against the provider. */
  verified: boolean;
};

// SAMPLE DATA — placeholder providers and numbers. Replace with verified data before launch.
export const PROVIDERS: Provider[] = [
  {
    slug: "provider-a",
    name: "Provider A",
    initials: "A",
    tagline: "Managed guest posts with replacement guarantee",
    startingPrice: 90,
    drMin: 30,
    drMax: 70,
    monthlyTraffic: 5000,
    turnaroundDays: [7, 14],
    replacement: true,
    model: "managed",
    linkTypes: ["guest-post", "niche-edit"],
    niches: ["general", "saas", "finance"],
    bestFor: "Teams that want a hands-off, reliable process",
    pros: ["Replacement guarantee", "Clear pricing by DR", "Content included"],
    cons: ["Higher entry price", "Fewer casino-niche options"],
    badge: "Best overall",
    affiliateUrl: null,
    verified: false,
  },
  {
    slug: "provider-b",
    name: "Provider B",
    initials: "B",
    tagline: "Self-service marketplace with large inventory",
    startingPrice: 45,
    drMin: 20,
    drMax: 80,
    monthlyTraffic: 1000,
    turnaroundDays: [3, 10],
    replacement: false,
    model: "self-service",
    linkTypes: ["guest-post", "niche-edit", "editorial"],
    niches: ["general", "saas", "finance", "casino"],
    bestFor: "Buyers who want to filter and pick sites themselves",
    pros: ["Wide DR range", "Fast delivery", "Many niches"],
    cons: ["No replacement guarantee", "Quality varies by seller"],
    badge: "Best value",
    affiliateUrl: null,
    verified: false,
  },
  {
    slug: "provider-c",
    name: "Provider C",
    initials: "C",
    tagline: "Budget niche edits and link insertions",
    startingPrice: 35,
    drMin: 20,
    drMax: 55,
    monthlyTraffic: 1000,
    turnaroundDays: [5, 12],
    replacement: false,
    model: "managed",
    linkTypes: ["niche-edit", "guest-post"],
    niches: ["general", "saas"],
    bestFor: "Small budgets and first campaigns",
    pros: ["Lowest starting price", "Simple ordering"],
    cons: ["Lower authority ceiling", "Limited traffic filters"],
    badge: "Cheapest",
    affiliateUrl: null,
    verified: false,
  },
  {
    slug: "provider-d",
    name: "Provider D",
    initials: "D",
    tagline: "SaaS-focused editorial links",
    startingPrice: 150,
    drMin: 50,
    drMax: 85,
    monthlyTraffic: 10000,
    turnaroundDays: [10, 21],
    replacement: true,
    model: "managed",
    linkTypes: ["editorial", "guest-post", "digital-pr"],
    niches: ["saas", "general"],
    bestFor: "SaaS brands that need relevant, high-authority placements",
    pros: ["High authority", "SaaS-relevant sites", "Replacement guarantee"],
    cons: ["Premium pricing", "Slower turnaround"],
    badge: "Best for SaaS",
    affiliateUrl: null,
    verified: false,
  },
  {
    slug: "provider-e",
    name: "Provider E",
    initials: "E",
    tagline: "Digital PR campaigns with earned coverage",
    startingPrice: 400,
    drMin: 60,
    drMax: 90,
    monthlyTraffic: 50000,
    turnaroundDays: [21, 45],
    replacement: false,
    model: "managed",
    linkTypes: ["digital-pr"],
    niches: ["general", "saas", "finance"],
    bestFor: "Brands investing in long-term authority",
    pros: ["Top-tier publications", "Campaign-level strategy"],
    cons: ["Slow", "Not per-link pricing", "Highest cost"],
    affiliateUrl: null,
    verified: false,
  },
];

export const LINK_TYPE_LABEL: Record<LinkType, string> = {
  "guest-post": "Guest post",
  "niche-edit": "Niche edit",
  "digital-pr": "Digital PR",
  editorial: "Editorial",
};

export const NICHE_LABEL: Record<Niche, string> = {
  general: "General",
  saas: "SaaS",
  finance: "Finance",
  casino: "Casino",
};

// Value score weights (shown on the methodology block).
export const WEIGHTS = [
  { key: "price", label: "Price", weight: 35 },
  { key: "authority", label: "Authority", weight: 25 },
  { key: "traffic", label: "Traffic", weight: 15 },
  { key: "turnaround", label: "Turnaround", weight: 15 },
  { key: "replacement", label: "Replacement", weight: 10 },
] as const;

const clamp = (n: number) => Math.max(0, Math.min(100, n));

export function valueScore(p: Provider): number {
  const price = clamp(100 - (p.startingPrice / 500) * 100);
  const authority = clamp(p.drMax);
  const traffic = clamp((Math.log10(p.monthlyTraffic) / 5) * 100);
  const avgDays = (p.turnaroundDays[0] + p.turnaroundDays[1]) / 2;
  const turnaround = clamp(100 - (avgDays / 45) * 100);
  const replacement = p.replacement ? 100 : 0;
  const parts = { price, authority, traffic, turnaround, replacement };
  const total = WEIGHTS.reduce((s, w) => s + parts[w.key] * w.weight, 0) / 100;
  return Math.round(total);
}

export const RANKED = [...PROVIDERS]
  .map((p) => ({ ...p, score: valueScore(p) }))
  .sort((a, b) => b.score - a.score);

export const money = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

export const turnaroundRange = () => {
  const min = Math.min(...PROVIDERS.map((p) => p.turnaroundDays[0]));
  const max = Math.max(...PROVIDERS.map((p) => p.turnaroundDays[1]));
  return [min, max] as const;
};
