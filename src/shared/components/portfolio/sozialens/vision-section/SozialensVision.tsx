import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { SOZIALENS_VISION_DATA } from "@/shared/components/portfolio/sozialens/data";
import Image from "next/image";

const SozialensVision = () => {
  return (
    <div className="relative w-full flex items-center justify-center max-md:flex-col">
      <VisionSection {...SOZIALENS_VISION_DATA} />

      <div className="absolute -top-1 max-xl:hidden">
        <Image
          src="/images/portfolios/sozialens/background-dots.png"
          alt=""
          className="opacity-50 mix-blend-overlay"
          width={3840}
          height={878}
        />
      </div>
      <div className="w-full md:justify-end flex md:pr-10 justify-center max-md:relative  max-2xl:absolute">
        <Image
          src="/images/portfolios/sozialens/vision-decorator.png"
          alt="logo"
          className="max-md:h-[14.1875rem] max-md:w-[13.9375rem] max-xl:w-[20rem]"
          height={515}
          width={505}
        />
      </div>
    </div>
  );
};

export default SozialensVision;
