
import React from 'react';

const DropdownFormGroup = ({ label, id, value, onChange, options }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      value={value}
      onChange={e => onChange(id, e.target.value)}
      className="form-control"
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default DropdownFormGroup;
