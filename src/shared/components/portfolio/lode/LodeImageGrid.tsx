import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const LodeImageGrid = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-0 max-md:mt-5">
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-200">
        <Image
          src={IMAGE_ASSETS.lode.gridOne}
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-300">
        <Image
          src={IMAGE_ASSETS.lode.gridTwo}
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-600">
        <Image
          src={IMAGE_ASSETS.lode.gridThree}
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-800">
        <Image
          src={IMAGE_ASSETS.lode.gridFour}
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-600">
        <Image
          src={IMAGE_ASSETS.lode.gridFive}
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-800">
        <Image
          src={IMAGE_ASSETS.lode.gridSix}
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
    </div>
  );
};

export default LodeImageGrid;
