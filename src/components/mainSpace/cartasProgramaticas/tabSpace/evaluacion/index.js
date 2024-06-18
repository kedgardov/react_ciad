// components/forms/Evaluacion.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../../templates/forms/Table';
import { addCriterio, fetchCriterios, removeCriterio } from '../../../../../actions/evaluacionesActions';
import Criterio from '../../../../../classes/Criterio';
import Form from '../../../../templates/forms/FormGroup';


const EvaluacionForm = () => {
  const dispatch = useDispatch();
  const selectedCourse = useSelector(state => state.curso);
  const criterios = useSelector(state => state.evaluacion.criterios);

  const [newCriterio, setNewCriterio] = useState({ criterio: '', valor: '' });

  useEffect(() => {
    if (selectedCourse && selectedCourse.id_curso) {
      dispatch(fetchCriterios(selectedCourse.id_curso));
    }
  }, [dispatch, selectedCourse]);

useEffect(() => {
    console.log('Criterios updated:', criterios); // Track state updates
  }, [criterios]);

  const handleAddCriterio = () => {
    if (newCriterio.criterio && newCriterio.valor) {
      console.log(newCriterio);
      const newEntry = new Criterio(
        null,
        selectedCourse.id_curso,
        newCriterio.criterio,
        newCriterio.valor
      );
      dispatch(addCriterio(newEntry));
      setNewCriterio({ criterio: '', valor: '' });
    }
  };

  const handleRemoveCriterio = (id_criterio) => {
    const criterioToRemove = criterios.find(c => c.id_criterio === id_criterio);
    dispatch(removeCriterio(criterioToRemove));
  };

  const tableHeaders = ['criterio', 'valor'];

  if (!criterios) {
    return <p>Loading...</p>;
  }

  return (
    <div className="evaluacion-form-div">
      <form className="evaluacion-form">
        <Form
          type="text"
          label="Criterio"
          value={newCriterio.criterio}
          onChange={(e) => setNewCriterio({ ...newCriterio, criterio: e.target.value })}
        />
        <Form
          type="number"
          label="Valor"
          value={newCriterio.valor}
          onChange={(e) => setNewCriterio({ ...newCriterio, valor: e.target.value })}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddCriterio}
        >
          Agregar Criterio
        </button>
        <Table
          title="Criterios"
          data={criterios}
          headers={tableHeaders}
          idKey={'id_criterio'}
          onRemove={handleRemoveCriterio}
        />
      </form>
    </div>
  );
};

export default EvaluacionForm;
