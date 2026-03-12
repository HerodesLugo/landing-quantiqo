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
}: ProjectInfoCardData) => {
  return (
    <div className="bg-white relative max-w-[46.25rem] flex flex-col justify-between  w-full max-h-[36.8125rem] rounded-bl-[6.125rem] p-14">
      
      {logoSrc && (
        <div className="flex absolute right-20 justify-end">
          <Image
            src={logoSrc}
            alt={`${industry} logo`}
            height={192}
            width={192}
            className={`${logoClassName} object-cover`}
          />
        </div>
      )}

      <div className="flex flex-col h-full  gap-9 justify-end pb-20">
        <div className="flex flex-col gap-1 ">
          <span className="text-black/20 text-xl uppercase font-semibold tracking-[2.8px]">
            Industry
          </span>
          <span className="text-black text-xl font-normal uppercase tracking-[2.8px]">
            {industry}
          </span>
        </div>

        <div className="flex gap-5">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
      
      <div>
        <a
          href={buttonUrl || "#"}
          target={buttonUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <Button className="h-16 flex overflow-hidden xl:w-[16.875rem] absolute right-20 -bottom-8 w-[13rem] max-xl:text-base max-sm:h-14">
            {buttonLabel ?? "Visit"}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectInfoCard;

