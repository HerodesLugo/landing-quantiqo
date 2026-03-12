interface SectionLabelProps {
  title: string;
  subtitle: string;
}

const SectionLabel = ({ title, subtitle }: SectionLabelProps) => (
  <div className="inline-flex flex-col justify-start items-start gap-1.5">
    <div className="justify-start text-black text-4xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px]">
      {title}
    </div>
    <div className="opacity-50 justify-start text-zinc-800 text-xl font-normal font-['Host_Grotesk']">
      {subtitle}
    </div>
  </div>
);

export default SectionLabel;
