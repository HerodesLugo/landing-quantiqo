"use client";
import Image from "next/image";
import type { IconsProps } from "./types";

const Logo: React.FC<IconsProps> = ({ className = "" }) => {
  
  return (
    <Image
      src="/images/quantiqo-logo.webp"
      alt="Nest Logo"
      priority
      blurDataURL="/images/quantiqo-logo.webp"
      width={76}
      height={68}
      className={` ${className}`}
    />
  );
};

export default Logo;
