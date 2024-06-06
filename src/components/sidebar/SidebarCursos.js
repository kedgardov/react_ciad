import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SidebarCursos = ({ onSelectSidebarElement }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost/react_ciad/api/cursos/select_all.php');
        setCourses(response.data.sidebar_cursos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <li className="nav-item">
      <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseCursos" aria-expanded="true" aria-controls="collapseCursos">
        <span>Cursos</span>
      </a>
      <div id="collapseCursos" className="collapse" aria-labelledby="headingCursos" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded" id="sidebar-cursos-placeholder">
          {courses.map((curso) => (
            <a
              key={curso.clave}
              className="collapse-item"
              href="#"
              onClick={() => onSelectSidebarElement({type: 'curso',value: curso})}>
              {curso.nombre}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

export default SidebarCursos;
