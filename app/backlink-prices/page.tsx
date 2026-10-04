import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PricesByDR } from "@/components/PricesByDR";
import { PriceCalculator } from "@/components/PriceCalculator";
import { LINK_TYPE_LABEL, money, type LinkType } from "@/data/providers";
import { estimate } from "@/data/price-model";

export const metadata: Metadata = {
  title: "Backlink Prices 2026: How Much Should You Pay?",
  description: "What backlinks cost in 2026 by DR, link type and niche, with a calculator and provider comparison.",
  alternates: { canonical: "/backlink-prices" },
};

const FAQ = [
  {
    q: "How much do backlinks cost?",
    a: "It depends mostly on authority, link type and niche. A general-niche guest post can range from roughly $50 at DR 20 to several hundred dollars at DR 70. Use the calculator for an estimate.",
  },
  {
    q: "Why do prices vary so much between providers?",
    a: "Providers differ in site quality, content included, fees, guarantees and how much they mark up publisher prices. Compare the total cost to get one link live.",
  },
  {
    q: "Are these prices exact?",
    a: "No. They are modeled ranges for comparison, not quotes. Always confirm the exact price on the provider's page.",
  },
];

export default function Page() {
  const types = Object.keys(LINK_TYPE_LABEL) as LinkType[];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        label="Prices"
        title="Backlink Prices 2026: How Much Should You Pay?"
        intro="Estimated market prices by authority, link type and niche, so you know the going rate before you buy."
      />
      <PricesByDR />
      <section className="py-16">
        <div className="wrap">
          <h2 className="font-display text-4xl sm:text-5xl">Price by link type</h2>
          <div className="mt-8 overflow-x-auto rounded-[2rem] border border-ink/10 bg-white card-shadow">
            <table className="w-full min-w-[480px] text-left">
              <thead>
                <tr className="mono-label border-b border-ink/10 text-xs text-muted">
                  <th className="px-5 py-4 font-normal">Link type</th>
                  <th className="px-5 py-4 font-normal">DR 50, general, 5K+</th>
                </tr>
              </thead>
              <tbody>
                {types.map((t) => {
                  const e = estimate({ type: t, dr: 50, traffic: 5000, niche: "general", quantity: 1 });
                  return (
                    <tr key={t} className="border-b border-ink/5 last:border-0">
                      <td className="px-5 py-4 text-lg font-semibold">{LINK_TYPE_LABEL[t]}</td>
                      <td className="px-5 py-4 text-lg">{money(e.low)}–{money(e.high)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <PriceCalculator />
      <section className="bg-paper py-16">
        <div className="wrap">
          <h2 className="font-display text-4xl sm:text-5xl">FAQ</h2>
          <div className="mt-8 space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-3xl border border-ink/10 bg-white p-6">
                <summary className="cursor-pointer text-xl font-semibold">{f.q}</summary>
                <p className="mt-4 text-lg leading-8 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
