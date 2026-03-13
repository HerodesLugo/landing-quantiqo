import Image from "next/image";

const AcceleraBentoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5 mb-10 md:flex md:flex-row">
      <div className="contents md:flex md:flex-col md:justify-between">
        <div className="order-1 col-span-2 w-full h-[16rem] md:h-[40.3125rem] flex items-center justify-center">
          <Image
            src="/images/portfolios/accelera/accelera-bento-1.webp"
            alt=""
            className="size-full object-cover"
            height={1080}
            width={1920}
          />
        </div>

        <div className="order-3 col-span-1 w-full md:max-w-[51.625rem] h-[12rem] md:h-[18.1875rem] flex justify-center overflow-hidden">
          <Image
            src="/images/portfolios/accelera/accelera-bento-3.webp"
            alt=""
            className="object-cover w-full h-full"
            height={1080}
            width={1920}
          />
        </div>
      </div>

      <div className="contents md:flex md:flex-col md:gap-5">
        <div className="order-2 col-span-1 w-full h-[12rem] md:h-[36.0625rem] overflow-hidden">
          <Image
            src="/images/portfolios/accelera/accelera-bento-2.webp"
            alt=""
            className="object-cover w-full h-full"
            height={1080}
            width={1920}
          />
        </div>
        <div className="order-4 col-span-2 w-full h-[14rem] md:h-[22.0625rem] overflow-hidden">
          <Image
            src="/images/portfolios/accelera/accelera-bento-4.webp"
            alt=""
            className="object-cover w-full h-full"
            height={1080}
            width={1920}
          />
        </div>
      </div>
    </div>
  );
};

export default AcceleraBentoGrid;
