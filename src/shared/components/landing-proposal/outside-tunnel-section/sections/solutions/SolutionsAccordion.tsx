import { useState } from "react";
import { SOLUTIONS_DATA, SolutionTitle } from "./data";
import { SolutionAccordionItem } from "./SolutionAccordionItem";

export const SolutionsAccordion = () => {
  const [activeTitle, setActiveTitle] = useState<SolutionTitle | "">("");

  return (
    <div className=" flex justify-start sm:justify-center">
      <div className="flex flex-col  ">
        
        <nav className="flex flex-col gap-6 text-left sm:text-right sm:w-full sm:max-w-2xl">
          {SOLUTIONS_DATA.map((solution) => {
            const isExpanded = activeTitle === solution.title;

            return (
              <SolutionAccordionItem
                key={solution.title}
                solution={solution}
                isExpanded={isExpanded}
                onClick={() =>
                  setActiveTitle(
                    isExpanded ? ("" as SolutionTitle) : solution.title,
                  )
                }
              />
            );
          })}
        </nav>

      </div>
    </div>
  );
};
