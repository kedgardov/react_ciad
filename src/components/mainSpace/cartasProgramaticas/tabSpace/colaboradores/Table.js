import React, { useState, useRef } from 'react';
import DropdownMenu from './DropdownMenu';

const Table = ({ title, data, headers, idKey, onRemove }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(null);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <div className="form-group">
      <label>{title}</label>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const itemId = item[idKey];
            return (
              <tr key={index} data-id={itemId}>
                {headers.map((header, headerIndex) => (
                  <td key={headerIndex}>{item[header]}</td>
                ))}
                <td style={{ position: 'relative' }}>
                  <button className="ellipsis-button" onClick={() => toggleDropdown(itemId)}>
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                  {dropdownVisible === itemId && (
                    <div ref={dropdownRef}>
                      <DropdownMenu onDeleteClick={() => onRemove(itemId)} />
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
