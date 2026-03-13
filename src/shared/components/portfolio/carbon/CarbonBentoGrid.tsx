import Image from "next/image";

const CarbonBentoGrid = () => (
  <div className="flex flex-col gap-5 md:gap-6">
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
    <div className="hidden md:flex gap-6 h-[56.5rem]">
      <div className="flex flex-col w-1/2 gap-6">
        <div className="max-h-[31.0625rem]">
          <Image
            src="/images/portfolios/carbon/bento-grid-1.webp"
            alt=""
            className="object-cover size-full"
            width={2748}
            height={1491}
          />
        </div>
        <div className="max-h-[23.9375rem]">
          <Image
            src="/images/portfolios/carbon/bento-grid-2.webp"
            alt=""
            className="object-cover size-full"
            width={2748}
            height={1491}
          />
        </div>
      </div>

      <div className="w-1/2 h-full">
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
