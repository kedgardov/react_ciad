import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Modal from './Modal';
import './index.css';

const Unidad = ({ unidad }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDetallesClick = () => {
    //Make a ModalSpaceReducer that can be controlled from here
    // Modal Space loads component accordingly and that is what gets toggled
    setDropdownVisible(false);
    setModalVisible(true);
  };

  const handleTemasClick = () => {
    setDropdownVisible(false);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <tr>
        <td className="numero-cell">{unidad.numero}</td>
        <td className="nombre-cell">{unidad.nombre}</td>
        <td className="horas-sesion-cell" style={{ position: 'relative' }}>
          <span>{unidad.horas_sesion}</span>
          <button className="ellipsis-button" onClick={toggleDropdown}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
          {dropdownVisible && (
            <DropdownMenu onDetallesClick={handleDetallesClick} onTemasClick={handleTemasClick} />
          )}
        </td>
      </tr>
      <Modal show={modalVisible} onClose={closeModal} unidad={unidad} />
    </>
  );
};

export default Unidad;
