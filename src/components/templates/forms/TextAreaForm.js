import React from 'react';

const TextAreaForm = ({ label, id, value, onBlur, onChange, onClick, ref, readOnly }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea
      className="form-control"
      id={id}
      value={value === null ? '' : value}
      ref={ref}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      readOnly={readOnly}
    />
  </div>
);

export default TextAreaForm;
