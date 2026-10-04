import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="BacklinkPrices home">
      <span className="flex h-9 w-9 shrink-0 items-end sm:h-11 sm:w-11 justify-center gap-1 rounded-xl bg-ink p-2.5">
        <span className="h-2.5 w-1.5 rounded-sm bg-lime/60" />
        <span className="h-4 w-1.5 rounded-sm bg-lime/80" />
        <span className="h-6 w-1.5 rounded-sm bg-lime" />
      </span>
      <span className={`font-display whitespace-nowrap text-lg sm:text-2xl ${dark ? "text-white" : "text-ink"}`} style={{ letterSpacing: "-0.04em" }}>
        backlinkprices
      </span>
    </Link>
  );
}
