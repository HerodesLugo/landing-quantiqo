import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";

const LinusNftSection = () => (
  <>
    <div className="flex flex-col md:flex-row h-auto xl:h-[38.625rem] gap-5">
      <div className=" flex-1">
        <Image
          src="/images/portfolios/linus/nfts.webp"
          className="size-full object-cover"
          width={2748}
          height={1854}
          alt="banner"
        />
      </div>

      <div className="flex-1 ">
        <Image
          src="/images/portfolios/linus/cards.webp"
          className="size-full object-cover"
          width={2748}
          height={1854}
          alt="banner"
        />
      </div>
    </div>
    <div className="inline-flex flex-col justify-start items-start gap-1.5">
      <SectionLabel title="NFTS" subtitle="Illustration" />
    </div>
  </>
);

export default LinusNftSection;
