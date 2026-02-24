import { useRef, useImperativeHandle, ForwardedRef } from "react";
import gsap from "gsap";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { TOTAL_STEPS, TOTAL_FRAMES_TO_LOAD } from "../data";

interface UseTunnelScrollProps {
  isLoaded: boolean;
  renderFrame: (_frameIndex: number) => void;
  textTimeline: React.RefObject<gsap.core.Timeline | null>;
  ref: ForwardedRef<ScrollableSectionHandle>;
}

export const useTunnelScroll = ({
  isLoaded,
  renderFrame,
  textTimeline,
  ref,
}: UseTunnelScrollProps) => {
  const currentStep = useRef(0);
  const isAnimating = useRef(false);
  const progressProxy = useRef({ value: 0 });

  useImperativeHandle(ref, () => ({
    onScroll: (direction) => {
      if (!isLoaded || isAnimating.current) return true;

      let nextStep = currentStep.current;

      if (direction === "next") {
        if (currentStep.current >= TOTAL_STEPS - 1) return false;
        nextStep++;
      } else {
        if (currentStep.current <= 0) return false;
        nextStep--;
      }

      const targetProgress = nextStep / (TOTAL_STEPS - 1);
      isAnimating.current = true;

      gsap.to(progressProxy.current, {
        value: targetProgress,
        duration: 0.8,
        ease: "power2.inOut",
        onUpdate: () => {
          const p = progressProxy.current.value;
          // Calculate frame logic mapping 0-1 to frame indices
          const frameIndex = p * (TOTAL_FRAMES_TO_LOAD - 1);
          renderFrame(frameIndex);

          if (textTimeline.current) {
            textTimeline.current.progress(p);
          }
        },
        onComplete: () => {
          isAnimating.current = false;
          currentStep.current = nextStep;
        },
      });

      return true;
    },
  }));

  return { progressProxy };
};
