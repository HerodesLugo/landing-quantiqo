"use client";
import { useButtonAnimation } from "@/shared/hooks/useButtonAnimations";
import { ButtonProps } from "./types";
import IconButton, { TVariant } from "../icon-button";
import { cn } from "@/shared/utils/cn";

const ButtonAnimated = ({
  AnimationOptions,
  className,
  classNameLabel,
  label,
  variants = "light",
  iconButtonActive = true,
  onClick
}: ButtonProps) => {
  const { handleButtonEnter, handleButtonLeave, buttonRef, maskUrl, maskSize } =
    useButtonAnimation(AnimationOptions);

  const buttonStyle: React.CSSProperties = {
    maskImage: `url('${maskUrl}')`,
    WebkitMaskImage: `url('${maskUrl}')`,
    maskSize: maskSize,
    WebkitMaskSize: maskSize,
    maskPosition: "0% 0%",
    WebkitMaskPosition: "0% 0%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
  };

  const VARIANTS = {
    light: {
      colorBase: "bg-neutral-950",
      colorTextBase: "text-white",
      colorHover: "bg-primary-100",
      iconButtonBase: "light",
      colorTextHover: "text-neutral-800",
      iconButtonHover: "dark",
    },
    dark: {
      colorBase: "bg-primary-100",
      colorTextBase: "text-neutral-800",
      colorHover: "bg-neutral-950",
      iconButtonBase: "dark",
      colorTextHover: "text-white",
      iconButtonHover: "light",
    },
  };

  const VARIANT = VARIANTS[variants];

  const commonClasses =
    "flex items-center gap-8 pl-5 pr-3 justify-between tracking-[.075rem] uppercase absolute";
  return (
    <div
      className={cn(
        `relative w-72 h-16  flex border items-center justify-center rounded-sm overflow-hidden text-xl font-medium ${VARIANT.colorBase}`,
        className,
      )}
    >
      <span
        className={cn(
          `z-0 w-full`,
          commonClasses,
          VARIANT.colorTextBase,
          classNameLabel,
        )}
      >
        {label}
        {iconButtonActive && (
          <IconButton variants={VARIANT.iconButtonBase as TVariant} />
        )}
      </span>

      <button
        ref={buttonRef}
        onClick={onClick}
        onMouseEnter={handleButtonEnter}
        onMouseLeave={handleButtonLeave}
        className={cn(
          `cursor-pointer  size-full left-0 top-0  z-10`,
          commonClasses,
          VARIANT.colorHover,
          VARIANT.colorTextHover,
          classNameLabel,
        )}
        style={buttonStyle}
      >
        {label}
        {iconButtonActive && (
          <IconButton variants={VARIANT.iconButtonHover as TVariant} />
        )}
      </button>
    </div>
  );
};

export default ButtonAnimated;
