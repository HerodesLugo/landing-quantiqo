/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { useSectionScroller } from "@/shared/hooks/useSectionScroller";
import React, { useRef, ReactElement } from "react";
import { SectionScrollerProps } from "./types";

const SectionScroller = ({ children }: SectionScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<(ScrollableSectionHandle | null)[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const sections = React.Children.toArray(children);

  useSectionScroller({
    containerRef,
    sectionRefs,
    childRefs,
  });

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
