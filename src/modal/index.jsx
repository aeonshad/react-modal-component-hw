import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from '../components/pkg/Modal';

function ModalComponent({ isOpen, setIsOpen }) {
    return (
        <Modal className="custom-modal" open={isOpen} ariaLabelledBy="my-modal-title" ariaDescribedBy="my-modal-desc">
            <ModalContent className="custom-modal-container" onClose={() => setIsOpen(false)} stroke="#dfdfdf" size={32}>
                <ModalHeader className="custom-modal-header">
                    <img className="custom-modal-img" src="./hero.svg" alt="hero" />
                    <ModalTitle className="custom-modal-title" id="my-modal-title">
                        React modal component HW
                    </ModalTitle>
                    <ModalDescription className="custom-modal-description" id="my-modal-desc">
                        **This package is deprecated and will no longer be maintained.** <br /> <br /> Please use
                        <a href="https://www.npmjs.com/package/react-ease-modal"> this package instead</a>
                    </ModalDescription>
                </ModalHeader>
                <ModalFooter className="custom-modal-footer">
                    <button className="custom-modal-button" onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalComponent;
