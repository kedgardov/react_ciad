import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropdownForm from '../../../../../templates/forms/DropdownForm';
import Table from '../../../../../templates/forms/Table';
import { addSeriacion, fetchSeriaciones, removeSeriacion } from '../../../../../../actions';
import Seriacion from '../../../../../../classes/Seriacion';

const SeriacionesForm = () => {
  const dispatch = useDispatch();
  const selectedCourse = useSelector(state => state.curso);
  const seriaciones = useSelector(state => state.seriaciones.seriaciones);
  const allCourses = useSelector(state => state.allCourses.courses);

  const [newSeriacion, setNewSeriacion] = useState('');

  useEffect(() => {
    if (selectedCourse && selectedCourse.id_curso) {
      dispatch(fetchSeriaciones(selectedCourse.id_curso));
    }
  }, [dispatch, selectedCourse]);

  const handleAddSeriacion = () => {
    if (newSeriacion) {
      const course = allCourses.find(c => c.id_curso === parseInt(newSeriacion,10));
      console.log(course);
      if (course) {
        const newEntry = new Seriacion(
          null,
          selectedCourse.id_curso,
          course.id_curso,
          course.clave,
          course.nombre
        );
        console.log("Got New Entry",newEntry);
       // const updatedSeriaciones = [...seriaciones, newEntry];
        dispatch(addSeriacion(newEntry));
        setNewSeriacion('');
      }
    }
  };

  const handleRemoveSeriacion = (item) => {
    console.log(Number(item));
    console.log(selectedCourse.id_curso);
    const seriacionToRemove = seriaciones.find(s => (s.id_requisito === Number(item) && s.id_curso === selectedCourse.id_curso))
    console.log(seriacionToRemove);
    dispatch(removeSeriacion(seriacionToRemove));
  };

  const tableHeaders = ['clave_requisito', 'nombre_requisito'];

  //console.log(seriaciones);
  if (seriaciones === null || seriaciones === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div className="seriaciones-form-div">
      <form className="seriaciones-form">
        <DropdownForm
          label="Seleccione Nuevo Requisito"
          id="dropdownRequisito"
          value={newSeriacion}
          onChange={(e) => setNewSeriacion(e.target.value)}
          options={allCourses.filter(course => !seriaciones.some(s => s.id_requisito === course.id_curso))}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddSeriacion}
        >
          Agregar Requisito
        </button>
        <Table
          title="Requisitos"
          data={seriaciones}
          headers={tableHeaders}
          idKey={'id_requisito'}
          onRemove={handleRemoveSeriacion}
        />
      </form>
    </div>
  );
};

export default SeriacionesForm;
