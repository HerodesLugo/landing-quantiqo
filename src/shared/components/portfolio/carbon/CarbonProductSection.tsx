import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";

const CarbonProductSection = () => (
  <>
    <div className=" my-11 flex flex-col gap-5">
      <div>
        <Image
          src="/images/portfolios/carbon/banner-4.webp"
          alt=""
          className="object-cover w-full h-[69.125rem]"
          width={2748}
          height={1491}
        />
      </div>
      <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
    </div>

    <div className=" my-11 flex flex-col gap-5">
      <div>
        <Image
          src="/images/portfolios/carbon/banner-6.webp"
          alt=""
          className="object-cover w-full h-[69.125rem]"
          width={2748}
          height={1491}
        />
      </div>
      <SectionLabel title="product" subtitle="UI / UX and Final Launch" />
    </div>
  </>
);

export default CarbonProductSection;
