import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMainSpace, fetchCurso } from '../../../actions';

const MisCursos = () => {
  const dispatch = useDispatch();

  const mis_cursos = useSelector(state => state.sidebarCourses.courses);
  if (!mis_cursos) return <p>Loading...</p>;

  const handleClick = (spaceType,data) => {
    dispatch(setMainSpace(spaceType,null));
    dispatch(fetchCurso(data));
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Mis Cursos</h1>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Cursos</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Curso</th>
                  <th>Rol</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Clave</th>
                  <th>Curso</th>
                  <th>Rol</th>
                  <th>Opciones</th>
                </tr>
              </tfoot>
              <tbody>
                {mis_cursos.map(curso => (
                  <tr key={curso.id_curso}>
                    <td>{curso.clave}</td>
                    <td>{curso.nombre}</td>
                    <td>{curso.rol}</td>
                    <td><button
                          className="btn btn-primary"
                          onClick={ () => handleClick('curso',curso.id_curso) }
                        >
                          Ver Curso
                        </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisCursos;
