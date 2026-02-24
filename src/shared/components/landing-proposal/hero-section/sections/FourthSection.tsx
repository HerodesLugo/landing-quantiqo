"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import QuantiqoLabel from "@/shared/components/landing-proposal/hero-section/common/QuantiqoLabel";
import { SectionProps } from "@/shared/components/landing-proposal/hero-section/sections/types"; // Importamos los tipos necesarios
import Solutions from "@/shared/components/landing-proposal/hero-section/common/Solutions";
import UiSection from "@/shared/components/landing-proposal/hero-section/UiSection";

const FourthSection = ({ isActive }: SectionProps) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // 1. Selectores
      // Separamos los títulos para animarlos desde direcciones opuestas
      const titleRight = gsap.utils.toArray<HTMLElement>(".anim-title-right");
      const titleLeft = gsap.utils.toArray<HTMLElement>(".anim-title-left");
      
      const labels = gsap.utils.toArray<HTMLElement>(".anim-label-wrapper");
      const textBlock = gsap.utils.toArray<HTMLElement>(".anim-text");
      const solutions = gsap.utils.toArray<HTMLElement>(".anim-solutions");

      // 2. Estado Inicial
      gsap.set(titleRight, { autoAlpha: 0, x: 50 }); // Viene de la derecha
      gsap.set(titleLeft, { autoAlpha: 0, x: -50 }); // Viene de la izquierda
      gsap.set([labels, textBlock, solutions], { autoAlpha: 0, y: 30 }); // Vienen de abajo

      // 3. Construcción de la Timeline
      tl.current = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });

      tl.current
        // A. Título Superior Derecha
        .to(titleRight, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
        })
        // B. Título Medio Izquierda (Se cruza ligeramente con el anterior "<0.2")
        .to(titleLeft, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
        }, "<0.2") 
        // C. Etiquetas (Cascada rápida)
        .to(labels, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
        }, "-=0.5") // Empieza antes de que terminen los títulos
        // D. Texto descriptivo
        .to(textBlock, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        }, "-=0.3")
        // E. Solutions
        .to(solutions, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        }, "-=0.6");
    },
    { scope: container }
  );

  // 4. Control de Playback
  useGSAP(() => {
    if (isActive) {
      tl.current?.timeScale(1).play();
    } else {
      tl.current?.timeScale(2.5).reverse();
    }
  }, [isActive]);

  return (
    <UiSection>
      <div 
        ref={container}
        className="size-full flex flex-col justify-between"
      >
        <div className="sm:mt-16 max-sm:h-full">
          <div className="sm:text-right justify-start sm:pr-20 flex flex-col">
            <span className="anim-title-right text-primary-100 sm:text-5xl text-2xl font-medium sm:leading-16 uppercase tracking-[5px] block will-change-transform">
              product / app
              <br />
            </span>
            <span className="anim-title-right text-white sm:text-5xl text-2xl font-normal uppercase tracking-[5px] sm:leading-16 block will-change-transform">
              and ui / ux design
            </span>
          </div>
        </div>

        <div className="sm:justify-start max-sm:flex justify-end sm:pl-5 max-sm:mb-7">
          <div className="justify-start flex flex-col">
            <span className="anim-title-left text-white sm:text-5xl font-bold uppercase tracking-[5px] text-2xl sm:leading-16 block will-change-transform">
              motion <br />
            </span>
            <span className="anim-title-left text-white sm:text-5xl font-bold uppercase tracking-[5px] text-2xl sm:leading-16 block will-change-transform">
              design <span className="font-normal">and 3d</span>

            </span>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4 sm:gap-10">
            <div className="flex flex-col gap-4">
              {/* Row 1 Labels */}
              <div className="flex gap-4">
                <div className="anim-label-wrapper will-change-transform">
                  <QuantiqoLabel label="UI / UX Consulting and Audits." />
                </div>
                <div className="anim-label-wrapper will-change-transform">
                  <QuantiqoLabel label="Product Design" />
                </div>
              </div>
              {/* Row 2 Labels */}
              <div className="flex gap-4 items-center">
                <div className="anim-label-wrapper will-change-transform">
                  <QuantiqoLabel label="Motion Design" />
                </div>
                <div className="anim-label-wrapper will-change-transform">
                  <QuantiqoLabel label="Motion, 3D and Animaton" />
                </div>
              </div>
            </div>

            <div className="sm:w-[30rem] justify-start anim-text will-change-transform">
              <span className="text-white text-base font-semibold ">
                Solving legacy pain points with modern design. We rethink
                complex UX, turning friction into flow and legacy systems into
                intuitive journeys.
              </span>
              <span className="text-white text-base font-light ">
                {"  "}
                Our UI / UX, Motion and 3D Professionals are ready to take your
                product , app or website to the next level.
              </span>
            </div>

            <div className="anim-solutions will-change-transform">
               <Solutions />
            </div>
          </div>
        </div>
      </div>
    </UiSection>
  );
};

export default FourthSection;