import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductPage() {
  return (
    <div className="min-h-dvh bg-surface-950 text-surface-100 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto w-full px-6 pt-36 pb-24 text-center">
        <p className="text-primary-400 text-sm font-medium uppercase tracking-[0.2em]">The Product</p>
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Your kitchen, in sync.</h1>
        <p className="mt-6 text-lg leading-relaxed text-surface-400">
          Plan meals, use what you have, and shop only for what you need with a single, thoughtful assistant.
        </p>
        <Link href="/apply" className="inline-flex mt-8 rounded-xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-400 transition-colors">
          Request early access
        </Link>
      </main>
      <Footer />
    </div>
  );
}
