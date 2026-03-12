import Image from "next/image";
import VisionItem from "./VisionItem";
import { VisionSectionProps } from "./types";

const VisionSection = ({
  heading,
  decoratorSrc,
  items,
  isColumn = false
}: VisionSectionProps) => {
  return (
    <section className="flex w-full flex-col justify-between min-h-[64.75rem] pt-56 px-28 pb-20 relative  overflow-hidden">
      {decoratorSrc && (
        <div className="absolute -top-20 right-0 flex justify-center pointer-events-none">
          <Image
            src={decoratorSrc}
            alt=""
            className="2xl:w-[59.625rem] w-[43.75rem]"
            height={1428}
            width={954}
          />
        </div>
      )}

      <h2 className="w-96 text-black text-5xl font-semibold font-['Host_Grotesk'] uppercase tracking-[4.80px]">
        {heading}
      </h2>

      <div className={`flex gap-14 ${isColumn && "flex-col"}`}>
        {items.map((item) => (
          <VisionItem key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
