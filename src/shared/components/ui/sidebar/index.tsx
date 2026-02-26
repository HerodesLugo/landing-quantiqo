"use client";
import { useSidebarAnimation } from "./hooks/useSidebarAnimation";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarBackground } from "./SidebarBackground";
import { SidebarNav } from "./SidebarNav";
import { SidebarContent } from "./SidebarContent";
import { SidebarFooter } from "./SidebarFooter";

interface SidebarProps {
  isActive?: boolean;
  setToggleMenu: (_value: boolean) => void;
}

const Sidebar = ({ isActive, setToggleMenu }: SidebarProps) => {
  const { containerRef } = useSidebarAnimation(isActive);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none opacity-0"
      aria-hidden={!isActive}
    >
      <div className="h-dvh w-full bg-black relative flex flex-col justify-between sm:px-20 sm:py-20 pointer-events-auto max-sm:px-5 max-sm:py-5">
        {/* --- HEADER --- */}
        <SidebarHeader onClose={() => setToggleMenu(false)} />

        {/* --- BACKGROUND LAYERS --- */}
        <SidebarBackground />

        {/* --- MAIN CONTENT --- */}
        <div className="flex items-center max-sm:flex-col relative z-50 justify-between h-full max-sm:mt-2.5">
          <SidebarNav isActive={isActive} />
          <SidebarContent />
        </div>

        {/* --- FOOTER --- */}
        <SidebarFooter isActive={isActive} />
      </div>
    </div>
  );
};

export default Sidebar;
