import { Highlight } from "./ui/Highlight";

export function WhyLinksMatter() {
  return (
    <section className="bg-paper py-16">
      <div className="wrap">
        <h2 className="font-display text-5xl sm:text-6xl">
          Links that work <Highlight>beyond search.</Highlight>
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
          Editorial placements put your brand in front of readers and create signals that search engines and AI can
          discover.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-5 card-shadow sm:p-6">
            <div className="relative rounded-3xl border border-ink/10 bg-paper">
              <svg viewBox="0 0 320 200" className="block w-full" role="img" aria-label="Illustrative ranking improvement chart">
                <defs>
                  <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#d4ff4f" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#d4ff4f" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path d="M0 170 C80 168 140 150 190 115 S280 45 320 35 L320 200 L0 200 Z" fill="url(#fill)" />
                <path d="M0 170 C80 168 140 150 190 115 S280 45 320 35" fill="none" stroke="#2e7d4f" strokeWidth="4" />
                <circle cx="190" cy="115" r="6" fill="#2e7d4f" />
              </svg>
              <span className="absolute bottom-3 left-3 rounded-xl border border-ink/10 bg-white px-3 py-1.5 font-mono text-sm">was #14</span>
              <span className="absolute right-3 top-3 rounded-xl bg-lime px-4 py-2 font-mono text-lg font-bold">now #3 ↑</span>
            </div>
            <h3 className="font-display mt-6 text-3xl" style={{ letterSpacing: "-0.03em" }}>
              Google rankings
            </h3>
            <p className="mt-3 text-xl leading-9 text-muted">
              A dofollow link inside a real editorial article is the signal rankings are built on.
            </p>
            <p className="mt-4 text-sm text-muted">Illustrative example, not a result.</p>
          </div>

          <div className="rounded-[2rem] border border-lime bg-gradient-to-b from-lime/30 to-lime/5 p-5 sm:p-6">
            <div className="rounded-3xl border border-ink/10 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-2xl bg-ink px-4 py-3 font-mono text-sm text-white">best tools for cross-border SEO?</span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime">✦</span>
              </div>
              <p className="mt-6 text-lg leading-8">
                Several tools are recommended for cross-border SEO, including <strong>Your Brand</strong>.
              </p>
              <p className="mt-4 font-mono text-sm text-muted">[1] cited from a real editorial</p>
            </div>
            <h3 className="font-display mt-6 text-3xl" style={{ letterSpacing: "-0.03em" }}>
              AI answers
            </h3>
            <p className="mt-3 text-xl leading-9 text-muted">
              AI assistants cite the editorial pages they can find. A placement can get your brand named.
            </p>
            <p className="mt-4 text-sm text-muted">Illustrative example, not a result.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
