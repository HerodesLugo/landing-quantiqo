import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const GarboBentoGrid = () => {
  return (
    <div className="grid grid-cols-2 max-md:h-[28rem] 2xl:h-[113.375rem] gap-5 md:gap-0">
      <div className="bg-[#EBE8E3] overflow-hidden">
        <Image
          src={IMAGE_ASSETS.garbo.bentoGridOne}
          alt=""
          className="object-cover size-full"
          height={7668}
          width={6124}
        />
      </div>
      <div className="bg-[#222222] flex justify-center overflow-hidden">
        <Image
          src={IMAGE_ASSETS.garbo.bentoGridTwo}
          alt=""
          className="size-full object-cover"
          height={7668}
          width={6124}
        />
      </div>
      <div className="bg-[#EDFBC9]  overflow-hidden col-span-2">
        <Image
          src={IMAGE_ASSETS.garbo.bentoGridThree}
          alt=""
          className=" size-full object-cover"
          height={7668}
          width={6124}
        />
      </div>
    </div>
  );
};

export default GarboBentoGrid;
