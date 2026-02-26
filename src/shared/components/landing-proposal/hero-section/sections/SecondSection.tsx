"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionProps } from "@/shared/components/landing-proposal/hero-section/sections/types";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";

const SecondSection = ({ isActive }: SectionProps) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const titleLines = gsap.utils.toArray<HTMLElement>(".anim-title");
      const labelGroups = gsap.utils.toArray<HTMLElement>(".anim-label-group > *");
      const bottomText = gsap.utils.toArray<HTMLElement>(".anim-text");

      gsap.set([...titleLines, ...labelGroups, ...bottomText], {
        autoAlpha: 0,
        y: 30,
      });

      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      });

      tl.current
        .to(titleLines, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        })
        .to(
          labelGroups,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
          },
          "-=0.6",
        )
        .to(
          bottomText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
    },
    { scope: container },
  );

  useGSAP(() => {
    if (isActive) {
      tl.current?.timeScale(1).play();
    } else {
      tl.current?.timeScale(2).reverse();
    }
  }, [isActive]);

  return (
    <UiSection>
      <div
        ref={container}
        className="size-full sm:justify-center max-sm:justify-between flex  flex-col sm:gap-20 2xl:gap-32 "
      >
        <div className="flex flex-col gap-4  ">
          
          <div className="justify-start ui-title flex flex-col ">
            <span className="anim-title text-primary-100  text-3xl  sm:text-5xl font-semibold uppercase tracking-[5px] leading-8  sm:leading-16 block will-change-transform">
              SUCCESSFULL <br />
              
              BRANDS <span className="text-white font-light">AND</span>
            </span>
            <span className="anim-title text-white  text-3xl  sm:text-5xl font-light uppercase tracking-[5px] sm:leading-16 block will-change-transform">
              IDENTITIES
            </span>
          </div>          
        </div>

        <div className="flex flex-col gap-10 ui-bottom">
          <div className="sm:w-[555px] max-sm:w-[22.5rem] justify-start anim-text will-change-transform">
            <span className="text-white text-base font-semibold ">
              We specialize in working with digital products and brands,
              regardless of the size and lifecycle stage
            </span>
            <span className="text-white text-base font-light ">
              , from startups to established businesses striving to achieve
              significant tech leverage. <br />
              <br />
              Designing the interfaces of what’s next. We build scalable,
              intuitive platforms and tools trusted by millions.
            </span>
          </div>
        </div>
      </div>
    </UiSection>
  );
};

export default SecondSection;
