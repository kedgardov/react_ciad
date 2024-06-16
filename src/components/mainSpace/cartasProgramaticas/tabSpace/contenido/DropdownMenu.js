import React from 'react';
//import './DropdownMenu.css';

const DropdownMenu = ({ onDetallesClick, onTemasClick, onDeleteClick }) => {
  return (
    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in show">
      <button className="dropdown-item" href="#" onClick={onDetallesClick}>Detalles</button>
      <button className="dropdown-item" href="#" onClick={onTemasClick}>Temas</button>
      <button className="dropdown-item" href="#" onClick={onDeleteClick}>Eliminar</button>
    </div>
  );
};

export default DropdownMenu;
