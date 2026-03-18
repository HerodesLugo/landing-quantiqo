import Image from "next/image";

const LodeImageGrid = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-0 max-md:mt-5">
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-200">
        <Image
          src="/images/portfolios/lode/grid-1.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-300">
        <Image
          src="/images/portfolios/lode/grid-2.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-600">
        <Image
          src="/images/portfolios/lode/grid-3.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-800">
        <Image
          src="/images/portfolios/lode/grid-4.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-600">
        <Image
          src="/images/portfolios/lode/grid-5.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="max-md:h-[220px] h-[32rem] xl:h-[44rem] bg-amber-800">
        <Image
          src="/images/portfolios/lode/grid-6.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
    </div>
  );
};

export default LodeImageGrid;
