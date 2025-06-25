import React, { useState } from "react";

// Удален импорт внешнего Modal, так как мы определяем его локально

const Avatar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="cursor-pointer rounded-full overflow-hidden w-24 h-24 mx-auto"
        onClick={() => setOpen(true)}
      >
        <img
          src="/avatar.jpg"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <img
          src="/avatar.jpg"
          alt="avatar enlarged"
          className="max-w-full rounded-lg"
        />
      </Modal>
    </>
  );
};

// Исправление типизации для Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Явное указание children
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-primaryBg p-4 rounded-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Avatar;
