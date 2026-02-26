import { NAV_MENU } from "@/shared/components/ui/header/data";
import SubMenu from "@/shared/components/ui/header/SubMenu";
import ChevronIcon from "@/shared/components/ui/icon/Chevron";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { useRef, useState } from "react";

const Navigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (id: number) => setActiveSubMenu(id);
  const handleMouseLeave = () => setActiveSubMenu(null);

  useClickOutside(navRef, () => {
    if (activeSubMenu !== null) {
      setActiveSubMenu(null);
    }
  });

  
  return (
    <div className="flex gap-12 items-center max-xl:hidden">
      <div ref={navRef} className="flex gap-12 relative">
        {NAV_MENU.map((menu) => {
          const isHovered = activeSubMenu === menu.id;
          const hasSubMenu = !!menu.subMenu;
          return (
            <div
              key={menu.id}
              className="relative h-full flex items-center"
              onMouseEnter={() => hasSubMenu && handleMouseEnter(menu.id)}
            >
              <div className="flex items-center text-white/60 hover:text-primary-200 cursor-pointer group">
                <div
                  className={`transition-colors duration-300 text-base font-medium uppercase tracking-[3.60px] ${isHovered ? "text-primary-200 " : ""}`}
                >
                  {menu.label}
                </div>
                {hasSubMenu && (
                  <div
                    className={`transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}
                  >
                    <ChevronIcon />
                  </div>
                )}
              </div>
              {hasSubMenu && isHovered && (
                <div
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-0 pt-6 left-0"
                >
                  <SubMenu data={menu.subMenu!} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
