import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RANKED, WEIGHTS, LINK_TYPE_LABEL, money } from "@/data/providers";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Best Backlink Services",
  description: "Ranked list of backlink and link building services with price, authority, turnaround, guarantees, pros and cons.",
  alternates: { canonical: "/best-backlink-services" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        label="Best"
        title="Best Backlink Services"
        intro="Providers ranked by value score. Each listing shows price, authority, traffic, turnaround, guarantee, pros and cons, and who it is best for."
      />
      <section className="py-12">
        <div className="wrap space-y-6">
          {RANKED.map((p, i) => (
            <article key={p.slug} className="rounded-[2rem] border border-ink/10 bg-white p-6 card-shadow sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-bold text-white">{i + 1}</span>
                {p.badge && <span className="rounded-full bg-lime px-3 py-1 text-sm font-bold">{p.badge}</span>}
                <span className="ml-auto font-mono text-sm text-muted">Score {p.score}</span>
              </div>
              <h2 className="font-display mt-4 text-4xl">{p.name}</h2>
              <p className="mt-2 text-lg text-muted">{p.tagline}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/10 py-6 sm:grid-cols-5">
                <div><dt className="text-sm text-muted">Price</dt><dd className="text-xl font-bold">from {money(p.startingPrice)}</dd></div>
                <div><dt className="text-sm text-muted">DR</dt><dd className="text-xl font-bold">{p.drMin}–{p.drMax}</dd></div>
                <div><dt className="text-sm text-muted">Traffic</dt><dd className="text-xl font-bold">{p.monthlyTraffic.toLocaleString("en-US")}+</dd></div>
                <div><dt className="text-sm text-muted">Turnaround</dt><dd className="text-xl font-bold">{p.turnaroundDays[0]}–{p.turnaroundDays[1]} d</dd></div>
                <div><dt className="text-sm text-muted">Replacement</dt><dd className="text-xl font-bold">{p.replacement ? "Yes" : "No"}</dd></div>
              </dl>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold">Pros</h3>
                  <ul className="mt-2 space-y-1 text-muted">{p.pros.map((x) => <li key={x}>+ {x}</li>)}</ul>
                </div>
                <div>
                  <h3 className="font-semibold">Cons</h3>
                  <ul className="mt-2 space-y-1 text-muted">{p.cons.map((x) => <li key={x}>− {x}</li>)}</ul>
                </div>
              </div>
              <p className="mt-6 text-muted">
                <span className="font-semibold text-ink">Best for:</span> {p.bestFor}. Link types:{" "}
                {p.linkTypes.map((t) => LINK_TYPE_LABEL[t]).join(", ")}.
              </p>
              <Link
                href={`/go/${p.slug}`}
                target="_blank"
                rel="sponsored noopener"
                className="mt-6 inline-flex h-14 items-center rounded-full bg-lime px-8 text-lg font-semibold"
              >
                Check current price →
              </Link>
            </article>
          ))}
          <p className="text-sm text-muted">Sample data. Providers and numbers are placeholders until verified.</p>
        </div>
      </section>

      <section id="methodology" className="bg-ink py-16 text-white">
        <div className="wrap">
          <h2 className="font-display text-4xl sm:text-5xl">Methodology</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Every provider receives a value score from 0 to 100 using the weights below. {SITE.disclosure}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {WEIGHTS.map((w) => (
              <li key={w.key} className="flex items-center justify-between rounded-2xl border border-line bg-ink-2 px-5 py-4 text-lg">
                <span>{w.label}</span>
                <span className="font-mono text-lime">{w.weight}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
