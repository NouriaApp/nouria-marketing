"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPolicy() {
  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-3xl mx-auto w-full relative z-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">Cookie Policy</h1>
        <p className="text-xs text-surface-500 mb-8">Last updated: August 13, 2026</p>

        <div className="space-y-6 text-sm text-surface-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies</h2>
            <p>
              As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. The Cookies We Set</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account related cookies:</strong> If you create an account with us, we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out.</li>
              <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
