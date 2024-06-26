import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainSpace, fetchCurso } from '../../actions';


const SidebarCursos = () => {
  const dispatch = useDispatch();

  const handleClick = (spaceType,data) => {
    dispatch(setMainSpace(spaceType,null));
    dispatch(fetchCurso(data));
  };

  const sidebar_cursos = useSelector((state => state.sidebarCourses.courses));

  if (!sidebar_cursos || sidebar_cursos.length === 0) {
    // Display a loading message or fallback UI while courses are being fetched
    return (
      <li className="nav-item">
        <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseCursos" aria-expanded="true" aria-controls="collapseCursos">
          <span>Cursos</span>
        </a>
        <div id="collapseCursos" className="collapse" aria-labelledby="headingCursos" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded" id="sidebar-cursos-placeholder">
            <a
              className="collapse-item">
              Loading Courses...
            </a>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseCursos" aria-expanded="true" aria-controls="collapseCursos">
        <span>Cursos</span>
      </a>
      <div id="collapseCursos" className="collapse" aria-labelledby="headingCursos" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded" id="sidebar-cursos-placeholder">
          {sidebar_cursos.map((curso) => (
            <a
              key={curso.clave}
              className="collapse-item"
              hrref='#'
              onClick={ () => handleClick('curso',curso.id_curso)}
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
