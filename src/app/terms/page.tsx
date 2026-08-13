"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-3xl mx-auto w-full relative z-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
        <p className="text-xs text-surface-500 mb-8">Last updated: August 13, 2026</p>

        <div className="space-y-6 text-sm text-surface-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Terms</h2>
            <p>
              By accessing the website at <a href="https://nouria.app" className="text-primary-400 hover:underline">nouria.app</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Nouria's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
              <li>Attempt to decompile or reverse engineer any software contained on Nouria's website.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Disclaimer</h2>
            <p>
              The materials on Nouria's website are provided on an 'as is' basis. Nouria makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Limitations</h2>
            <p>
              In no event shall Nouria or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Nouria's website, even if Nouria or a Nouria authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Nouria's website could include technical, typographical, or photographic errors. Nouria does not warrant that any of the materials on its website are accurate, complete or current. Nouria may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
