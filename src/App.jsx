import { useState } from 'react';
import './styles/reset.css';
import './styles/main.css';
import ModalComponent from './modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className="main-container">
            <button className="btn" onClick={() => setIsOpen(true)}>
                Open modal
            </button>
            <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        </main>
    );
}

export default App;

