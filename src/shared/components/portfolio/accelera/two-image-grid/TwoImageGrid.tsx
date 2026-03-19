import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const TwoImageGrid = () => {
  return (
    <div className="2xl:h-[40rem] flex gap-5 max-md:flex-col max-md:mb-5">
      <div className="md:w-1/2 w-full bg-[#1A1F22] overflow-hidden">
        <Image
          src={IMAGE_ASSETS.accelera.gridTwo}
          alt=""
          className="size-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="md:w-1/2 w-full bg-[#1A1F22] overflow-hidden">
        <Image
          src={IMAGE_ASSETS.accelera.gridOne}
          alt=""
          className="size-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
    </div>
  );
};

export default TwoImageGrid;
