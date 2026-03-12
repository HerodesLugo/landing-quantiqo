import { StatItemData } from "./types";

const StatItem = ({ value, label }: StatItemData) => {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-dark text-3xl font-semibold ">
        {value}
      </span>
      <span className="text-dark text-xs uppercase tracking-[1.8px]">
        {label}
      </span>
    </div>
  );
};

export default StatItem;
