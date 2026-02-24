"use client";
import { useRef, useImperativeHandle, forwardRef, RefObject } from "react";
import { useHeroImages } from "@/shared/hooks/useImages";
import { useHeroAnimation } from "@/shared/hooks/useHeroAnimation";
import { useHeroCanvas } from "@/shared/hooks/useCanvas";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { HERO_BASE_URL } from "@/shared/constant/frames";

interface HeroProps {
  onProgress?: (_progress: number) => void;
  isFinished: boolean;
  onCheckpointChange: (_index: number) => void;
  checkpoints: number[];
}

const TOTAL_FRAMES = 313;

const BASE_IMAGE_PATH = HERO_BASE_URL;

const HeroSection = forwardRef<ScrollableSectionHandle, HeroProps>(
  ({ isFinished, onProgress, onCheckpointChange, checkpoints }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { images, isLoaded } = useHeroImages(TOTAL_FRAMES, BASE_IMAGE_PATH);

    const { handleScroll, getCurrentFrame } = useHeroAnimation({
      checkpoints,
      totalFrames: TOTAL_FRAMES,
      isLoaded,
      onCheckpointChange,
      onProgress,
      renderFrame: (frame) => renderFrame(frame),
    });

    const { renderFrame } = useHeroCanvas(
      canvasRef as RefObject<HTMLCanvasElement>,
      images,
      isLoaded,
      getCurrentFrame
    );

    useImperativeHandle(ref, () => ({
      onScroll: (direction) => handleScroll(direction),
    }));

    return (
      <div
        className={`fixed inset-0 w-full h-full transition-all duration-700 ${
          isFinished ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <canvas ref={canvasRef} className="block w-full h-full object-cover" />
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";
export default HeroSection;