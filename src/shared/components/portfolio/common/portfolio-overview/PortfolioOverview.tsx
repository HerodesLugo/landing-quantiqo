import TagGroup from "./TagGroup";
import ProjectInfoCard from "./ProjectInfoCard";
import { PortfolioOverviewProps } from "./types";

const TAG_GROUPS = [
  {
    title: "OBJETIVES",
    tags: [
      "Branding and Positioning",
      "VC",
      "Product MVP",
      "Product Launch",
      "Marketing Assets",
      "Brand Awareness",
      "Brand Experience",
      "Top-Tier Product",
    ],
  },
  {
    title: "DELIVERABLES",
    columns: 3,
    tags: [
      "Concept",
      "Branding",
      "Category Design",
      "Brand Assets",
      "Pitch and VC Assets",
      "Website",
      "Product",
      "Development",
      "Coming Soon Video",
      "Motion Assets",
      "3D Assets",
      "Marketing Assets",
    ],
  },
];

const PortfolioOverview = ({
  title,
  description,
  infoCard,
  buttonLabel,
  buttonUrl,
  tagGroups,
}: PortfolioOverviewProps) => {
  const groups = tagGroups ?? TAG_GROUPS;

  return (
    <section className="relative w-full flex flex-col-reverse max-xl:items-end xl:flex-row justify-between xl:pb-24">      
      
      <div className="px-6 md:px-10 xl:px-14 py-8 md:py-12 xl:py-16 flex flex-col gap-6 md:gap-8 xl:gap-10">
        
        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <h2 className="text-base-900 text-2xl md:text-3xl xl:text-5xl font-bold uppercase tracking-[-1px]">
            {title}
          </h2>
          <p className="text-base-500 text-sm leading-[1.6] md:leading-relaxed md:pr-10 xl:pr-28 whitespace-pre-line">
            {description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row xl:flex-nowrap items-start gap-y-8 md:gap-y-0 w-full xl:w-auto">
          {groups.map((group, index) => (
            <div key={group.title} className="flex items-start w-full md:w-1/2 xl:w-auto">
              {index > 0 && (
                <div className="self-stretch shrink-0 w-px bg-dark/10 mx-5 md:mx-8 2xl:mr-10 max-md:hidden" />
              )}
              <div className="w-full xl:w-auto">
                <TagGroup title={group.title} tags={group.tags} columns={group.columns} />
              </div>
            </div>
          ))}
        </div>

      </div>

      <ProjectInfoCard {...infoCard} buttonLabel={buttonLabel} buttonUrl={buttonUrl} />
    </section>
  );
};

export default PortfolioOverview;
