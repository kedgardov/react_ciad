import React from 'react';

const Temas = ({ unidad }) => {
  return (
    <table className="table table-bordered dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info">
      <thead>
        <tr>
          <th className="numero-header">Numero</th>
          <th className="nombre-header">Titulo Unidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="numero-cell">1</td>
          <td className="nombre-cell">Tema 1</td>
        </tr>
        <tr>
          <td className="numero-cell">2</td>
          <td className="nombre-cell">Tema 2</td>
        </tr>
        <tr>
          <td className="numero-cell">3</td>
          <td className="nombre-cell">Tema 3</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Temas;
