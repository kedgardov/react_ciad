// components/ObjetivoEspecifico.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addObjetivo, fetchObjetivos, removeObjetivo, updateObjetivo, updateObjetivoInDatabase } from '../../../../../actions';
import TextAreaWithRemove from './TextArea';
import Objetivo from '../../../../../classes/Objetivo';
import './index.css';

const ObjetivoEspecifico = () => {
  const dispatch = useDispatch();
  const objetivos = useSelector(state => state.objetivos.objetivosEspecificos);
  const selectedCourse = useSelector(state => state.curso);

  useEffect(() => {
    if (selectedCourse && selectedCourse.id_curso) {
      dispatch(fetchObjetivos(selectedCourse.id_curso));
    }
  }, [dispatch, selectedCourse]);

  const prepareNew = (numero) => {
    const newObjetivo = new Objetivo(null, selectedCourse.id_curso, 'especifico', numero, '');
    console.log(newObjetivo);
    dispatch(addObjetivo(newObjetivo));
  };

  const handleRemove = (objetivo) => {
    console.log(objetivo);
    dispatch(removeObjetivo(objetivo));
  };

  const handleChange = (id, value) => {
    const updatedObjetivo = objetivos.find(obj => obj.id_objetivo === id);
    updatedObjetivo.objetivo = value;
    dispatch(updateObjetivo(updatedObjetivo)); // Update state locally
  };

  const handleBlur = (objetivo) => {
    console.log(objetivo);
    dispatch(updateObjetivoInDatabase(objetivo)); // Persist changes to the database
  };

  return (
    <div className="objetivo-especifico-form">
      {objetivos.map((objetivo) => (
        <div key={objetivo.id_objetivo} className="objetivo-especifico-row">
          <h1>{objetivo.numero}</h1>
          <TextAreaWithRemove
            id={`objetivo-${objetivo.numero}`}
            value={objetivo.objetivo}
            onChange={(e) => handleChange(objetivo.id_objetivo, e.target.value)}
            onBlur={() => handleBlur(objetivo)}
            onRemove={() => handleRemove(objetivo)}
          />
        </div>
      ))}
      <div className="objetivo-especifico-row">
        <h1>{objetivos.length + 1}</h1>
        <TextAreaWithRemove
          value={'Agregar Objetivo'}
          onClick={() => prepareNew(objetivos.length + 1)}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default ObjetivoEspecifico;
