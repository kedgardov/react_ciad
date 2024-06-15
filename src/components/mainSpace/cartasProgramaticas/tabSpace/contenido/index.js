import React from 'react';
import { useSelector } from 'react-redux';
import Unidad from './Unidad';

const Contenido = () => {
  const unidades = useSelector((state) => state.unidades);

  if (!unidades) {
    return <p>Loading...</p>;
  }

  return (
    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info">
      <thead>
        <tr>
          <th className="numero-header">Numero</th>
          <th className="nombre-header">Titulo Unidad</th>
          <th className="horas-sesion-header">Horas/Sesion</th>
        </tr>
      </thead>
      <tbody>
        {unidades.map((unidad) => (
          <Unidad key={unidad.id_unidad} unidad={unidad} />
        ))}
      </tbody>
    </table>
  );
};

export default Contenido;
