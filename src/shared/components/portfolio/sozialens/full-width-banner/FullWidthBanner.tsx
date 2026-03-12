import Image from "next/image";

const FullWidthBanner = () => {
  return (
    <div className="h-[68.5rem] my-5">
      <Image
        src="/images/portfolios/sozialens/banner-2.webp"
        alt=""
        width={3840}
        height={2192}
      />
    </div>
  );
};

export default FullWidthBanner;
