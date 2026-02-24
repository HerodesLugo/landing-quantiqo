import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

interface Props {
  maskBackgroundRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  isActive: boolean;
  maskImage: string;
  WebkitMaskImage: string;
  maskSize: string;
  WebkitMaskSize: string;
  steps: string;
}

const useMaskTransitions = ({
  containerRef,
  isActive,
  maskBackgroundRef,
  WebkitMaskImage,
  WebkitMaskSize,
  maskImage,
  maskSize,
  steps,
}: Props) => {
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const maskStyle: React.CSSProperties = {
    maskImage: maskImage,
    WebkitMaskImage: WebkitMaskImage,
    maskSize: maskSize,
    WebkitMaskSize: WebkitMaskSize,
    maskPosition: "0% 0%",
    WebkitMaskPosition: "0% 0%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
  };

  useGSAP(
    () => {
      if (!maskBackgroundRef?.current) return;

      tlRef.current = gsap.timeline({
        paused: true,
        onStart: () => {
          gsap.set(maskBackgroundRef.current, { autoAlpha: 1 });
          setIsFinished(false);
        },
        onComplete: () => setIsFinished(true),
        onReverseComplete: () => setIsFinished(false),
      });

      tlRef.current.fromTo(
        maskBackgroundRef.current,
        {
          maskPosition: "100% 0%",
          webkitMaskPosition: "100% 0%",
        },
        {
          maskPosition: "0% 0%",
          webkitMaskPosition: "0% 0%",
          ease: `steps(${steps})`,
          duration: 1.5,
        },
      );

      if (!isActive) {
        gsap.set(maskBackgroundRef.current, {
          maskPosition: "100% 0%",
          webkitMaskPosition: "100% 0%",
        });
        setIsFinished(false);
      }
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (!tlRef.current) return;

    if (isActive) {
      tlRef.current.play();
    } else {
      tlRef.current.progress(0).pause();
      setIsFinished(false);
    }
  }, [isActive]);

  return { maskStyle, isFinished };
};

export default useMaskTransitions;
