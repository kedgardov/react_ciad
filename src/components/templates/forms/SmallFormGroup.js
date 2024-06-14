import React from 'react';

const SmallFormGroup = ({ label, id, value, onBlur, onChange, readOnly }) => (
  <div className="small-form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      className="form-control"
      id={id}
      value={value === null? '' : value}
      onChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
  </div>
);

export default SmallFormGroup;
