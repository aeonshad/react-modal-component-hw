import { ReactComponent as CloseIcon } from './close-outline.svg';

export const Modal = ({ className, open, children }) => (open ? <div>{children}</div> : null);

export const ModalContent = ({ className, onClose, children }) => (
    <div>
        {children}
        <button onClick={onClose}>
            <CloseIcon />
        </button>
    </div>
);

export const ModalHeader = ({ className, children }) => <div>{children}</div>;

export const ModalTitle = ({ className, children }) => <h2>{children}</h2>;

export const ModalDescription = ({ className, children }) => <p>{children}</p>;

export const ModalFooter = ({ className, children }) => <div>{children}</div>;
