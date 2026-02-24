"use client";
import { cn } from "@/shared/utils/cn";
import { ButtonProps } from "./types";
import { variantClass } from "./variants";
import { useEffect, useState } from "react";
import ArrowUpRight from "@/shared/components/ui/icon/ArrowUpRight";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
  variant = "primary",
  size = "lg",
  type = "button",
  onMouseOver,
  onMouseLeave,
}) => {
  const [isClient, setIsClient] = useState(false);
  const variantClasses = variantClass({ variant, size });
  const disabledClasses = "cursor-not-allowed !bg-base-500";
  const mergeClassName = cn(
    variantClasses,
    { [disabledClasses]: disabled },
    className,
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      type={type}
      onClick={onClick}
      className={mergeClassName}
      disabled={disabled}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseOver}
    >
      <span className="bg-primary-100 absolute size-full  rounded-full transition-all duration-500 ease-in-out group-hover:mr-0 flex items-center mr-32 "></span>
      <span className="tracking-[2.4px] sm:tracking-[3.6px] absolute left-6 ">{children}</span>
      <div className="absolute  right-2 group-hover:scale-105">
        <ArrowUpRight />
      </div>
    </button>
  );
};

export default Button;
