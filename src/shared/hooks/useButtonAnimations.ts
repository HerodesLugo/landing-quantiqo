import { useRef } from "react";
import gsap from "gsap";
import { AnimationOptions } from "../components/ui/button-animated/types";

export const useButtonAnimation = (AnimationOptions: AnimationOptions) => {

  const buttonRef = useRef(null);
  const isHovered = useRef(false);
  const steps = AnimationOptions.steps ?? 70;
  const animationDuration = AnimationOptions.duration ?? 0.7;
  const maskUrl = AnimationOptions.maskUrl ?? "https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png";
  const maskSize = AnimationOptions.steps ? `${AnimationOptions.steps * 100}% 100%` : "7000% 100%";


  const handleButtonEnter = () => {
    isHovered.current = true;

    gsap.fromTo(
      buttonRef.current,
      {
        maskPosition: "0% 0%",
        webkitMaskPosition: "0% 0%",
      },
      {
        maskPosition: "100% 0%",
        webkitMaskPosition: "100% 0%",
        ease: `steps(${steps})`,
        duration: animationDuration,
        overwrite: true,
      }
    );
  };

  const handleButtonLeave = () => {
    gsap.fromTo(
      buttonRef.current,

      {
        maskPosition: "100% 0%",
        webkitMaskPosition: "100% 0%",
      },
      {
        maskPosition: "0% 0%",
        webkitMaskPosition: "0% 0%",
        ease: `steps(${steps})`,
        duration: animationDuration,
        overwrite: true,
      }
    );
  };
  return { handleButtonEnter, handleButtonLeave , buttonRef , maskUrl, maskSize  };
};
