import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const FenixImageGrid = () => (
  <div className="flex md:h-[34.4375rem] gap-5 w-full max-md:flex-col">
    <div className="flex-1">
      <Image
        src={IMAGE_ASSETS.fenix.gridOne}
        alt=""
        className="size-full object-cover"
        width={1806}
        height={2106}
      />
    </div>
    <div className="flex-1">
      <Image
        src={IMAGE_ASSETS.fenix.gridTwo}
        alt=""
        className="size-full object-cover"
        width={1806}
        height={2106}
      />
    </div>
  </div>
);

export default FenixImageGrid;
