"use client";
import Image from "next/image";
import PartnersContent from "./PartnersContent";
import { useCameraStepStore } from "@/shared/store/useCameraStep";
import { PARTNERS_DATA } from "@/shared/components/landing-proposal/partners-section/data";

const Partners = () => {
  const { setCameraStep } = useCameraStepStore();

  const handleChangeCameraPosition = (position: number) => {
    setCameraStep(position);
  };

  const buttonBase =
    "border border-base-blue-100 hover:backdrop-blur-[104.80133819580078px] hover:scale-125 hover:z-10 transition-all duration-300 hover:drop-shadow-[0_4px_96px_rgba(74,_94,_135,_0.90)] backdrop-blur-[75.67313385009766px] bg-[#35406180] hover:bg-[rgba(53, 64, 97, 0.90)] flex items-center justify-center rounded-full";

  return (
    <section
      id="partners"
      className="h-screen flex items-center px-20 justify-center text-6xl relative"
    >
      {/* <div className="flex items-center gap-28 relative z-30">
        <PartnersContent />
        <div className="relative min-w-[51.375rem] max-w-[51.375rem]  h-[40.625rem]  flex justify-center items-center">
          {PARTNERS_DATA.map((partner) => (
            <button
              key={partner.id}
              onMouseEnter={() =>
                handleChangeCameraPosition(partner.eventCameraPosition)
              }
              className={`${buttonBase} ${partner.sizeClass} ${partner.positionClass}`}
            >
              <Image
                src={partner.logo}
                height={partner.iconSize.height}
                width={partner.iconSize.width}
                alt={partner.name}
              />
            </button>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Partners;
