import { X } from 'lucide-react';
import clsx from 'clsx';
import React from 'react';

export const Modal = ({ className, open, children, ariaLabelledBy, ariaDescribedBy }) =>
    open && (
        <div
            className={clsx('react-modal-component-hw', className)}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            tabIndex="-1"
        >
            {children}
        </div>
    );

export const ModalContent = ({ className, onClose, size = 25, stroke = '#000000', children, ariaLabel }) => (
    <div className={clsx('react-modal-component-hw-container', className)}>
        {children}
        <X className="react-modal-component-hw-icon" size={size} stroke={stroke} onClick={onClose} aria-label={ariaLabel} />
    </div>
);

export const ModalHeader = ({ className, children }) => <div className={clsx('react-modal-component-hw-header', className)}>{children}</div>;

export const ModalTitle = ({ className, children, id }) => (
    <h2 className={clsx('react-modal-component-hw-title', className)} id={id}>
        {children}
    </h2>
);

export const ModalDescription = ({ className, children, id }) => (
    <p className={clsx('react-modal-component-hw-description', className)} id={id}>
        {children}
    </p>
);

export const ModalFooter = ({ className, children }) => <div className={clsx('react-modal-component-hw-footer', className)}>{children}</div>;
