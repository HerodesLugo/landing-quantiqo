"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "./useScrollReveal";
import type { ScrollRevealConfig } from "./types";

interface ScrollRevealProps extends ScrollRevealConfig {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export default function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  ...config
}: ScrollRevealProps) {
  const { containerRef } = useScrollReveal(config);

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  );
}
