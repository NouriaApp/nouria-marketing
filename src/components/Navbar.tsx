"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkHref = (hash: string) => {
    return pathname === "/" ? hash : `/${hash}`;
  };

  const links = [
    { label: "Product", href: getLinkHref("#product") },
    { label: "Features", href: getLinkHref("#features") },
    { label: "Vision", href: getLinkHref("#vision") },
    { label: "Contact", href: getLinkHref("#contact") },
  ];

  return (
    <motion.header
      className="site-header sticky top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: ease as unknown as [number, number, number, number] }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav aria-label="Primary navigation" className="relative flex items-center justify-between rounded-2xl border border-white/[0.06] bg-surface-950/90 backdrop-blur-2xl px-5 sm:px-6 py-3 shadow-lg shadow-surface-200/10">
          <Link href="/" aria-label="ampleat home" className="inline-flex shrink-0 rounded-[12px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700">
            <Image
              src="/ampleat-logo-colored.png"
              alt="Ampleat"
              width={48}
              height={48}
              preload
              className="h-12 w-12 rounded-[12px] object-cover"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-[15px] font-medium text-surface-300 hover:text-primary-600 transition-colors duration-300 tracking-wide">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/apply"
              className="text-[14px] font-semibold px-4 sm:px-5 py-2.5 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/20"
            >
              Get Early Access
            </Link>
            <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-surface-700 bg-surface-950 text-surface-100">
              {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute top-[calc(100%+0.6rem)] inset-x-0 rounded-2xl border border-surface-700 bg-white p-3 shadow-xl md:hidden">
                {links.map((link) => (
                  <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-surface-100 hover:bg-surface-900 hover:text-primary-700">
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
