import React from 'react';
import { useDispatch } from 'react-redux';
import { setMainSpace } from '../../actions';


const SidebarCursos = () => {
  const dispatch = useDispatch();

  const handleClick = (spaceType,data) => {
    dispatch(setMainSpace(spaceType,data));
  };

  const dummyCursos =[
        {id:1, nombre:'Curso 1',clave:'101'},
        {id:2, nombre:'Curso 2',clave:'102'},
        {id:3, nombre:'Curso 3',clave:'103'}];

  return (
    <li className="nav-item">
      <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseCursos" aria-expanded="true" aria-controls="collapseCursos">
        <span>Cursos</span>
      </a>
      <div id="collapseCursos" className="collapse" aria-labelledby="headingCursos" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded" id="sidebar-cursos-placeholder">
          {dummyCursos.map((curso) => (
            <a
              key={curso.clave}
              className="collapse-item"
              href='#'
              onClick={ () => handleClick('curso',curso)}
            >
              {curso.nombre}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

export default SidebarCursos;
