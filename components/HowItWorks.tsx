import { RANKED, money } from "@/data/providers";

function Window({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-ink shadow-[0_30px_60px_-25px_rgba(11,13,20,0.6)]">
      <div className="flex items-center gap-3 border-b border-line bg-ink-2 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="ml-2 truncate rounded-xl bg-ink px-4 py-2 font-mono text-sm text-white/60">{url}</span>
      </div>
      <div className="bg-gradient-to-b from-[#1b2410] to-ink p-5 text-white">{children}</div>
    </div>
  );
}

function Step({ n, label, title, text }: { n: number; label: string; title: string; text: string }) {
  return (
    <div className="mt-8">
      <p className="text-lg text-muted">
        <span className="mr-4">{n}</span>
        {label}
      </p>
      <h3 className="font-display mt-4 text-3xl sm:text-4xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
        {title}
      </h3>
      <p className="mt-4 text-xl leading-9 text-muted">{text}</p>
    </div>
  );
}

export function HowItWorks() {
  const rows = RANKED.slice(0, 4);
  return (
    <section className="py-16">
      <div className="wrap">
        <h2 className="font-display text-5xl sm:text-6xl">
          Search. Compare.
          <br />
          Choose.
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
          Estimate the price, filter providers and click through to the one that fits, all in one place.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-2">
          <div className="min-w-0">
            <Window url="backlinkprices.com/calculator">
              <div className="flex items-center gap-3">
                <div className="flex-1 rounded-2xl border border-line bg-ink-2/80 px-4 py-3 font-mono text-lg">
                  guest post · DR50+
                </div>
                <span className="rounded-xl bg-lime px-4 py-3 font-semibold text-ink">Estimate</span>
              </div>
              <div className="mt-5 rounded-2xl border border-line bg-ink-2/60 p-5">
                <p className="mono-label text-white/50">Price by DR</p>
                <div className="mt-6 flex h-36 items-end justify-between gap-3">
                  {[60, 90, 130, 190, 280, 420].map((v, i) => (
                    <div key={v} className="flex flex-1 flex-col items-center gap-2">
                      <span className="text-sm text-white/70">${v}</span>
                      <div
                        className="w-full rounded-md bg-gradient-to-b from-lime to-lime/30"
                        style={{ height: `${(v / 420) * 100}px` }}
                      />
                      <span className="text-xs text-white/50">DR{20 + i * 10}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Window>
            <Step n={1} label="Search" title="Estimate the market price" text="Pick link type, authority, traffic and niche. Get a price range before you talk to anyone." />
          </div>

          <div className="min-w-0">
            <Window url="backlinkprices.com/compare">
              <div className="flex items-center gap-3">
                <div className="flex-1 rounded-2xl border border-line bg-ink-2/80 px-4 py-3 font-mono text-lg">finance</div>
                <span className="rounded-xl border border-lime/40 px-4 py-3 font-mono text-lime">{rows.length} matched</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-lg">
                <span className="rounded-full border border-lime/50 bg-lime/10 px-4 py-2 text-lime">✓ Finance</span>
                <span className="rounded-full border border-lime/50 bg-lime/10 px-4 py-2 text-lime">✓ DR 50+</span>
                <span className="rounded-full border border-line px-4 py-2 text-white/70">EN</span>
              </div>
              <ul className="mt-4 space-y-2">
                {rows.map((p) => (
                  <li key={p.slug} className="flex items-center justify-between rounded-2xl border border-line bg-ink-2/70 px-4 py-3">
                    <span className="truncate font-mono text-base sm:text-lg">
                      {p.name} <span className="text-white/50">DR {p.drMax}</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="font-bold text-lime">{money(p.startingPrice)}</span>
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime text-ink">✓</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-lime px-4 py-4 font-semibold text-ink">
                <span>{rows.length} compared · Best match first</span>
                <span className="font-bold">from {money(Math.min(...rows.map((r) => r.startingPrice)))}</span>
              </div>
            </Window>
            <Step n={3} label="Choose" title="Pick a provider and click through" text="Compare price, authority, turnaround and guarantees, then go straight to the provider." />
          </div>
        </div>
        <div className="md:max-w-md">
          <Step n={2} label="Compare" title="Filter by what matters" text="Narrow by niche, DR, turnaround, replacement guarantee and managed vs self-service." />
        </div>
      </div>
    </section>
  );
}
