import Image from "next/image";

const FullWidthBanner = () => {
  return (
    <div className="xl:h-[68.5rem] my-5 w-full overflow-hidden">
      <Image
        src="/images/portfolios/sozialens/banner-2.webp"
        alt=""
        width={3840}
        height={2192}
        className="w-full h-auto md:h-full md:w-auto object-cover"
      />
    </div>
  );
};

export default FullWidthBanner;

