import IconStack from "@/shared/components/landing-proposal/hero-section/common/IconStack";
import ScrollDown from "@/shared/components/landing-proposal/hero-section/common/ScrollDown";
import ScrollIndicator from "@/shared/components/ui/scroll/ScrollIndicator";
import { useSectionStore } from "@/shared/store/useSectionStore";

interface DecoratorsProps {
  showDecorations: boolean;
  isLastFrame: boolean;
  showScrollIndicator: boolean;
  activeCheckpoint: number;
  showIconStack: boolean;
}

const Decorators = ({
  isLastFrame,
  showDecorations,
  showScrollIndicator,
  activeCheckpoint,
  showIconStack,
}: DecoratorsProps) => {
  const { sectionActiveName } = useSectionStore();
  const isFooter = sectionActiveName === "FOOTER";
  const isHome = sectionActiveName === "HOME";

  
  return (
    <>
      {/* Decoraciones opcionales (solo para primera sección tipo HeroMain) */}
      {showDecorations && (
        <>
          <div
            className={`transition-opacity duration-300 mix-blend-overlay sm:w-[28.1vw] bg-white w-[17.5rem] absolute left-32 sm:left-56 bottom-11 z-50 h-px ${
              isLastFrame ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`w-px h-[320px] bg-white mix-blend-overlay max-sm:hidden absolute right-[5.75rem] z-20 bottom-[350px] ${
              isLastFrame ? "opacity-0" : "opacity-100"
            }`}
          />
        </>
      )}

      <div className={`absolute flex justify-center inset-x-0 sm:bottom-16 bottom-14 z-[200]  transition-opacity ${isFooter ? "opacity-0" : "opacity-100"}`}>
        <div
          className="w-max"
        >
          <ScrollDown showText={isHome} />
        </div>
      </div>

      {/* Indicador de scroll e iconos (solo para primera sección) */}
      {showScrollIndicator && (
          <div
          className={`absolute max-sm:flex-row z-[200] flex flex-col gap-10 sm:right-20  max-sm:pl-5 max-sm:inset-x-0 sm:bottom-16 bottom-14 pointer-events-auto transition-opacity duration-300 ${
            isLastFrame ? "opacity-0" : "opacity-100"
          }`}
        >
          <ScrollIndicator sections={5} activeSlideUI={activeCheckpoint} />
          <div className=" max-sm:absolute  max-sm:right-5 max-sm:-bottom-1">
            <IconStack />
          </div>
        </div>

      )}

      {/* IconStack para secciones sin indicador (OutsideTunnel) */}
      {showIconStack && (
        <>
          <div
            className={`absolute z-[200] flex flex-col gap-10 right-5  sm:right-20 sm:bottom-16 bottom-12 pointer-events-auto transition-opacity duration-500 ${isFooter ? "max-sm:hidden" : ""}`}
          >
            <IconStack />
          </div>
        </>
      )}
    </>
  );
};

export default Decorators;
