"use client";
import { useRef } from "react";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";
import { useSolutionsAnimation } from "./hooks/useSolutionsAnimation";
import { SolutionsHeader } from "./SolutionsHeader";
import { SolutionsOtherServices } from "./SolutionsOtherServices";
import { SolutionsAccordion } from "./SolutionsAccordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SOLUTIONS_DATA } from "./data";
import { SolutionAccordionItem } from "./SolutionAccordionItem";

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
        className="flex max-sm:flex-col h-full  items-center relative justify-between sm:pt-10 sm:pr-20"
      >
        <div className="flex flex-col  max-sm:h-full justify-between">
          <SolutionsHeader />

          <div className="w-full sm:hidden  min-h-[260px]"></div>
          {/* Mobile Swiper Slider */}
          <div className="w-full  flex-grow absolute top-0 left-0 flex-1 min-h-[400px] flex flex-col justify-center sm:hidden overflow-hidden my-6">
            <Swiper
              spaceBetween={24}
              slidesPerView={1.1}
              className="w-full h-full"
            >
              {SOLUTIONS_DATA.map((solution) => (
                <SwiperSlide key={solution.title} className="!h-auto flex">
                  <div className="w-full h-full ">
                    <SolutionAccordionItem
                      solution={solution}
                      isMobileSlider={true}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <SolutionsOtherServices />
        </div>

        {/* Desktop Accordion */}
        <div className="hidden xl:flex">
          <SolutionsAccordion />
        </div>
      </div>
    </UiSection>
  );
};

export default Solutions;
