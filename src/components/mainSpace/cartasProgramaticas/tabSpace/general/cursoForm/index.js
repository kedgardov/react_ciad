import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField, updateFieldLocal } from '../../../../../../actions';
import FormGroup from '../../../../../templates/forms/FormGroup';
import SmallFormGroup from '../../../../../templates/forms/SmallFormGroup'
import HorizontalGroup from '../../../../../templates/forms/HorizontalGroup'
import './index.css';

const CursoForm = () => {
  const dispatch = useDispatch();

  const selectedCourse = useSelector(state => state.curso);

  const handleChange = (field, value) => {
    dispatch(updateFieldLocal(field, value))
  };


  const handleBlur = (field,value) => {
    dispatch(updateField(selectedCourse.id_curso, field, value));
  };

  return (
    <div className="curso-form-div">
      <form className="course-form">
        <HorizontalGroup>
          <SmallFormGroup
            label="Clave Curso"
            id="claveCurso"
            value={selectedCourse.clave}
            readOnly={true}
          />
          <FormGroup
            label="Nombre Curso"
            type="text"
            id="nombreCurso"
            value={selectedCourse.nombre}
            readOnly={true}
          />
          <FormGroup
            label="Nombre Curso Ingles"
            type="text"
            id="nombreInglesCurso"
            value={selectedCourse.nombre_ingles}
            readOnly={true}
          />
        </HorizontalGroup>
        <HorizontalGroup>
          <FormGroup
            label="Horas Teoricas"
            type="number"
            id="horasTeoricasCurso"
            value={selectedCourse.horas_teoricas}
            onChange={(e) => handleChange('horas_teoricas',e.target.value)}
            onBlur={(e) => handleBlur('horas_teoricas',e.target.value)}
            readOnly={false}
          />
          <FormGroup
            label="Horas Practicas"
            type="number"
            id="horasPracticasCurso"
            value={selectedCourse.horas_practicas}
            onChange={(e) => handleChange('horas_practicas',e.target.value)}
            onBlur={(e) => handleBlur('horas_practicas',e.target.value)}
          />
          <FormGroup
            label="Horas Independientes"
            type="number"
            id="horasIndependientesCurso"
            value={selectedCourse.horas_independientes}
            onChange={(e) => handleChange('horas_independientes',e.target.value)}
            onBlur={(e) => handleBlur('horas_independientes',e.target.value)}
          />
          <FormGroup
            label="Horas/Semana"
            type="number"
            id="horasSemanaCurso"
            value={selectedCourse.horas_semana}
            onChange={(e) => handleChange('horas_semana',e.target.value)}
            onBlur={(e) => handleBlur('horas_semana',e.target.value)}
          />
          <FormGroup
            label="Horas/Semestre"
            type="number"
            id="horasSemestreCurso"
            value={selectedCourse.horas_semestre}
            onChange={(e) => handleChange('horas_semestre',e.target.value)}
            onBlur={(e) => handleBlur('horas_semestre',e.target.value)}
          />
        </HorizontalGroup>
      </form>
    </div>
  );
};

export default CursoForm;
