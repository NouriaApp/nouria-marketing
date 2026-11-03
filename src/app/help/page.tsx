import type { Metadata } from "next";
import HelpCenter from "@/components/HelpCenter";

export const metadata: Metadata = {
  title: "Ampleat Help Center | Guides for your everyday kitchen",
  description: "Learn to plan meals, scan ingredients with AmpleatVision, manage groceries, cook recipes, share your household kitchen, and control Ampleat Intelligence.",
};

export default function HelpPage() {
  return <HelpCenter />;
}
