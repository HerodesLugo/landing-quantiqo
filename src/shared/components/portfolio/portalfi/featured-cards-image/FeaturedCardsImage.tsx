import Image from "next/image";

const FeaturedCardsImage = () => (
  <div className="2xl:h-[42.625rem] my-28 relative max-md:hidden max-2xl:px-10">
    <div className="max-w-[101.25rem]  mx-auto">
      <Image
        src="/images/portfolios/portalfi/portalfi-cards.webp"
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>
    <div className="2xl:w-[1865px] absolute h-28 opacity-20 bottom-0 bg-black rounded-full blur-xl w-full left-0 " />
  </div>
);

export default FeaturedCardsImage;
