import Quantiqo from "@/shared/components/ui/icon/Quantiqo";

interface QuantiqoLabelProps {
  label: string;
  classNameLabel?: string;
}

const QuantiqoLabel = ({ label, classNameLabel }: QuantiqoLabelProps) => {
  return (
    <div className="flex  items-center gap-2">
      <span className="text-primary-100">
      <Quantiqo />
      </span>
      <div className={`text-left text-sm font-light  ${classNameLabel}`}>
        {label}
      </div>
    </div>
  );
};

export default QuantiqoLabel;
