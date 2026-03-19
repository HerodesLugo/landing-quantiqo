import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const LinusWebsiteSection = () => (
  <div className="flex flex-col">
    <div className="max-md:h-[14rem] xl:h-[67.5rem]">
      <Image
        src={IMAGE_ASSETS.linus.bannerFour}
        className="object-cover size-full"
        width={5760}
        height={3240}
        alt="banner"
      />
    </div>
    <div className="inline-flex flex-col justify-start items-start gap-1.5 mt-5 md:mt-8 ">
      <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
    </div>
  </div>
);

export default LinusWebsiteSection;
