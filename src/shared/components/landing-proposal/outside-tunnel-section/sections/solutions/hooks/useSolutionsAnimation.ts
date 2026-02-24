import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useSolutionsAnimation = (isActive: boolean, container: React.RefObject<HTMLDivElement>) => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const title = gsap.utils.toArray<HTMLElement>(".anim-title");
      const description = gsap.utils.toArray<HTMLElement>(".anim-description");
      const servicesTitle = gsap.utils.toArray<HTMLElement>(".anim-services-title");
      const serviceItems = gsap.utils.toArray<HTMLElement>(".anim-service-item");
      const button = gsap.utils.toArray<HTMLElement>(".anim-button");
      const accordionTitles = gsap.utils.toArray<HTMLElement>(".anim-accordion-title");

      gsap.set(
        [
          title,
          description,
          servicesTitle,
          serviceItems,
          // button, // commented simulating original source
          accordionTitles,
        ],
        {
          autoAlpha: 0,
          y: 30,
        },
      );

      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      });

      tl.current
        .to(title, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        })
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .to(
          servicesTitle,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .to(
          serviceItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
          },
          "-=0.3",
        )
        .to(
          accordionTitles,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.5",
        )
        .to(
          button,
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
      tl.current?.timeScale(1).play();
    } else {
      tl.current?.timeScale(2).reverse();
    }
  }, [isActive]);

  return { tl };
};
