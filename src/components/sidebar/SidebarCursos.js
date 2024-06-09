import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainSpace, updateSidebarCourses } from '../../actions';


const SidebarCursos = () => {
  const dispatch = useDispatch();

  const handleClick = (spaceType,data) => {
    dispatch(setMainSpace(spaceType,data));
  };

  const cursos = useSelector((state => state.sidebarCourses.courses.sidebar_cursos));

  console.log(cursos);
  useEffect(() => {
    dispatch(updateSidebarCourses());
  }, []);

  if (!cursos || cursos.length === 0) {
    // Display a loading message or fallback UI while courses are being fetched
    return (
      <li className="nav-item">
        <span>Loading courses...</span>
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
          {cursos.map((curso) => (
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
