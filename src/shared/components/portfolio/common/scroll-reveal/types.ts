export type AnimationVariant =
  | "fadeUp"
  | "fadeIn"
  | "scaleIn"
  | "staggerChildren";

export interface ScrollRevealConfig {
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  y?: number;
  scale?: number;
  start?: string;
  once?: boolean;
  childSelector?: string;
  disabled?: boolean;
}
