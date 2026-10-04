import { MonoLabel } from "./ui/MonoLabel";
import { SITE } from "@/data/site";

export function PageHeader({ label, title, intro }: { label: string; title: React.ReactNode; intro: string }) {
  return (
    <section className="hero-bg grid-bg pb-10 pt-10 sm:pt-16">
      <div className="wrap">
        <MonoLabel>{label}</MonoLabel>
        <h1 className="font-display mt-4 text-5xl sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">{intro}</p>
        <p className="mt-6 max-w-2xl rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 text-sm text-muted">
          {SITE.disclosure}
        </p>
      </div>
    </section>
  );
}
