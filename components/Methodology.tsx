import Link from "next/link";
import { WEIGHTS } from "@/data/providers";
import { SITE } from "@/data/site";

export function Methodology() {
  return (
    <section className="py-16">
      <div className="wrap text-center">
        <p className="text-lg text-muted">How we rate providers</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {WEIGHTS.map((w) => (
            <span
              key={w.key}
              className="rounded-full border border-ink/10 bg-paper px-5 py-3 text-xl font-bold text-ink/60"
            >
              {w.label} <span className="font-mono text-base font-normal">{w.weight}%</span>
            </span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-muted">
          Each provider gets a value score from these weighted criteria. {SITE.disclosure}{" "}
          <Link href="/best-backlink-services#methodology" className="font-semibold text-ink underline">
            Read the methodology
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
