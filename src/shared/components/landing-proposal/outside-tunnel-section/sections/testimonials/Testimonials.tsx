"use client";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { TestimonialNavigation } from "./TestimonialNavigation";
import { TestimonialMarquee } from "./TestimonialMarquee";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <UiSection>
      <div className="flex flex-col h-full justify-between relative">
        
        <div className="h-full flex items-center relative w-full">          
          <div className="relative  w-full max-xl:flex flex-col-reverse max-sm:items-center max-xl:gap-6">
            <TestimonialNavigation onPrev={handlePrev} onNext={handleNext} />
            <TestimonialCarousel
              onSwiperInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            />
          </div>
        </div>

        <TestimonialMarquee />
      </div>
    </UiSection>
  );
};

export default Testimonials;
