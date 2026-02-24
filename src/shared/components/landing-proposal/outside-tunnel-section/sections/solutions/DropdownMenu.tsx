import QuantiqoLabel from "@/shared/components/landing-proposal/hero-section/common/QuantiqoLabel";
import ChevronIcon from "@/shared/components/ui/icon/Chevron";
import { useState } from "react";

interface DropDownMenuProps {
  title: string;
  description: string;
  points: string[];
}

const DropdownMenu = ({ description, points, title }: DropDownMenuProps) => {
  const [openInfo, setOpenInfo] = useState(true);
  const toggleInfo = () => setOpenInfo(!openInfo);

  return (
    <div className="flex flex-col items-end gap-5 ">
      <button onClick={toggleInfo} className="flex items-center cursor-pointer">
        <div className=" text-right justify-center text-primary-100 text-3xl font-medium uppercase tracking-[4.04px]">
          {title}
        </div>
        <ChevronIcon />
      </button>
      {openInfo && (
        <div className="flex flex-col w-96 items-end gap-5">
          <div className=" opacity-70 text-right justify-start text-white text-sm font-light ">
            {description}
          </div>
          <div className="grid  grid-cols-2 gap-6  ">
            {points.map((point) => (
              <QuantiqoLabel key={point} label={point} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default DropdownMenu;
