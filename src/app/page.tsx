"use client";
import SectionScroller from "@/shared/components/ui/scroll/SectionScroller";
import AnimatedSection from "@/shared/components/ui/scroll/animated-section/AnimatedSection";
import { HERO_FRAMES } from "@/shared/components/landing-proposal/hero-section/data";
import { FIRST_SECTION_CONFIG } from "@/shared/components/landing-proposal/hero-section/SectionsConfig";
import Loading from "@/shared/components/layout/Loading";
import { useLoading } from "@/shared/hooks/useLoading";
import { useOutsideConfig } from "@/shared/hooks/useOutsideConfig";

const Page = () => {
  const { isLoading, progress } = useLoading();
  const { sections, frames } = useOutsideConfig();

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
        sections={sections}
        overlayClassName="bg-black/70"
        checkpoints={frames}
        showIconStack
      />
    </SectionScroller>
  );
};

export default Page;

