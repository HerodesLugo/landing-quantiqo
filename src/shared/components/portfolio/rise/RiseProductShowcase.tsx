import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const RiseProductShowcase = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full gap-5 mb-11">
      
      <div className="flex flex-col w-full xl:w-1/2 gap-8 max-2xl:px-7 max-xl:p-0">
        <div className="max-sm:h-[16rem] xl:h-[37.6875rem]">
          <Image
            src={IMAGE_ASSETS.rise.website}
            className="object-cover size-full"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
        <div className="">
          <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
        </div>
      </div>

      <div className="hidden xl:flex flex-col w-1/2 gap-8 max-2xl:px-7 max-xl:p-0">
        <div className="h-[37.6875rem]">
          <Image
            src={IMAGE_ASSETS.rise.productApp}
            className="object-cover size-full"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default RiseProductShowcase;
