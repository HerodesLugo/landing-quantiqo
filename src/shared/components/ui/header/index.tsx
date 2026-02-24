"use client";
import { useSectionStore } from "@/shared/store/useSectionStore";
import Logo from "../icon/Logo";
import Sidebar from "../sidebar";
import { useState, useRef } from "react";
import HamburguerIcon from "@/shared/components/ui/icon/Hamburguer";
import Button from "@/shared/components/ui/button";
import ChevronIcon from "@/shared/components/ui/icon/Chevron";
import SubMenu from "@/shared/components/ui/header/SubMenu";
import { NAV_MENU } from "@/shared/components/ui/header/data";
import { useClickOutside } from "@/shared/hooks/useClickOutside";


const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const { sectionActiveName } = useSectionStore();
  const navRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(navRef, () => {
    if (activeSubMenu !== null) {
      setActiveSubMenu(null);
    }
  });
  
  const handleToggle = () => setToggleMenu((prev) => !prev);
  const handleMouseEnter = (id: number) => setActiveSubMenu(id);
  const handleMouseLeave = () => setActiveSubMenu(null);

  return (
    <header
      className={`fixed right-0 left-0 sm:h-28 flex items-center max-sm:py-10 py-5 max-sm:px-5 sm:max-w-[calc(100%-8.25rem)] mx-auto z-[100] box-border duration-300 justify-between transition-all ${
        sectionActiveName == "FOOTER" && "opacity-0 pointer-events-none"
      }`}
    >
      <Logo className="h-[3.3125rem] w-[3.75rem] max-sm:w-[2rem] max-sm:h-[1.8125rem] " />

      <div className="flex gap-12 items-center  ">
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
        <button
          onClick={handleToggle}
          className="cursor-pointer text-white sm:text-base-200 hover:text-primary-200 transition-colors duration-300 max-sm:border border-base-purple-200 rounded-[7.1875rem] max-sm:px-3.5 max-sm:py-2.5"
        >
          <HamburguerIcon  className="max-sm:size-4"/>
        </button>
        <Button className="w-[17.125rem] h-16 flex relative overflow-hidden max-xl:hidden">
          contact
        </Button>
      </div>

      <Sidebar setToggleMenu={setToggleMenu} isActive={toggleMenu} />
    </header>
  );
};

export default Header;
