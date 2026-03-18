import Image from "next/image";



const ImageGalleryStrip = () => (
  <div className="h-full w-full flex gap-5 max-xl:flex-col">
    <div className="h-[39.1875rem] w-full max-md:h-[12.5rem] xl:w-1/4">
      <Image
        src="/images/portfolios/portalfi/portalfi_tunnel.webp"
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>

    <div className="h-[39.1875rem] w-full max-md:h-[12.5rem] xl:w-1/4">
      <Image
        src="/images/portfolios/portalfi/portalfi-standard-card.webp"
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>

    <div className="h-[39.1875rem] w-full max-md:h-[12.5rem] xl:w-1/2">
      <Image
        src="/images/portfolios/portalfi/portalfi-card.webp"
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>
  </div>
);

export default ImageGalleryStrip;
