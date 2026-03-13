import Image from "next/image";

const LodeImageGrid = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="h-[44rem] bg-amber-200">
        <Image
          src="/images/portfolios/lode/grid-1.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="h-[44rem] bg-amber-300">
        <Image
          src="/images/portfolios/lode/grid-2.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="h-[44rem] bg-amber-600">
        <Image
          src="/images/portfolios/lode/grid-3.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="h-[44rem] bg-amber-800">
        <Image
          src="/images/portfolios/lode/grid-4.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="h-[44rem] bg-amber-600">
        <Image
          src="/images/portfolios/lode/grid-5.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      <div className="h-[44rem] bg-amber-800">
        <Image
          src="/images/portfolios/lode/grid-6.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div>
      {/* <div className="h-[68.5rem] bg-accelera col-span-2">
        <Image
          src="/images/portfolios/lode/grid-7.webp"
          alt="logo"
          className="size-full object-cover"
          height={2112}
          width={3756}
        />
      </div> */}
    </div>
  );
};

export default LodeImageGrid;
