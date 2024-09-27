import { X } from 'lucide-react';
import './modal.css';
import clsx from 'clsx';

export const Modal = ({ className, open, children }) => (open ? <div className={clsx('react-modal-component-hw', className)}>{children}</div> : null);

export const ModalContent = ({ className, onClose, size = 25, stroke = '#000000', children }) => (
    <div className={clsx('react-modal-component-hw-container', className)}>
        {children}
        <X className="react-modal-component-hw-icon" size={size} stroke={stroke} onClick={onClose} />
    </div>
);

export const ModalHeader = ({ className, children }) => <div className={clsx('react-modal-component-hw-header', className)}>{children}</div>;

export const ModalTitle = ({ className, children }) => <h2 className={clsx('react-modal-component-hw-title', className)}>{children}</h2>;

export const ModalDescription = ({ className, children }) => <p className={clsx('react-modal-component-hw-description', className)}>{children}</p>;

export const ModalFooter = ({ className, children }) => <div className={clsx('react-modal-component-hw-footer', className)}>{children}</div>;
