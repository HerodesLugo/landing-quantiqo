"use client";
import { useState, useEffect, useRef } from "react";

const SCROLL_DOWN_THRESHOLD = 8;
const TOP_THRESHOLD = 80;

export function useHeaderVisibility(enabled: boolean): boolean {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setIsHidden(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= TOP_THRESHOLD) {
        setIsHidden(false);
      } else if (delta > SCROLL_DOWN_THRESHOLD) {
        setIsHidden(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled]);

  return isHidden;
}
