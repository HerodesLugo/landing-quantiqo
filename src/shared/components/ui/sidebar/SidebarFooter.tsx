import Link from "next/link";
import React from "react";
import { SOCIAL_LINKS } from "./data";

interface SidebarFooterProps {
  isActive?: boolean;
}

export const SidebarFooter = ({ isActive }: SidebarFooterProps) => {
  return (
    <div className="flex justify-between sm:items-center relative z-50   max-sm:flex-col gap-5 ">
      
      <div className="flex sm:items-center sm:gap-36 footer-item max-sm:flex-col gap-5">
        
        <div className="inline-flex justify-start items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
          <div className="justify-start text-base-300 text-lg font-medium  max-sm:text-xs">
            Social Links
          </div>
        </div>

        <div className="inline-flex text-base justify-start items-center gap-3">
          {SOCIAL_LINKS.map((link, idx) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                tabIndex={isActive ? 0 : -1}
                className="justify-start text-white max-sm:text-xs font-medium hover:text-primary-200 transition-all duration-200 hover:-translate-y-1"
              >
                {link.label}
              </Link>
              {idx < SOCIAL_LINKS.length - 1 && (
                <div className="justify-start text-base-400 font-medium">/</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="footer-item justify-start text-base text-base-300 uppercase tracking-[10px] font-normal max-sm:tracking-[3px] max-sm:text-xs">
        All rights reserved © Quantiqo
      </div>

    </div>
  );
};
