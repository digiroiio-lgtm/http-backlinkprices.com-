import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";
import { Methodology } from "@/components/Methodology";
import { CostBreakdown } from "@/components/CostBreakdown";
import { PriceCalculator } from "@/components/PriceCalculator";
import { ValueRanking } from "@/components/ValueRanking";
import { PriceIndexSummary } from "@/components/PriceIndexSummary";
import { PricesByDR } from "@/components/PricesByDR";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyLinksMatter } from "@/components/WhyLinksMatter";
import { ClusterTabs } from "@/components/ClusterTabs";

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <Methodology />
      <CostBreakdown />
      <PriceCalculator />
      <ValueRanking />
      <PriceIndexSummary />
      <PricesByDR />
      <HowItWorks />
      <WhyLinksMatter />
      <ClusterTabs />
    </>
  );
}
