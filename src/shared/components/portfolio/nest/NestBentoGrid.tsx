import Image from "next/image";

const NestBentoGrid = () => (
  <div className="grid max-xl:flex max-xl:flex-col gap-5 md:gap-0 grid-cols-2">
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src="/images/portfolios/nest/bento-1.webp"
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src="/images/portfolios/nest/bento-2.webp"
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src="/images/portfolios/nest/bento-3.webp"
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className=" max-md:h-[12rem] xl:h-[44rem] overflow-hidden">
      <Image
        src="/images/portfolios/nest/bento-4.webp"
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
  </div>
);

export default NestBentoGrid;
