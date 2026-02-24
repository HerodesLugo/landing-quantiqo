"use client";
import { useState, forwardRef, useRef } from "react";
import { AnimatedSectionProps } from "@/shared/components/ui/scroll/animated-section/types";
import { useScrollDelegation } from "@/shared/hooks/useScrollDelegation";
import HeroSection from "@/shared/components/landing-proposal/hero-section/Herosection";
import SectionWrapper from "@/shared/components/landing-proposal/hero-section/common/SectionWrapper";
import Decorators from "@/shared/components/ui/scroll/animated-section/Decorator";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";

const LAST_CHECKPOINT_FIRTS_SECTION = 4;

const AnimatedSection = forwardRef<
  ScrollableSectionHandle,
  AnimatedSectionProps
>((props, ref) => {
  //props
  const {
    sections,
    showScrollIndicator = false,
    showDecorations = false,
    overlayClassName = "",
    checkpoints,
    showIconStack = false,
  } = props;
  //states
  const [activeCheckpoint, setActiveCheckpoint] = useState<number>(0);
  //refs
  const heroRef = useRef<ScrollableSectionHandle>(null);
  //hooks 
  const { sectionRefs } = useScrollDelegation({
    activeCheckpoint,
    heroRef,
    sections,
    ref,
  });
  //variables
  const isLastFrame = activeCheckpoint > LAST_CHECKPOINT_FIRTS_SECTION;
  //functions
  const renderSections = () => {
    return sections.map((section, index) => {
      const SectionComponent = section.component;
      const isActive = activeCheckpoint === section.checkpoint;

      const handleRef = (el: ScrollableSectionHandle | null) => {
        sectionRefs.current[index] = el;
      };

      return (
        <SectionWrapper key={index} isActive={isActive}>
          {section.hasRef ? (
            <SectionComponent ref={handleRef} isActive={isActive} />
          ) : (
            <SectionComponent isActive={isActive} />
          )}
        </SectionWrapper>
      );
    });
  };

  return (
    <>
      <HeroSection
        ref={heroRef}
        isFinished={true}
        onCheckpointChange={setActiveCheckpoint}
        checkpoints={checkpoints}
      />

      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}

      {renderSections()}

      <Decorators
        activeCheckpoint={activeCheckpoint}
        isLastFrame={isLastFrame}
        showDecorations={showDecorations}
        showScrollIndicator={showScrollIndicator}
        showIconStack={showIconStack}
      />
    </>
  );
});

AnimatedSection.displayName = "AnimatedSection";
export default AnimatedSection;
