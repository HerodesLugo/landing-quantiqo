import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const AurionBentoGrid = () => {
  return (
    <div className="grid grid-cols-2 max-md:gap-5 max-md:h-[10rem] h-[40rem] xl:h-[87.875rem] max-md:mb-5">
      <div className=" overflow-hidden">
        <Image
          src={IMAGE_ASSETS.aurion.bentoGridOne}
          alt=""
          className="object-cover size-full"
          height={7668}
          width={6124}
        />
      </div>
      <div className="bg-[#222222] flex justify-center overflow-hidden">
        <Image
          src={IMAGE_ASSETS.aurion.bentoGridTwo}
          alt=""
          className="xl:w-[40.125rem] xl:h-[63.1875rem] size-full object-cover md:object-contain mix-blend-lighten"
          height={7668}
          width={6124}
        />
      </div>
      <div className="hidden md:block  overflow-hidden">
        <Image
          src={IMAGE_ASSETS.aurion.bentoGridThree}
          alt=""
          className="size-full object-top"
          height={7668}
          width={6124}
        />
      </div>
      <div className="hidden md:block  overflow-hidden">
        <Image
          src={IMAGE_ASSETS.aurion.bentoGridFour}
          alt=""
          className="object-cover size-full"
          height={7668}
          width={6124}
        />
      </div>
    </div>
  );
};

export default AurionBentoGrid;
