import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useSidebarAnimation = (isActive: boolean | undefined) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // 1. Configuración Inicial (Estado "Cerrado")
      const menuLinks = gsap.utils.toArray<HTMLElement>(".menu-link");
      const rightContent = gsap.utils.toArray<HTMLElement>(".right-content-item");
      const footerItems = gsap.utils.toArray<HTMLElement>(".footer-item");
      const backgroundElements = gsap.utils.toArray<HTMLElement>(".bg-element");

      // Ocultamos todo inicialmente
      gsap.set(containerRef.current, { autoAlpha: 0 });
      gsap.set(menuLinks, { autoAlpha: 0, x: -50 });
      gsap.set(rightContent, { autoAlpha: 0, y: 20 });
      gsap.set(footerItems, { autoAlpha: 0, y: 10 });
      gsap.set(backgroundElements, { autoAlpha: 0, scale: 1.1 }); // Ligero zoom en bg

      // 2. Crear Timeline
      tl.current = gsap.timeline({ paused: true });

      // Fase 1: Fondo y Contenedor
      tl.current
        .to(containerRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          backgroundElements,
          { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power2.out" },
          "<"
        );

      // Fase 2: Links del Menú (Stagger)
      tl.current.to(
        menuLinks,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1, // 0.1s entre cada elemento
          ease: "power3.out",
        },
        "-=1.0"
      );

      // Fase 3: Contenido Derecho y Footer
      tl.current.to(
        [rightContent, footerItems],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=1.2"
      );
    },
    { scope: containerRef }
  );

  // Efecto para disparar la animación según la prop isActive
  useGSAP(() => {
    if (isActive) {
      tl.current?.timeScale(1).play();
    } else {
      tl.current?.timeScale(2).reverse();
    }
  }, [isActive]);

  return { containerRef };
};
