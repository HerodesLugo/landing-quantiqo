import Image from "next/image";

const ProjectGridGallery = () => {
  return (
    <div className="h-[62.5625rem] grid grid-cols-12 grid-rows-2 gap-5 my-10 max-md:hidden">
      <div className="col-span-3 bg-blue-700 overflow-hidden">
        <Image
          src="/images/portfolios/portalfi/portalfi-card.webp"
          alt=""
          className="w-[39.25rem] h-[30.75rem] object-cover object-right"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-6 bg-neutral-800 overflow-hidden">
        <Image
          src="/images/portfolios/portalfi/portalfi-inner-banner.webp"
          alt=""
          className="w-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-3 bg-neutral-700">
        <Image
          src="/images/portfolios/portalfi/portalfi-phonesito.webp"
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-3 bg-neutral-300">
        <Image
          src="/images/portfolios/portalfi/portalfi-brilliant-card.webp"
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-4 bg-neutral-200">
        <Image
          src="/images/portfolios/portalfi/portalfi-stand.webp"
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-5 bg-blue-600">
        <Image
          src="/images/portfolios/portalfi/portalfi-streeth.webp"
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
    </div>
  );
};

export default ProjectGridGallery;
