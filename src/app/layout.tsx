import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nouria — Food, handled.",
  description:
    "AI-powered meal planning, grocery lists, and cooking guidance tailored to your household. Join the private beta.",
  keywords: ["meal planning", "AI cooking", "grocery list", "recipe assistant"],
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
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
