"use client";
import { useState } from "react";
import { Highlight } from "./ui/Highlight";
import { Card } from "./ui/Card";
import { MonoLabel } from "./ui/MonoLabel";
import { estimate } from "@/data/price-model";
import { money } from "@/data/providers";

const TIERS = [30, 50, 70] as const;
const CONTENT_FEE = 45; // illustrative
const SERVICE_FEE = 20; // illustrative

export function CostBreakdown() {
  const [dr, setDr] = useState<number>(50);
  const [ownContent, setOwnContent] = useState(false);

  const base = Math.round(
    estimate({ type: "guest-post", dr, traffic: 1000, niche: "general", quantity: 1 }).mid,
  );
  const content = ownContent ? 0 : CONTENT_FEE;
  const total = base + content + SERVICE_FEE;
  const extra = total - base;

  return (
    <section className="bg-paper py-16">
      <div className="wrap">
        <h2 className="font-display text-5xl sm:text-6xl">
          What a backlink <Highlight>really costs.</Highlight>
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
          The listed price is rarely the final price. Content, fees and add-ons change the total, so compare the full
          cost to get one link live.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-3xl font-bold">The headline price</h3>
            <p className="mt-2 text-lg text-muted">What the sales page shows.</p>
            <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-8">
              <span className="text-xl">Listed link price</span>
              <span className="font-display text-5xl">{money(base)}</span>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-8 text-muted">
              <span className="text-lg">Extras not shown</span>
              <span className="text-2xl font-bold">+ ?</span>
            </div>
          </Card>

          <Card dark>
            <h3 className="text-3xl font-bold">The real cost</h3>
            <p className="mt-2 text-lg text-white/60">Link + content + fees.</p>
            <dl className="mt-8 space-y-6 border-t border-line pt-8">
              <div className="flex items-center justify-between">
                <dt className="text-xl">Link</dt>
                <dd className="font-display text-4xl">{money(base)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-xl">Content</dt>
                <dd className="font-display text-4xl">{content ? `+ ${money(content)}` : "$0"}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-xl">Fees &amp; add-ons</dt>
                <dd className="font-display text-4xl text-lime">+ {money(SERVICE_FEE)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-white/20 pt-6">
                <dt className="text-xl">You pay</dt>
                <dd className="font-display text-5xl sm:text-6xl">{money(total)}</dd>
              </div>
            </dl>
          </Card>
        </div>

        <Card dark className="mt-5">
          <p className="text-3xl font-bold">
            Extras add <span className="highlight font-display text-4xl">{money(extra)}</span>
          </p>
          <p className="mt-3 text-lg text-white/60">on top of the listed price ({money(base)}).</p>

          <MonoLabel className="mt-10 text-white/50">Example · illustrative</MonoLabel>
          <div className="mt-4 inline-flex rounded-full border border-line bg-ink-2 p-1.5" role="group" aria-label="Authority level">
            {TIERS.map((t) => (
              <button
                key={t}
                onClick={() => setDr(t)}
                aria-pressed={dr === t}
                className={`h-14 whitespace-nowrap rounded-full px-5 text-lg font-semibold ${dr === t ? "bg-lime text-ink" : "text-white"}`}
              >
                DR {t}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-ink-2 p-1.5" role="group" aria-label="Content">
            <button
              onClick={() => setOwnContent(false)}
              aria-pressed={!ownContent}
              className={`h-14 w-full rounded-2xl text-lg font-semibold ${!ownContent ? "bg-lime text-ink" : "text-white"}`}
            >
              Provider writes the content
            </button>
            <button
              onClick={() => setOwnContent(true)}
              aria-pressed={ownContent}
              className={`mt-1 h-14 w-full rounded-2xl text-lg font-semibold ${ownContent ? "bg-lime text-ink" : "text-white"}`}
            >
              I provide my content{" "}
              <span className="ml-1 rounded-full bg-lime/20 px-2 py-0.5 text-sm text-lime">−{money(CONTENT_FEE)}</span>
            </button>
          </div>
          <p className="mt-6 text-lg text-white/60">
            Illustrative numbers. Check the exact total on the provider&apos;s page before ordering.
          </p>
        </Card>
      </div>
    </section>
  );
}
