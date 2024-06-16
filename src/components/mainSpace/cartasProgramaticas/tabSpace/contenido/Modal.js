import React from 'react';
import './modal.css';
import Temas from './Temas';
import Detalles from './DetallesForm';

const Modal = ({ show, onClose, modalSpace, unidad }) => {
  if (!show) {
    return null;
  }

  const setModalContent = (modalSpace) => {
    switch(modalSpace){
      case 'temas':
        return <Temas unidad={unidad}/>;
      case 'detalles':
        return <Detalles unidad={unidad}/>;
      default:
        return null;
    }
  };

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
           {setModalContent(modalSpace)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
