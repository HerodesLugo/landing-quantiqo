"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export interface AboutUsHandle {
  setProgress: (progress: number) => void;
}

const TEXTS = ["INDUSTRIES", "WEB 3 AND CRYPTO", "STARTUPS AND VC", "FIN-TECH","B2B AND ENTERPRISES"];

const AboutUs = forwardRef<AboutUsHandle>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const words = gsap.utils.toArray<HTMLElement>(".word-item");
    
    // Estado base: Todos invisibles, pequeños y desenfocados
    gsap.set(words, { 
      autoAlpha: 0, 
      scale: 0.5, 
      filter: "blur(10px)",
      z: -50
    });

    // Timeline global que va de 0 a 1 (coincidiendo con el progreso del túnel)
    tl.current = gsap.timeline({ 
        paused: true,
        defaults: { ease: "power1.inOut" } 
    });

    // Distancia entre cada "pico" de visibilidad
    // Si hay 5 textos: 1 / 4 = 0.25 de distancia.
    const interval = 1 / (words.length - 1);

    words.forEach((word, i) => {
      // El momento EXACTO donde este texto debe ser el protagonista
      const peakTime = i * interval;
      
      // Definimos una ventana de tiempo alrededor del pico
      // Entra un poco antes del pico, sale un poco después.
      const entryTime = peakTime - interval;
      const exitTime = peakTime + interval;

      // 1. ANIMACIÓN DE ENTRADA (Solo si no es el primero, el primero ya está ahí)
      if (i > 0) {
        tl.current?.fromTo(word, 
          { autoAlpha: 0, scale: 0.5, filter: "blur(10px)", z: -100 },
          { 
            autoAlpha: 1, 
            scale: 1, 
            filter: "blur(0px)", 
            z: 0,
            duration: interval, // Dura exactamente lo que tarda el túnel en llegar aquí
            ease: "power1.inOut"
          }, 
          entryTime // Empieza a entrar desde el checkpoint anterior
        );
      } else {
        // El primero empieza ya visible en el tiempo 0
        tl.current?.set(word, { autoAlpha: 1, scale: 1, filter: "blur(0px)", z: 0 }, 0);
      }

      // 2. ANIMACIÓN DE SALIDA (Solo si no es el último)
      if (i < words.length - 1) {
        tl.current?.to(word, 
          { 
            autoAlpha: 0, 
            scale: 2, // Se va hacia la cámara
            filter: "blur(20px)",
            z: 100,
            duration: interval,
            ease: "power1.in"
          }, 
          peakTime // Empieza a irse justo cuando llegamos a su checkpoint
        );
      }
    });

  }, { scope: container });

  useImperativeHandle(ref, () => ({
    setProgress: (progress: number) => {
      if (tl.current) {
        // Movemos la timeline al punto exacto
        gsap.to(tl.current, { 
            progress: progress, 
            duration: 0.5, // Suavizado para que las letras no salten bruscamente
            overwrite: true 
        });
      }
    }
  }));

  return (
    <div ref={container} className="absolute inset-0 size-full flex justify-center items-center pointer-events-none z-40 ">
      {TEXTS.map((text, i) => (
        <div key={i} className="absolute flex justify-center items-center w-full will-change-transform">
           <h2 className="word-item text-white font-bold text-5xl mix-blend-difference text-center px-4">
             {text}
           </h2>
        </div>
      ))}
    </div>
  );
});

AboutUs.displayName = "AboutUs";
export default AboutUs;