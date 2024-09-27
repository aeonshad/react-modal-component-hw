import { useState } from 'react';
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from './components/Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <main className="main-container">
            <button className="modal-btn-open primary" onClick={toggleModal}>
                Open Modal
            </button>
            <Modal open={isOpen}>
                <ModalContent onClose={toggleModal}>
                    <ModalHeader>
                        <ModalTitle>Test titre</ModalTitle>
                        <ModalDescription>Description</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>Footer</ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;

