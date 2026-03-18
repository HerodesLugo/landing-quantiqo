import Image from "next/image";

const GarboImageGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 h-[24rem] md:max-h-[93.75rem] md:h-full gap-5 md:gap-8">
      <div className="col-span-1 md:col-span-2 bg-gray-500">
        <Image
          src="/images/portfolios/garbo/grid-1.webp"
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>

      <div className="col-span-1 md:col-span-2 bg-dark">
        <Image
          src="/images/portfolios/garbo/grid-2.webp"
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <div className="col-span-1 md:col-span-1 bg-gray-600">
        <Image
          src="/images/portfolios/garbo/grid-3.webp"
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <div className="col-span-1 md:col-span-3 bg-gray-950">
        <Image
          src="/images/portfolios/garbo/grid-4.webp"
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default GarboImageGrid;
