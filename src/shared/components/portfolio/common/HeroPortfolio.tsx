import Image from "next/image";

interface HeroPortfolioProps {
  src: string;
  height?: number;
  width?: number;
  
}
const HeroPortfolio = ({ src, height, width }: HeroPortfolioProps) => {
  return (
    <div className="w-full max-sm:h-[13.75rem]  xl:h-[1001px] overflow-hidden">
      <Image
        src={src}
        alt="Hero"
        height={height || 1001}
        width={width || 1920}
        className="object-cover size-full"
        priority
      />
    </div>
  );
};

export default HeroPortfolio;
