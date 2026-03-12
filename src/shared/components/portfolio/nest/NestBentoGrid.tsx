import Image from "next/image";

const NestBentoGrid = () => (
  <div className="flex flex-wrap h-[87.5rem]">
    <div className="w-1/2 h-[44rem] overflow-hidden">
      <Image
        src="/images/portfolios/nest/bento-1.webp"
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className="w-1/2 h-[44rem] overflow-hidden">
      <Image
        src="/images/portfolios/nest/bento-2.webp"
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className="w-1/2 h-[44rem] overflow-hidden">
      <Image
        src="/images/portfolios/nest/bento-3.webp"
        alt=""
        width={1440}
        height={1055}
        className="object-cover size-full"
      />
    </div>
    <div className="w-1/2 h-[44rem] overflow-hidden">
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
