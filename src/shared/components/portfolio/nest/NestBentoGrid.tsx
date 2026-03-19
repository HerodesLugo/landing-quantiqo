import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const NestBentoGrid = () => (
  <div className="grid max-xl:flex max-xl:flex-col gap-5 md:gap-0 grid-cols-2">
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src={IMAGE_ASSETS.nest.bentoOne}
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src={IMAGE_ASSETS.nest.bentoTwo}
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src={IMAGE_ASSETS.nest.bentoThree}
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src={IMAGE_ASSETS.nest.bentoFour}
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
  </div>
);

export default NestBentoGrid;
