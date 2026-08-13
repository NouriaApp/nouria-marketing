"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Navbar() {
  const pathname = usePathname();

  const getLinkHref = (hash: string) => {
    return pathname === "/" ? hash : `/${hash}`;
  };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: ease as unknown as [number, number, number, number] }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/[0.06] bg-surface-950/70 backdrop-blur-2xl px-6 py-3 shadow-lg shadow-black/20">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary-400 to-emerald-300 bg-clip-text text-transparent">
              nouria
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href={getLinkHref("#features")}
              className="text-[13px] text-surface-400 hover:text-primary-400 transition-colors duration-300 tracking-wide"
            >
              Features
            </Link>
            <Link
              href={getLinkHref("#how-it-works")}
              className="text-[13px] text-surface-400 hover:text-primary-400 transition-colors duration-300 tracking-wide"
            >
              How It Works
            </Link>
            <Link
              href={getLinkHref("#testimonials")}
              className="text-[13px] text-surface-400 hover:text-primary-400 transition-colors duration-300 tracking-wide"
            >
              Testimonials
            </Link>
            <Link
              href="/about"
              className={`text-[13px] transition-colors duration-300 tracking-wide ${
                pathname === "/about" ? "text-primary-400" : "text-surface-400 hover:text-primary-400"
              }`}
            >
              About
            </Link>
            <Link
              href="/support"
              className={`text-[13px] transition-colors duration-300 tracking-wide ${
                pathname === "/support" ? "text-primary-400" : "text-surface-400 hover:text-primary-400"
              }`}
            >
              Support
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-[13px] text-surface-300 hover:text-white transition-colors duration-300 px-4 py-2"
            >
              Log In
            </Link>
            <Link
              href="/apply"
              className="text-[13px] font-medium px-5 py-2.5 rounded-xl bg-primary-500 text-white hover:bg-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/20"
            >
              Get Early Access
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
