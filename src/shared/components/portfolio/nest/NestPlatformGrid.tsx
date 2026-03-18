import Image from "next/image";

const NestPlatformGrid = () => (
  <div className="w-full  py-16 max-2xl:hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:grid-rows-2 lg:h-[42.5rem] px-10">
      <div className="bg-[#121B14] relative col-span-1 md:col-span-1 lg:col-span-1 md:row-span-2 flex items-center justify-center overflow-hidden h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-1.webp"
          alt=""
          width={1440}
          height={1055}
          className="object-cover size-full"
        />
      </div>

      <div className="bg-[#14291E] relative overflow-hidden col-span-1 md:col-span-1 lg:col-span-2 row-span-1 flex flex-col justify-between h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-2.webp"
          alt=""
          width={1203}
          height={515}
          className=" size-full "
        />
      </div>

      <div className="bg-[#1D2B22] col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex flex-col justify-end relative overflow-hidden h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-3.webp"
          alt=""
          width={500}
          height={500}
          className=" size-full "
        />
      </div>

      <div className="bg-[#3A6B4F] col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex flex-col justify-between relative h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-4.webp"
          alt=""
          width={500}
          height={500}
          className=" size-full "
        />
      </div>

      <div className="bg-[#C8CCC9] col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex items-center justify-center p-0 overflow-hidden h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-5.webp"
          alt=""
          width={653}
          height={503}
          className=" size-full object-cover"
        />
      </div>

      <div className="bg-[#18231C] col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex flex-col justify-between relative overflow-hidden h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-6.webp"
          alt=""
          width={653}
          height={503}
          className=" size-full object-cover"
        />
      </div>

      <div className="bg-[#94E0A8] col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex flex-col justify-start relative h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-7.webp"
          alt=""
          width={653}
          height={503}
          className=" size-full object-cover"
        />
      </div>

      <div className="bg-[#0B140F] col-span-1 md:col-span-2 lg:col-span-1 row-span-1 relative overflow-hidden h-[10rem] md:h-auto">
        <Image
          src="/images/portfolios/nest/bento-grid-8.webp"
          alt=""
          width={653}
          height={503}
          className=" size-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default NestPlatformGrid;
