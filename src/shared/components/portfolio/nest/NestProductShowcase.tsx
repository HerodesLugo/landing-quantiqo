import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";

const NestProductShowcase = () => (
  <div className="flex flex-col xl:flex-row w-full gap-5 max-2xl:mt-5 md:px-8">
    <div className="flex flex-col w-full xl:w-1/2 gap-8">
      <div className="h-[20rem] md:h-[37.6875rem]">
        <Image
          src="/images/portfolios/nest/website.webp"
          className="object-cover size-full object-left"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <div className="relative ">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </div>
    </div>

    <div className="flex flex-col w-full xl:w-1/2 gap-8">
      <div className=" h-[20rem] md:h-[37.6875rem]">
        <Image
          src="/images/portfolios/nest/product-app.webp"
          className="object-cover size-full object-center"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <div className="relative ">
        <SectionLabel title="product / app" subtitle="UI / UX and Final Launch" />
      </div>
    </div>
  </div>
);

export default NestProductShowcase;
