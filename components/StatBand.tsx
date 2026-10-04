import Link from "next/link";
import { PROVIDERS, turnaroundRange } from "@/data/providers";
import { SITE } from "@/data/site";

export function StatBand() {
  const [min, max] = turnaroundRange();
  const rows = [
    { big: String(PROVIDERS.length), title: "providers compared", note: "Side by side, same criteria" },
    { big: `${min}–${max}`, title: "days to publication", note: "Range across compared providers" },
    { big: SITE.updated, title: "last price review", note: "Prices are reviewed regularly" },
  ];
  return (
    <section className="bg-paper py-16">
      <div className="wrap">
        {rows.map((r, i) => (
          <div key={i} className="border-b border-ink/15 py-10 first:pt-0">
            <p className="font-display text-6xl sm:text-7xl">{r.big}</p>
            <p className="mt-4 text-3xl font-medium">{r.title}</p>
            <p className="mt-6 text-xl text-muted">{r.note}</p>
          </div>
        ))}
        <div className="pt-10">
          <p className="text-3xl font-medium">Start with the tool you need</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              ["Price calculator", "/calculator"],
              ["Compare providers", "/compare"],
              ["Best services", "/best-backlink-services"],
            ].map(([l, h]) => (
              <Link
                key={h}
                href={h}
                className="rounded-full border-b-4 border-lime bg-white px-5 py-2 text-lg font-semibold"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
