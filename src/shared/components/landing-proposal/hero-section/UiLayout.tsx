"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/shared/components/ui/button";
import ScrollDown from "@/shared/components/landing-proposal/hero-section/common/ScrollDown";

interface UiLayoutProps {
  scrollDown: boolean;
}

const UiLayout = ({ scrollDown }: UiLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const titleLines = gsap.utils.toArray<HTMLElement>(".title-line");
      const bottomElements = gsap.utils.toArray<HTMLElement>(".bottom-element");

      gsap.set([titleLines, bottomElements], {
        autoAlpha: 0,
        y: 40,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      });
      gsap.set([titleLines, bottomElements], {
        autoAlpha: 0,
        y: 50,
        clipPath: "none",
      });

      tl.current = gsap.timeline({ paused: true });

      tl.current.to(titleLines, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      tl.current.to(
        bottomElements,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    if (scrollDown) {
      tl.current?.timeScale(1).play();
    } else {
      tl.current?.timeScale(2.5).reverse();
    }
  }, [scrollDown]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex  flex-col justify-end sm:max-w-[calc(100%-8.25rem)] mx-auto py-16 max-sm:pt-28 max-sm:px-5"
    >
      <div className="flex justify-between sm:items-end max-sm:h-full  max-sm:flex-col">
        <div className="flex flex-col items-start gap-4 sm:gap-8 relative z-50">
          
          <div className=" text-2xl sm:text-5xl flex flex-col sm:gap-3 font-medium uppercase tracking-[5px]">
            <div className="title-line will-change-transform">
              The <span className="text-primary-100">full-service </span>
            </div>
            <div className="title-line will-change-transform">
              <span className="text-primary-100">agency </span> that your
            </div>
            <div className="title-line will-change-transform">
              business deserves
            </div>
          </div>

          <div className="flex max-sm:flex-col  max-sm:w-full sm:items-center gap-5 max-sm:max-w-[23.75rem]">
            <div className="bottom-element will-change-transform">
              <Button className="h-16 flex relative overflow-hidden xl:w-[16.875rem] w-[13rem] max-xl:text-base max-sm:h-14 ">
                book now
              </Button>
            </div>
            <div className="sm:w-[23.75vw] justify-start bottom-element will-change-transform">
              <span className="text-white text-base font-bold ">
                With us you get a full-suite of high-end professionals
              </span>
              <span className="text-white text-base font-normal ">
                {" "}
                from design, to animation, development and advisory{" "}
              </span>
              <span className="text-white text-base font-bold ">
                ready to take your business to the next level.
              </span>
            </div>
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-24 max-sm:left-5 max-sm:bottom-10  bottom-element z-50 sm:inset-x-0">
        <ScrollDown />
      </div>
    </div>
  );
};

export default UiLayout;
