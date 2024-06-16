import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from './DropdownMenu';
import Modal from './Modal';
import './index.css';

const Unidad = ({ unidad }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSpace, setModalSpace] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDetallesClick = () => {
    setModalSpace('detalles');
    setDropdownVisible(false);
    setModalVisible(true);
  };

  const handleTemasClick = () => {
    setModalSpace('temas');
    setDropdownVisible(false);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

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
            <div ref={dropdownRef}>
              <DropdownMenu onDetallesClick={handleDetallesClick} onTemasClick={handleTemasClick} />
            </div>
          )}
        </td>
      </tr>
      <Modal
        show={modalVisible}
        onClose={closeModal}
        modalSpace={modalSpace}
        unidad={unidad}
      />
    </>
  );
};

export default Unidad;
