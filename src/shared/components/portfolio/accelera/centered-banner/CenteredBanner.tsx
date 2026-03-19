import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const CenteredBanner = () => {
  return (
    <div className="2xl:h-[80.4375rem] pt-10 items-center justify-center overflow-hidden flex gap-5 max-md:hidden">
      <Image
        src={IMAGE_ASSETS.accelera.centeredBanner}
        alt=""
        className=""
        height={1234}
        width={1880}
      />
    </div>
  );
};

export default CenteredBanner;
