import Image from "next/image";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const LinusImageCollage = () => (
  <div className="xl:h-[70rem]">
    <div className="flex flex-col xl:flex-row w-full xl:h-[60.3125rem] gap-5">
      {/* Columna Izquierda */}
      <div className="flex-1 h-[14rem] xl:h-auto overflow-hidden relative">
        <Image
          src={IMAGE_ASSETS.linus.postcard}
          alt=""
          width={2745}
          height={3682}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Columna Derecha */}
      <div className="flex-1 flex flex-col gap-5 min-w-0">
        {/* Imagen Superior Derecha */}
        <div className="flex-1 h-[14rem] xl:h-auto bg-amber-300 overflow-hidden relative min-h-0">
          <Image
            src={IMAGE_ASSETS.linus.dick}
            alt=""
            width={2745}
            height={3682}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fila Inferior Derecha (2 imágenes) */}
        <div className="flex-1 flex h-[10rem] xl:h-auto min-h-0">
          <div className="flex-1 bg-accelera overflow-hidden relative min-w-0">
            <Image
              src={IMAGE_ASSETS.linus.fight}
              alt=""
              width={2745}
              height={3682}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 bg-amber-100 overflow-hidden relative min-w-0">
            <Image
              src={IMAGE_ASSETS.linus.wine}
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
