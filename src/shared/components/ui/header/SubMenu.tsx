import ArrowUpRight from "@/shared/components/ui/icon/ArrowUpRight";

interface SubMenuItem {
  label: string;
  href: string;
}

interface SubMenuColumn {
  title: string;
  items: SubMenuItem[];
}

export interface SubMenuData {
  leftColumn: SubMenuColumn;
  rightColumn?: SubMenuColumn;
}


const SubMenu = ({ data }: { data: SubMenuData }) => {
  return (
    <div className="absolute flex left-0 top-10 backdrop-blur-md border border-base-purple-100/50 bg-[rgba(52,_55,_66,_0.50)] rounded-l-[25px] rounded-r-[1.5625rem]">
      <div className="backdrop-blur-md bg-base-purple-200/50 p-8 pr-0 flex flex-col items-start gap-7  z-20 rounded-[1.5625rem] relative">
        <div className="text-xs text-white/60 tracking-[2.0px]  font-medium uppercase">
          {data.leftColumn.title}
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-2.5 h-full">
            {data.leftColumn.items.map((item, index) => (
              <div
                key={index}
                className="text-sm text-white tracking-[4px] whitespace-nowrap cursor-pointer"
              >
                {item.label.toUpperCase()}
              </div>
            ))}
          </div>
          <div className="size-16 "></div>
        </div>
        <div className="absolute right-4 bottom-4 flex items-center justify-center text-primary-100 cursor-pointer hover:scale-110 transition-transform">
          <ArrowUpRight />
        </div>
      </div>
      {data.rightColumn && (
        <div className="p-8 flex flex-col items-start gap-7 rounded-r-[1.5625rem]">
          <div className="text-xs tracking-[2.0px] font-medium uppercase text-white/60">
            {data.rightColumn.title}
          </div>
          <div className="flex flex-col gap-2.5">
            {data.rightColumn.items.map((item, index) => (
              <div
                key={index}
                className="text-xs text-white tracking-[4px] whitespace-nowrap cursor-pointer"
              >
                {item.label.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMenu;