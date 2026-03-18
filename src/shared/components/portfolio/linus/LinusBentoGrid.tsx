import Image from "next/image";

const LinusBentoGrid = () => (
  <>
    {/* Mobile layout */}
    <div className="flex md:hidden flex-col gap-5 mb-5">
      <div className="h-[14rem] overflow-hidden">
        <Image
          src="/images/portfolios/linus/bento-grid-2.webp"
          alt=""
          className="size-full object-cover"
          height={7668}
          width={6124}
        />
      </div>
      <div className="flex gap-5 h-[12rem]">
        <div className="w-1/2 bg-[#EBE8E3] overflow-hidden">
          <Image
            src="/images/portfolios/linus/bento-grid-1.webp"
            alt=""
            className="object-cover size-full"
            height={7668}
            width={6124}
          />
        </div>
        <div className="w-1/2 overflow-hidden">
          <Image
            src="/images/portfolios/linus/bento-grid-3.webp"
            alt=""
            className="size-full object-cover"
            height={7668}
            width={6124}
          />
        </div>
      </div>
      <div className="h-[14rem] bg-[#EDFBC9] overflow-hidden">
        <Image
          src="/images/portfolios/linus/bento-grid-4.webp"
          alt=""
          className="size-full object-cover"
          height={7668}
          width={6124}
        />
      </div>
    </div>

    {/* Desktop layout */}
    <div className="hidden md:grid grid-cols-4 max-h-[113.375rem] gap-8 mb-11">
      <div className="bg-[#EBE8E3] overflow-hidden col-span-2">
        <Image
          src="/images/portfolios/linus/bento-grid-1.webp"
          alt=""
          className="object-cover size-full"
          height={7668}
          width={6124}
        />
      </div>

      <div className="bg-[#222222] flex justify-center overflow-hidden col-span-2">
        <Image
          src="/images/portfolios/linus/bento-grid-2.webp"
          alt=""
          className="size-full object-cover"
          height={7668}
          width={6124}
        />
      </div>

      <div className="bg-gray-400 overflow-hidden col-span-2">
        <Image
          src="/images/portfolios/linus/bento-grid-3.webp"
          alt=""
          className="size-full object-cover"
          height={7668}
          width={6124}
        />
      </div>
      <div className="bg-[#EDFBC9] overflow-hidden col-span-2">
        <Image
          src="/images/portfolios/linus/bento-grid-4.webp"
          alt=""
          className="size-full"
          height={7668}
          width={6124}
        />
      </div>
    </div>
  </>
);

export default LinusBentoGrid;
