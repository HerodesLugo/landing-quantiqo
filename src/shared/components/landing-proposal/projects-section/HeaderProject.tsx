interface HeaderProjectProps {
  showExpanded: boolean;
}

const HeaderProject = ({ showExpanded }: HeaderProjectProps) => {
  return (
    <div
      className={` ${
        showExpanded
          ? "-z-0 opacity-0  absolute pointer-events-none max-h-0"
          : " opacity-100"
      } transition-all flex sm:pl-20 justify-between items-end duration-300 relative z-20 pl-5  `}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl uppercase font-medium text-base-50">
          our work.
        </h2>
        <h3 className="text-xl font-medium text-base-50 opacity-20 uppercase tracking-[5px]">
          and success stories
        </h3>
      </div>

    </div>
  );
};

export default HeaderProject;
