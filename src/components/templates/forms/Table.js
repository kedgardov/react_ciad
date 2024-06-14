import React from 'react';

const Table = ({ title, data, headers, idKey, onRemove }) => (
  <div className="form-group">
    <label>{title}</label>
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Remover</th>
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
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onRemove(itemId)}
                >
                  x
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Table;
