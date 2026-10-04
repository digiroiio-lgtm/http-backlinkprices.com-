import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PriceCalculator } from "@/components/PriceCalculator";

export const metadata: Metadata = {
  title: "Backlink Price Calculator",
  description: "Estimate what a backlink should cost by link type, DR, traffic, niche and quantity, then compare providers.",
  alternates: { canonical: "/calculator" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        label="Calculator"
        title="Backlink Price Calculator"
        intro="Choose link type, authority, traffic, niche and quantity. Get an estimated market price range, then compare providers offering it."
      />
      <PriceCalculator heading={false} />
    </>
  );
}
