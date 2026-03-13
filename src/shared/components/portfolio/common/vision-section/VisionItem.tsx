interface VisionItemProps {
  title: string;
  body: string;
}

const VisionItem = ({ title, body }: VisionItemProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-7">
      <h3 className="w-full md:w-80 xl:w-96 text-black text-xl md:text-3xl xl:text-4xl font-semibold font-['Host_Grotesk'] uppercase tracking-[2px] md:tracking-[3.60px]">
        {title}
      </h3>
      <p className="w-full md:w-[472px] text-zinc-800 text-base md:text-lg font-normal font-['Host_Grotesk']">
        {body}
      </p>
    </div>
  );
};

export default VisionItem;
