import type { ScrollRevealConfig } from "./types";

interface AnimationValues {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
}

export function getAnimationValues(config: ScrollRevealConfig): AnimationValues {
  const variant = config.variant ?? "fadeUp";

  switch (variant) {
    case "fadeIn":
      return {
        from: { opacity: 0 },
        to: { opacity: 1 },
      };

    case "scaleIn":
      return {
        from: { opacity: 0, scale: config.scale ?? 0.95 },
        to: { opacity: 1, scale: 1 },
      };

    case "staggerChildren":
      return {
        from: { opacity: 0, y: config.y ?? 30 },
        to: { opacity: 1, y: 0 },
      };

    case "fadeUp":
    default:
      return {
        from: { opacity: 0, y: config.y ?? 40 },
        to: { opacity: 1, y: 0 },
      };
  }
}
