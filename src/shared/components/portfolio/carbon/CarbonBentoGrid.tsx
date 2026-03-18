import Image from "next/image";

const CarbonBentoGrid = () => (
  <div className="flex flex-col gap-5 md:gap-6 max-md:px-0 px-7">
    {/* Mobile layout */}
    <div className="flex md:hidden flex-col gap-5">
      <div className="h-[14rem]">
        <Image
          src="/images/portfolios/carbon/bento-grid-1.webp"
          alt=""
          className="object-cover size-full"
          width={2748}
          height={1491}
        />
      </div>
      <div className="flex gap-5 h-[12rem]">
        <div className="w-1/2">
          <Image
            src="/images/portfolios/carbon/bento-grid-2.webp"
            alt=""
            className="object-cover size-full"
            width={2748}
            height={1491}
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/portfolios/carbon/bento-grid-3.webp"
            alt=""
            className="object-cover size-full"
            width={2748}
            height={1491}
          />
        </div>
      </div>
    </div>

    {/* Desktop layout */}
    <div className="hidden md:grid grid-cols-2 gap-6 xl:h-[56.5rem]">
      
      <div className="flex flex-col gap-6">
        <div className="2xl:max-h-[31.0625rem] h-full flex-1">
          <Image
            src="/images/portfolios/carbon/bento-grid-1.webp"
            alt=""
            className="object-cover size-full"
            width={2748}
            height={1491}
          />
        </div>
        <div className="xl:max-h-[23.9375rem] h-full flex-1">
          <Image
            src="/images/portfolios/carbon/bento-grid-2.webp"
            alt=""
            className="object-cover size-full"
            width={2748}
            height={1491}
          />
        </div>
      </div>

      <div className=" h-full min-h-0 overflow-hidden flex">
        <Image
          src="/images/portfolios/carbon/bento-grid-3.webp"
          alt=""
          className="object-cover size-full"
          width={2748}
          height={1491}
        />
      </div>

    </div>
  </div>
);

export default CarbonBentoGrid;
