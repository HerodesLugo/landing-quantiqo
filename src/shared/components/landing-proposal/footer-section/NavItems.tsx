const NAV_ITEMS = ["CONTACT", "WORK", "SOLUTIONS", "ABOUT"];

const NavItems = () => {
  return (
    <div className="flex max-sm:w-full gap-10 sm:flex-col items-start justify-between anim-bottom will-change-transform">
      <nav className="flex sm:flex-col items-start justify-center  max-sm:w-full max-sm:justify-between">
        {NAV_ITEMS.map((item) => (
          <div
            key={item}
            className="flex flex-col items-center justify-center gap-2.5 rounded-[10px] sm:p-2.5 max-sm:py-2.5"
          >
            <span className="justify-start   sm:text-xl font-normal tracking-[10px] max-sm:tracking-[3px] text-white cursor-pointer hover:text-primary-100 transition-colors duration-300 text-sm">
              {item}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavItems;
