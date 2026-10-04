import Link from "next/link";
import { Logo } from "./ui/Logo";
import { NAV, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-white">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo dark />
          <p className="max-w-sm text-white/60">
            Compare backlink prices, providers and link building services. Search, compare, calculate, choose.
          </p>
        </div>
        <div>
          <p className="mono-label mb-4 text-white/40">Explore</p>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/80 hover:text-lime">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mono-label mb-4 text-white/40">Transparency</p>
          <p className="text-sm text-white/60">{SITE.disclosure}</p>
          <p className="mt-3 text-sm text-white/40">Prices last reviewed {SITE.updated}.</p>
        </div>
      </div>
      <div className="wrap mt-12 border-t border-line pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
