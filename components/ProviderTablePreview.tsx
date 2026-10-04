import { RANKED, LINK_TYPE_LABEL, money } from "@/data/providers";
import { Pill } from "./ui/Pill";

export function ProviderTablePreview() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white card-shadow">
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="rounded-full bg-green px-3 py-1 text-xs font-bold text-white">All ({RANKED.length})</span>
        <span className="mono-label text-muted">Sample data</span>
      </div>
      <div className="overflow-x-auto px-2 pb-2 pt-3">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="mono-label border-b border-ink/10 text-[0.65rem] text-muted">
              <th className="px-3 py-3 font-normal">Price</th>
              <th className="px-3 py-3 font-normal">Provider</th>
              <th className="px-3 py-3 font-normal">DR</th>
              <th className="px-3 py-3 font-normal">Traffic</th>
              <th className="px-3 py-3 font-normal">Turnaround</th>
              <th className="px-3 py-3 font-normal">Link types</th>
            </tr>
          </thead>
          <tbody>
            {RANKED.map((p) => (
              <tr key={p.slug} className="border-b border-ink/5 last:border-0">
                <td className="px-3 py-4 align-top">
                  <div className="whitespace-nowrap text-base font-bold">from {money(p.startingPrice)}</div>
                  <Pill href={`/go/${p.slug}`} sponsored size="sm" className="mt-2 !h-8 !bg-green !px-3 !text-xs !text-white">
                    Visit
                  </Pill>
                </td>
                <td className="px-3 py-4 align-top">
                  <div className="font-semibold">{p.name}</div>
                  <div className="mt-1 text-xs text-muted">{p.model === "managed" ? "Managed" : "Self-service"}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 align-top font-semibold">
                  {p.drMin}–{p.drMax}
                </td>
                <td className="px-3 py-4 align-top">{p.monthlyTraffic.toLocaleString("en-US")}+</td>
                <td className="px-3 py-4 align-top">
                  {p.turnaroundDays[0]}–{p.turnaroundDays[1]} days
                </td>
                <td className="px-3 py-4 align-top text-xs text-muted">
                  {p.linkTypes.map((t) => LINK_TYPE_LABEL[t]).join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
