import { computeCrossReferences } from "@/data/cross-references";
import type { Metadata } from "next";
import { InsightsPage } from "./InsightsPage";

export const metadata: Metadata = {
  title: "Book Insights & Cross-References",
  description: "Discover which books are recommended by multiple world-class influencers. Data-driven insights from 20 thought leaders.",
};

export default function Insights() {
  const crossRefs = computeCrossReferences();
  return <InsightsPage crossRefs={crossRefs} />;
}
