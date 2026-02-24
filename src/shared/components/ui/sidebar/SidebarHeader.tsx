import Logo from "@/shared/components/ui/icon/Logo";

interface SidebarHeaderProps {
  onClose: () => void;
}

export const SidebarHeader = ({ onClose }: SidebarHeaderProps) => {
  return (
    <div className="flex justify-between sm:absolute top-0 inset-x-0 sm:px-20 sm:py-14 z-30 ">
      <div className="footer-item  flex items-center">
        <Logo className="h-[3.3125rem] w-[3.75rem] max-sm:w-[2rem] max-sm:h-[1.8125rem]" />
      </div>

      <button
        onClick={onClose}
        className="cursor-pointer size-10 flex items-center justify-center hover:scale-110 duration-300 footer-item text-primary-100 hover:text-primary-200 transition-all"
        aria-label="Close Menu"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          className="max-sm:size-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 2.4675L22.0325 0L12.25 9.7825L2.4675 0L0 2.4675L9.7825 12.25L0 22.0325L2.4675 24.5L12.25 14.7175L22.0325 24.5L24.5 22.0325L14.7175 12.25L24.5 2.4675Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};
