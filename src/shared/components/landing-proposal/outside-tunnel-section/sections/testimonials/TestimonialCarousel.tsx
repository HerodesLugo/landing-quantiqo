import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS_DATA } from "./data";
import "swiper/css";
import "swiper/css/navigation";

interface TestimonialCarouselProps {
  onSwiperInit: (_swiper: SwiperType) => void;
}

export const TestimonialCarousel = ({
  onSwiperInit,
}: TestimonialCarouselProps) => {
  return (
    <div className="w-full xl:pl-60 overflow-visible">
      <Swiper
        onBeforeInit={onSwiperInit}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        centeredSlides={false}
        loop={true}
        className="!overflow-visible"
      >
        {TESTIMONIALS_DATA.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-auto transition-all duration-500 ease-out custom-slide-transition"
          >
            {({ isActive, isNext }) => (
              <div
                className={clsx(
                  "transition-all bg-[rgba(52,_55,_66,_0.50)] backdrop-blur-[48.053993225097656px] rounded-3xl duration-500 ease-out transform",
                  isActive
                    ? "opacity-100 scale-100 blur-0 grayscale-0"
                    : "",
                  isNext
                    ? "opacity-40 scale-95 blur-[2px] grayscale"
                    : "",
                  !isActive && !isNext
                    ? "opacity-10 scale-90 blur-md"
                    : ""
                )}
              >
                <TestimonialCard data={item} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
