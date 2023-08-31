import React, { useState } from 'react';
import './modal.css'; // Asegúrate de tener este archivo CSS para estilizar el modal

export const Modal = ({data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className='modal-button' onClick={openModal}>+</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-button" onClick={closeModal}>
              &times;
            </button>
            <h2 className='modal--title'>{data.title}</h2>
            <p className='modal--text'>{data.modal}</p>
          </div>
        </div>
      )}
    </div>
  );
};
