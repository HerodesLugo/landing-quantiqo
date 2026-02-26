export const SolutionsHeader = () => {
  return (
    <header className="flex flex-col 2xl:gap-7  sm:mb-12 gap-2.5">
      <h2 className="anim-title will-change-transform text-5xl font-medium uppercase tracking-[5px] text-white max-xl:text-2xl">
        SOLUTIONS
      </h2>

      <div className="anim-description will-change-transform 2xl:w-[38.33vw] max-xl:w-full space-y-1  max-sm:hidden">
        <p className="text-lg font-bold text-base-300 max-xl:text-xs">
          Our cross-disciplinary team combines strategy, branding, UX design,
          and technology for swift, impactful results.{"  "}
          <span className="text-lg font-normal text-base-300 max-xl:text-xs">
            Working as one team with our clients, we merge human creativity with
            AI-driven efficiency to consistently exceed expectations.
          </span>
        </p>
      </div>

    </header>
  );
};
