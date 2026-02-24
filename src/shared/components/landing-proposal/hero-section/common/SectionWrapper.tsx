interface SectionWrapperProps {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({
  isActive,
  children,
  className = "",
}: SectionWrapperProps) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000  ${
      isActive ? "opacity-100 pointer-events-auto " : "opacity-0"
    } ${className}`}
  >
    {children}
  </div>
);
export default SectionWrapper