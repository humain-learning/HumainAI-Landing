import React, { useEffect } from 'react';
import { ContactUsModal } from '../Contactus/ContactUsModal';

interface RequestCallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestCallbackModal: React.FC<RequestCallbackModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          ✕
        </button>
        <ContactUsModal onClose={onClose} />
      </div>
    </div>
  );
};
