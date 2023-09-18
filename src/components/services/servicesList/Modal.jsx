import React, { useEffect, useState } from 'react';
import './modal.css'; // Asegúrate de tener este archivo CSS para estilizar el modal

export const Modal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

   // Efecto secundario para agregar/quitar la clase al cuerpo del documento
   useEffect(() => {
    if (isModalOpen) {
      // Cuando se abre el modal, agrega una clase para bloquear el desplazamiento
      document.body.classList.add('body-no-scroll');
    } else {
      // Cuando se cierra el modal, quita la clase para permitir el desplazamiento
      document.body.classList.remove('body-no-scroll');
    }

    // Limpia la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [isModalOpen]);

  return (
    <div className='modal__container'>
      <button className='modal-button' onClick={openModal}>+</button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">

            <div className='modal__head'>
              <img src={data.img} className="modal--icon" />
              <h2 className='modal--title'>{data.title}</h2>
              <button className="modal-button--close" onClick={closeModal}>
                &times;
              </button>
            </div>
          <div className='modal--text__container'>
            <p className='modal--text'>{data.modal}</p>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};
