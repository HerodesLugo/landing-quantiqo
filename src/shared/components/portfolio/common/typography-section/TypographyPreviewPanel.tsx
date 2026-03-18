import GradientBlur from "@/shared/components/portfolio/common/typography-section/GradientBlur";
import React, { ReactNode } from "react";

export interface TypographyPreviewPanelProps {
  title1?: string;
  title2?: string;
  title3?: string;
  descriptionNode?: ReactNode;
  gradientClass?: string;
  dotColorClass?: string;
  fontFamilyName?: string;
  fontFamilyClass?: string;
}

const TypographyPreviewPanel: React.FC<TypographyPreviewPanelProps> = ({
  title1 = "PortalFi",
  title2 = "Banking Evolved.",
  title3 = "DeFi Simplified",
  descriptionNode = (
    <>
      <span className="text-black text-lg font-normal font-['Satoshi']">
        Earn up to
      </span>
      <span className="text-black text-lg font-medium font-['Satoshi']"> </span>
      <span className="text-black text-lg font-black font-['Satoshi']">
        9% APY,
      </span>
      <span className="text-black text-lg font-medium font-['Satoshi']"> </span>
      <span className="text-black text-lg font-normal font-['Satoshi']">
        make global payments with zero fees, and forget the crypto jargon.
      </span>
    </>
  ),
  gradientClass = "from-blue-700 to-blue-200",
  dotColorClass = "bg-blue-600",
  fontFamilyName = "Satoshi",
  fontFamilyClass = "font-['Satoshi']",
}) => (
  <div
    className={`bg-[#F6F7F9] p-8 md:px-12 md:py-10 w-full relative overflow-y-auto overflow-x-hidden flex flex-col justify-between ${fontFamilyClass}`}
  >
    <GradientBlur
      className={`w-[504.13px] h-[532.92px] left-[1200.09px] top-[-296.08px] absolute origin-top-left rotate-[60.45deg] opacity-20 bg-gradient-to-bl ${gradientClass} blur-[150.15px]`}
    />

    {/* Header block */}
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_250px] gap-x-8 gap-y-2 items-center w-full relative z-10 shrink-0">
      {/* Title 1 */}
      <div className="max-w-full">
        <div className="text-black text-[52px] md:text-[48px] xl:text-[64px] font-normal leading-[1.1] tracking-normal">
          {title1}
        </div>
      </div>
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>

      {/* Title 2 */}
      <div className="max-w-full">
        <div className="text-black text-[52px] md:text-[48px] xl:text-[64px] font-normal leading-[1.1] tracking-normal">
          {title2}
        </div>
      </div>
      {/* Connect Line */}
      <div className="hidden md:flex items-center w-full h-full">
        <div
          className={`w-3 h-3 ${dotColorClass} rounded-full shrink-0 z-10`}
        />
        <div className="w-full border-t-[2px] border-dashed border-gray-300 -ml-1" />
      </div>
      {/* Label */}
      <div className="flex flex-col gap-1 text-left">
        <span className="text-xl font-medium text-black">Headline</span>
        <span className="text-sm text-gray-500">
          {fontFamilyName} Regular, Text &gt; 64 px
        </span>
      </div>

      {/* Title 3 */}
      <div className="max-w-full">
        <div className="text-black text-[52px] md:text-[48px] xl:text-[64px] font-normal leading-[1.1] tracking-normal md:mb-4">
          {title3}
        </div>
      </div>
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>

      {/* Description Node */}
      <div className="max-w-full mt-4 md:mt-0">
        <div className="text-black text-[18px] font-normal flex items-center flex-wrap">
          {descriptionNode}
        </div>
      </div>
      {/* Connect Line */}
      <div className="hidden md:flex items-center w-full h-full">
        <div
          className={`w-3 h-3 ${dotColorClass} rounded-full shrink-0 z-10`}
        />
        <div className="w-full border-t-[2px] border-dashed border-gray-300 -ml-1" />
      </div>
      {/* Label */}
      <div className="flex flex-col gap-1 text-left">
        <span className="text-xl font-medium text-black">Body</span>
        <span className="text-sm text-gray-500">
          {fontFamilyName} Medium, Text &gt; 18 px
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full border-t border-gray-300 my-8 md:my-10 relative z-10 shrink-0" />

    {/* Bottom Block */}
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_250px] gap-x-8 items-start w-full relative z-10 shrink-0 pb-6 md:pb-0">
      {/* "Features Overview" */}
      <div className="max-w-md mb-4 md:mb-0 md:mt-4">
        <h2 className="text-[28px] xl:text-[32px] leading-none font-normal text-black tracking-normal">
          Features Overview
        </h2>
      </div>

      {/* Línea conectora */}
      <div className="hidden md:flex items-center w-full md:mt-[1.375rem]">
        <div
          className={`w-3 h-3 ${dotColorClass} rounded-full shrink-0 z-10`}
        />
        <div className="w-full border-t-[2px] border-dashed border-gray-300 -ml-1" />
      </div>

      {/* Label Title */}
      <div className="flex flex-col gap-1 text-left md:mt-3">
        <span className="text-xl font-medium text-black">Title</span>
        <span className="text-sm text-gray-500">
          {fontFamilyName} Regular, Text &gt; 32 px
        </span>
      </div>

      {/* "Simple tools..." text */}
      <div className="max-w-md mt-6 md:mt-2">
        <p className="text-black text-[14px]">
          Simple tools. Powerful results.
        </p>
      </div>

      {/* Línea conectora L-shape */}
      <div className="hidden md:block relative w-full h-[60px] md:mt-4">
        <div
          className={`w-3 h-3 ${dotColorClass} rounded-full absolute top-[-5px] left-0 z-10`}
        />
        <div className="absolute top-[0px] left-[5px] w-[80%] border-t-[2px] border-dashed border-gray-300" />
        <div className="absolute top-[0px] left-[80%] h-[46px] border-l-[2px] border-dashed border-gray-300" />
        <div className="absolute top-[44px] left-[80%] w-[20%] border-t-[2px] border-dashed border-gray-300" />
      </div>

      {/* Label Body Bottom */}
      <div className="flex flex-col gap-1 text-left mt-6 md:mt-[34px]">
        <span className="text-xl font-medium text-black">Body</span>
        <span className="text-sm text-gray-500">
          {fontFamilyName} Regular, Text &gt; 14px
        </span>
      </div>
    </div>
  </div>
);

export default TypographyPreviewPanel;
