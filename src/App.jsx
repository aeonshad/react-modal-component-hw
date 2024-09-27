import { useState } from 'react';
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from './components/Modal';
import './styles/reset.css';
import './styles/main.css';

function App() {
    const [isOpenDefaultModal, setIsOpenDefaultModal] = useState(false);
    const [isOpenCustomModal, setIsOpenCustomModal] = useState(false);

    const toggleModalDefaultModal = () => {
        setIsOpenDefaultModal(!isOpenDefaultModal);
    };
    const toggleModalCustomModal = () => {
        setIsOpenCustomModal(!isOpenCustomModal);
    };
    return (
        <main className="main-container">
            <button className="btn" onClick={toggleModalCustomModal}>
                Open modal
            </button>
            <Modal open={isOpenDefaultModal}>
                <ModalContent onClose={toggleModalDefaultModal}>
                    <ModalHeader>
                        <ModalTitle>Default modal</ModalTitle>
                        <ModalDescription>This is a default modal without custom style.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>
                        <button
                            onClick={() => {
                                toggleModalDefaultModal();
                                toggleModalCustomModal();
                            }}
                        >
                            Custom modal
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal className="custom-modal" open={isOpenCustomModal}>
                <ModalContent className="custom-modal-container" onClose={toggleModalCustomModal} stroke="#dfdfdf" size={32}>
                    <ModalHeader className="custom-modal-header">
                        <img className="custom-modal-img" src="./hero.svg" alt="hero" />
                        <ModalTitle className="custom-modal-title">Welcome to React Modal Component HW</ModalTitle>
                        <ModalDescription className="custom-modal-description">You are ready to use my component!</ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="custom-modal-footer">
                        <button
                            className="custom-modal-button"
                            onClick={() => {
                                toggleModalDefaultModal();
                                toggleModalCustomModal();
                            }}
                        >
                            Default modal
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;

