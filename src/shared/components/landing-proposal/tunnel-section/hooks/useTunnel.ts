import { useRef, ForwardedRef, useCallback } from "react";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { useHeroImages } from "@/shared/hooks/useImages";
import { useHeroCanvas } from "@/shared/hooks/useCanvas";
import { TOTAL_FRAMES_TO_LOAD } from "../data";
import { useTunnelAnimation } from "./useTunnelAnimation";
import { useTunnelScroll } from "./useTunnelScroll";
import { TUNNEL_BASE_URL } from "@/shared/constant/frames";

export const useTunnel = (ref: ForwardedRef<ScrollableSectionHandle>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { images, isLoaded } = useHeroImages(
    TOTAL_FRAMES_TO_LOAD,
    TUNNEL_BASE_URL,
  );

  const getCurrentFrame = useCallback(() => 0, []);

  const { renderFrame } = useHeroCanvas(
    canvasRef as React.RefObject<HTMLCanvasElement>,
    images,
    isLoaded,
    getCurrentFrame,
  );

  const { textTimeline } = useTunnelAnimation(
    containerRef as React.RefObject<HTMLDivElement>,
  );

  useTunnelScroll({
    isLoaded,
    renderFrame,
    textTimeline,
    ref,
  });

  return {
    refs: {
      containerRef,
      canvasRef,
    },
    state: {
      isLoaded,
    },
  };
};
