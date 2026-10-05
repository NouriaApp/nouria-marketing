import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ampleat Waitlist Form",
  description: "Apply for early access to ampleat.",
};

export default function ApplyPage() {
  return (
    <main className="fixed inset-0 z-[200] min-h-dvh overflow-hidden bg-white">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      <iframe
        data-tally-src="https://tally.so/r/7RN1L6?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="ampleat Waitlist Form"
        className="absolute inset-0 h-full w-full border-0"
      />
    </main>
  );
}
