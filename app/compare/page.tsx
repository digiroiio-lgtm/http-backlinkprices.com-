import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ComparisonEngine } from "@/components/ComparisonEngine";

export const metadata: Metadata = {
  title: "Compare Backlink Providers",
  description: "Filter and compare backlink and link building providers by price, DR, traffic, turnaround and guarantees.",
  alternates: { canonical: "/compare" },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; dr?: string; niche?: string }>;
}) {
  const sp = await searchParams;
  return (
    <>
      <PageHeader
        label="Compare"
        title="Compare Backlink Providers"
        intro="Filter by link type, niche, authority and service model. Sort by best match, price, DR or speed."
      />
      <section className="py-12">
        <div className="wrap">
          <ComparisonEngine initial={sp} />
        </div>
      </section>
    </>
  );
}
