import { Highlight } from "./ui/Highlight";
import { DR_LEVELS, estimate } from "@/data/price-model";
import { money } from "@/data/providers";

export function PricesByDR({ id }: { id?: string }) {
  const rows = DR_LEVELS.map((dr) => ({
    dr,
    ...estimate({ type: "guest-post", dr, traffic: 1000, niche: "general", quantity: 1 }),
  }));
  const first = rows[0].mid;
  const last = rows[rows.length - 1].mid;
  return (
    <section id={id} className="bg-paper py-16">
      <div className="wrap">
        <h2 className="font-display text-5xl sm:text-6xl">
          Don&apos;t guess.
          <br />
          Check the price <Highlight>by DR.</Highlight>
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
          Authority is the biggest driver of price. Here is what a general-niche guest post typically costs at each DR
          level.
        </p>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-ink text-white">
          <div className="p-6 sm:p-8">
            <p className="mono-label flex items-center gap-2 text-lime">
              <span className="h-2.5 w-2.5 rounded-full bg-lime" /> Price by DR · Sample
            </p>
            <p className="font-display mt-4 text-5xl">
              DR 20–70 <span className="text-xl font-semibold text-white/60" style={{ letterSpacing: 0 }}>guest post</span>
            </p>
          </div>
          <ul>
            {rows.map((r) => (
              <li key={r.dr} className="flex items-center justify-between border-t border-line px-6 py-6 sm:px-8">
                <div>
                  <p className="font-mono text-2xl">DR {r.dr}</p>
                  <p className="mt-1 text-white/50">Guest post · general</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl text-lime" style={{ letterSpacing: "-0.02em" }}>
                    {money(r.low)}–{money(r.high)}
                  </p>
                  <p className="mt-1 text-white/60">≈ {money(r.mid)} midpoint</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-line bg-green/20 px-6 py-6 sm:px-8">
            <p className="text-lg text-white/70">
              Going from DR 20 to DR 70 multiplies the price by about{" "}
              <span className="font-bold text-white">{(last / first).toFixed(1)}×</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
