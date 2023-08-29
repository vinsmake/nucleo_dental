import React, { useState } from 'react';
import {Modal} from './Modal';

export const ModalComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
    <>
            <div>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Contenido del Modal</h2>
        <p>Este es un modal responsive en React.</p>
      </Modal>
    </div>
    </>
    )
}