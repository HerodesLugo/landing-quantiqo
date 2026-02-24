import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "../data";

// Helper function to calculate position
export const getTargetPosition = (index: number, expanded: boolean) => {
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
  
  const gap = 40; // gap-10 = 40px
  const isMobile = screenWidth < 640;
  const collapsedWidth = isMobile ? 360 : 795; 
  
  const slideWidth = expanded ? screenWidth : collapsedWidth;
  const currentPos = index * (slideWidth + gap);

  if (expanded) {
    const centerOffset = (screenWidth - slideWidth) / 2;
    return centerOffset - currentPos;
  }
  
  const standardPadding = isMobile ? 20 : 80;
  const totalSlides = PROJECTS.length;
  
  if (totalSlides > 1) {
    const maxOffset = screenWidth - slideWidth - standardPadding;
    const t = index / (totalSlides - 1);
    const targetOffset = standardPadding + (maxOffset - standardPadding) * t;
    return targetOffset - currentPos;
  }
  
  return standardPadding - currentPos;
};

// Custom hook to handle all logic for Projects Component
export const useProjects = (isActive: boolean) => {
  const [showExpanded, setShowExpanded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLocked, setIsLocked] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isSwiping = useRef(false);

  // Resize Listener
  useEffect(() => {
    const handleResize = () => {
      if (!slidesContainerRef.current) return;
      const targetX = getTargetPosition(activeIndex, showExpanded);
      gsap.set(slidesContainerRef.current, { x: targetX });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, showExpanded]);

  // Expansion/Contraction and Navigation Animation
  useGSAP(() => {
    if (!slidesContainerRef.current || !carouselWrapperRef.current) return;

    setIsTransitioning(true);
    isSwiping.current = true;

    const timeline = gsap.timeline({
      defaults: { overwrite: "auto" },
      onComplete: () => {
        isSwiping.current = false;
        setIsTransitioning(false);
      },
    });

    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      if (showExpanded) {
        if (i !== activeIndex) {
          timeline.to(slide, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0);
        } else {
          timeline.to(slide, { opacity: 1, duration: 0.4, ease: "power2.inOut" }, 0);
        }
      } else {
        timeline.to(slide, { opacity: 1, duration: 0.4, ease: "power2.inOut" }, 0);
      }
    });

    const targetX = getTargetPosition(activeIndex, showExpanded);

    timeline.to(
      slidesContainerRef.current,
      { x: targetX, duration: 0.8, ease: "power2.out" },
      0
    );

    timeline.to(
      carouselWrapperRef.current,
      { duration: 0.8, ease: "power2.out" },
      0
    );
  }, [showExpanded, activeIndex]);

  // Entrance and Exit Animation
  useGSAP(() => {
    const content = contentRef.current;
    if (!content) return;

    if (isActive) {
      gsap.killTweensOf(content);
      gsap.fromTo(
        content,
        { autoAlpha: 0, xPercent: 100 },
        {
          autoAlpha: 1,
          xPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
          onComplete: () => setIsLocked(false),
        },
      );
    } else {
      gsap.to(content, {
        autoAlpha: 0,
        xPercent: 0,
        duration: 0.5,
        ease: "power3.in",
        overwrite: true,
        onComplete: () => {
          setIsLocked(true);
          if (showExpanded) setShowExpanded(false);
        },
      });
    }
  }, [isActive]);

  const handleClickSlide = (index: number) => {
    if (isTransitioning) return; 

    if (activeIndex === index && showExpanded) {
      setShowExpanded(false);
      return;
    }

    if (!showExpanded) {
      setActiveIndex(index);
      setTimeout(() => setShowExpanded(true), 100);
    } else {
      setActiveIndex(index);
    }
  };

  const handleScroll = (direction: "next" | "prev"): boolean => {
    if (!isActive) return false;
    if (isLocked) return true;
    if (isSwiping.current || isTransitioning) return true;

    if (direction === "next") {
      if (activeIndex < PROJECTS.length - 1) {
        setActiveIndex((prev) => prev + 1);
        return true;
      }
      return false;
    } else {
      if (activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
        return true;
      }
      if (showExpanded) {
        setShowExpanded(false);
        return true;
      }
      return false;
    }
  };

  return {
    state: { showExpanded, activeIndex, isTransitioning },
    refs: { containerRef, contentRef, slidesContainerRef, carouselWrapperRef, slideRefs },
    handlers: { handleClickSlide, handleScroll },
  };
};
