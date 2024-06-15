import React from 'react';
import './HorizontalGroup.css';

const HorizontalGroup = ({ children, className }) => (
  <div className={`horizontal-group ${className}`}>
    {children}
  </div>
);

export default HorizontalGroup;
