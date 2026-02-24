import { useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import useBreakpoint from "@/shared/hooks/useBreakpoint";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

interface UseSectionScrollerProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  sectionRefs: React.MutableRefObject<HTMLDivElement[]>;
  childRefs: React.MutableRefObject<(ScrollableSectionHandle | null)[]>;
}

export const useSectionScroller = ({
  containerRef,
  sectionRefs,
  childRefs,
}: UseSectionScrollerProps) => {
  const currentIndexRef = useRef(0);
  const isMobile = useBreakpoint();

  useGSAP(
    () => {
      const slides = sectionRefs.current;
      if (!slides.length) return;

      gsap.set(slides, { zIndex: 0, autoAlpha: 0 });
      gsap.set(slides[0], { zIndex: 1, autoAlpha: 1 });

      const gotoSection = (index: number) => {
        if (index < 0 || index >= slides.length) return;

        const currentSlide = slides[currentIndexRef.current];
        const nextSlide = slides[index];

        gsap.set(currentSlide, { zIndex: 0, autoAlpha: 0 });
        gsap.set(nextSlide, { zIndex: 1, autoAlpha: 1 });

        currentIndexRef.current = index;
      };

      const handleScrollAttempt = (direction: "next" | "prev") => {
        const currentChildRef = childRefs.current[currentIndexRef.current];

        if (currentChildRef && currentChildRef.onScroll) {
          const didConsume = currentChildRef.onScroll(direction);
          if (didConsume) return;
        }

        const nextIndex =
          direction === "next"
            ? currentIndexRef.current + 1
            : currentIndexRef.current - 1;
        gotoSection(nextIndex);
      };

      const scrollObserver = Observer.create({
        target: containerRef.current,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => handleScrollAttempt("prev"),
        onUp: () => handleScrollAttempt("next"),
        tolerance: 30,
        preventDefault: true,
        ignore: isMobile ? ".swiper, .swiper *" : "",
      });

      return () => scrollObserver.kill();
    },
    { scope: containerRef }
  );
};