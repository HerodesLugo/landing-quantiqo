"use client";
import { useState, useEffect } from "react";
import SectionScroller from "@/shared/components/ui/scroll/SectionScroller";
import AnimatedSection from "@/shared/components/ui/scroll/animated-section/AnimatedSection";
import { HERO_FRAMES, OUTSIDE_FRAMES, OUTSIDE_CHECKPOINTS } from "@/shared/components/landing-proposal/hero-section/data";
import { FIRST_SECTION_CONFIG, SECOND_SECTION_CONFIG } from "@/shared/components/landing-proposal/hero-section/SectionsConfig";
import Loading from "@/shared/components/layout/Loading";
import { useLoading } from "@/shared/hooks/useLoading";
import useBreakpoint from "@/shared/hooks/useBreakpoint";

const Page = () => {
  const { isLoading, progress } = useLoading();
  const isMobile = useBreakpoint(768);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shouldHideTestimonials = isClient && isMobile;

  const outsideConfig = shouldHideTestimonials
    ? SECOND_SECTION_CONFIG.filter(
        (c) => c.checkpoint !== OUTSIDE_CHECKPOINTS.TESTIMONIALS
      ).map((c, i) => ({ ...c, checkpoint: i }))
    : SECOND_SECTION_CONFIG;

  const outsideFrames = shouldHideTestimonials
    ? OUTSIDE_FRAMES.filter((_, i) => i !== OUTSIDE_CHECKPOINTS.TESTIMONIALS)
    : OUTSIDE_FRAMES;

  if (isLoading) return <Loading progress={progress} />;

  return (
    <SectionScroller>
      <AnimatedSection
        sections={FIRST_SECTION_CONFIG}
        showScrollIndicator
        showDecorations
        overlayClassName="max-sm:bg-black/50"
        checkpoints={HERO_FRAMES}
      />
      <AnimatedSection
        sections={outsideConfig}
        overlayClassName="bg-black/70"
        checkpoints={outsideFrames}
        showIconStack
      />
    </SectionScroller>
  );
};

export default Page;
