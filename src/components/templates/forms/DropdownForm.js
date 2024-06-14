import React from 'react';

const Dropdown = ({ label, id, value, onChange, options }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      className="form-control"
      value={value}
      onChange={onChange}
    >
      <option value="">Seleccione Nuevo Requisito</option>
      {options.map((option) => (
        <option key={option.clave} value={option.id_curso}>
          {option.nombre}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
