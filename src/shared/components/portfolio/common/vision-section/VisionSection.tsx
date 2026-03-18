import Image from "next/image";
import VisionItem from "./VisionItem";
import { VisionSectionProps } from "./types";

const VisionSection = ({
  heading,
  decoratorSrc,
  decoratorMobileSrc,
  items,
  isColumn = false,
}: VisionSectionProps) => {
  // Resolve which image to show on mobile
  const mobileDecorator = decoratorMobileSrc ?? decoratorSrc;

  return (
    <section className="flex w-full flex-col max-md:gap-5 justify-between md:min-h-[42rem] xl:min-h-[64.75rem] pt-8 md:pt-20 xl:pt-56 px-6 md:px-16 xl:px-28 pb-10 md:pb-16 xl:pb-20 relative ">
      {/* Desktop decorator — hidden on mobile */}
      {decoratorSrc && (
        <div className="md:absolute  -top-10 md:-top-20 right-0 md:flex justify-center pointer-events-none opacity-60 md:opacity-100 hidden">
          <Image
            src={decoratorSrc}
            alt=""
            className="w-[18rem] md:w-[30rem] xl:w-[43.75rem] 2xl:w-[59.625rem]"
            height={1428}
            width={954}
          />
        </div>
      )}

      <h2 className="w-full md:w-80 xl:w-96 text-black text-2xl md:text-4xl xl:text-5xl font-semibold font-['Host_Grotesk'] uppercase tracking-[2px] md:tracking-[3px] xl:tracking-[4.80px]">
        {heading}
      </h2>

      <div
        className={`flex flex-col gap-8 ${isColumn ? "md:flex-col" : "xl:flex-row"} md:gap-10 xl:gap-14`}
      >
        {items.map((item) => (
          <VisionItem key={item.title} title={item.title} body={item.body} />
        ))}
      </div>

      {/* Mobile decorator — hidden on md+ */}
      {mobileDecorator && (
        <div className="flex justify-center mt-6 pointer-events-none md:hidden">
          <Image
            src={mobileDecorator}
            alt=""
            className="w-full h-auto object-contain"
            height={1076}
            width={1192}
          />
        </div>
      )}
    </section>
  );
};

export default VisionSection;

