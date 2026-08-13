"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-3xl mx-auto w-full relative z-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-xs text-surface-500 mb-8">Last updated: August 13, 2026</p>

        <div className="space-y-6 text-sm text-surface-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Nouria. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application, and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Dietary Data:</strong> includes household size, allergies, religious restrictions, cuisines, and dislikes.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and platform details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Deliver personalized meal plans and smart grocery lists using our AI engines.</li>
              <li>Authenticate your account via Firebase services (Google and Apple login).</li>
              <li>Manage our relationship with you, including notifying you about beta updates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees and third-party partners who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:
              <a href="mailto:privacy@nouria.app" className="text-primary-400 hover:underline block mt-2 font-semibold">
                privacy@nouria.app
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
