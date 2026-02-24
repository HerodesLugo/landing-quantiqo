interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Modal Title</h2>
        {children}
        <button
          onClick={handleClose}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
