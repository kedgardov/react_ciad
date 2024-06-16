import React from 'react';

const HorizontalDropdownFormGroup = ({ label, id, value, onChange, options }) => (
  <div className="horizontal-dropdown-form-group">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      value={value}
      onChange={e => onChange(id, e.target.value)}
      className="form-control"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default HorizontalDropdownFormGroup;
