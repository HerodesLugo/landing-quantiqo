import Image from "next/image";

export interface ProjectBentoGridProps {
  squareImg: string;
  phonesImg: string;
  cardsImg: string;
  smallSquareImg: string;
  devicesImg: string;
}

const ProjectBentoGrid = ({
  squareImg,
  phonesImg,
  cardsImg,
  smallSquareImg,
  devicesImg,
}: ProjectBentoGridProps) => {
  return (
    <div className="flex flex-row gap-5 w-full px-5 2xl:px-0 mb-11">
      <div className="flex flex-col gap-5 w-full 2xl:w-auto ">
        <div className="w-full 2xl:w-[814.36px] h-[350px]  2xl:h-[661.54px] relative bg-white overflow-hidden ">
          <div className="hidden 2xl:flex w-[661.31px] left-[65.85px] top-[203px] absolute flex-col justify-start items-center gap-7"></div>
          <div className="w-full max-2xl:hidden h-full 2xl:w-[815.54px] 2xl:h-[547.62px] 2xl:left-[1380.63px] 2xl:top-[491.96px] absolute 2xl:origin-top-left 2xl:rotate-[148.31deg] opacity-30 bg-gradient-to-bl from-blue-700 to-blue-200 blur-[100px] 2xl:blur-[150.15px]" />
          <div className="absolute inset-0 flex justify-center items-center max-2xl:p-10">
            <Image
              src={squareImg}
              alt=""
              height={337}
              width={662}
              className="max-2xl:w-full max-2xl:h-full max-2xl:object-contain"
            />
          </div>
        </div>

        <div className="w-full 2xl:w-[814.36px] h-[300px]  2xl:h-72 relative bg-white overflow-hidden ">
          <div className="absolute max-2xl:hidden inset-0 2xl:w-full 2xl:h-96 2xl:-inset-auto 2xl:left-[579.98px] 2xl:top-[426.52px] 2xl:origin-top-left 2xl:rotate-[-113.22deg] opacity-30 bg-gradient-to-bl from-blue-700 to-blue-200 blur-[100px] 2xl:blur-[150.15px]" />
          <div className="absolute bottom-0 w-full flex justify-center items-end max-2xl:px-10">
            <Image
              src={phonesImg}
              alt=""
              height={1092}
              width={3258}
              className="max-2xl:w-full max-2xl:h-auto max-2xl:object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full ">
        <div className="flex flex-col max-2xl:h-full md:flex-row gap-5 w-full">
          <div className="w-full 2xl:flex-1  2xl:h-[569.23px] relative bg-white overflow-hidden">
            <div className="absolute max-2xl:hidden inset-0 2xl:-inset-auto 2xl:w-[815.54px] 2xl:h-[547.62px] 2xl:left-[557.63px] 2xl:top-[517.96px] 2xl:origin-top-left 2xl:rotate-[148.31deg] opacity-30 bg-gradient-to-bl from-blue-700 to-blue-200 blur-[100px] 2xl:blur-[150.15px]" />
            <div className="absolute  flex justify-center items-center bottom-0 right-0">
              <Image
                src={cardsImg}
                alt=""
                height={570}
                width={490}
                className="max-2xl:w-full  "
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full flex-1">
            <div className="w-full flex-1 2xl:h-[300px] sm:h-80 relative bg-white overflow-hidden ">
              <div className="absolute max-2xl:hidden inset-0 2xl:-inset-auto 2xl:w-full 2xl:h-96 2xl:left-[133.05px] 2xl:top-[679.23px] 2xl:origin-top-left 2xl:rotate-[-135.45deg] opacity-40 bg-gradient-to-bl from-blue-700 to-blue-200 blur-[100px] 2xl:blur-[150.15px]" />

              <div className="absolute  inset-0 2xl:top-auto bottom-0 flex justify-center 2xl:items-center items-center ">
                <Image
                  src={smallSquareImg}
                  alt=""
                  height={313}
                  width={568}
                  className="max-2xl:w-full max-2xl:h-full max-2xl:object-cover"
                />
              </div>
            </div>

            <div className="w-full flex-1 2xl:h-[150px] sm:h-56 relative bg-white overflow-hidden ">
              <div className="relative z-50 flex ">
                <div className="p-10">
                  <div className="justify-start text-zinc-800 text-3xl font-normal font-['Satoshi']">
                    PortalFi
                  </div>
                  <div className="justify-start">
                    <span className="text-zinc-800 text-3xl font-normal font-['Satoshi']">
                      Banking{" "}
                    </span>
                    <span className="text-zinc-800 text-3xl font-bold font-['Satoshi']">
                      Evolved.{" "}
                    </span>
                    <div className="justify-start text-zinc-800 text-3xl font-normal font-['Satoshi']">
                      DeFi Simplified
                    </div>
                    <div className="w-80 justify-start">
                      <span className="text-zinc-800 text-xs font-medium font-['Satoshi']">
                        Earn up to{" "}
                      </span>
                      <span className="text-zinc-800 text-xs font-black font-['Satoshi']">
                        9% APY,
                      </span>
                      <span className="text-zinc-800 text-xs font-medium font-['Satoshi']">
                        {" "}
                        make global payments with zero fees, and forget the
                        crypto jargon.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end absolute right-5 py-5 -top-2.5">
                  <div className="justify-start text-zinc-400 text-3xl font-normal font-['Satoshi']">
                    Satoshi
                  </div>
                  <div className="opacity-30 justify-start text-zinc-400 text-[80px] lg:text-[120px] xl:text-[160.10px] font-normal font-['Satoshi'] -mt-5">
                    Aa
                  </div>
                </div>
              </div>

              <div className="absolute max-2xl:hidden inset-0 2xl:-inset-auto 2xl:w-full 2xl:h-96 2xl:left-[133.05px] 2xl:top-[355.23px] 2xl:origin-top-left 2xl:rotate-[-135.45deg] opacity-30 bg-gradient-to-bl from-blue-700 to-blue-200 blur-[100px] 2xl:blur-[150.15px]" />
            </div>
          </div>
        </div>

        <div className="w-full h-[300px]  2xl:h-96 relative bg-white overflow-hidden ">
          <div className="absolute bottom-0 w-full flex justify-center items-end z-10 max-2xl:px-5">
            <Image
              src={devicesImg}
              alt=""
              height={1461}
              width={4325}
              className="max-2xl:w-full max-2xl:h-auto max-2xl:object-contain"
            />
          </div>
          <div className="absolute max-2xl:hidden inset-0 2xl:-inset-auto 2xl:w-full 2xl:h-[636.84px] 2xl:left-[1005.54px] 2xl:top-[22.86px] 2xl:origin-top-left 2xl:rotate-[148.31deg] opacity-30 bg-gradient-to-bl from-blue-700 to-blue-200 blur-[100px] 2xl:blur-[150.15px]" />
        </div>
      </div>
    </div>
  );
};

export default ProjectBentoGrid;
