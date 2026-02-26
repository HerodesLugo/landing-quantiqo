"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionProps } from "@/shared/components/landing-proposal/hero-section/sections/types";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";

const ThirdSection = ({ isActive }: SectionProps) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const leftTitle = gsap.utils.toArray<HTMLElement>(".anim-title-left");
      const rightTitle = gsap.utils.toArray<HTMLElement>(".anim-title-right");
      const leftContentGroup = [
        ".anim-labels-row-1 > *",
        ".anim-label-single",
        ".anim-text-block",
      ];

      gsap.set(leftTitle, { autoAlpha: 0, x: -50 });
      gsap.set(rightTitle, { autoAlpha: 0, x: 50 });
      gsap.set(leftContentGroup, { autoAlpha: 0, y: 30 });

      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      });

      tl.current
        .to(leftTitle, {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        })
        .to(
          rightTitle,
          {
            autoAlpha: 1,
            x: 0,
            duration: 1,
          },
          "<",
        )
        .to(
          leftContentGroup,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.5",
        );
    },
    { scope: container },
  );

  useGSAP(() => {
    if (isActive) {
      tl.current?.timeScale(1).play();
    } else {
      tl.current?.timeScale(2.5).reverse();
    }
  }, [isActive]);

  return (
    <UiSection>
      <div ref={container} className="size-full flex flex-col justify-center">
        {/* <div className="sm:block hidden"></div> */}

        <div className="flex flex-col gap-3 sm:gap-8 max-sm:h-full">
          
          <div className="justify-start  anim-title-left will-change-transform   ">
            <span className="text-white  text-3xl sm:text-5xl font-bold uppercase tracking-[5px] leading-8 sm:leading-16 block">
              strategy
              <br />
            </span>
            <span className="text-sky-100  text-3xl sm:text-5xl font-normal uppercase tracking-[5px] sm:leading-16 block">
              and execution
            </span>
          </div>

          <div className="flex flex-col max-sm:gap-5 sm:gap-10 ">
            <div className="sm:w-[456px] justify-start anim-text-block will-change-transform">
              <span className="text-white text-lg font-bold ">
                Bringing strategy and story to life.{" "}
              </span>
              <span className="text-white text-base font-light ">
                We align brand and performance across everything from analysis,
                to design, development and full launchs and restructurations.
              </span>
            </div>
          </div>

        </div>

        <div className="justify-end max-sm:flex">
          <div className="sm:text-right sm:justify-start sm:pr-20 xl:pr-52 max-sm:mb-7 anim-title-right will-change-transform">
            <span className="text-white  text-3xl sm:text-5xl font-normal leading-8 sm:leading-16 uppercase tracking-[5px] block">
              integral
              <br />
            </span>
            <span className="text-sky-100  text-3xl sm:text-5xl font-bold sm:leading-16 uppercase tracking-[5px] block">
              consulting
            </span>
          </div>
        </div>
      </div>
    </UiSection>
  );
};

export default ThirdSection;
