"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SparklesIcon,
  HeartIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: ease as unknown as [number, number, number, number] },
  }),
};

const team = [
  {
    name: "Aria Chen",
    role: "Founder & CEO",
    bio: "Former food systems researcher and software engineer passionate about making healthy home cooking effortless.",
    avatar: "AC",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    name: "Marcus Vance",
    role: "Head of AI",
    bio: "Specialist in constraint based recommendation models. Dedicated to making personalization allergy safe.",
    avatar: "MV",
    gradient: "from-cyan-400 to-blue-400",
  },
  {
    name: "Elena Rostova",
    role: "Lead Culinary Advisor",
    bio: "Professional chef of 12 years. Ensures our adaptive recipe guides feel natural and delicious.",
    avatar: "ER",
    gradient: "from-violet-400 to-purple-400",
  },
];

export default function About() {
  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-400/[0.03] rounded-full blur-[140px]" />
      </div>

      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 max-w-5xl mx-auto w-full">
        {/* ── Hero section ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/[0.06] px-4 py-1.5 mb-6"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-primary-400" />
            <span className="text-[12px] font-medium text-primary-300 uppercase tracking-wider">Our Story</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Food,{" "}
            <span className="bg-gradient-to-r from-primary-400 via-emerald-300 to-primary-500 bg-clip-text text-transparent">
              handled.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-surface-400 leading-relaxed max-w-2xl mx-auto"
          >
            At Nouria, we believe cooking shouldn&apos;t be a source of daily cognitive load. We are building the intelligent layer for your kitchen.
          </motion.p>
        </motion.div>

        {/* ── Mission Grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-24"
        >
          {[
            {
              title: "Reduce Waste",
              desc: "By matching recipes precisely to what you have in your pantry, we aim to lower household food waste to near zero.",
              icon: GlobeAltIcon,
            },
            {
              title: "Allergy Safe",
              desc: "Personalization shouldn't be high risk. We enforce hard boundaries so allergens never enter your recommendation stream.",
              icon: HeartIcon,
            },
            {
              title: "Simplify Living",
              desc: "Decision fatigue is real. Nouria takes over the planning, scaling, and prep so you can focus on enjoying the meal.",
              icon: UserGroupIcon,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 text-primary-400">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Team Section ── */}
        <div className="border-t border-white/[0.06] pt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Meet the Team</h2>
            <p className="text-surface-400 text-sm max-w-md mx-auto">
              A blend of software engineers, AI researchers, and culinary professionals dedicated to redefining home cooking.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-2xl border border-white/[0.06] bg-surface-900/40 p-6 transition-all duration-500 hover:bg-surface-900/70 hover:border-white/[0.12]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center font-bold text-white text-lg`}>
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="text-xs text-primary-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-surface-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
