import Link from "next/link";
import { PROVIDERS, money } from "@/data/providers";
import { estimate } from "@/data/price-model";
import { SITE } from "@/data/site";

export function PriceIndexSummary() {
  const avg = estimate({ type: "guest-post", dr: 50, traffic: 5000, niche: "general", quantity: 1 }).mid;
  return (
    <section className="bg-ink pb-16 text-white">
      <div className="wrap">
        <div className="rounded-[2rem] border border-line bg-ink-2 p-6 sm:p-8">
          <p className="font-display text-7xl text-lime sm:text-8xl">
            {money(avg)}
            <span className="ml-3 text-2xl font-semibold text-white" style={{ letterSpacing: 0 }}>
              avg. per link
            </span>
          </p>
          <p className="mt-6 text-xl leading-9 text-white/70">
            Estimated market price for a DR50, 5K+ traffic, general-niche guest post. Part of the Backlink Price Index.
          </p>
          <div className="mt-8 flex items-start gap-4 border-t border-line pt-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-green/30 text-lime">✓</span>
            <div>
              <p className="text-2xl font-bold leading-snug">Every price is shown as a range, with the assumptions.</p>
              <p className="mt-3 font-mono text-white/60">{PROVIDERS.length} providers compared · {SITE.updated}</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-lg leading-8 text-white/60">
          <span className="font-semibold text-lime">Fair comparison:</span> every figure is the total cost to get one
          link live, including content and fees where stated. Estimates are modeled ranges, not quotes. {SITE.disclosure}
        </p>
        <Link
          href="/best-backlink-services#methodology"
          className="mt-8 flex h-16 items-center justify-center rounded-full bg-white text-lg font-semibold text-ink"
        >
          Read the methodology
        </Link>
      </div>
    </section>
  );
}
