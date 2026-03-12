import TagLabel from "./TagLabel";
import { TagGroupData } from "./types";

const TagGroup = ({ title, tags, columns = 2 }: TagGroupData) => {
  const gridColsClass = columns === 3 ? "grid-cols-3" : "grid-cols-2";
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-dark text-2xl font-semibold uppercase tracking-[2.4px]">
        {title}
      </h4>
      <ul className={`grid ${gridColsClass} gap-y-5 gap-x-7`}>
        {tags.map((tag) => (
          <TagLabel key={tag} text={tag} />
        ))}
      </ul>
    </div>
  );
};

export default TagGroup;
