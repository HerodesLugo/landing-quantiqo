import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";

const CarbonProductSection = () => (
  <>
    <div className="my-5 md:my-11 flex flex-col gap-5">
      <div>
        <Image
          src="/images/portfolios/carbon/banner-4.webp"
          alt=""
          className="object-cover w-full h-[14rem] md:h-[69.125rem]"
          width={2748}
          height={1491}
        />
      </div>
      <div className="px-5 md:px-0">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </div>
    </div>

    <div className="my-5 md:my-11 flex flex-col gap-5">
      <div>
        <Image
          src="/images/portfolios/carbon/banner-6.webp"
          alt=""
          className="object-cover w-full h-[14rem] md:h-[69.125rem]"
          width={2748}
          height={1491}
        />
      </div>
      <div className="px-5 md:px-0">
        <SectionLabel title="product / app" subtitle="UI / UX and Final Launch" />
      </div>
    </div>
  </>
);

export default CarbonProductSection;
