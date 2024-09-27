import { useState } from 'react';
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from './components/Modal';
import './styles/reset.css';
import './styles/main.css';

function App() {
    const [isOpenDefaultModal, setIsOpenDefaultModal] = useState(false);
    const [isOpenCustomModal, setIsOpenCustomModal] = useState(false);

    const toggleDefaultModal = () => {
        setIsOpenDefaultModal(!isOpenDefaultModal);
    };

    return (
        <main className="main-container">
            <button className="btn" onClick={() => setIsOpenCustomModal(true)}>
                Open modal
            </button>
            <Modal className="custom-modal" open={isOpenCustomModal} ariaLabelledBy="my-modal-title" ariaDescribedBy="my-modal-desc">
                <ModalContent className="custom-modal-container" onClose={() => setIsOpenCustomModal(false)} stroke="#dfdfdf" size={32}>
                    <ModalHeader className="custom-modal-header">
                        <img className="custom-modal-img" src="./hero.svg" alt="hero" />
                        <ModalTitle className="custom-modal-title" id="my-modal-title">
                            Welcome to React Modal Component HW
                        </ModalTitle>
                        <ModalDescription className="custom-modal-description" id="my-modal-desc">
                            You are ready to use my component!
                        </ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="custom-modal-footer">
                        <button
                            className="custom-modal-button"
                            onClick={() => {
                                toggleDefaultModal();
                                setIsOpenCustomModal(false);
                            }}
                        >
                            Default modal
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal open={isOpenDefaultModal}>
                <ModalContent onClose={toggleDefaultModal}>
                    <ModalHeader>
                        <ModalTitle>Default modal</ModalTitle>
                        <ModalDescription>This is a default modal without custom style.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>
                        <button
                            onClick={() => {
                                toggleDefaultModal();
                                setIsOpenCustomModal(true);
                            }}
                        >
                            Custom modal
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;

