import Image from "next/image";
import StatItem from "./StatItem";
import { ProjectInfoCardData } from "./types";
import Button from "@/shared/components/ui/button";

const ProjectInfoCard = ({
  industry,
  stats,
  logoSrc,
  logoClassName,
  buttonLabel,
  buttonUrl,
  websiteLabel,
  websiteUrl,
}: ProjectInfoCardData) => {
  return (
    <div className="bg-white relative  max-xl:max-w-[90%] max-w-[33.75rem] max-h-[33rem] max-xl:max-h-[25rem]  2xl:max-w-[46.25rem] flex flex-col justify-between w-full 2xl:max-h-[36.8125rem] rounded-b-[2.5rem] xl:rounded-b-none xl:rounded-bl-[6.125rem] p-6 md:p-10 xl:p-14">

      {logoSrc && (
        <div className="flex absolute right-8 md:right-16 xl:right-20 justify-end">
          <Image
            src={logoSrc}
            alt={`${industry} logo`}
            height={192}
            width={192}
            className={`${logoClassName} object-contain max-xl:size-20 `}
          />
        </div>
      )}

      <div className="flex flex-col h-full gap-6 md:gap-9 justify-end pb-10 md:pb-16 xl:pb-20">
        <div className="flex flex-col gap-1">
          <span className="text-black/20 text-base md:text-lg xl:text-xl uppercase font-semibold tracking-[2.8px]">
            Industry
          </span>
          <span className="text-black text-base md:text-lg xl:text-xl font-normal uppercase tracking-[2.8px]">
            {industry}
          </span>
        </div>

        <div className="flex justify-between w-full gap-3 md:gap-5 overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 min-w-0">
              <StatItem value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 -bottom-6 xl:-bottom-8 xl:right-20">
        <a
          href={websiteUrl || buttonUrl || "#"}
          target={websiteUrl || buttonUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <Button  className="h-16 flex relative overflow-hidden max-md:w-[12.5rem]  max-md:h-11 xl:w-[16.875rem] w-[13rem] max-xl:text-base max-sm:h-14 max-md:text-[.5625rem] ">
            {websiteLabel?.toUpperCase() || buttonLabel?.toUpperCase() || "VISIT"}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectInfoCard;

