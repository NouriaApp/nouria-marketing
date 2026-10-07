import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IntelligencePage() {
  return (
    <div className="min-h-dvh bg-surface-950 text-surface-100 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto w-full px-6 pt-36 pb-24 text-center">
        <p className="text-primary-400 text-sm font-medium tracking-[0.2em]">Ampleat Intelligence</p>
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Recommendations that fit real life.</h1>
        <p className="mt-6 text-lg leading-relaxed text-surface-400">
          Ampleat considers your pantry, preferences, schedule, and dietary needs to make every next meal easier to choose.
        </p>
      </main>
      <Footer />
    </div>
  );
}
