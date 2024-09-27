import { useState } from 'react';
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from './components/Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <main>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal open={isOpen}>
                <ModalContent onClose={toggleModal}>
                    <ModalHeader>
                        <ModalTitle>Test Title</ModalTitle>
                        <ModalDescription>This is a test description.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>Test Footer</ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;

