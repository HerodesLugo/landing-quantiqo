import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import Image from "next/image";

const AurionProductShowcase = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 mb-5 max-md:px-0 px-7">
      <div className="flex flex-col w-full md:w-1/2 gap-5 md:gap-8">
        <div className="max-md:h-[14rem] xl:h-[37.6875rem]">
          <Image
            src="/images/portfolios/aurion/website.webp"
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

      <div className="flex flex-col w-full md:w-1/2 gap-5 md:gap-8">
        <div className="max-md:h-[14rem] xl:h-[37.6875rem]">
          <Image
            src="/images/portfolios/aurion/product.webp"
            className="object-cover size-full"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
        <div className="">
          <SectionLabel title="product / app" subtitle="UI / UX and Final Launch" />
        </div>
      </div>
    </div>
  );
};

export default AurionProductShowcase;
