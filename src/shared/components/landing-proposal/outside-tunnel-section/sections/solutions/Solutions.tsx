"use client";
import { useRef } from "react";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";
import { useSolutionsAnimation } from "./hooks/useSolutionsAnimation";
import { SolutionsHeader } from "./SolutionsHeader";
import { SolutionsOtherServices } from "./SolutionsOtherServices";
import { SolutionsAccordion } from "./SolutionsAccordion";

interface SolutionsProps {
  isActive: boolean;
}

const Solutions = ({ isActive }: SolutionsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useSolutionsAnimation(
    isActive,
    containerRef as React.RefObject<HTMLDivElement>,
  );

  return (
    <UiSection>
      <div
        ref={containerRef}
        className="flex max-sm:flex-col h-full   sm:items-center relative sm:justify-between sm:pt-10 sm:pr-20 "
      >
        <div className="flex flex-col max-sm:gap-6 max-sm:h-full">
          <SolutionsHeader />
          <div className="block sm:hidden h-full">
            <SolutionsAccordion />
          </div>
          <div className="max-sm:hidden ">
            <SolutionsOtherServices />
          </div>
        </div>

        <div className="hidden sm:block ">
          <SolutionsAccordion />
        </div>
      </div>
    </UiSection>
  );
};

export default Solutions;
