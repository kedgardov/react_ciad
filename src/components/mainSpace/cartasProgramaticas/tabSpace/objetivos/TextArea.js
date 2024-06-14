// components/TextAreaWithRemove.js
import React from 'react';
import './TextAreaForm.css';

const TextAreaWithRemove = ({ id, value, onBlur, onChange, onClick, onRemove, readOnly }) => (
  <div className="textarea-container">
    <textarea
      className="form-control"
      id={id}
      value={value === null ? '' : value}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      readOnly={readOnly}
    />
    <button type="button" className="remove-button" onClick={onRemove}>x</button>
  </div>
);

export default TextAreaWithRemove;
