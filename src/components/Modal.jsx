import { X } from 'lucide-react';
import './modal.css';

export const Modal = ({ className, open, children }) => (open ? <div className="modal-overlay">{children}</div> : null);

export const ModalContent = ({ className, onClose, size = 25, stroke = '#000000', children }) => (
    <div className="modal-container">
        {children}
        <X className="modal-icon" size={size} stroke={stroke} onClick={onClose} />
    </div>
);

export const ModalHeader = ({ className, children }) => <div className="modal-header">{children}</div>;

export const ModalTitle = ({ className, children }) => <h2 className="modal-title">{children}</h2>;

export const ModalDescription = ({ className, children }) => <p className="modal-description">{children}</p>;

export const ModalFooter = ({ className, children }) => <div className="modal-footer">{children}</div>;
