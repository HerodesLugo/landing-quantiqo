import Image from "next/image";

// ─── FinalBanner ──────────────────────────────────────────────────────────────
// Full-bleed closing banner image.

const FinalBanner = () => (
  <div className="relative h-[64.5rem]">
    <Image
      src="/images/portfolios/portalfi/portalfi-banner-3.webp"
      alt=""
      className="object-cover"
      height={4128}
      width={7680}
    />
  </div>
);

export default FinalBanner;
