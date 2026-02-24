"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import QuantiqoLabel from "@/shared/components/landing-proposal/hero-section/common/QuantiqoLabel";
import { SectionProps } from "@/shared/components/landing-proposal/hero-section/sections/types";
import Solutions from "@/shared/components/landing-proposal/hero-section/common/Solutions";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";

const FifthSection = ({ isActive }: SectionProps) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const titleLines = gsap.utils.toArray<HTMLElement>(".anim-title");
      const labels = gsap.utils.toArray<HTMLElement>(".anim-label-wrapper");
      const textBlock = gsap.utils.toArray<HTMLElement>(".anim-text");
      const solutions = gsap.utils.toArray<HTMLElement>(".anim-solutions");

      gsap.set(titleLines, { autoAlpha: 0, x: -50 });
      gsap.set([labels, textBlock, solutions], { autoAlpha: 0, y: 30 });

      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      });

      tl.current
        .to(titleLines, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
        })
        .to(
          labels,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
          },
          "-=0.4",
        )
        .to(
          textBlock,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.3",
        )
        .to(
          solutions,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6",
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
      <div ref={container} className="size-full flex flex-col justify-between">
        <div className="mt-10 sm:block hidden h-full"></div>
        <div className="flex flex-col  sm:h-full gap-4 sm:justify-between">
          <div className="justify-start xl:pl-20  ">
            <div className="justify-start flex flex-col">
              <span className="anim-title text-white  text-2xl sm:text-5xl font-bold uppercase tracking-[5px] sm:leading-16 block will-change-transform">
                full-stack
                <br />
              </span>
              <span className="anim-title text-primary-100  text-2xl sm:text-5xl font-light uppercase tracking-[5px] sm:leading-16 block will-change-transform">
                development
              </span>
            </div>
          </div>
          <div className="flex flex-col max-sm:gap-3 sm:gap-4 max-sm:items-start">
            
            <div className="flex max-sm:gap-3 sm:gap-5 max-sm:flex-col">
              <div className="anim-label-wrapper will-change-transform">
                <QuantiqoLabel label="Dev Ops" />
              </div>

              <div className="anim-label-wrapper will-change-transform">
                <QuantiqoLabel label="Development Architecture" />
              </div>
            </div>

            <div className="flex max-sm:gap-3 sm:gap-5 sm:items-center max-sm:flex-col">
              <div className="anim-label-wrapper will-change-transform">
                <QuantiqoLabel label="Full Stack Development" />
              </div>

              <div className="anim-label-wrapper will-change-transform">
                <QuantiqoLabel label="Motion and 3D Development" />
              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col gap-10 sm:mt-8">
          <div className="sm:w-[30rem] justify-start anim-text will-change-transform">
            <span className="text-white text-base font-light ">
              We specialize in crafting innovative developments tailored to your
              needs.{" "}
            </span>
            <span className="text-white text-base font-semibold ">
              Our team is dedicated to delivering seamless user experiences and
              robust functionality ready to launch.
            </span>
          </div>
          <div className="anim-solutions will-change-transform">
            <Solutions />
          </div>
        </div>
      </div>
    </UiSection>
  );
};

export default FifthSection;
