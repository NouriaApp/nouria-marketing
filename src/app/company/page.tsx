import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompanyPage() {
  return (
    <div className="min-h-dvh bg-surface-950 text-surface-100 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto w-full px-6 pt-36 pb-24 text-center">
        <p className="text-primary-400 text-sm font-medium tracking-[0.2em]">Ampleat</p>
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">A calmer way to feed a household.</h1>
        <p className="mt-6 text-lg leading-relaxed text-surface-400">
          We are building intelligent tools that make pantry setup, meal planning, and cooking feel effortless.
        </p>
      </main>
      <Footer />
    </div>
  );
}
