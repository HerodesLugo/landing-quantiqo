import Image from "next/image";

const AcceleraBentoGrid = () => {
  return (
    <div className="flex gap-5 mb-10">
      <div className="flex flex-col justify-between">
        <div className="w-full h-[40.3125rem] flex items-center justify-center">
          <Image
            src="/images/portfolios/accelera/accelera-bento-1.webp"
            alt=""
            className="size-full object-cover"
            height={1080}
            width={1920}
          />
        </div>

        <div className="max-w-[51.625rem] h-[18.1875rem] flex justify-center">
          <Image
            src="/images/portfolios/accelera/accelera-bento-3.webp"
            alt=""
            className="object-cover"
            height={1080}
            width={1920}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-full h-[36.0625rem] overflow-hidden">
          <Image
            src="/images/portfolios/accelera/accelera-bento-2.webp"
            alt=""
            className="object-cover w-full h-full"
            height={1080}
            width={1920}
          />
        </div>
        <div className="w-full h-[22.0625rem] overflow-hidden">
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
