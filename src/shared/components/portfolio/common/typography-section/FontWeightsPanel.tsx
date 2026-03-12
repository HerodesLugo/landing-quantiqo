import GradientBlur from "@/shared/components/portfolio/common/typography-section/GradientBlur";
import React from "react";
import { FontVariant } from "@/shared/types/FonVariant";

export interface FontWeightsPanelProps {
  FONT_VARIANTS: FontVariant[];
  gradientClass?: string;
}

const FontVariantRow = ({ variant }: { variant: FontVariant }) => {
  const fontStyle = { fontFamily: variant.typeFont || "Satoshi" };

  return (
    <div className="flex flex-col xl:flex-row  justify-between items-start xl:items-center w-full gap-8 xl:gap-16 z-10 relative">
      
      <div className="flex flex-col justify-between h-full w-1/2  ">
        <div 
          className={`justify-start ${variant.nameColor || 'text-neutral-400'} text-base font-normal`}
          style={fontStyle}
        >
          {variant.typeFont}
        </div>
        <div 
          className={`justify-start text-zinc-800 text-[3.5rem] leading-none xl:text-6xl ${variant.weight}`}
          style={fontStyle}
        >
          {variant.label}
        </div>
      </div>
      
      <div className="flex flex-col  justify-start items-start h-full gap-1 w-1/2 overflow-hidden shrink-0">
        <div 
          className={`text-zinc-800 text-xl xl:text-2xl break-all ${variant.weight}`}
          style={fontStyle}
        >
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
        <div 
          className={`text-zinc-800 text-xl xl:text-2xl break-all ${variant.weight}`}
          style={fontStyle}
        >
          abcdefghijklmnopqrstuvwxyz
        </div>
        <div 
          className={`text-zinc-800 text-xl xl:text-2xl break-all ${variant.weight}`}
          style={fontStyle}
        >
          1234567890!@$#%
        </div>
      </div>
    </div>
  );
};

const FontWeightsPanel: React.FC<FontWeightsPanelProps> = ({
  FONT_VARIANTS,
  gradientClass = "from-blue-700 to-blue-200",
}) => (
  <div className="w-full relative bg-white overflow-hidden py-20 px-8 xl:px-14 flex flex-col justify-between gap-12 min-h-[41.375rem]">
    <GradientBlur className={`w-[200.08px] h-80 absolute left-0 top-0 opacity-50 bg-gradient-to-bl ${gradientClass} blur-[150.15px] pointer-events-none z-0`} />
    {FONT_VARIANTS.map((variant, idx) => (
      <FontVariantRow key={variant.label + idx} variant={variant} />
    ))}
  </div>
);

export default FontWeightsPanel;