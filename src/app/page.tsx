"use client";

import Link from "next/link";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SparklesIcon,
  ShoppingCartIcon,
  FireIcon,
  ShieldCheckIcon,
  CubeIcon,
  UsersIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  BoltIcon,
  CheckCircleIcon,
  ChartBarIcon,
  HeartIcon,
  ChevronDownIcon,
  XMarkIcon,
  CheckIcon,
  StarIcon,
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
    transition: { delay: i * 0.1, duration: 0.7, ease },
  }),
};


const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
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
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════════════════ */

function useCounter(target: number, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return { count, ref };
}

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const features = [
  {
    icon: SparklesIcon,
    title: "AI Meal Planning",
    desc: "Generates personalized weekly plans that adapt in real time to what is in your pantry, your schedule, and your family's preferences.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderGradient: "from-emerald-500/40 to-teal-500/40",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    icon: ShoppingCartIcon,
    title: "Smart Grocery Lists",
    desc: "Organized by store aisle with price estimates and quantity optimization.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderGradient: "from-cyan-500/40 to-blue-500/40",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    span: "",
    large: false,
  },
  {
    icon: FireIcon,
    title: "Adaptive Cooking",
    desc: "Step by step guidance that matches your skill level and available equipment.",
    gradient: "from-orange-500/20 to-amber-500/20",
    borderGradient: "from-orange-500/40 to-amber-500/40",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    span: "",
    large: false,
  },
  {
    icon: ShieldCheckIcon,
    title: "Dietary Intelligence",
    desc: "Hard restrictions like allergies are never overridden. Soft preferences flex intelligently around your life.",
    gradient: "from-rose-500/20 to-pink-500/20",
    borderGradient: "from-rose-500/40 to-pink-500/40",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    span: "",
    large: false,
  },
  {
    icon: CubeIcon,
    title: "Pantry Tracking",
    desc: "Scan receipts, track inventory, reduce waste, and save money automatically.",
    gradient: "from-violet-500/20 to-purple-500/20",
    borderGradient: "from-violet-500/40 to-purple-500/40",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    span: "",
    large: false,
  },
  {
    icon: UsersIcon,
    title: "Built for Households",
    desc: "Scales portions automatically. Handles picky eaters, multiple diets, and varying schedules with ease.",
    gradient: "from-primary-500/20 to-emerald-500/20",
    borderGradient: "from-primary-500/40 to-emerald-500/40",
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
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: CalendarDaysIcon,
    title: "Set preferences",
    desc: "Favorite cuisines, time budget, disliked ingredients, and cooking goals.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: SparklesIcon,
    title: "Get your plan",
    desc: "AI generates a personalized weekly meal plan with grocery lists included.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: FireIcon,
    title: "Cook with confidence",
    desc: "Follow adaptive step by step guidance tailored to your kitchen.",
    color: "from-orange-500 to-amber-500",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Busy Mom of 3",
    avatar: "S",
    gradient: "from-emerald-400 to-teal-400",
    text: "Nouria transformed our family dinners. My kids are actually excited about meals now, and I've cut our grocery bill by 25%.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Home Cook Enthusiast",
    avatar: "J",
    gradient: "from-cyan-400 to-blue-400",
    text: "The AI actually understands my pantry. I used to waste so much food. Now everything gets used and the recipes are incredible.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Dietary Restrictions",
    avatar: "P",
    gradient: "from-violet-400 to-purple-400",
    text: "As someone with celiac disease, I finally feel safe. Nouria never suggests anything with gluten and the meals are genuinely delicious.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How does Nouria handle severe food allergies?",
    a: "Allergies are classified as hard restrictions in our system. They can never be overridden by the AI in meal suggestions, substitutions, or grocery lists. We treat them as absolute constraints that the system is built around.",
  },
  {
    q: "Can multiple family members have different dietary needs?",
    a: "Absolutely. Nouria supports individual profiles within a household. If one person is vegan and another is keto, the system will find meals that work for everyone or intelligently suggest modular recipes with easy swaps.",
  },
  {
    q: "What happens to my data?",
    a: "Your data stays yours. We use secure encryption, never sell your information to third parties, and you can export or delete your data at any time. We only use anonymized, aggregate patterns to improve the AI.",
  },
  {
    q: "Is Nouria free during the beta?",
    a: "Yes. The private beta is completely free. Early testers will also receive a significant lifetime discount when we launch publicly. No credit card is required to join.",
  },
  {
    q: "How does the pantry tracking work?",
    a: "You can scan grocery receipts with your phone camera, manually add items, or connect to supported grocery delivery services. The system tracks expiration dates and suggests recipes that use items before they go bad.",
  },
];

const comparisonBefore = [
  "30+ minutes deciding what to cook",
  "Forgotten ingredients at the store",
  "Food waste piling up weekly",
  "Same 5 recipes on rotation",
  "Dietary needs as an afterthought",
];

const comparisonAfter = [
  "Meals planned in seconds by AI",
  "Perfect grocery lists every time",
  "Near zero waste pantry management",
  "Endless variety matched to your taste",
  "Dietary needs built into every meal",
];

const marqueeItems = [
  "AI Powered Planning",
  "Smart Grocery Lists",
  "Pantry Tracking",
  "Allergy Safe",
  "Multiple Diet Support",
  "Receipt Scanning",
  "Nutrition Tracking",
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-surface-700/80 rounded-b-2xl z-20" />
        <div className="relative pt-8 pb-4 px-4 min-h-[520px] sm:min-h-[580px] bg-gradient-to-b from-surface-900 to-surface-950">
          <div className="flex items-center justify-between text-[10px] text-surface-400 px-1 mb-5">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3.5 h-2 rounded-sm border border-surface-400 relative">
                <div className="absolute inset-[1px] right-[2px] bg-primary-400 rounded-[1px]" />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <p className="text-surface-400 text-xs">Good evening</p>
            <p className="text-white text-base font-semibold">Sarah</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-800/10 border border-primary-500/20 p-3.5 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium text-primary-300 uppercase tracking-wider">Tonight&apos;s Dinner</span>
              <span className="text-[10px] text-surface-400 flex items-center gap-1">
                <ClockIcon className="w-3 h-3" /> 35 min
              </span>
            </div>
            <p className="text-white text-sm font-semibold mb-1">Lemon Herb Chicken</p>
            <p className="text-surface-400 text-[11px] mb-3">with roasted vegetables & quinoa</p>
            <div className="flex gap-2">
              {[
                { label: "Cal", val: "480" },
                { label: "Protein", val: "38g" },
                { label: "Carbs", val: "42g" },
              ].map((n) => (
                <div key={n.label} className="flex-1 rounded-lg bg-white/5 px-2 py-1.5 text-center">
                  <p className="text-[9px] text-surface-400">{n.label}</p>
                  <p className="text-[11px] font-semibold text-white">{n.val}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-surface-400 text-[10px] font-medium uppercase tracking-wider mb-2 mt-4">Tomorrow</p>
          {[
            { time: "8:00 AM", meal: "Greek Yogurt Bowl", color: "bg-accent-400" },
            { time: "12:30 PM", meal: "Mediterranean Wrap", color: "bg-primary-400" },
            { time: "7:00 PM", meal: "Salmon Teriyaki", color: "bg-cyan-400" },
          ].map((m) => (
            <div key={m.meal} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
              <div className={`w-1 h-8 rounded-full ${m.color}`} />
              <div className="flex-1">
                <p className="text-white text-xs font-medium">{m.meal}</p>
                <p className="text-surface-500 text-[10px]">{m.time}</p>
              </div>
              <ArrowRightIcon className="w-3 h-3 text-surface-500" />
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-3 px-6 border-t border-white/5 bg-surface-950/80 backdrop-blur-sm">
            {[CalendarDaysIcon, ShoppingCartIcon, SparklesIcon, UsersIcon].map((Icon, i) => (
              <Icon key={i} className={`w-5 h-5 ${i === 0 ? "text-primary-400" : "text-surface-500"}`} />
            ))}
          </div>
        </div>
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

/* ── Stat Card ── */
function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: React.ElementType }) {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      className="relative text-center px-6 py-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] group hover:bg-white/[0.04] transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4 text-primary-400 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-surface-400 bg-clip-text text-transparent">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-surface-400">{label}</p>
    </motion.div>
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
    <div
      className="recommendation-panel relative min-h-[360px] my-4 overflow-hidden rounded-3xl border border-white/[0.06] bg-surface-900/30 flex items-center justify-center px-6 max-w-5xl mx-auto w-[calc(100%-3rem)]"
    >
      {/* Background Giant Text */}
      <div
        className="absolute text-[8vw] sm:text-[10vw] font-black text-surface-50/[0.035] tracking-[0.2em] whitespace-nowrap pointer-events-none select-none uppercase"
      >
        NOURIA COOKING
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
          Nouria matches pantry ingredients, cooking time, and household preferences in real time, giving you recipes that fit naturally into your week.
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

      {/* Element 2: Grocery Checklist Item */}
      <div
        className="absolute right-6 sm:right-20 top-1/3 z-0 hidden sm:block p-4 rounded-2xl border border-white/10 bg-surface-800/80 backdrop-blur-md max-w-[160px] shadow-lg shadow-black/40"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckIcon className="w-2.5 h-2.5" />
          </div>
          <span className="text-xs font-medium text-white">Buy Garlic</span>
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
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroLine1 = "Your kitchen,".split(" ");
  const heroLine2 = "on autopilot.".split(" ");

  return (
    <div className="marketing-home relative min-h-dvh bg-surface-950 text-surface-100 overflow-x-hidden">
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
            className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-emerald-400/[0.06] rounded-full blur-[140px]"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-500/[0.03] rounded-full blur-[120px]"
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(52,211,153,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.2) 1px, transparent 1px)",
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
              transition={{ duration: 0.6, ease }}
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
              <span className="block" style={{ perspective: "600px" }}>
                {heroLine2.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em] bg-gradient-to-r from-primary-400 via-emerald-300 to-primary-500 bg-clip-text text-transparent"
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
              transition={{ delay: 0.6, duration: 0.7, ease }}
              className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-lg"
            >
              Nouria uses AI to plan meals, build grocery lists, and guide your cooking, all tailored to
              your household&apos;s dietary needs, skill level, and schedule.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease }}
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
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-[15px] font-medium text-surface-300 transition-all duration-300 hover:bg-white/[0.04] hover:border-primary-500/30 hover:text-white"
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
                  <ShoppingCartIcon className="w-4 h-4 text-accent-400" />
                </div>
                <div>
                  <p className="text-[11px] text-surface-400">Grocery list</p>
                  <p className="text-xs font-semibold text-white">12 items · $48</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="top-28 -right-4 sm:-right-12 z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <ChartBarIcon className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[11px] text-surface-400">Waste reduced</p>
                  <p className="text-xs font-semibold text-emerald-400">↓ 34% this month</p>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} custom={0} className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
              <SparklesIcon className="h-3.5 w-3.5" />
              Product
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
              One place for every
              <span className="block bg-gradient-to-r from-primary-500 to-emerald-400 bg-clip-text text-transparent">
                meal decision
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-5 max-w-xl text-lg leading-relaxed text-surface-400">
              Nouria connects planning, pantry awareness, shopping, and cooking so your entire week feels simpler from the first idea to the final plate.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid gap-3">
            {[
              { icon: CalendarDaysIcon, number: "01", title: "Plan", copy: "Personalized meals built around your schedule and household." },
              { icon: ShoppingCartIcon, number: "02", title: "Shop", copy: "A clear grocery list organized for a faster store visit." },
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

      {/* ════════════════════════════════════════
          FEATURES — BENTO GRID
          ════════════════════════════════════════ */}
      <section id="features" className="relative py-16 sm:py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
              <span className="bg-gradient-to-r from-primary-400 to-emerald-300 bg-clip-text text-transparent">
                your kitchen
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-5 max-w-xl mx-auto text-surface-400 text-lg leading-relaxed">
              More than recipes. Nouria learns your life and builds around it.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
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
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/[0.06] px-4 py-1.5 mb-6">
              <BoltIcon className="w-3.5 h-3.5 text-accent-400" />
              <span className="text-[12px] font-medium text-accent-700 uppercase tracking-wider">Vision</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-tight">
              From signup to dinner
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-emerald-300 bg-clip-text text-transparent">
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
              viewport={{ once: true, margin: "-50px" }}
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

      {/* Parallax Showcase Section */}
      <ParallaxSection />

      {/* ════════════════════════════════════════
          COMPARISON — BEFORE/AFTER
          ════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/20 to-surface-950 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight">
              The difference is
              <span className="bg-gradient-to-r from-primary-400 to-emerald-300 bg-clip-text text-transparent"> real</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Before */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="rounded-2xl border border-white/[0.06] bg-surface-900/50 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <XMarkIcon className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider">Without</p>
                  <p className="text-lg font-semibold text-white">Nouria</p>
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
                    <div className="mt-1 w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                      <XMarkIcon className="w-3 h-3 text-rose-400" />
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
                    <p className="text-lg font-semibold text-white">Nouria</p>
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
          STATS
          ════════════════════════════════════════ */}
      <section className="relative py-16 px-6 border-y border-white/[0.04]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <StatCard value={2400} suffix="+" label="Recipes Generated" icon={SparklesIcon} />
          <StatCard value={7} suffix="" label="Days Planned Ahead" icon={CalendarDaysIcon} />
          <StatCard value={34} suffix="%" label="Less Food Waste" icon={HeartIcon} />
          <StatCard value={12} suffix="" label="Countries" icon={ChartBarIcon} />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
          ════════════════════════════════════════ */}
      <section id="testimonials" className="relative py-16 sm:py-20 px-6">
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-4 py-1.5 mb-6">
              <HeartIcon className="w-3.5 h-3.5 text-primary-400" />
              <span className="text-[12px] font-medium text-primary-300 uppercase tracking-wider">Testimonials</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight">
              Loved by early
              <span className="bg-gradient-to-r from-primary-400 to-emerald-300 bg-clip-text text-transparent"> testers</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={scaleIn}
                custom={i}
                className="group relative rounded-2xl border border-white/[0.06] bg-surface-900/50 p-7 transition-all duration-500 hover:border-white/[0.12] hover:bg-surface-900/80"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-4xl font-serif text-white/[0.05] leading-none select-none">&ldquo;</div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4 text-accent-400 fill-accent-400" />
                  ))}
                </div>

                <p className="text-surface-300 text-[14px] leading-relaxed mb-6">{t.text}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-surface-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            viewport={{ once: true, margin: "-100px" }}
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
              Here are the most common ones from our beta applicants.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
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
      <section id="contact" className="relative py-16 sm:py-20 px-6">
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
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Ready to put your
              <span className="block mt-1 bg-gradient-to-r from-primary-400 via-emerald-300 to-primary-500 bg-clip-text text-transparent">
                kitchen on autopilot?
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-5 text-surface-400 text-lg leading-relaxed max-w-lg mx-auto">
              Join the private beta. Be among the first to experience AI powered meal planning that actually understands your life.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="mailto:support@nouria.app"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary-500/40 hover:bg-primary-400"
              >
                Contact Nouria
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-surface-500">Questions, partnerships, or feedback? We&apos;d love to hear from you.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
