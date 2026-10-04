import type { LinkType, Niche } from "./providers";

export const DR_LEVELS = [20, 30, 40, 50, 60, 70] as const;
export const TRAFFIC_LEVELS = [1000, 5000, 10000, 50000] as const;
export const QUANTITIES = [1, 5, 10, 25, 50] as const;

// SAMPLE MODEL — illustrative market estimates (USD per link). Replace with researched data.
const BASE_BY_DR: Record<number, number> = {
  20: 60,
  30: 90,
  40: 130,
  50: 190,
  60: 280,
  70: 420,
};
const TYPE_MULT: Record<LinkType, number> = {
  "guest-post": 1,
  "niche-edit": 0.85,
  "digital-pr": 4.5,
  editorial: 2.2,
};
const TRAFFIC_MULT: Record<number, number> = {
  1000: 1,
  5000: 1.15,
  10000: 1.35,
  50000: 1.8,
};
const NICHE_MULT: Record<Niche, number> = {
  general: 1,
  saas: 1.25,
  finance: 1.6,
  casino: 2,
};
const QTY_DISCOUNT: Record<number, number> = {
  1: 1,
  5: 0.95,
  10: 0.92,
  25: 0.88,
  50: 0.85,
};

export type PriceInput = {
  type: LinkType;
  dr: number;
  traffic: number;
  niche: Niche;
  quantity: number;
};

/** Estimated market price range per link (USD). */
export function estimate({ type, dr, traffic, niche, quantity }: PriceInput) {
  const mid =
    BASE_BY_DR[dr] *
    TYPE_MULT[type] *
    TRAFFIC_MULT[traffic] *
    NICHE_MULT[niche] *
    QTY_DISCOUNT[quantity];
  return { low: mid * 0.8, mid, high: mid * 1.3 };
}
