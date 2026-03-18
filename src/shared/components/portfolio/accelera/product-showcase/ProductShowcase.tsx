import Image from "next/image";

const ProductShowcase = () => {
  return (
    <div className="2xl:h-[52rem] flex gap-5 max-md:flex-col max-md:mt-5 md:p-8 ">
      <div className="md:w-1/2 md:overflow-hidden flex flex-col gap-9 max-md:gap-0">
        <div className="bg-[#1A1F22] h-full">
          <Image
            src="/images/portfolios/accelera/accelera-laptops.png"
            alt=""
            className="size-full"
            height={1080}
            width={1920}
          />
        </div>
        <div className="h-40 max-md:h-auto max-md:py-6 relative max-md:flex max-md:flex-col max-md:px-5 max-md:gap-1 xl:px-8">
          <div className="md:absolute left-0 top-0 justify-start text-black text-4xl max-md:text-xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px] max-md:tracking-[2px]">
            website
          </div>
          <div className="md:absolute left-0 top-[55px] opacity-50 justify-start text-zinc-800 text-xl max-md:text-sm font-normal font-['Host_Grotesk']">
            UI / UX and Final Launch
          </div>
        </div>
      </div>

      <div className="md:w-1/2 overflow-hidden flex flex-col gap-9 max-md:gap-0">
        <div className="bg-dark h-full overflow-hidden">
          <Image
            src="/images/portfolios/accelera/accelera-platform.webp"
            alt=""
            className="size-full md:ml-8 md:mt-8"
            height={1080}
            width={1920}
          />
        </div>
        <div className="h-40 max-md:h-auto max-md:py-6 relative max-md:flex max-md:flex-col max-md:px-5 max-md:gap-1 xl:px-8">
          <div className="md:absolute left-0 top-0 justify-start text-black text-4xl max-md:text-xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px] max-md:tracking-[2px]">
            product / app
          </div>
          <div className="md:absolute left-0 top-[55px] opacity-50 justify-start text-zinc-800 text-xl max-md:text-sm font-normal font-['Host_Grotesk']">
            UI / UX and Final Launch
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
