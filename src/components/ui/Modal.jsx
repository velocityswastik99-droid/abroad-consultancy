import { useEffect } from 'react';
import { X } from 'lucide-react';
import ContactForm from '../common/ContactForm.jsx';

function Modal({ isOpen, onClose, title, description }) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-4 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-gray-500 hover:bg-gray-100" aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="mt-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Modal;

