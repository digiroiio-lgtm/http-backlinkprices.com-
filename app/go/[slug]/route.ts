import { NextResponse } from "next/server";
import { PROVIDERS } from "@/data/providers";

// Outbound affiliate redirect. Central place to add click tracking later.
export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROVIDERS.find((x) => x.slug === slug);
  const target = p?.affiliateUrl && /^https?:\/\//.test(p.affiliateUrl) ? p.affiliateUrl : new URL("/compare", req.url).toString();
  const res = NextResponse.redirect(target, 302);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}
