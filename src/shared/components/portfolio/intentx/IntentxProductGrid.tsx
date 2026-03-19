import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const IntentxProductGrid = () => (
  <div className="flex flex-col md:flex-row h-auto 2xl:h-[39.125rem] gap-5">
    <div className="flex-1 bg-gray-500 h-[220px] md:h-auto overflow-hidden">
      <Image
        src={IMAGE_ASSETS.intentx.website}
        alt=""
        className="size-full object-cover"
        width={2725}
        height={1594}
      />
    </div>
    <div className="flex-1 bg-gray-500 h-[220px] md:h-auto overflow-hidden">
      <Image
        src={IMAGE_ASSETS.intentx.phone}
        alt=""
        className="size-full object-cover"
        width={2725}
        height={1594}
      />
    </div>
  </div>
);

export default IntentxProductGrid;
