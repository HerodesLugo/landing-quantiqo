/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { useSectionScroller } from "@/shared/hooks/useSectionScroller";
import React, { useRef, ReactElement, useEffect } from "react";
import { SectionScrollerProps } from "./types";
import { useSectionStore, NavigationTarget } from "@/shared/store/useSectionStore";
import { HERO_CHECKPOINTS, OUTSIDE_CHECKPOINTS } from "@/shared/components/landing-proposal/hero-section/data";

const NAV_TARGET_MAP: Record<
  NonNullable<NavigationTarget>,
  { sectionIndex: number; checkpointIndex: number }
> = {
  HOME:       { sectionIndex: 0, checkpointIndex: HERO_CHECKPOINTS.FIRST },
  PROJECTS:   { sectionIndex: 0, checkpointIndex: HERO_CHECKPOINTS.PROJECTS },
  INDUSTRIES: { sectionIndex: 1, checkpointIndex: OUTSIDE_CHECKPOINTS.INDUSTRIES },
  SOLUTIONS:  { sectionIndex: 1, checkpointIndex: OUTSIDE_CHECKPOINTS.SOLUTIONS },
  CLIENTS:    { sectionIndex: 1, checkpointIndex: OUTSIDE_CHECKPOINTS.TESTIMONIALS },
  ABOUT:      { sectionIndex: 1, checkpointIndex: OUTSIDE_CHECKPOINTS.BACKED },
};

const SectionScroller = ({ children }: SectionScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<(ScrollableSectionHandle | null)[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const currentIndexRef = useRef(0);

  const { navigationTarget, navigateTo, setSectionActiveName } = useSectionStore();

  const sections = React.Children.toArray(children);

  const { gotoSection } = useSectionScroller({
    containerRef,
    sectionRefs,
    childRefs,
    currentIndexRef,
  });

  useEffect(() => {
    if (!navigationTarget) return;

    const target = NAV_TARGET_MAP[navigationTarget];
    if (!target) return;

    const { sectionIndex, checkpointIndex } = target;

    gotoSection(sectionIndex);
    setSectionActiveName(navigationTarget);

    const sectionRef = childRefs.current[sectionIndex];
    if (sectionRef?.jumpToCheckpoint) {
      requestAnimationFrame(() => {
        sectionRef.jumpToCheckpoint!(checkpointIndex);
      });
    }

    navigateTo(null);
  }, [navigationTarget, navigateTo, gotoSection, setSectionActiveName]);

  const renderChild = (child: React.ReactNode, i: number) => {
    const isValidElement = React.isValidElement(child);

    if (isValidElement) {
      return React.cloneElement(child as ReactElement<any>, {
        ref: (el: ScrollableSectionHandle | null) => {
          childRefs.current[i] = el;
        },
        index: i,
      });
    }

    return child;
  };

  const handleRef = (el: HTMLDivElement | null, i: number) => {
    if (el) sectionRefs.current[i] = el;
  };

  return (
    <main
      ref={containerRef}
      className="h-dvh w-full overflow-hidden relative"
    >
      {sections.map((child, i) => (
        <div
          key={i}
          ref={(el) => handleRef(el, i)}
          className="absolute inset-0 will-change-[opacity,transform]"
        >
          {renderChild(child, i)}
        </div>
      ))}
    </main>
  );
};

export default SectionScroller;
