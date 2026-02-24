interface UiSectionProps {
  children: React.ReactNode;
}
export const UiSection = ({ children }: UiSectionProps) => {
  return (
    
    <section className="fixed inset-0 z-50  max-sm:p-5 max-sm:pb-32 max-sm:pt-28 flex flex-col justify-end sm:max-w-[calc(100%-8.25rem)] mx-auto py-16 2xl:pt-28">
      {children}
    </section>
  );
};

export default UiSection;
