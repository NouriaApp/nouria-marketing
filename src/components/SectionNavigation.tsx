"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// Keep section navigation on the page without exposing fragments in the URL.
export default function SectionNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const pendingSection = useRef<string | null>(null);

  useEffect(() => {
    function navigate(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const destination = new URL(anchor.href);
      if (destination.origin !== location.origin || !destination.hash) return;
      const id = decodeURIComponent(destination.hash.slice(1));
      const route = destination.pathname + destination.search;

      if (route === location.pathname + location.search) {
        const section = document.getElementById(id);
        if (!section) return;
        event.preventDefault();
        section.scrollIntoView({ behavior: "instant", block: "start" });
      } else {
        event.preventDefault();
        pendingSection.current = id;
        router.push(route, { scroll: false });
      }
    }

    document.addEventListener("click", navigate, true);
    return () => document.removeEventListener("click", navigate, true);
  }, [router]);

  useEffect(() => {
    // Existing bookmarked section links still land in the right place.
    const id = pendingSection.current ?? (location.hash ? decodeURIComponent(location.hash.slice(1)) : null);
    pendingSection.current = null;
    if (location.hash) history.replaceState(history.state, "", location.pathname + location.search);
    if (!id) return;
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" }));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
