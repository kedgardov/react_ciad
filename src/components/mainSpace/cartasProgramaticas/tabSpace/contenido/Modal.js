import React from 'react';
import './modal.css';
import Temas from './Temas';

const Modal = ({ show, onClose, unidad }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{unidad.nombre}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
           <Temas/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
