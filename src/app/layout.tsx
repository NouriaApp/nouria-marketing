import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SectionNavigation from "@/components/SectionNavigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ampleat | Make more of what you have",
  description:
    "Pantry-first AI meal planning, AmpleatVision scanning, and cooking guidance tailored to your household. Join the private beta.",
  keywords: ["meal planning", "AI cooking", "pantry scanning", "recipe assistant"],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="500x500" />
      </head>
      <body className={`${inter.className} site-light min-h-dvh flex flex-col`}><SectionNavigation />{children}</body>
    </html>
  );
}
