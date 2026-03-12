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
    <section className="relative w-full flex justify-between pb-24">
      <div className="px-14 py-16 flex flex-col gap-10">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-base-900 text-5xl font-bold uppercase tracking-[-1px]">
            {title}
          </h2>
          <p className="text-base-500 text-sm leading-relaxed pr-28">
            {description}
          </p>
        </div>

        <div className="flex items-start">
          {groups.map((group, index) => (
            <div key={group.title} className="flex items-start">
              {index > 0 && (
                <div className="self-stretch w-px bg-dark/10  mx-8 2xl:mr-10" />
              )}
              <TagGroup title={group.title} tags={group.tags} columns={group.columns} />
            </div>
          ))}
        </div>

      </div>

      <ProjectInfoCard {...infoCard} buttonLabel={buttonLabel} buttonUrl={buttonUrl} />
    </section>
  );
};

export default PortfolioOverview;
