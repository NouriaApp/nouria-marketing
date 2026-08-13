"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnvelopeIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Support() {
  const [formData, setFormData] = useState({ name: "", email: "", topic: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", topic: "general", message: "" });
    }, 1200);
  };

  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-emerald-400/[0.03] rounded-full blur-[140px]" />
      </div>

      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-4 py-1.5 mb-6">
            <ChatBubbleLeftRightIcon className="w-3.5 h-3.5 text-primary-400" />
            <span className="text-[12px] font-medium text-primary-300 uppercase tracking-wider">Help & Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">How can we help?</h1>
          <p className="text-surface-400 text-sm sm:text-base max-w-md mx-auto">
            Have questions about the beta, found a bug, or want to share feedback? Drop us a line.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Quick contact info */}
          <div className="md:col-span-1 space-y-4">
            <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-5 flex items-start gap-4">
              <EnvelopeIcon className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-sm">Email Support</h3>
                <p className="text-xs text-surface-450 mt-1">Direct support for beta users.</p>
                <a href="mailto:support@nouria.app" className="text-xs text-primary-400 hover:underline mt-2 block font-medium">
                  support@nouria.app
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-5 flex items-start gap-4">
              <QuestionMarkCircleIcon className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-sm">FAQ Center</h3>
                <p className="text-xs text-surface-450 mt-1">Find fast answers to common questions.</p>
                <Link href="/#faq" className="text-xs text-primary-400 hover:underline mt-2 block font-medium">
                  Browse FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 rounded-2xl border border-white/[0.06] bg-surface-900/40 p-6 sm:p-8 relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        placeholder="Sarah Connor"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        placeholder="sarah@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                      Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors appearance-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="beta">Beta Invitation & Account Access</option>
                      <option value="bug">Report a Bug / Issue</option>
                      <option value="feature">Request a Feature</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                      placeholder="Tell us what you need help with..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-primary-500 hover:bg-primary-400 py-3.5 text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 flex flex-col items-center"
                >
                  <CheckCircleIcon className="w-16 h-16 text-primary-400 mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-surface-400 text-sm max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out! We've received your request and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl border border-white/15 px-6 py-2.5 text-sm font-semibold hover:bg-white/5 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
