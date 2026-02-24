import Modal from "@/shared/components/ui/modal";
import { InlineWidget } from "react-calendly";

const CalendlyModal = () => {
  return (
    <Modal isOpen onClose={() => {}}>
      <InlineWidget url="https://calendly.com/josue797gonzalez" />
    </Modal>
  );
};

export default CalendlyModal;
