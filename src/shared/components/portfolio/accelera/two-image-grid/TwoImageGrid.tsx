import Image from "next/image";

const TwoImageGrid = () => {
  return (
    <div className="h-[40rem] flex gap-5">
      <div className="w-1/2 bg-[#1A1F22] overflow-hidden">
        <Image
          src="/images/portfolios/accelera/accelera-grid-2.webp"
          alt=""
          className="size-full"
          height={1080}
          width={1920}
        />
      </div>
      <div className="w-1/2 bg-[#1A1F22] overflow-hidden">
        <Image
          src="/images/portfolios/accelera/accelera-grid-1.webp"
          alt=""
          className="size-full"
          height={1080}
          width={1920}
        />
      </div>
    </div>
  );
};

export default TwoImageGrid;
