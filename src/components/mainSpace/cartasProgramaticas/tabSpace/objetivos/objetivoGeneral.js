// components/ObjetivoGeneral.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchObjetivos, updateObjetivo, updateObjetivoGeneralInDatabase } from '../../../../../actions';
import TextArea from '../../../../templates/forms/TextAreaForm';
import './index.css';

const ObjetivoGeneral = () => {
  const dispatch = useDispatch();
  const selectedCourse = useSelector(state => state.curso);
  const generalObjetivo = useSelector(state => state.objetivos.objetivoGeneral);

  useEffect(() => {
    if (selectedCourse && selectedCourse.id_curso) {
      dispatch(fetchObjetivos(selectedCourse.id_curso));
    }
  }, [dispatch, selectedCourse]);

  const handleChange = (value) => {
    const updatedObjetivo = { ...generalObjetivo, objetivo: value };
    dispatch(updateObjetivo(updatedObjetivo)); // Update state locally
  };

  const handleBlur = () => {
    dispatch(updateObjetivoGeneralInDatabase(generalObjetivo)); // Persist changes to the database
  };

  if (!generalObjetivo) {
    return null; // Handle case where general objetivo is not yet loaded
  }

  return (
    <div className="objetivo-general-form">
      <TextArea
        id={`objetivo-general-${generalObjetivo.id_objetivo}`}
        value={generalObjetivo.objetivo}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default ObjetivoGeneral;
