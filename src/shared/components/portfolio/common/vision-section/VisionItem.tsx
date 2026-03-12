interface VisionItemProps {
  title: string;
  body: string;
}

const VisionItem = ({ title, body }: VisionItemProps) => {
  return (
    <div className="flex flex-col gap-7">
      <h3 className="w-96 text-black text-4xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px]">
        {title}
      </h3>
      <p className="w-[472px] text-zinc-800 text-lg font-normal font-['Host_Grotesk']">
        {body}
      </p>
    </div>
  );
};

export default VisionItem;
