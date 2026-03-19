import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const DualBanner = () => {
  return (
    <div className="flex xl:h-[33.25rem] max-xl:mt-5 overflow-hidden gap-5 max-xl:flex-col max-md:gap-3">
      
      <div className="2xl:w-1/4 xl:w-1/2 max-md:h-[16rem] md:h-full max-md:w-full">
        <Image
          src={IMAGE_ASSETS.sozialens.bannerDownload}
          alt=""
          className="size-full object-cover object-right"
          height={1074}
          width={1756}
        />
      </div>

      <div className="md:h-full max-md:h-[16rem]">
        <Image
          src={IMAGE_ASSETS.sozialens.bannerApps}
          alt=""
          className="object-cover size-full max-2xl:object-left"
          height={1074}
          width={1756}
        />
      </div>

    </div>
  );
};

export default DualBanner;

