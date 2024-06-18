import React from 'react';

const DropdownMenu = ({ onDeleteClick }) => (
  <div className="dropdown-menu">
    <button className="dropdown-item" onClick={onDeleteClick}>Delete</button>
  </div>
);

export default DropdownMenu;
