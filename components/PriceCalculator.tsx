"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "./ui/Card";
import { Pill } from "./ui/Pill";
import { MonoLabel } from "./ui/MonoLabel";
import { DR_LEVELS, QUANTITIES, TRAFFIC_LEVELS, estimate } from "@/data/price-model";
import { LINK_TYPE_LABEL, NICHE_LABEL, PROVIDERS, money, type LinkType, type Niche } from "@/data/providers";

function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
  render,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
  render: (v: T) => string;
}) {
  return (
    <div>
      <p className="mb-3 text-lg text-white/60">{label}</p>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={String(o)}
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`h-12 rounded-full border px-5 text-lg font-semibold ${
              value === o ? "border-lime bg-lime text-ink" : "border-line bg-ink-2 text-white"
            }`}
          >
            {render(o)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PriceCalculator({ heading = true }: { heading?: boolean }) {
  const [type, setType] = useState<LinkType>("guest-post");
  const [dr, setDr] = useState<number>(50);
  const [traffic, setTraffic] = useState<number>(5000);
  const [niche, setNiche] = useState<Niche>("general");
  const [quantity, setQuantity] = useState<number>(10);

  const { low, high, mid } = useMemo(
    () => estimate({ type, dr, traffic, niche, quantity }),
    [type, dr, traffic, niche, quantity],
  );
  const matches = PROVIDERS.filter((p) => p.linkTypes.includes(type) && p.niches.includes(niche)).slice(0, 3);
  const qs = new URLSearchParams({ type, dr: String(dr), niche }).toString();

  return (
    <section className="py-16">
      <div className="wrap">
        {heading && (
          <>
            <MonoLabel>Backlink price calculator</MonoLabel>
            <h2 className="font-display mt-4 text-5xl sm:text-6xl">How much should you pay?</h2>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
              Pick the link you want. We estimate the market price, then show providers that offer it.
            </p>
          </>
        )}
        <Card dark className="mt-10 space-y-8">
          <Segmented label="Link type" value={type} options={Object.keys(LINK_TYPE_LABEL) as LinkType[]} onChange={setType} render={(v) => LINK_TYPE_LABEL[v]} />
          <Segmented label="Authority" value={dr} options={DR_LEVELS} onChange={setDr} render={(v) => `DR${v}+`} />
          <Segmented label="Traffic" value={traffic} options={TRAFFIC_LEVELS} onChange={setTraffic} render={(v) => `${v >= 1000 ? v / 1000 + "K" : v}+`} />
          <Segmented label="Niche" value={niche} options={Object.keys(NICHE_LABEL) as Niche[]} onChange={setNiche} render={(v) => NICHE_LABEL[v]} />
          <Segmented label="Quantity" value={quantity} options={QUANTITIES} onChange={setQuantity} render={String} />

          <div className="border-t border-line pt-8">
            <p className="text-lg text-white/60">Estimated market price, per link</p>
            <p className="font-display mt-2 text-6xl text-lime sm:text-7xl" aria-live="polite">
              {money(low)}–{money(high)}
            </p>
            <p className="mt-4 text-lg text-white/60">
              About {money(mid * quantity)} for {quantity} {quantity === 1 ? "link" : "links"} at the midpoint. Estimate
              only; final price depends on the provider.
            </p>
          </div>

          <Pill href={`/compare?${qs}`} size="lg" className="w-full !px-4 !text-base sm:!text-lg">
            Compare providers offering this →
          </Pill>

          {matches.length > 0 && (
            <ul className="space-y-2">
              {matches.map((p) => (
                <li key={p.slug} className="flex items-center justify-between rounded-2xl border border-line bg-ink-2 px-4 py-3">
                  <span className="font-semibold">{p.name}</span>
                  <span className="flex items-center gap-4">
                    <span className="text-lime">from {money(p.startingPrice)}</span>
                    <Link href={`/go/${p.slug}`} rel="sponsored noopener" target="_blank" className="rounded-full bg-lime px-4 py-1.5 text-sm font-bold text-ink">
                      Visit
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </section>
  );
}
