"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TALLY_URL = "https://tally.so/r/7RN1L6";

type FooterLink = { name: string; href: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ampleatapp/",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Ampleat/61595334802216/",
    d: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.024 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.972h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ampleat",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const sectionLink = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const columns: FooterColumn[] = [
    {
      title: "Explore",
      links: [
        { name: "Product", href: sectionLink("#product") },
        { name: "Features", href: sectionLink("#features") },
        { name: "Vision", href: sectionLink("#vision") },
        { name: "Contact", href: sectionLink("#contact") },
      ],
    },
    {
      title: "Access",
      links: [{ name: "Beta Access", href: TALLY_URL, external: true }],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="site-footer border-t border-surface-700 py-12 px-6 bg-surface-900 mt-auto">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" aria-label="ampleat home" className="ampleat-wordmark text-2xl tracking-tight text-primary-700">ampleat</Link>
            <p className="mt-3 text-base text-surface-400 leading-relaxed max-w-sm">
              AI powered meal planning for modern households. Plan smarter, cook better, waste less.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`ampleat on ${social.label}`} className="w-11 h-11 rounded-xl bg-white border border-surface-700 flex items-center justify-center text-surface-300 hover:text-primary-700 hover:border-primary-500/40 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={social.d} /></svg>
                </a>
              ))}
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-surface-400 mb-4">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noreferrer" className="text-base text-surface-300 hover:text-primary-700 transition-colors">{link.name}</a>
                    ) : (
                      <Link href={link.href} className="text-base text-surface-300 hover:text-primary-700 transition-colors">{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-7 border-t border-surface-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-500">© {new Date().getFullYear()} ampleat. All rights reserved.</p>
          <p className="text-sm text-surface-500">Make more of what you have</p>
        </div>
      </div>
    </footer>
  );
}
