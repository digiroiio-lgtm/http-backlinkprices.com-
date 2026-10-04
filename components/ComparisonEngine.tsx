"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "./ui/Card";
import { LINK_TYPE_LABEL, NICHE_LABEL, RANKED, money, type LinkType, type Niche } from "@/data/providers";

type Init = { type?: string; dr?: string; niche?: string };

export function ComparisonEngine({ initial = {} }: { initial?: Init }) {
  const [type, setType] = useState<string>(initial.type && initial.type in LINK_TYPE_LABEL ? initial.type : "");
  const [niche, setNiche] = useState<string>(initial.niche && initial.niche in NICHE_LABEL ? initial.niche : "");
  const [minDr, setMinDr] = useState<number>(Number(initial.dr) > 0 ? Number(initial.dr) : 0);
  const [model, setModel] = useState<string>("");
  const [replacement, setReplacement] = useState(false);
  const [sort, setSort] = useState<"score" | "price" | "dr" | "speed">("score");

  const list = useMemo(() => {
    const f = RANKED.filter(
      (p) =>
        (!type || p.linkTypes.includes(type as LinkType)) &&
        (!niche || p.niches.includes(niche as Niche)) &&
        p.drMax >= minDr &&
        (!model || p.model === model) &&
        (!replacement || p.replacement),
    );
    const by = {
      score: (a: (typeof f)[0], b: (typeof f)[0]) => b.score - a.score,
      price: (a: (typeof f)[0], b: (typeof f)[0]) => a.startingPrice - b.startingPrice,
      dr: (a: (typeof f)[0], b: (typeof f)[0]) => b.drMax - a.drMax,
      speed: (a: (typeof f)[0], b: (typeof f)[0]) => a.turnaroundDays[0] - b.turnaroundDays[0],
    }[sort];
    return [...f].sort(by);
  }, [type, niche, minDr, model, replacement, sort]);

  const sel = "h-12 w-full rounded-2xl border border-ink/15 bg-white px-4 text-lg";

  return (
    <div>
      <Card className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <label className="block text-sm text-muted">
          Link type
          <select className={sel} value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All</option>
            {Object.entries(LINK_TYPE_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label className="block text-sm text-muted">
          Niche
          <select className={sel} value={niche} onChange={(e) => setNiche(e.target.value)}>
            <option value="">All</option>
            {Object.entries(NICHE_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label className="block text-sm text-muted">
          Minimum DR
          <select className={sel} value={minDr} onChange={(e) => setMinDr(Number(e.target.value))}>
            {[0, 20, 30, 40, 50, 60, 70].map((d) => <option key={d} value={d}>{d ? `DR ${d}+` : "Any"}</option>)}
          </select>
        </label>
        <label className="block text-sm text-muted">
          Service model
          <select className={sel} value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="">Any</option>
            <option value="managed">Managed</option>
            <option value="self-service">Self-service</option>
          </select>
        </label>
        <label className="block text-sm text-muted">
          Sort by
          <select className={sel} value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}>
            <option value="score">Best match</option>
            <option value="price">Lowest price</option>
            <option value="dr">Highest DR</option>
            <option value="speed">Fastest</option>
          </select>
        </label>
        <label className="flex items-end gap-3 pb-3 text-lg">
          <input type="checkbox" className="h-6 w-6 accent-black" checked={replacement} onChange={(e) => setReplacement(e.target.checked)} />
          Replacement guarantee
        </label>
      </Card>

      <p className="mono-label mt-8 text-muted" aria-live="polite">
        {list.length} {list.length === 1 ? "provider" : "providers"} · sample data
      </p>

      <ul className="mt-4 space-y-4">
        {list.map((p, i) => (
          <li key={p.slug} className="rounded-[2rem] border border-ink/10 bg-white p-6 card-shadow">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  {i === 0 && sort === "score" && <span className="rounded-full bg-lime px-3 py-1 text-sm font-bold">Best match</span>}
                  {p.badge && <span className="rounded-full bg-paper px-3 py-1 text-sm font-semibold">{p.badge}</span>}
                </div>
                <h3 className="font-display mt-3 text-3xl" style={{ letterSpacing: "-0.03em" }}>{p.name}</h3>
                <p className="mt-1 text-muted">{p.tagline}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted">Starting from</p>
                <p className="font-display text-4xl">{money(p.startingPrice)}</p>
                <p className="text-sm text-muted">Score {p.score}</p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6 text-sm sm:grid-cols-4">
              <div><dt className="text-muted">DR</dt><dd className="text-lg font-semibold">{p.drMin}–{p.drMax}</dd></div>
              <div><dt className="text-muted">Traffic</dt><dd className="text-lg font-semibold">{p.monthlyTraffic.toLocaleString("en-US")}+</dd></div>
              <div><dt className="text-muted">Turnaround</dt><dd className="text-lg font-semibold">{p.turnaroundDays[0]}–{p.turnaroundDays[1]} d</dd></div>
              <div><dt className="text-muted">Replacement</dt><dd className="text-lg font-semibold">{p.replacement ? "Yes" : "No"}</dd></div>
            </dl>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-muted">Best for: {p.bestFor}</p>
              <Link
                href={`/go/${p.slug}`}
                target="_blank"
                rel="sponsored noopener"
                className="inline-flex h-12 items-center rounded-full bg-lime px-6 text-lg font-semibold"
              >
                Check current price →
              </Link>
            </div>
          </li>
        ))}
        {list.length === 0 && (
          <li className="rounded-[2rem] border border-dashed border-ink/20 p-8 text-center text-muted">
            No providers match these filters. Try relaxing one.
          </li>
        )}
      </ul>
    </div>
  );
}
