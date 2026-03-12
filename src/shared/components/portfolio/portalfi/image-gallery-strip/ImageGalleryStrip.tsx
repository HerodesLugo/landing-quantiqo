import Image from "next/image";

// ─── ImageGalleryStrip ────────────────────────────────────────────────────────
// Three images side by side: two narrow (1/4) + one wide (1/2).

const ImageGalleryStrip = () => (
  <div className="h-full w-full flex gap-5">
    <div className="h-[39.1875rem] w-1/4">
      <Image
        src="/images/portfolios/portalfi/portalfi_tunnel.webp"
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>

    <div className="h-[39.1875rem] w-1/4">
      <Image
        src="/images/portfolios/portalfi/portalfi-standard-card.webp"
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>

    <div className="h-[39.1875rem] w-1/2">
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
