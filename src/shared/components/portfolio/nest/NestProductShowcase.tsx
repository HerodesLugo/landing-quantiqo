import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";

const NestProductShowcase = () => (
  <div className="flex w-full gap-5">
    <div className="flex flex-col w-1/2 gap-8">
      <div className=" bg-red-500  h-[37.6875rem]">
        <Image
          src="/images/portfolios/nest/website.webp"
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <div className="w-[836px] h-40 relative">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </div>
    </div>

    <div className="flex flex-col w-1/2 gap-8">
      <div className=" bg-blue-500  h-[37.6875rem]">
        <Image
          src="/images/portfolios/nest/product-app.webp"
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <div className="w-[836px] h-40 relative">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </div>
    </div>
  </div>
);

export default NestProductShowcase;
