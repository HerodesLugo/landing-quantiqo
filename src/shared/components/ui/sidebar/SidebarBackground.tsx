import Image from "next/image";

export const SidebarBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-element">
      <div className="absolute inset-0 z-10 flex justify-center items-center size-full overflow-hidden mix-blend-screen sm:blur-[24px] blur-[6px]">
        <video
          width="1024"
          height="1024"
          autoPlay
          loop
          muted
          playsInline
          className="size-full sm:opacity-60 pointer-events-none"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/portalfi-e8ac3.firebasestorage.app/o/quantiqo%2Fvideo%2Fquantiqo_video.mp4?alt=media&token=64d4876b-5b2a-4f97-b20e-e9593f5c8bde" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-30 flex justify-center items-center">
        <Image
          src="/images/quantiqo-gradient.svg"
          alt="gradient background"
          className="object-cover"
          width={2196}
          height={2094}
        />
      </div>
    </div>
  );
};
