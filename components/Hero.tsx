import { Highlight } from "./ui/Highlight";
import { LINK_TYPE_LABEL } from "@/data/providers";
import { ProviderTablePreview } from "./ProviderTablePreview";

export function Hero() {
  return (
    <section className="hero-bg grid-bg pb-16 pt-10 sm:pt-16">
      <div className="wrap">
        <h1 className="font-display text-[3.4rem] sm:text-7xl md:text-8xl">
          Compare
          <br />
          <Highlight>backlink prices.</Highlight>
          <br />
          Pick the best provider.
          <br />
          <span className="text-muted">One transparent comparison.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
          An independent comparison of{" "}
          <span className="border-b-4 border-lime font-semibold text-ink">backlink and link building providers</span>.
          See price, authority, turnaround and guarantees side by side, then click through to the one that fits.
        </p>

        <form action="/compare" className="mt-10 flex max-w-2xl items-center gap-2 rounded-full border border-ink/15 bg-white/70 p-2 pl-6">
          <label htmlFor="type" className="sr-only">
            Link type
          </label>
          <select
            id="type"
            name="type"
            defaultValue=""
            className="min-w-0 flex-1 bg-transparent text-lg text-muted outline-none"
          >
            <option value="">All link types</option>
            {Object.entries(LINK_TYPE_LABEL).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
          <button className="inline-flex h-14 shrink-0 items-center gap-2 rounded-full bg-lime px-6 text-lg font-semibold text-ink">
            Compare prices <span aria-hidden>→</span>
          </button>
        </form>
        <p className="mt-5 text-lg text-muted">Free to use. No sign-up needed.</p>

        <div className="mt-12">
          <ProviderTablePreview />
        </div>
      </div>
    </section>
  );
}
