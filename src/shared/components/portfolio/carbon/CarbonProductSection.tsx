import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";

const CarbonProductSection = () => (
  <>
    <div className="my-5 md:my-11 flex flex-col gap-5 max-md:px-0 px-7">
      <div>
        <Image
          src="/images/portfolios/carbon/banner-4.webp"
          alt=""
          className="object-cover w-full max-md:h-[14rem] xl:h-[69.125rem]"
          width={2748}
          height={1491}
        />
      </div>
      <div className="">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </div>
    </div>

    
  </>
);

export default CarbonProductSection;
