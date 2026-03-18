import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ScrollRevealConfig } from "./types";
import { getAnimationValues } from "./animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(config: ScrollRevealConfig = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || config.disabled) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;

      const { from, to } = getAnimationValues(config);
      const once = config.once ?? true;

      const scrollTriggerConfig: ScrollTrigger.Vars = {
        trigger: containerRef.current,
        start: config.start ?? "top 85%",
        once,
      };

      if (config.variant === "staggerChildren") {
        const children = containerRef.current.querySelectorAll(
          config.childSelector ?? ":scope > *",
        );
        if (children.length === 0) return;

        gsap.fromTo(children, from, {
          ...to,
          duration: config.duration ?? 0.8,
          delay: config.delay ?? 0,
          stagger: config.stagger ?? 0.1,
          ease: config.ease ?? "power2.out",
          scrollTrigger: scrollTriggerConfig,
        });
      } else {
        gsap.fromTo(containerRef.current, from, {
          ...to,
          duration: config.duration ?? 0.8,
          delay: config.delay ?? 0,
          ease: config.ease ?? "power2.out",
          scrollTrigger: scrollTriggerConfig,
        });
      }
    },
    { scope: containerRef },
  );

  return { containerRef };
}
