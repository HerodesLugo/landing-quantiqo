import Image from "next/image";

const GarboBentoGrid = () => {
  return (
    <div className="grid grid-cols-2  h-[113.375rem]">
      <div className="bg-[#EBE8E3] overflow-hidden">
        <Image
          src="/images/portfolios/garbo/bento-grid-1.png"
          alt=""
          className="object-cover size-full"
          height={7668}
          width={6124}
        />
      </div>
      <div className="bg-[#222222] flex justify-center overflow-hidden">
        <Image
          src="/images/portfolios/garbo/bento-grid-2.webp"
          alt=""
          className="size-full object-cover"
          height={7668}
          width={6124}
        />
      </div>
      <div className="bg-[#EDFBC9]  overflow-hidden col-span-2">
        <Image
          src="/images/portfolios/garbo/bento-grid-3.webp"
          alt=""
          className=" size-full "
          height={7668}
          width={6124}
        />
      </div>
    </div>
  );
};

export default GarboBentoGrid;
