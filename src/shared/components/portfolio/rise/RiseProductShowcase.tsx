import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import Image from "next/image";

const RiseProductShowcase = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 mb-11">
      
      <div className="flex flex-col w-full md:w-1/2 gap-8 max-2xl:px-7 max-md:p-0">
        <div className="h-[16rem] md:h-[37.6875rem]">
          <Image
            src="/images/portfolios/rise-labs/website.webp"
            className="object-cover size-full"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
        <div className="">
          <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
        </div>
      </div>

      <div className="hidden md:flex flex-col w-1/2 gap-8 max-2xl:px-7 max-md:p-0">
        <div className="h-[37.6875rem]">
          <Image
            src="/images/portfolios/rise-labs/product-app.webp"
            className="object-cover size-full"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default RiseProductShowcase;
