"use client";
import SectionScroller from "@/shared/components/ui/scroll/SectionScroller";
import AnimatedSection from "@/shared/components/ui/scroll/animated-section/AnimatedSection";
import {
  HERO_FRAMES,
  OUTSIDE_FRAMES,
} from "@/shared/components/landing-proposal/hero-section/data";
import {
  FIRST_SECTION_CONFIG,
  SECOND_SECTION_CONFIG,
} from "@/shared/components/landing-proposal/hero-section/SectionsConfig";
import Loading from "@/shared/components/layout/Loading";
import { useLoading } from "@/shared/hooks/useLoading";
// import CalendlyModal from "@/shared/components/ui/modals/CalendlyModal";

const Page = () => {
  const { isLoading, progress } = useLoading();

  if (isLoading) return <Loading progress={progress} />;

  return (
    <SectionScroller>
     {/* <CalendlyModal /> */}
      <AnimatedSection
        sections={FIRST_SECTION_CONFIG}
        showScrollIndicator
        showDecorations
        overlayClassName="max-sm:bg-black/50"
        checkpoints={HERO_FRAMES}
      />
      <AnimatedSection
        sections={SECOND_SECTION_CONFIG}
        overlayClassName="bg-black/70"
        checkpoints={OUTSIDE_FRAMES}
        showIconStack
      />
    </SectionScroller>
  );
};

export default Page;
