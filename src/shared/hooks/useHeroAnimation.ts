import { useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

interface UseHeroAnimationProps {
  checkpoints: number[];
  totalFrames: number;
  isLoaded: boolean;
  renderFrame: (_frame: number) => void;
  onCheckpointChange: (_index: number) => void;
  onProgress?: (_progress: number) => void;
  scrollsRequired?: number;
}

export const useHeroAnimation = ({
  checkpoints,
  totalFrames,
  isLoaded,
  renderFrame,
  onCheckpointChange,
  onProgress,
  scrollsRequired = 1,
}: UseHeroAnimationProps) => {
  const currentCheckpointIndex = useRef(0);
  const scrollAccumulator = useRef(0);
  const isAnimating = useRef(false);

  const status = useRef({
    frame: 0,
    maxFrames: totalFrames - 1,
  });

  const getCurrentFrame = () => status.current.frame;

  const triggerAnimation = (targetIndex: number, targetFrame: number) => {
    isAnimating.current = true;
    onCheckpointChange(targetIndex);

    gsap.to(status.current, {
      frame: targetFrame,
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.504,0.299 0.502,0.698 1,1 "),
      onUpdate: () => {
        renderFrame(status.current.frame);
        if (onProgress) onProgress(status.current.frame / (totalFrames - 1));
      },
      onComplete: () => {
        isAnimating.current = false;
        currentCheckpointIndex.current = targetIndex;
        scrollAccumulator.current = 0;
        renderFrame(targetFrame);
      },
    });
  };

  const handleScroll = (direction: "next" | "prev"): boolean => {
    if (!isLoaded || isAnimating.current) return true;

    const maxCheckpointIndex = checkpoints.length - 1;

    if (direction === "next") {
      if (scrollAccumulator.current < 0) scrollAccumulator.current = 0;
      if (currentCheckpointIndex.current >= maxCheckpointIndex) return false;

      scrollAccumulator.current++;

      if (scrollAccumulator.current >= scrollsRequired) {
        const nextIndex = currentCheckpointIndex.current + 1;
        triggerAnimation(nextIndex, checkpoints[nextIndex]);
      }
      return true;
    } else {
      if (scrollAccumulator.current > 0) scrollAccumulator.current = 0;
      if (currentCheckpointIndex.current <= 0) return false;

      scrollAccumulator.current--;

      if (scrollAccumulator.current <= -scrollsRequired) {
        const prevIndex = currentCheckpointIndex.current - 1;
        triggerAnimation(prevIndex, checkpoints[prevIndex]);
      }
      return true;
    }
  };

  return { handleScroll, getCurrentFrame };
};