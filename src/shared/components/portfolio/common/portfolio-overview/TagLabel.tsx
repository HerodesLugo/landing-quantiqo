import Quantiqo from "@/shared/components/ui/icon/Quantiqo";

interface TagLabelProps {
  text: string;
}

const TagLabel = ({ text }: TagLabelProps) => {
  return (
    <li className="flex items-center gap-2.5 text-base-500 text-sm">
      <span className="text-[#AFBFC2]">
      <Quantiqo />
      </span>
      <span className="tracking-wide">{text}</span>
    </li>
  );
};

export default TagLabel;
