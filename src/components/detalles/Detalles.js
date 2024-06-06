import React, { useEffect, useState } from 'react';

const Detalles = ({ course }) => {
  const [courseData, setCourseData] = useState({
    claveCurso: '',
    nombreCurso: '',
    nombreCursoIngles: '',
  });

  useEffect(() => {
    if (course) {
      setCourseData({
        claveCurso: course.clave,
        nombreCurso: course.nombre,
        nombreCursoIngles: course.nombre_ingles || '',
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCourseData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div id="general-content">
      <form>
        <div className="form-group">
          <label htmlFor="claveCurso">Clave Curso</label>
          <input type="number" className="form-control" id="claveCurso" value={courseData.claveCurso} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="nombreCurso">Nombre Curso</label>
          <input type="text" className="form-control" id="nombreCurso" value={courseData.nombreCurso} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="nombreCursoIngles">Nombre Curso (Inglés)</label>
          <input type="text" className="form-control" id="nombreCursoIngles" value={courseData.nombreCursoIngles} onChange={handleChange} />
        </div>
        <button type="button" id="saveGeneralButton" className="btn btn-primary mt-3">Guardar</button>
      </form>
    </div>
  );
};

export default Detalles;
