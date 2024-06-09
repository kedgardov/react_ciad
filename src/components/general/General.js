import React from 'react';
import { useSelector } from 'react-redux';
import './General.css';

const General = () => {

  const selectedCourse = useSelector(state => state.mainSpace.data);


  return (
    <div className="general-tab">
      <form className="course-form">
        <div className="horizontal-group">
          <div className="small-form-group">
            <label htmlFor="claveCurso">Clave Curso</label>
            <input
              type="text"
              className="form-control"
              id="claveCurso"
              value={selectedCourse.clave}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombreCurso">Nombre Curso</label>
            <input
              type="text"
              className="form-control"
              id="nombreCurso"
              value={selectedCourse.nombre}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombreInglesCurso">Nombre Curso Ingles</label>
            <input
              type="text"
              className="form-control"
              id="nombreInglesCurso"
              value={selectedCourse.nombre_ingles}
              readOnly
            />
          </div>
        </div>
        <div className="horizontal-group">
          <div className="form-group">
            <label htmlFor="horasTeoricasCurso">Horas Teoricas</label>
            <input
              type="number"
              className="form-control"
              id="horasTeoricasCurso"
              value={selectedCourse.horas_teoricas}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="horasPracticasCurso">Horas Practicas</label>
            <input
              type="number"
              className="form-control"
              id="horasPracticasCurso"
              value={selectedCourse.horas_practicas}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="horasIndependientesCurso">Horas Independientes</label>
            <input
              type="number"
              className="form-control"
              id="horasIndependientesCurso"
              value={selectedCourse.horas_independientes}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="horasSemanaCurso">Horas/Semana</label>
            <input
              type="number"
              className="form-control"
              id="horasSemanaCurso"
              value={selectedCourse.horas_semana}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="horasSemestreCurso">Horas/Semestre</label>
            <input
              type="number"
              className="form-control"
              id="horasSemestreCurso"
              value={selectedCourse.horas_semestre}
              readOnly
            />
          </div>
        </div>
      </form>
      <button type="button" className="btn btn-primary mt-3" >Modificar Curso</button>
    </div>
  );
};

export default General;
