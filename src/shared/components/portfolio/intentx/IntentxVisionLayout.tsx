import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { INTENTX_VISION_DATA } from "@/shared/components/portfolio/intentx/data";
import Image from "next/image";

const IntentxVisionLayout = () => (
  <div className="relative w-full flex items-end justify-center">
    <VisionSection isColumn {...INTENTX_VISION_DATA} />

    <div className="w-full justify-end flex items-end flex-col gap-8 h-full overflow-hidden">
      <Image
        src="/images/portfolios/intentx/vision.webp"
        alt="logo"
        className="object-cover h-full w-[60.1875rem] relative -bottom-24"
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default IntentxVisionLayout;
