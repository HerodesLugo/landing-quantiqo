import Image from "next/image";

interface HeroPortfolioProps {
  src: string;
  height?: number;
  width?: number;
  
}
const HeroPortfolio = ({ src, height, width }: HeroPortfolioProps) => {
  return (
    <div className="w-full  max-h-[1001px] overflow-hidden">
      <Image
        src={src}
        alt="Hero"
        height={height || 1001}
        width={width || 1920}
        className="object-cover w-full"
      />
    </div>
  );
};

export default HeroPortfolio;
