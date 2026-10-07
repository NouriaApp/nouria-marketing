import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalSection } from "@/content/legal";

export default function LegalDocument({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow mx-auto w-full max-w-4xl px-6 pt-12 pb-24 sm:pt-16">
        <Link href="/" className="text-base text-primary-700 hover:underline">← Back to Ampleat</Link>
        <header className="mt-8 mb-10 border-b border-surface-700 pb-8">
          <h1 className="text-4xl sm:text-5xl text-surface-50 leading-tight">{title}</h1>
          <p className="mt-4 text-sm text-surface-400">Last updated: October 5, 2026</p>
          <p className="mt-4 text-base text-surface-300">Website and Version 1.0 private beta</p>
        </header>
        <nav aria-label={`${title} sections`} className="mb-12 rounded-2xl border border-surface-700 p-6">
          <p className="font-semibold text-surface-100 mb-4">On this page</p>
          <ol className="list-decimal pl-5 space-y-2 text-base sm:columns-2 sm:gap-8">
            {sections.map((section, index) => <li key={section.title} className="break-inside-avoid"><a href={`#section-${index + 1}`} className="text-primary-700 hover:underline">{section.title}</a></li>)}
          </ol>
        </nav>
        <article className="space-y-10 text-base text-surface-300 leading-7">
          {sections.map((section, index) => (
            <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-32">
              <h2 className="text-2xl text-surface-50 mb-4">{index + 1}. {section.title}</h2>
              <div className="space-y-4">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph.split("hello@ampleat.com").map((part, i) => <span key={i}>{i > 0 && <a href="mailto:hello@ampleat.com" className="text-primary-700 underline underline-offset-4">hello@ampleat.com</a>}{part}</span>)}</p>)}</div>
            </section>
          ))}
        </article>
        <nav aria-label="Related legal policies" className="mt-12 pt-6 border-t border-surface-700 flex flex-wrap gap-x-6 gap-y-3 text-base text-primary-700">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
