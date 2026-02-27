"use client";
import { useSectionStore } from "@/shared/store/useSectionStore";
import Logo from "../icon/Logo";
import Sidebar from "../sidebar";
import { useState } from "react";
import HamburguerIcon from "@/shared/components/ui/icon/Hamburguer";
import TalkButton from "@/shared/components/ui/button/TalkButton";
import Navigation from "@/shared/components/ui/header/Navigation2";

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { sectionActiveName , navigateTo} = useSectionStore();

  const handleToggle = () => setToggleMenu((prev) => !prev);

  return (
    <header
      className={`fixed right-0 left-0 sm:h-28 flex items-center max-sm:py-10 py-5 max-sm:px-5 sm:max-w-[calc(100%-8.25rem)] mx-auto z-[100] box-border duration-300 justify-between transition-all ${
        sectionActiveName == "FOOTER" && "opacity-0 pointer-events-none"
      }`}
    >
      <button className="cursor-pointer" onClick={() => navigateTo("HOME")}>
        <Logo className="h-[3.3125rem] w-[3.75rem] max-sm:w-[2rem] max-sm:h-[1.8125rem] " />
      </button>

      <div className="flex gap-12 items-center  ">
        <Navigation />
        <button
          onClick={handleToggle}
          className="cursor-pointer text-white sm:text-base-200 hover:text-primary-200 transition-colors duration-300 max-sm:border border-base-purple-200 rounded-[7.1875rem] max-sm:px-3.5 max-sm:py-2.5"
        >
          <HamburguerIcon className="max-sm:size-4" />
        </button>
        <TalkButton className="w-[17.125rem] h-16 flex relative overflow-hidden max-xl:hidden">
          {"Let's Talk "}{" "}
        </TalkButton>
      </div>

      <Sidebar setToggleMenu={setToggleMenu} isActive={toggleMenu} />
    </header>
  );
};

export default Header;
