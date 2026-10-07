"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DinnerPlayground from "@/components/DinnerPlayground";
import FridgeRescue from "@/components/FridgeRescue";
import AmpleatVision from "@/components/AmpleatVision";
import ScrollEffects from "@/components/ScrollEffects";
import {
  SparklesIcon,
  CameraIcon,
  FireIcon,
  ShieldCheckIcon,
  CubeIcon,
  UsersIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  BoltIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ChevronDownIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

/* ═══════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════ */

type Ease4 = [number, number, number, number];

/* ═══════════════════════════════════════════════════════
   ANIMATION PRESETS
   ═══════════════════════════════════════════════════════ */

const ease: Ease4 = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease },
  }),
};


const scaleIn = {
  hidden: { opacity: 0, scale: 0.98, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordChild = {
  hidden: { opacity: 0, y: 30, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease },
  },
};

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const features = [
  {
    icon: SparklesIcon,
    title: "AI Meal Planning",
    desc: "Builds personalized meal plans around your pantry, expiring ingredients, available time, and household preferences.",
    gradient: "from-supporting-500/20 to-supporting-500/20",
    borderGradient: "from-supporting-500/40 to-supporting-500/40",
    iconBg: "bg-supporting-500/10",
    iconColor: "text-supporting-400",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    icon: CameraIcon,
    title: "AmpleatVision",
    desc: "Scan ingredients, shelves, and spice labels. Review detected pantry details before saving.",
    gradient: "from-primary-500/20 to-primary-500/20",
    borderGradient: "from-primary-500/40 to-primary-500/40",
    iconBg: "bg-primary-500/10",
    iconColor: "text-primary-400",
    span: "",
    large: false,
  },
  {
    icon: FireIcon,
    title: "Adaptive Cooking",
    desc: "Step by step guidance that matches your skill level and available equipment.",
    gradient: "from-accent-500/20 to-accent-500/20",
    borderGradient: "from-accent-500/40 to-accent-500/40",
    iconBg: "bg-accent-500/10",
    iconColor: "text-accent-400",
    span: "",
    large: false,
  },
  {
    icon: ShieldCheckIcon,
    title: "Dietary Intelligence",
    desc: "Hard restrictions like allergies are never overridden. Soft preferences flex intelligently around your life.",
    gradient: "from-primary-500/20 to-primary-500/20",
    borderGradient: "from-primary-500/40 to-primary-500/40",
    iconBg: "bg-primary-500/10",
    iconColor: "text-primary-400",
    span: "",
    large: false,
  },
  {
    icon: CubeIcon,
    title: "Pantry Tracking",
    desc: "Track quantities, storage locations, expiry estimates, and low-stock alerts across your kitchen.",
    gradient: "from-primary-500/20 to-primary-500/20",
    borderGradient: "from-primary-500/40 to-primary-500/40",
    iconBg: "bg-primary-500/10",
    iconColor: "text-primary-400",
    span: "",
    large: false,
  },
  {
    icon: UsersIcon,
    title: "Built for Households",
    desc: "Scales portions automatically. Handles picky eaters, multiple diets, and varying schedules with ease.",
    gradient: "from-primary-500/20 to-supporting-500/20",
    borderGradient: "from-primary-500/40 to-supporting-500/40",
    iconBg: "bg-primary-500/10",
    iconColor: "text-primary-400",
    span: "sm:col-span-2 lg:col-span-1",
    large: false,
  },
];

const steps = [
  {
    icon: UsersIcon,
    title: "Create your profile",
    desc: "Household size, skill level, equipment, dietary needs and restrictions.",
    color: "from-supporting-500 to-supporting-500",
  },
  {
    icon: CalendarDaysIcon,
    title: "Set preferences",
    desc: "Favorite cuisines, time budget, disliked ingredients, and cooking goals.",
    color: "from-primary-500 to-primary-500",
  },
  {
    icon: SparklesIcon,
    title: "Get your plan",
    desc: "AI suggests meals from your pantry, expiring ingredients, available time, and household needs.",
    color: "from-primary-500 to-primary-500",
  },
  {
    icon: FireIcon,
    title: "Cook with confidence",
    desc: "Follow adaptive step by step guidance tailored to your kitchen.",
    color: "from-accent-500 to-accent-500",
  },
];

const faqs = [
  {
    q: "How does Ampleat handle severe food allergies?",
    a: "Allergies are classified as hard restrictions in our system. They can never be overridden by the AI in meal suggestions or substitutions. We treat them as absolute constraints that the system is built around.",
  },
  {
    q: "Can multiple family members have different dietary needs?",
    a: "Absolutely. Ampleat supports individual profiles within a household. If one person is vegan and another is keto, the system will find meals that work for everyone or intelligently suggest modular recipes with easy swaps.",
  },
  {
    q: "What happens to my data?",
    a: "Your data stays yours. We use secure encryption, never sell your information to third parties, and you can export or delete your data at any time. We only use anonymized, aggregate patterns to improve the AI.",
  },
  {
    q: "Is Ampleat free during the beta?",
    a: "Yes. The private beta is completely free. Early testers will also receive a significant lifetime discount when we launch publicly. No credit card is required to join.",
  },
  {
    q: "How does the pantry tracking work?",
    a: "Add items manually, scan barcodes or receipts, or use AmpleatVision to scan ingredients and shelves. Review and confirm detected details before saving. Expiry estimates and low-stock alerts help you use what you have.",
  },
];

const comparisonBefore = [
  "30+ minutes deciding what to cook",
  "Forgotten ingredients in the fridge",
  "Food waste piling up weekly",
  "Same 5 recipes on rotation",
  "Dietary needs as an afterthought",
];

const comparisonAfter = [
  "Meals planned in seconds by AI",
  "Meal ideas built from your actual pantry",
  "Near zero waste pantry management",
  "Endless variety matched to your taste",
  "Dietary needs built into every meal",
];

const marqueeItems = [
  "AI Powered Planning",
  "AmpleatVision",
  "Pantry Tracking",
  "Dietary Rules",
  "Multiple Diet Support",
  "Receipt Scanning",
  "Expiration Tracking",
  "Waste Reduction",
  "Skill Adaptation",
  "Household Scaling",
];

/* ═══════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════ */

/* ── Phone Mockup ── */
function PhoneMockup() {
  return (
    <div className="phone-preview relative w-[280px] sm:w-[320px]">
      <div className="relative rounded-[2.5rem] border-[6px] border-surface-700/80 bg-surface-900 shadow-2xl shadow-black/50 overflow-hidden animate-pulse-glow">
        <div aria-hidden="true" className="dynamic-island absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
        <Image src="/ampleat-home-screen.png" alt="Ampleat app home screen showing a coconut chickpea curry meal, pantry coverage, and cooking controls" width={1206} height={2622} sizes="(max-width: 767px) 242px, 272px" preload className="phone-screen" />
      </div>
    </div>
  );
}

/* ── Floating Card ── */
function FloatingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`floating-card absolute rounded-xl border border-white/10 bg-surface-800/80 backdrop-blur-xl shadow-2xl shadow-black/40 px-4 py-3 ${className}`}
    >
      {children}
    </div>
  );
}

/* ── FAQ Item ── */
function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-[15px] font-medium text-white group-hover:text-primary-400 transition-colors pr-8">
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
        >
          <ChevronDownIcon className="w-5 h-5 text-surface-500 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-surface-400 text-[14px] leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Parallax Section ── */
function ParallaxSection() {
  return (
    <section className="relative px-6" aria-label="Meal recommendations">
    <div
      className="recommendation-panel relative min-h-[360px] overflow-hidden rounded-3xl border border-white/[0.06] bg-surface-900/30 flex items-center justify-center px-6 max-w-5xl mx-auto w-full"
    >
      {/* Background Giant Text */}
      <div
        className="absolute text-[8vw] sm:text-[10vw] font-black text-surface-50/[0.035] tracking-[0.2em] whitespace-nowrap pointer-events-none select-none"
      >
        Ampleat COOKING
      </div>

      {/* Radial Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--color-surface-950)_100%)] pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-lg text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-4 py-1.5 mb-6 text-xs font-semibold text-primary-300">
          <SparklesIcon className="w-3.5 h-3.5" />
          Adaptive Recommendations
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Experience depth in meal recommendations
        </h3>
        <p className="text-sm text-surface-400 leading-relaxed">
          Ampleat matches pantry ingredients, cooking time, and household preferences in real time, giving you recipes that fit naturally into your week.
        </p>
      </div>

      {/* Floating Parallax Elements */}
      {/* Element 1: Recipe Card */}
      <div
        className="absolute left-6 sm:left-16 top-1/4 z-0 hidden sm:block p-4 rounded-2xl border border-primary-500/20 bg-primary-500/[0.03] backdrop-blur-md max-w-[180px] shadow-lg shadow-black/40"
      >
        <span className="text-[10px] uppercase font-bold text-primary-400">Smart Recipe</span>
        <h4 className="text-xs font-semibold text-white mt-1">Spinach Frittata</h4>
        <p className="text-[9px] text-surface-450 mt-1">Uses expiring eggs & spinach</p>
      </div>

      {/* Element 2: Pantry Item */}
      <div
        className="absolute right-6 sm:right-20 top-1/3 z-0 hidden sm:block p-4 rounded-2xl border border-white/10 bg-surface-800/80 backdrop-blur-md max-w-[160px] shadow-lg shadow-black/40"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-supporting-500/20 flex items-center justify-center text-supporting-400">
            <CheckIcon className="w-2.5 h-2.5" />
          </div>
          <span className="text-xs font-medium text-white">Garlic in pantry</span>
        </div>
      </div>

      {/* Element 3: Cooking Skill Level Tag */}
      <div
        className="absolute left-1/3 bottom-10 z-0 hidden sm:block p-3 rounded-full border border-accent-500/20 bg-accent-500/[0.04] backdrop-blur-md flex items-center gap-1.5"
      >
        <FireIcon className="w-3.5 h-3.5 text-accent-400" />
        <span className="text-[10px] font-bold text-accent-400 uppercase tracking-wider">Level: Easy</span>
      </div>
    </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroLine1 = "Make more of".split(" ");
  const heroLine2 = "what you have".split(" ");

  return (
    <MotionConfig reducedMotion="user">
    <div className="marketing-home relative min-h-dvh bg-surface-950 text-surface-100 overflow-x-hidden">
      <ScrollEffects />

      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ════════════════════════════════════════
          NAVBAR
          ════════════════════════════════════════ */}
      <Navbar />

      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section id="home" className="relative min-h-[700px] flex items-center py-12 sm:py-16 px-6 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated gradient orbs */}
          <div
            className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-primary-500/[0.08] rounded-full blur-[160px]"
          />
          <div
            className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-supporting-400/[0.06] rounded-full blur-[140px]"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-500/[0.03] rounded-full blur-[120px]"
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(84,45,62,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(84,45,62,0.2) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Radial fade */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-surface-950)_70%)]" />
        </div>

        <div
          className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary-500/20 bg-primary-500/[0.06] pl-2 pr-4 py-1.5 mb-8"
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400/50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-400" />
              </span>
              <span className="text-[13px] font-medium text-surface-300">
                Private Beta · Limited Spots
              </span>
            </motion.div>

            {/* Word-by-word reveal heading */}
            <motion.h1
              className="text-[clamp(2.8rem,6.5vw,5.2rem)] font-extrabold leading-[1.05] tracking-tight"
              variants={wordReveal}
              initial="hidden"
              animate="visible"
            >
              <span className="block text-surface-50" style={{ perspective: "600px" }}>
                {heroLine1.map((word, i) => (
                  <motion.span key={i} className="inline-block mr-[0.3em]" variants={wordChild}>
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block hero-emphasis" style={{ perspective: "600px" }}>
                {heroLine2.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em] bg-gradient-to-r from-primary-400 via-supporting-300 to-primary-500 bg-clip-text text-transparent"
                    variants={wordChild}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.45, ease }}
              className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-lg"
            >
              Ampleat uses AI to plan meals from your pantry, prioritize expiring food, and guide your cooking, all tailored to
              your household&apos;s dietary needs, skill level, and schedule.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.45, ease }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/apply"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary-500/35 hover:bg-primary-400"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Apply for Early Access
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#vision"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-[15px] font-medium text-surface-300 transition-all duration-300 hover:bg-white/[0.04] hover:border-primary-500/30 hover:text-primary-500"
              >
                <BoltIcon className="w-4 h-4 text-primary-400" />
                See Our Vision
              </Link>
            </motion.div>

          </div>

          {/* Right — Phone */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="hero-showcase relative flex justify-center lg:justify-end"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[100px]" />

            {/* Rotating ring behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-primary-500/10 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] sm:w-[500px] sm:h-[500px] rounded-full border border-primary-500/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

            <PhoneMockup />

            <FloatingCard className="top-12 -left-4 sm:-left-16 z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-[11px] text-surface-400">This week</p>
                  <p className="text-xs font-semibold text-white">2.5 hrs saved</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="bottom-32 -left-8 sm:-left-20 z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                  <CubeIcon className="w-4 h-4 text-accent-400" />
                </div>
                <div>
                  <p className="text-[11px] text-surface-400">Pantry ready</p>
                  <p className="text-xs font-semibold text-white">Use what you have</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="top-28 -right-4 sm:-right-12 z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-supporting-500/20 flex items-center justify-center">
                  <ChartBarIcon className="w-4 h-4 text-supporting-400" />
                </div>
                <div>
                  <p className="text-[11px] text-surface-400">Waste reduced</p>
                  <p className="text-xs font-semibold text-supporting-400">↓ 34% this month</p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INFINITE MARQUEE
          ════════════════════════════════════════ */}
      <section className="relative border-y border-white/[0.04] py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 mx-8 text-sm text-surface-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="product" className="relative px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-primary-500/15 bg-gradient-to-br from-primary-500/[0.06] to-white p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }}>
            <motion.div variants={fadeUp} custom={0} className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
              <SparklesIcon className="h-3.5 w-3.5" />
              Product
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
              One place for every
              <span className="block bg-gradient-to-r from-primary-500 to-supporting-400 bg-clip-text text-transparent">
                meal decision
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-5 max-w-xl text-lg leading-relaxed text-surface-400">
              Ampleat starts with your actual kitchen: scan what you have, find a meal that fits, and cook with step-by-step guidance.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }} className="grid gap-3">
            {[
              { icon: CalendarDaysIcon, number: "01", title: "Plan", copy: "Personalized meals built around your schedule and household." },
              { icon: CameraIcon, number: "02", title: "Scan", copy: "Add ingredients, shelves, and spices to your pantry with AmpleatVision." },
              { icon: FireIcon, number: "03", title: "Cook", copy: "Guidance that adapts to your time, tools, and confidence." },
            ].map((item, index) => (
              <motion.div key={item.title} variants={fadeUp} custom={index} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-surface-700 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-50">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-surface-400">{item.copy}</p>
                </div>
                <span className="text-xs font-semibold tracking-wider text-surface-500">{item.number}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AmpleatVision />

      {/* ════════════════════════════════════════
          FEATURES — BENTO GRID
          ════════════════════════════════════════ */}
      <section id="features" className="relative py-16 sm:py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-10"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-4 py-1.5 mb-6">
              <SparklesIcon className="w-3.5 h-3.5 text-primary-400" />
              <span className="text-[12px] font-medium text-primary-300 uppercase tracking-wider">Features</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-tight"
            >
              Intelligence that understands
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-supporting-300 bg-clip-text text-transparent">
                your kitchen
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-5 max-w-xl mx-auto text-surface-400 text-lg leading-relaxed">
              More than recipes. Ampleat learns your life and builds around it.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={scaleIn}
                custom={i}
                className={`feature-card group relative rounded-2xl border border-white/[0.06] bg-surface-900/50 overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-surface-900/80 ${f.span}`}
              >
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/[0.08] to-transparent rotate-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                </div>

                <div className={`relative z-10 ${f.large ? "p-8" : "p-6"}`}>
                  <div className={`w-11 h-11 rounded-xl ${f.iconBg} border border-white/[0.06] flex items-center justify-center mb-5 ${f.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`${f.large ? "text-xl" : "text-[16px]"} font-semibold text-white mb-2`}>{f.title}</h3>
                  <p className={`text-surface-400 ${f.large ? "text-[15px]" : "text-[13px]"} leading-relaxed`}>{f.desc}</p>

                  {/* Large card extra: mini illustration */}
                  {f.large && (
                    <div className="mt-6 rounded-xl bg-surface-800/50 border border-white/5 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <CalendarDaysIcon className="w-4 h-4 text-primary-400" />
                        <span className="text-xs font-medium text-surface-300">This Week&apos;s Plan</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                          <div key={i} className="text-center">
                            <p className="text-[9px] text-surface-500 mb-1">{d}</p>
                            <div className={`h-8 rounded-md ${i < 5 ? "bg-primary-500/20 border border-primary-500/20" : "bg-white/5 border border-white/5"} flex items-center justify-center`}>
                              {i < 5 && <CheckIcon className="w-3 h-3 text-primary-400" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS
          ════════════════════════════════════════ */}
      <section id="vision" className="relative py-16 sm:py-20 px-6">
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-10"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/[0.06] px-4 py-1.5 mb-6">
              <BoltIcon className="w-3.5 h-3.5 text-accent-400" />
              <span className="text-[12px] font-medium text-accent-700 uppercase tracking-wider">Vision</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-tight">
              From signup to dinner
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-supporting-300 bg-clip-text text-transparent">
                in four steps
              </span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-px">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease }}
              />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            >
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  custom={i}
                  className="relative text-center group"
                >
                  {/* Animated circle */}
                  <div className="relative z-10 mx-auto w-16 h-16 mb-6">
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.color} opacity-20`}
                      whileInView={{ scale: [1, 1.15, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.5, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <div className="relative w-full h-full rounded-full bg-surface-900 border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 transition-colors duration-500">
                      <span className={`text-lg font-bold bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4 text-primary-400 group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-[15px] font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-surface-400 text-[13px] leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <DinnerPlayground />

      {/* Parallax Showcase Section */}
      <ParallaxSection />

      <FridgeRescue />

      {/* ════════════════════════════════════════
          COMPARISON — BEFORE/AFTER
          ════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/20 to-surface-950 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight">
              The difference is
              <span className="bg-gradient-to-r from-primary-400 to-supporting-300 bg-clip-text text-transparent"> real</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Before */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="rounded-2xl border border-white/[0.06] bg-surface-900/50 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <XMarkIcon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider">Without</p>
                  <p className="text-lg font-semibold text-white">Ampleat</p>
                </div>
              </div>
              <ul className="space-y-4">
                {comparisonBefore.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    custom={i + 1}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <XMarkIcon className="w-3 h-3 text-primary-400" />
                    </div>
                    <span className="text-surface-400 text-[14px]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="rounded-2xl border border-primary-500/20 bg-primary-500/[0.03] p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-400/80 uppercase tracking-wider">With</p>
                    <p className="text-lg font-semibold text-white">Ampleat</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {comparisonAfter.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      custom={i + 2}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-3 h-3 text-primary-400" />
                      </div>
                      <span className="text-surface-300 text-[14px]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
          ════════════════════════════════════════ */}
      <section id="faq" className="relative py-16 sm:py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/20 to-surface-950 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-10"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-4 py-1.5 mb-6">
              <BoltIcon className="w-3.5 h-3.5 text-primary-400" />
              <span className="text-[12px] font-medium text-primary-300 uppercase tracking-wider">FAQ</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight">
              Got questions?
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-surface-400 text-lg">
              A few things to know about Ampleat and how it works.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            className="rounded-2xl border border-white/[0.06] bg-surface-900/30 px-8"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <FaqItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
          ════════════════════════════════════════ */}
      <section id="beta-access" className="relative py-16 sm:py-20 px-6" aria-labelledby="beta-heading">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-500/[0.08] rounded-full blur-[200px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <motion.div
            variants={scaleIn}
            custom={0}
            className="rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-500/[0.06] to-surface-900/80 p-9 sm:p-12 text-center backdrop-blur-sm"
          >
            <motion.h2
              id="beta-heading"
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Make more of
              <span className="block mt-1 bg-gradient-to-r from-primary-400 via-supporting-300 to-primary-500 bg-clip-text text-transparent">
                what you have
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-5 text-surface-400 text-lg leading-relaxed max-w-lg mx-auto">
              Help shape Ampleat. Apply to test the private beta, try it in your own kitchen, and tell us what makes dinner easier.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/apply"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary-500/40 hover:bg-primary-400"
              >
                Apply to test Ampleat
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-surface-500">Free during the private beta. No credit card required.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="relative px-6" aria-labelledby="contact-heading">
        <div className="contact-panel" data-scroll-reveal="rise">
          <div>
            <span className="contact-eyebrow">Contact</span>
            <h2 id="contact-heading">Let&apos;s talk.</h2>
            <p>Questions, partnerships, or something you&apos;d like to share? We&apos;d love to hear from you.</p>
          </div>
          <Link href="mailto:hello@ampleat.com" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-500 px-7 py-3.5 text-base font-semibold text-white hover:bg-primary-400 transition-colors">
            Contact Ampleat <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════ */}
      <Footer />
    </div>
    </MotionConfig>
  );
}
