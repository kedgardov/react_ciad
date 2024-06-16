import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUnidades } from '../../../../../actions';
import Unidad from './Unidad';

const Contenido = () => {
  const selectedCourse = useSelector((state) => state.curso);
  const unidades = useSelector((state) => state.unidades);
  const dispatch = useDispatch();  // Note the parentheses to call useDispatch

  useEffect(() => {
    if (selectedCourse) {
      console.log(`dispatching fetchUnidades for curso:${selectedCourse.id_curso}`);
      dispatch(fetchUnidades(selectedCourse));  // Correctly dispatch the action
    }
  }, [dispatch, selectedCourse]);

  console.log('unidades:', unidades);

  if (!unidades) {
    return <p>Loading...</p>;
  }

  return (
    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info">
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
