import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const GarboBannerSequence = () => {
  return (
    <div className="flex flex-col gap-5 mb-5 md:mb-11">
      <div className="max-md:h-[14rem] 2xl:h-[67.5rem]">
        <Image
          src={IMAGE_ASSETS.garbo.bannerFour}
          className="object-cover size-full"
          width={5760}
          height={3240}
          alt="banner"
        />
      </div>
      <div className="max-md:h-[14rem] 2xl:h-[75rem] overflow-hidden">
        <Image
          src={IMAGE_ASSETS.garbo.bannerFive}
          className="object-cover size-full"
          width={5760}
          height={3240}
          alt="banner"
        />
      </div>

      <div className="max-md:h-[14rem] 2xl:h-[75rem] overflow-hidden">
        <Image
          src={IMAGE_ASSETS.garbo.bannerSix}
          className="object-cover size-full"
          width={5760}
          height={3240}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default GarboBannerSequence;
