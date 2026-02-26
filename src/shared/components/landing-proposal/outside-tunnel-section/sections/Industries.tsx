"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";

interface IndustriesProps {
  isActive?: boolean;
}

const Industries = ({ isActive = true }: IndustriesProps) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const title = gsap.utils.toArray<HTMLElement>(".anim-title");
      const subtitle = gsap.utils.toArray<HTMLElement>(".anim-subtitle");
      const industryItems = gsap.utils.toArray<HTMLElement>(".anim-industry-item");

      gsap.set([title, subtitle, industryItems], {
        autoAlpha: 0,
        y: 30,
      });

      tl.current = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });

      tl.current
        .to(title, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        })
        .to(subtitle, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        }, "-=0.4")
        .to(industryItems, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
        }, "-=0.4");
    },
    { scope: container }
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
      <div ref={container} className="flex flex-col  gap-6 2xl:gap-16 h-full sm:justify-center sm:pt-10 ">
        
        <div className="flex flex-col sm:gap-5 gap-3">
          <div className="anim-title will-change-transform justify-start text-white text-2xl xl:text-5xl font-medium uppercase tracking-[6.40px]">
            industries
          </div>
          <div className="anim-subtitle will-change-transform text-xs max-sm:text-base sm:w-[600px] justify-start text-white xl:text-lg font-normal">
            We focus and unite with big brands and startups in various industries
            to generate top-tier results.
          </div>
        </div>

        <div className="flex max-sm:flex-col  gap-5 sm:gap-20">
          <div className="w-full sm:max-w-[35.87vw] shrink-0 flex flex-col justify-start items-start gap-5 sm:gap-7">
            
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                CRYPTO AND WEB3
              </div>
              <div className="self-stretch text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                We design Web3 experiences that make crypto simple, trusted, and
                human.
              </div>
            </div>

            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                FINTECH
              </div>
              <div className="text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                We craft fintech brands and platforms that define how the world
                interacts with money.
              </div>
            </div>
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                B2B AND ENTERPRISES
              </div>
              <div className="self-stretch text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                We design enterprise products with the clarity and polish of
                consumer experiences.
              </div>
            </div>
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                TECHNOLOGY
              </div>
              <div className="self-stretch text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                We partner with tech leaders to design products that shape how
                people live, work, and connect.
              </div>
            </div>
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                STARTUPS AND VC
              </div>
              <div className=" text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                We create integral solutions that optimizes the business
                potential, ensuring trust and results for startups and venture
                capitalis.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-5 sm:gap-7 sm:pr-20">
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                E-COMMERCE
              </div>
              <div className="self-stretch text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                We design ecommerce experiences that feel effortless, inspiring,
                and built for growth.
              </div>
            </div>
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                LOGISTICS AND SECURITY
              </div>
              <div className="self-stretch text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                Logistics and security startups need clear positioning and a
                strong user experience to attract clients and investors. We take
                care of that completely.
              </div>
            </div>
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                HEALTH
              </div>
              <div className="self-stretch text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                Strategic branding enables health tech startups to clearly
                articulate their value proposition and build credibility in a
                complex, regulated market.
              </div>
            </div>
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                REAL STATE
              </div>
              <div className="text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                Real state businesses need a strong brand to find partners and
                gain trust and investment, at quantiqo we take this to the
                top-tier level.
              </div>
            </div>
            <div className="anim-industry-item will-change-transform self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-center text-primary-100 text-xl max-xl:text-base font-bold tracking-[4px]">
                AI AND AUTOMATION
              </div>
              <div className="self-stretch text-base-300 justify-start text-sm  max-xl:text-[10px] max-sm:hidden font-light">
                AI is moving faster than ever—an AI brand needs to portray a
                professional business with a flexible yet long-lasting solution
                that conveys real value.
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiSection>
  );
};

export default Industries;
