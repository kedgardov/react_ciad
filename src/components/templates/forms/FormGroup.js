import React from 'react';

const FormGroup = ({ label, type, id, value, onBlur, onChange, readOnly}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

export default FormGroup;
