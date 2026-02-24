"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";
import Image from "next/image";

interface BackedProps {
  isActive: boolean;
}

const Backed = ({ isActive }: BackedProps) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [counter, setCounter] = useState(0);

  useGSAP(
    () => {
      const yearsText = gsap.utils.toArray<HTMLElement>(".anim-years-text");
      const mainTextChars = gsap.utils.toArray<HTMLElement>(".anim-char");
      const peopleImage = gsap.utils.toArray<HTMLElement>(".anim-people");
      const expertsTitle = gsap.utils.toArray<HTMLElement>(
        ".anim-experts-title",
      );
      const expertsSubtitle = gsap.utils.toArray<HTMLElement>(
        ".anim-experts-subtitle",
      );

      gsap.set([yearsText, peopleImage, expertsTitle, expertsSubtitle], {
        autoAlpha: 0,
        y: 30,
      });

      gsap.set(mainTextChars, {
        autoAlpha: 0,
        y: 20,
        rotationX: -90,
      });

      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      });

      tl.current
        .to(
          { value: 0 },
          {
            value: 9,
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
              setCounter(Math.round(this.targets()[0].value));
            },
          },
        )
        .to(
          yearsText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=1.5",
        )
        .to(
          mainTextChars,
          {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: 0.02,
          },
          "-=0.8",
        )
        .to(
          peopleImage,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .to(
          expertsTitle,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .to(
          expertsSubtitle,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        );
    },
    { scope: container },
  );

  useGSAP(() => {
    if (isActive) {
      setCounter(0);
      tl.current?.timeScale(1).restart();
    } else {
      tl.current?.timeScale(2).reverse();
    }
  }, [isActive]);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="anim-char inline-block will-change-transform"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <UiSection>
      <div
        ref={container}
        className="flex flex-col h-full justify-center max-sm:justify-between "
      >
        
        <div className="flex items-center gap-8 justify-center ">
          <div className="text-center justify-start text-white text-8xl 2xl:text-9xl max-sm:text-7xl font-bold">
            +{counter}
          </div>

          <div className="anim-years-text will-change-transform w-40 sm:w-80 justify-start text-base-300 text-3xl 2xl:text-4xl font-light uppercase tracking-[2.4px] max-sm:text-2xl sm:tracking-[3.80px]">
            Years of experience
          </div>
        </div>

        <div className="text-center justify-start  my-16 2xl:my-20   max-sm:w-[16.875rem] max-sm:mx-auto">
          <div className="text-white max-sm:text-3xl text-5xl 2xl:text-6xl font-normal 2xl:leading-20 leading-8 uppercase sm:tracking-[12.80px] tracking-[5.6px]">
            {splitText("Backed by our experience,")}
            <br />
          </div>

          <div className="text-white max-sm:text-3xl text-5xl 2xl:text-6xl font-bold sm:leading-20 leading-8 uppercase sm:tracking-[12.80px] tracking-[5.6px]">
            {splitText("prepared for the future.")}
          </div>
        </div>

        <div className="flex flex-col  max-sm:items-center">
          <div className="anim-people will-change-transform mb-9 flex">
            <Image
              src="/images/backed/peoples.svg"
              alt="peoples"
              className="2xl:w-[42.8125rem] w-[27rem] max-sm:w-[20rem] max-sm:mx-auto"
              height={125}
              width={685}
            />
          </div>

          <div className="flex flex-col max-sm:w-[20rem] ">
            <div className="anim-experts-title will-change-transform justify-start text-white text-3xl  max-sm:text-xl font-bold uppercase tracking-[2.83px]">
              +20 Experts
            </div>
            <div className="anim-experts-subtitle will-change-transform justify-start text-white text-lg max-sm:text-base font-normal uppercase tracking-widest">
              Between all our departments
            </div>
          </div>
        </div>
      </div>
    </UiSection>
  );
};

export default Backed;
