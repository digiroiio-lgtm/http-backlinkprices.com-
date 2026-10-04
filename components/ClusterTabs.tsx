"use client";
import { useState } from "react";
import Link from "next/link";
import { Card } from "./ui/Card";

const TABS = [
  {
    key: "prices",
    label: "Prices",
    title: "For buyers who want to know the going rate",
    text: "See what backlinks cost by authority, link type and niche before you commit a budget.",
    links: [["Backlink prices", "/backlink-prices"], ["Price calculator", "/calculator"]],
  },
  {
    key: "best",
    label: "Best",
    title: "For buyers ready to choose a service",
    text: "Ranked lists with price, authority, turnaround, guarantee, pros and cons, and who each is best for.",
    links: [["Best backlink services", "/best-backlink-services"], ["Compare providers", "/compare"]],
  },
  {
    key: "reviews",
    label: "Reviews",
    title: "For buyers checking one specific provider",
    text: "Provider reviews answer one question: is it worth it? Coming soon.",
    links: [["Compare providers", "/compare"]],
  },
  {
    key: "vs",
    label: "VS",
    title: "For buyers choosing between two options",
    text: "Head-to-head comparisons and alternatives pages. Coming soon.",
    links: [["Compare providers", "/compare"]],
  },
];

export function ClusterTabs() {
  const [active, setActive] = useState("prices");
  const tab = TABS.find((t) => t.key === active)!;
  return (
    <section className="py-16">
      <div className="wrap">
        <h2 className="font-display text-5xl sm:text-6xl">
          Prices, rankings, reviews. Same data.
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
          Start where you are in the buying journey. The providers and prices behind every page stay consistent.
        </p>

        <div className="mt-10 inline-flex max-w-full overflow-x-auto rounded-full border border-ink/10 bg-white p-1.5" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === t.key}
              onClick={() => setActive(t.key)}
              className={`h-14 shrink-0 rounded-full px-6 text-xl font-semibold ${
                active === t.key ? "bg-ink text-white" : "text-ink/70"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <Card className="mt-6" >
          <div role="tabpanel">
            <h3 className="font-display text-3xl sm:text-4xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              {tab.title}
            </h3>
            <p className="mt-6 text-xl leading-9 text-muted">{tab.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {tab.links.map(([l, h]) => (
                <Link key={h + l} href={h} className="rounded-full border-b-4 border-lime bg-paper px-5 py-2 text-lg font-semibold">
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
