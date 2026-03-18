import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";

const LinusImageCollage = () => (
  <div className="md:h-[70rem]">
    <div className="flex flex-col md:flex-row w-full md:h-[60.3125rem] gap-5">
      {/* Columna Izquierda */}
      <div className="flex-1 h-[14rem] md:h-auto overflow-hidden relative">
        <Image
          src="/images/portfolios/linus/postcard.webp"
          alt=""
          width={2745}
          height={3682}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Columna Derecha */}
      <div className="flex-1 flex flex-col gap-5 min-w-0">
        {/* Imagen Superior Derecha */}
        <div className="flex-1 h-[14rem] md:h-auto bg-amber-300 overflow-hidden relative min-h-0">
          <Image
            src="/images/portfolios/linus/dick.webp"
            alt=""
            width={2745}
            height={3682}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fila Inferior Derecha (2 imágenes) */}
        <div className="flex-1 flex h-[10rem] md:h-auto min-h-0">
          <div className="flex-1 bg-accelera overflow-hidden relative min-w-0">
            <Image
              src="/images/portfolios/linus/fight.webp"
              alt=""
              width={2745}
              height={3682}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 bg-amber-100 overflow-hidden relative min-w-0">
            <Image
              src="/images/portfolios/linus/wine.webp"
              alt=""
              width={2745}
              height={3682}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="inline-flex flex-col justify-start items-start gap-1.5 mt-5 ">
      <SectionLabel title="the creation of a CHARACTER" subtitle="Illustration" />
    </div>
  </div>
);

export default LinusImageCollage;
