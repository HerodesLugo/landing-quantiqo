import Image from "next/image";

const RiseBentoGrid = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 py-8">
      {/* Mobile layout */}
      <div className="flex md:hidden flex-col gap-4">
        <div className="flex gap-4 h-[12rem]">
          <div className="w-1/2">
            <Image
              src="/images/portfolios/rise-labs/bento-grid-1.webp"
              alt=""
              className="size-full object-cover"
              height={395}
              width={440}
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/images/portfolios/rise-labs/bento-grid-2.webp"
              alt=""
              className="size-full object-cover"
              height={1187}
              width={1521}
            />
          </div>
        </div>
        <div className="h-[14rem]">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-5.webp"
            alt=""
            className="size-full object-cover"
            height={1187}
            width={2816}
          />
        </div>
        <div className="h-[14rem]">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-7.webp"
            alt=""
            className="size-full object-cover"
            height={1505}
            width={2716}
          />
        </div>
        <div className="flex gap-4 h-[12rem]">
          <div className="w-1/2">
            <Image
              src="/images/portfolios/rise-labs/bento-grid-8.webp"
              alt=""
              className="size-full object-cover"
              height={1418}
              width={1493}
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/images/portfolios/rise-labs/bento-grid-9.webp"
              alt=""
              className="size-full object-cover"
              height={1418}
              width={1493}
            />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex gap-8 h-[27.5rem]">
        <div className="w-1/4">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-1.webp"
            alt=""
            className="size-full object-cover"
            height={395}
            width={440}
          />
        </div>
        <div className="w-1/4">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-2.webp"
            alt=""
            className="size-full object-cover"
            height={1187}
            width={1521}
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-3.webp"
            alt=""
            className="size-full object-cover"
            height={1187}
            width={2716}
          />
        </div>
      </div>
      <div className="hidden md:flex gap-8 h-[27.5rem]">
        <div className="w-1/4">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-4.webp"
            alt=""
            className="size-full object-cover"
            height={1187}
            width={1321}
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-5.webp"
            alt=""
            className="size-full object-cover"
            height={1187}
            width={2816}
          />
        </div>
        <div className="w-1/4">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-6.webp"
            alt=""
            className="size-full object-cover"
            height={1187}
            width={1418}
          />
        </div>
      </div>
      <div className="hidden md:flex gap-8 h-[27.5rem]">
        <div className="w-1/2">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-7.webp"
            alt=""
            className="size-full object-cover"
            height={1505}
            width={2716}
          />
        </div>
        <div className="w-1/4">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-8.webp"
            alt=""
            className="size-full object-cover"
            height={1418}
            width={1493}
          />
        </div>
        <div className="w-1/4">
          <Image
            src="/images/portfolios/rise-labs/bento-grid-9.webp"
            alt=""
            className="size-full object-cover"
            height={1418}
            width={1493}
          />
        </div>
      </div>
    </div>
  );
};

export default RiseBentoGrid;
