import React from 'react';

export interface FontViewProps {
  fontName: string;
  fontClass: string;
  gradientClass?: string;
}

const FontView: React.FC<FontViewProps> = ({
  fontName,
  fontClass,
  gradientClass = "from-blue-700 to-blue-200",
}) => {
  return (
    <div className="w-full my-10 h-[522px] relative bg-white overflow-hidden">
      <div className={`w-[832.72px] h-[559.16px] left-[1407.89px] top-[453.28px] absolute origin-top-left rotate-[148.31deg] opacity-10 bg-gradient-to-bl ${gradientClass} blur-[150.15px]`} />
      <div className={`w-96 left-[76px] top-[127px] absolute justify-start text-zinc-800 text-5xl ${fontClass}`}>
        {fontName}
      </div>
      <div className={`left-[712px] top-[63px] absolute justify-start text-zinc-800 text-4xl font-light ${fontClass}`}>
        Light
      </div>
      <div className={`left-[1289.71px] top-[67.55px] absolute justify-start text-zinc-800 text-4xl font-light ${fontClass}`}>
        Aa
      </div>
      <div className={`left-[1285.95px] top-[142.71px] absolute justify-start text-zinc-800 text-4xl font-normal ${fontClass}`}>
        Gg
      </div>
      <div className={`left-[1279.05px] top-[217.10px] absolute justify-start text-zinc-800 text-4xl font-medium ${fontClass}`}>
        Mm
      </div>
      <div className={`left-[1383.09px] top-[67.55px] absolute justify-start text-zinc-800 text-4xl font-light ${fontClass}`}>
        Bb
      </div>
      <div className={`left-[1381.84px] top-[142.71px] absolute justify-start text-zinc-800 text-4xl font-normal ${fontClass}`}>
        Hh
      </div>
      <div className={`left-[1381.21px] top-[217.10px] absolute justify-start text-zinc-800 text-4xl font-medium ${fontClass}`}>
        Nn
      </div>
      <div className={`left-[1385.60px] top-[292.25px] absolute justify-start text-zinc-800 text-4xl font-bold ${fontClass}`}>
        Ss
      </div>
      <div className={`left-[1471.46px] top-[67.55px] absolute justify-start text-zinc-800 text-4xl font-light ${fontClass}`}>
        Cc
      </div>
      <div className={`left-[1484.62px] top-[142.71px] absolute justify-start text-zinc-800 text-4xl font-normal ${fontClass}`}>
        Ii
      </div>
      <div className={`left-[1468.95px] top-[217.10px] absolute justify-start text-zinc-800 text-4xl font-medium ${fontClass}`}>
        Oo
      </div>
      <div className={`left-[1477.10px] top-[292.25px] absolute justify-start text-zinc-800 text-4xl font-bold ${fontClass}`}>
        Tt
      </div>
      <div className={`left-[1554.19px] top-[67.55px] absolute justify-start text-zinc-800 text-4xl font-light ${fontClass}`}>
        Dd
      </div>
      <div className={`left-[1562.34px] top-[142.71px] absolute justify-start text-zinc-800 text-4xl font-normal ${fontClass}`}>
        Jj
      </div>
      <div className={`left-[1553.56px] top-[217.10px] absolute justify-start text-zinc-800 text-4xl font-medium ${fontClass}`}>
        Pp
      </div>
      <div className={`left-[1551.68px] top-[292.25px] absolute justify-start text-zinc-800 text-4xl font-bold ${fontClass}`}>
        Uu
      </div>
      <div className={`left-[1554.19px] top-[366.64px] absolute justify-start text-zinc-800 text-4xl font-black ${fontClass}`}>
        Xx
      </div>
      <div className={`left-[1641.30px] top-[67.55px] absolute justify-start text-zinc-800 text-4xl font-light ${fontClass}`}>
        Ee
      </div>
      <div className={`left-[1641.30px] top-[142.71px] absolute justify-start text-zinc-800 text-4xl font-normal ${fontClass}`}>
        Kk
      </div>
      <div className={`left-[1636.29px] top-[217.10px] absolute justify-start text-zinc-800 text-4xl font-medium ${fontClass}`}>
        Qq
      </div>
      <div className={`left-[1639.42px] top-[292.25px] absolute justify-start text-zinc-800 text-4xl font-bold ${fontClass}`}>
        Vv
      </div>
      <div className={`left-[1641.30px] top-[366.64px] absolute justify-start text-zinc-800 text-4xl font-black ${fontClass}`}>
        Yy
      </div>
      <div className={`left-[1747.65px] top-[66.80px] absolute justify-start text-zinc-800 text-4xl font-light ${fontClass}`}>
        Ff
      </div>
      <div className={`left-[1748.96px] top-[141.19px] absolute justify-start text-zinc-800 text-4xl font-normal ${fontClass}`}>
        Ll
      </div>
      <div className={`left-[1743.70px] top-[216.34px] absolute justify-start text-zinc-800 text-4xl font-medium ${fontClass}`}>
        Rr
      </div>
      <div className={`left-[1729.23px] top-[291.49px] absolute justify-start text-zinc-800 text-4xl font-bold ${fontClass}`}>
        Ww
      </div>
      <div className={`left-[1743.04px] top-[365.88px] absolute justify-start text-zinc-800 text-4xl font-black ${fontClass}`}>
        Zz
      </div>
      <div className="w-[1084.01px] h-0 left-[712px] top-[129.04px] absolute opacity-50 outline outline-[0.85px] outline-offset-[-0.43px] outline-neutral-400" />
      <div className={`left-[712px] top-[138.15px] absolute justify-start text-zinc-800 text-4xl font-normal ${fontClass}`}>
        Regular
      </div>
      <div className="w-[1084.01px] h-0 left-[712px] top-[203.43px] absolute opacity-50 outline outline-[0.85px] outline-offset-[-0.43px] outline-neutral-400" />
      <div className={`left-[712px] top-[212.54px] absolute justify-start text-zinc-800 text-4xl font-medium ${fontClass}`}>
        Medium
      </div>
      <div className="w-[1084.01px] h-0 left-[712px] top-[278.59px] absolute opacity-50 outline outline-[0.85px] outline-offset-[-0.43px] outline-neutral-400" />
      <div className={`left-[712px] top-[287.70px] absolute justify-start text-zinc-800 text-4xl font-bold ${fontClass}`}>
        Bold
      </div>
      <div className="w-[1084.01px] h-0 left-[712px] top-[352.98px] absolute opacity-50 outline outline-[0.85px] outline-offset-[-0.43px] outline-neutral-400" />
      <div className={`left-[712px] top-[362.09px] absolute justify-start text-zinc-800 text-4xl font-black ${fontClass}`}>
        Black
      </div>
      <div className="w-72 left-[76px] top-[276px] absolute opacity-20 inline-flex flex-col justify-start items-start gap-1">
        <div className="inline-flex justify-start items-center gap-4">
          <div className={`justify-start text-zinc-800 text-3xl font-light ${fontClass}`}>
            Thin
          </div>
          <div className={`justify-start text-zinc-800 text-3xl font-normal ${fontClass}`}>
            Regular
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-3.5">
          <div className={`justify-start text-zinc-800 text-3xl font-medium ${fontClass}`}>
            Medium
          </div>
          <div className={`justify-start text-zinc-800 text-3xl font-bold ${fontClass}`}>
            Bold
          </div>
          <div className={`justify-start text-zinc-800 text-3xl font-black ${fontClass}`}>
            Black
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontView;
