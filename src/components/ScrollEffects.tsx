"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".marketing-home");
    if (!page) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};

    function configure() {
      dispose();
      if (!page || preference.matches) return;
      const reveals = page.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
      // Animate individual content groups once, before they enter the viewport.
      // No scroll listeners, parallax, or movement tied to scroll position.
      reveals.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 35}ms`);
        const bounds = element.getBoundingClientRect();
        if (bounds.top < innerHeight + 100 && bounds.bottom > 0) element.classList.add("scroll-revealed");
      });
      page.classList.add("scroll-enhanced");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-revealed");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0, rootMargin: "0px 0px 100px 0px" });
      reveals.forEach((element) => observer.observe(element));
      function focus(event: FocusEvent) {
        if (!(event.target instanceof Element)) return;
        let ancestor: Element | null = event.target;
        while (ancestor && ancestor !== page) {
          if (ancestor.hasAttribute("data-scroll-reveal")) { ancestor.classList.add("scroll-revealed"); observer.unobserve(ancestor); }
          ancestor = ancestor.parentElement;
        }
      }
      page.addEventListener("focusin", focus);
      dispose = () => {
        observer.disconnect();
        page.removeEventListener("focusin", focus);
        page.classList.remove("scroll-enhanced");
      };
    }
    configure();
    preference.addEventListener("change", configure);
    return () => { dispose(); preference.removeEventListener("change", configure); };
  }, []);
  return null;
}
