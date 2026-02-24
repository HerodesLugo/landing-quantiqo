import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useTunnelAnimation = (containerRef: React.RefObject<HTMLDivElement>) => {
  const textTimeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".word-item");
      if (words.length === 0) return;

      // INITIAL STATE
      gsap.set(words, {
        autoAlpha: 0,
        scale: 0.5,
        filter: "blur(10px)",
        z: -50,
      });

      // Show First
      gsap.set(words[0], {
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        z: 0,
      });

      textTimeline.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power1.inOut" },
      });

      const interval = 1 / (words.length - 1);

      words.forEach((word, i) => {
        const peakTime = i * interval;

        if (i > 0) {
          textTimeline.current?.fromTo(
            word,
            { autoAlpha: 0, scale: 0.5, filter: "blur(10px)", z: -100 },
            {
              autoAlpha: 1,
              scale: 1,
              filter: "blur(0px)",
              z: 0,
              duration: interval,
              ease: "power1.inOut",
            },
            peakTime - interval
          );
        } else {
          textTimeline.current?.set(
            word,
            { autoAlpha: 1, scale: 1, filter: "blur(0px)", z: 0 },
            0
          );
        }

        if (i < words.length - 1) {
          textTimeline.current?.to(
            word,
            {
              autoAlpha: 0,
              scale: 2,
              filter: "blur(20px)",
              z: 100,
              duration: interval,
              ease: "power1.in",
            },
            peakTime
          );
        }
      });
    },
    { scope: containerRef }
  );

  return { textTimeline };
};
