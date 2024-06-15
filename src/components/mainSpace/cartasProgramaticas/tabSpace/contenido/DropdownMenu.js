import React from 'react';
//import './DropdownMenu.css';

const DropdownMenu = ({ onDetallesClick, onTemasClick }) => {
  return (
    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in show">
      <a className="dropdown-item" href="#" onClick={onDetallesClick}>Detalles</a>
      <a className="dropdown-item" href="#" onClick={onTemasClick}>Temas</a>
    </div>
  );
};

export default DropdownMenu;
