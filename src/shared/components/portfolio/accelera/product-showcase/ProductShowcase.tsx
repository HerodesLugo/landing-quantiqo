import Image from "next/image";

const ProductShowcase = () => {
  return (
    <div className="h-[52rem] flex gap-5">
      <div className="w-1/2 overflow-hidden flex flex-col gap-9">
        <div className="bg-[#1A1F22] h-full">
          <Image
            src="/images/portfolios/accelera/accelera-laptops.png"
            alt=""
            className="size-full"
            height={1080}
            width={1920}
          />
        </div>
        <div className="w-[836px] h-40 relative">
          <div className="w-[836px] left-0 top-[55px] absolute opacity-50 justify-start text-zinc-800 text-xl font-normal font-['Host_Grotesk']">
            UI / UX and Final Launch
          </div>
          <div className="w-96 left-0 top-0 absolute justify-start text-black text-4xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px]">
            website
          </div>
        </div>
      </div>

      <div className="w-1/2 overflow-hidden flex flex-col gap-9">
        <div className="bg-dark h-full overflow-hidden">
          <Image
            src="/images/portfolios/accelera/accelera-platform.webp"
            alt=""
            className="size-full ml-8 mt-8"
            height={1080}
            width={1920}
          />
        </div>
        <div className="w-[836px] h-40 relative">
          <div className="w-[836px] left-0 top-[55px] absolute opacity-50 justify-start text-zinc-800 text-xl font-normal font-['Host_Grotesk']">
            UI / UX and Final Launch
          </div>
          <div className="left-0 top-0 absolute justify-start text-black text-4xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px]">
            product / app
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
