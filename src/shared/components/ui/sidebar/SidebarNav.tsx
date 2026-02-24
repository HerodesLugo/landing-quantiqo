import { useState } from "react";
import Link from "next/link";
import { SIDEBAR_ROUTES } from "./data";

interface SidebarNavProps {
  isActive?: boolean;
}

export const SidebarNav = ({ isActive }: SidebarNavProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string, e: React.MouseEvent) => {
    const route = SIDEBAR_ROUTES.find((r) => r.label === label);
    if (route?.dropdown) {
      e.preventDefault();
      setExpandedSection((prev) => (prev === label ? null : label));
    }
  };

  return (
    <nav className="sm:w-96 max-sm:w-full inline-flex h-full gap-1.5 2xl:gap-5 flex-col sm:justify-center items-start">
      {SIDEBAR_ROUTES.map(({ href, label, dropdown }, index) => {
        const isExpanded = expandedSection === label;

        return (
          <div key={index} className="flex flex-col  group">
            <Link
              href={href}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => toggleSection(label, e)}
              className="menu-link rounded-[10px] sm:h-14 inline-flex items-center gap-2.5 focus:outline-none"
            >
              <div
                className={`flex items-center gap-4 justify-start text-4xl uppercase sm:tracking-[4.8px] transition-all duration-300 max-sm:text-lg font-light text-white group-hover:text-primary-200 group-hover:translate-x-2`}
              >
                {label}
                {dropdown && (
                  <svg
                    className={`transition-transform duration-300 ease-out sm:hidden ${
                      isExpanded ? "rotate-180 text-primary-200" : "rotate-0 text-white"
                    }`}
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </Link>

            {/* Dropdown Content */}
            {dropdown && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out sm:hidden ${
                  isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                
                <div className="flex gap-10   w-auto  pl-0  border-b border-b-base-500 pb-2 ">
                  {dropdown.map((col, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-2.5 ">
                      <h4 className="text-base-300 text-[10px] uppercase tracking-[2px] font-medium">
                        {col.title}
                      </h4>

                      {col.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          tabIndex={isActive && isExpanded ? 0 : -1}
                          className="text-white text-[10px] max-sm:text-[8px]  uppercase tracking-[3px] font-light hover:text-primary-200 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}

                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

