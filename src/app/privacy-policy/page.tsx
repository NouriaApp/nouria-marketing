import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { privacySections } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Ampleat",
  description: "Ampleat’s privacy policy for its website and private beta kitchen-assistant app.",
};

export default function Page() {
  return <LegalDocument title="Privacy Policy" sections={privacySections} />;
}
