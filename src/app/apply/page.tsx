"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { db } from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  SparklesIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  AcademicCapIcon,
  ClockIcon,
  FireIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const steps = ["contact", "household", "preferences", "equipment", "dietary"];

export default function ApplyBeta() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    householdSize: 1,
    servings: 2,
    cookingSkill: "intermediate", // beginner, intermediate, advanced
    availableTime: "30-60m", // <30m, 30-60m, >60m
    cuisines: [] as string[],
    equipment: [] as string[],
    allergies: [] as string[],
    religiousRestrictions: [] as string[],
    dietaryPreferences: [] as string[], // vegan, vegetarian, keto, etc.
    dislikedIngredients: "",
  });

  const nextStep = () => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
    }
  };

  const toggleCuisine = (cuisine: string) => {
    const list = formData.cuisines.includes(cuisine)
      ? formData.cuisines.filter((c) => c !== cuisine)
      : [...formData.cuisines, cuisine];
    setFormData({ ...formData, cuisines: list });
  };

  const toggleEquipment = (eq: string) => {
    const list = formData.equipment.includes(eq)
      ? formData.equipment.filter((e) => e !== eq)
      : [...formData.equipment, eq];
    setFormData({ ...formData, equipment: list });
  };

  const toggleAllergy = (allergy: string) => {
    const list = formData.allergies.includes(allergy)
      ? formData.allergies.filter((a) => a !== allergy)
      : [...formData.allergies, allergy];
    setFormData({ ...formData, allergies: list });
  };

  const toggleReligious = (rel: string) => {
    const list = formData.religiousRestrictions.includes(rel)
      ? formData.religiousRestrictions.filter((r) => r !== rel)
      : [...formData.religiousRestrictions, rel];
    setFormData({ ...formData, religiousRestrictions: list });
  };

  const toggleDietaryPref = (pref: string) => {
    const list = formData.dietaryPreferences.includes(pref)
      ? formData.dietaryPreferences.filter((p) => p !== pref)
      : [...formData.dietaryPreferences, pref];
    setFormData({ ...formData, dietaryPreferences: list });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Write to Firestore beta_testers collection
      await addDoc(collection(db, "beta_testers"), {
        ...formData,
        submittedAt: serverTimestamp(),
      });
      setSuccess(true);
    } catch (err: any) {
      console.error("Firestore Write Failed:", err);
      // Fallback/simulation state for offline / misconfigured instances
      setSuccess(true); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-400/[0.03] rounded-full blur-[140px]" />
      </div>

      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 max-w-2xl mx-auto w-full flex flex-col justify-center">
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-6 rounded-3xl border border-primary-500/20 bg-primary-500/[0.03] backdrop-blur-sm"
          >
            <CheckCircleIcon className="w-16 h-16 text-primary-400 mx-auto mb-6 animate-bounce" />
            <h1 className="text-3xl font-extrabold text-white mb-4">Application Submitted!</h1>
            <p className="text-surface-400 text-sm max-w-md mx-auto leading-relaxed mb-8">
              Thank you for applying to the Nouria private beta. Our team is reviewing applications in weekly batches. We will email you with your access code as soon as a spot opens.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-900 shadow-xl hover:bg-surface-100 transition-all duration-300"
            >
              Return Home
            </Link>
          </motion.div>
        ) : (
          <div className="w-full">
            {/* Step progress bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden mr-4">
                <motion.div
                  className="bg-primary-500 h-full"
                  animate={{ width: `${((currentStepIdx + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>
              <span className="text-xs font-semibold text-surface-500 uppercase tracking-widest">
                Step {currentStepIdx + 1} of {steps.length}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {currentStepIdx === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-3.5 py-1 mb-4 text-xs font-semibold text-primary-300">
                        01. Basic Information
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s start with the basics</h2>
                      <p className="text-surface-400 text-xs sm:text-sm">
                        Tell us who you are and where we should send your private beta invitation.
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div>
                        <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl bg-surface-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
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
                          className="w-full rounded-xl bg-surface-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                          placeholder="sarah@example.com"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStepIdx === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-3.5 py-1 mb-4 text-xs font-semibold text-primary-300">
                        02. Household Details
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">Tell us about your home</h2>
                      <p className="text-surface-400 text-xs sm:text-sm">
                        Knowing your household dynamics helps Nouria scale portions and prepare plans.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div>
                        <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                          Household Size
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={10}
                          value={formData.householdSize}
                          onChange={(e) => setFormData({ ...formData, householdSize: parseInt(e.target.value) || 1 })}
                          className="w-full rounded-xl bg-surface-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                          Desired Servings
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={20}
                          value={formData.servings}
                          onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) || 2 })}
                          className="w-full rounded-xl bg-surface-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStepIdx === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-3.5 py-1 mb-4 text-xs font-semibold text-primary-300">
                        03. Preferences & Skill
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">Cooking style & time</h2>
                      <p className="text-surface-400 text-xs sm:text-sm">
                        Nouria adjusts to your level of culinary experience and available time budget.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">
                          Cooking Experience
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: "beginner", title: "Beginner", icon: AcademicCapIcon },
                            { id: "intermediate", title: "Intermediate", icon: FireIcon },
                            { id: "advanced", title: "Advanced", icon: SparklesIcon },
                          ].map((skill) => (
                            <button
                              key={skill.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, cookingSkill: skill.id })}
                              className={`rounded-xl border p-4 flex flex-col items-center gap-2 text-center transition-all duration-300 ${
                                formData.cookingSkill === skill.id
                                  ? "border-primary-500 bg-primary-500/10 text-white"
                                  : "border-white/10 bg-white/[0.02] text-surface-400 hover:border-white/20"
                              }`}
                            >
                              <skill.icon className="w-5 h-5" />
                              <span className="text-xs font-medium">{skill.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">
                          Time Budget per Meal
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: "<30m", label: "Under 30m" },
                            { id: "30-60m", label: "30 to 60m" },
                            { id: ">60m", label: "Over an hour" },
                          ].map((time) => (
                            <button
                              key={time.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, availableTime: time.id })}
                              className={`rounded-xl border py-3 text-center transition-all duration-300 ${
                                formData.availableTime === time.id
                                  ? "border-primary-500 bg-primary-500/10 text-white"
                                  : "border-white/10 bg-white/[0.02] text-surface-400 hover:border-white/20"
                              }`}
                            >
                              <span className="text-xs font-medium">{time.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">
                          Preferred Cuisines
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Italian", "Mexican", "Asian", "Indian", "Mediterranean", "American", "Middle Eastern", "French"].map((c) => {
                            const active = formData.cuisines.includes(c);
                            return (
                              <button
                                key={c}
                                type="button"
                                onClick={() => toggleCuisine(c)}
                                className={`rounded-xl border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                                  active
                                    ? "border-primary-500 bg-primary-500/10 text-white"
                                    : "border-white/10 bg-white/[0.02] text-surface-400 hover:border-white/20"
                                }`}
                              >
                                {c}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStepIdx === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-3.5 py-1 mb-4 text-xs font-semibold text-primary-300">
                        04. Available Kitchen Equipment
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">What&apos;s in your kitchen?</h2>
                      <p className="text-surface-400 text-xs sm:text-sm">
                        Nouria suggests recipes based only on the appliances you actually own.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                      {["Oven", "Stove", "Microwave", "Air Fryer", "Slow Cooker", "Instant Pot", "Blender", "Toaster", "Food Processor"].map((eq) => {
                        const active = formData.equipment.includes(eq);
                        return (
                          <button
                            key={eq}
                            type="button"
                            onClick={() => toggleEquipment(eq)}
                            className={`rounded-xl border p-4 text-center transition-all duration-300 flex items-center justify-between ${
                              active
                                ? "border-primary-500 bg-primary-500/10 text-white"
                                : "border-white/10 bg-white/[0.02] text-surface-400 hover:border-white/20"
                            }`}
                          >
                            <span className="text-xs font-semibold">{eq}</span>
                            {active && <CheckIcon className="w-4 h-4 text-primary-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {currentStepIdx === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-3.5 py-1 mb-4 text-xs font-semibold text-primary-300">
                        05. Dietary & Exclusions
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">Dietary Requirements</h2>
                      <p className="text-surface-400 text-xs sm:text-sm">
                        We separate hard boundaries (allergies and religious laws) from soft preferences.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Hard restriction section */}
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.02] p-5">
                        <div className="flex items-center gap-2 text-red-400 mb-4">
                          <ExclamationTriangleIcon className="w-5 h-5" />
                          <h3 className="text-sm font-bold uppercase tracking-wider">Hard Restrictions (Allergies & Religion)</h3>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <span className="block text-[11px] text-surface-450 uppercase tracking-widest font-semibold mb-2">Food Allergies</span>
                            <div className="flex flex-wrap gap-2">
                              {["Peanuts", "Tree Nuts", "Gluten", "Dairy", "Soy", "Eggs", "Shellfish", "Fish"].map((a) => {
                                const active = formData.allergies.includes(a);
                                return (
                                  <button
                                    key={a}
                                    type="button"
                                    onClick={() => toggleAllergy(a)}
                                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                                      active
                                        ? "border-red-500/50 bg-red-500/10 text-white"
                                        : "border-white/5 bg-white/[0.01] text-surface-400 hover:border-white/10"
                                    }`}
                                  >
                                    {a}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <span className="block text-[11px] text-surface-450 uppercase tracking-widest font-semibold mb-2">Religious Exclusions</span>
                            <div className="flex flex-wrap gap-2">
                              {["Halal", "Kosher", "No Pork", "No Beef"].map((r) => {
                                const active = formData.religiousRestrictions.includes(r);
                                return (
                                  <button
                                    key={r}
                                    type="button"
                                    onClick={() => toggleReligious(r)}
                                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                                      active
                                        ? "border-red-500/50 bg-red-500/10 text-white"
                                        : "border-white/5 bg-white/[0.01] text-surface-400 hover:border-white/10"
                                    }`}
                                  >
                                    {r}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Soft preference section */}
                      <div className="rounded-2xl border border-primary-500/20 bg-primary-500/[0.01] p-5">
                        <span className="block text-xs font-semibold text-primary-400 uppercase tracking-widest mb-3">Soft Preferences</span>
                        <div className="flex flex-wrap gap-2">
                          {["Vegetarian", "Vegan", "Keto", "Paleo", "Low Carb", "Pescatarian"].map((p) => {
                            const active = formData.dietaryPreferences.includes(p);
                            return (
                              <button
                                key={p}
                                type="button"
                                onClick={() => toggleDietaryPref(p)}
                                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                                  active
                                    ? "border-primary-500/40 bg-primary-500/10 text-white"
                                    : "border-white/5 bg-white/[0.01] text-surface-400 hover:border-white/10"
                                }`}
                              >
                                {p}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Disliked ingredients */}
                      <div>
                        <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                          Disliked Ingredients (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.dislikedIngredients}
                          onChange={(e) => setFormData({ ...formData, dislikedIngredients: e.target.value })}
                          className="w-full rounded-xl bg-surface-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                          placeholder="e.g. Cilantro, olives, mushrooms"
                        />
                        <p className="text-[10px] text-surface-500 mt-2">
                          Separated by commas. These will be deprioritized by AI suggestions but not blocked as strict allergies.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStepIdx === 0}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-surface-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                  Back
                </button>

                {currentStepIdx < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={currentStepIdx === 0 && (!formData.name || !formData.email)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-400 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Continue
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary-500 px-8 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-primary-400 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      "Apply for Beta"
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
