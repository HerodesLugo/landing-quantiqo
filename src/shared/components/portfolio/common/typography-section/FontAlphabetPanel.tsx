import Image from "next/image";

export interface FontAlphabetPanelProps {
  fontName: string;
  fontClass: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName?: string;
}

const FontAlphabetPanel = ({
  fontName,
  fontClass,
  imageSrc,
  imageWidth,
  imageHeight,
  imageClassName = "w-[46.6875rem] object-cover absolute bottom-0 right-0",
}: FontAlphabetPanelProps) => (
  <div className="bg-white relative p-14 h-full">
    <div className={`justify-start text-black tracking-widest text-5xl xl:text-6xl font-normal mb-6 ${fontClass}`}>
      {fontName}
    </div>
    <div className="flex flex-col gap-1 relative z-10 w-full">
      <div className={`justify-start text-black text-xl xl:text-2xl break-all font-normal leading-tight tracking-wider ${fontClass}`}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNn
      </div>
      <div className={`justify-start text-black text-xl xl:text-2xl break-all font-normal leading-tight tracking-wider ${fontClass}`}>
        OoPpQqRrSsTtUuVvWwXxYyZz
      </div>
      <div className={`justify-start text-black text-xl xl:text-2xl break-all font-normal leading-tight tracking-wider ${fontClass}`}>
        1234567890()$#@%^*+?/
      </div>
    </div>
    <Image
      src={imageSrc}
      alt=""
      width={imageWidth}
      height={imageHeight}
      className={imageClassName}
    />
  </div>
);

export default FontAlphabetPanel;
