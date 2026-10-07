import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { termsSections } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Ampleat",
  description: "Ampleat’s terms of service for its website and private beta kitchen-assistant app.",
};

export default function Page() {
  return <LegalDocument title="Terms of Service" sections={termsSections} />;
}
