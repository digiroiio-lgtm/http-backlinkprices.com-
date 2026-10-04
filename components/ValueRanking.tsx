import { RANKED } from "@/data/providers";
import Link from "next/link";

export function ValueRanking() {
  const top = RANKED[0].score;
  return (
    <section className="bg-ink py-16 text-white">
      <div className="wrap">
        <span className="inline-block rounded-full border border-line px-5 py-3 text-lg text-white/70">
          Value score ranking
        </span>
        <h2 className="font-display mt-8 text-5xl sm:text-6xl">
          Ranked by value.
          <br />
          <span className="text-lime">Not by hype.</span>
        </h2>

        <div className="mt-10 rounded-[2rem] border border-line bg-ink-2 p-6 sm:p-8">
          <p className="mono-label text-white/50">Sample ranking</p>
          <p className="mt-4 text-3xl font-semibold leading-snug">
            <span className="text-lime">{RANKED.length} providers</span> scored on the same criteria.
          </p>
          <ol className="mt-8 space-y-6">
            {RANKED.map((p, i) => (
              <li key={p.slug} className="flex items-center gap-4">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border text-xl font-bold ${
                    i === 0 ? "border-lime bg-lime text-ink" : "border-line text-white/70"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-xl font-bold text-ink">
                  {p.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <Link href={`/go/${p.slug}`} className="truncate text-2xl font-semibold" rel="sponsored noopener" target="_blank">
                      {p.name}
                    </Link>
                    <span className={`text-2xl font-bold ${i === 0 ? "text-lime" : "text-white/60"}`}>{p.score}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-line">
                    <div
                      className={`h-2 rounded-full ${i === 0 ? "bg-lime" : "bg-white/40"}`}
                      style={{ width: `${(p.score / top) * 100}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-white/50">Sample data. Scores use the published weights on the methodology page.</p>
        </div>
      </div>
    </section>
  );
}
