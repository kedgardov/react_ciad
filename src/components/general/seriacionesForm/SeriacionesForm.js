import React, { useState } from 'react';
import './SeriacionesForm.css';

const SeriacionesForm = () => {
  const [selectedRequisito, setSelectedRequisito] = useState('');
  const [requisitos, setRequisitos] = useState([]);

  const dummyCourses = [
    { id: 1, nombre: 'Curso 1', clave: '101' },
    { id: 2, nombre: 'Curso 2', clave: '102' },
    { id: 3, nombre: 'Curso 3', clave: '103' }
  ];

  const handleAgregarRequisito = () => {
    const curso = dummyCourses.find(curso => curso.nombre === selectedRequisito);
    if (curso) {
      setRequisitos([...requisitos, curso]);
      setSelectedRequisito('');
    }
  };

  const handleEliminarRequisito = (clave) => {
    setRequisitos(requisitos.filter(curso => curso.clave !== clave));
  };

  const filteredCourses = dummyCourses.filter(
    (curso) => !requisitos.find((req) => req.clave === curso.clave)
  );

  return (
    <div className="seriaciones-form-div">
      <form className="seriaciones-form">
        {/* Dropdown and button next to each other */}
        <div className="horizontal-group">
          <div className="form-group">
            <label htmlFor="dropdownRequisito">Seleccione Nuevo Requisito</label>
            <select
              id="dropdownRequisito"
              className="form-control"
              value={selectedRequisito}
              onChange={(e) => setSelectedRequisito(e.target.value)}
            >
              <option value="">Seleccione Nuevo Requisito</option>
              {filteredCourses.map((curso) => (
                <option key={curso.clave} value={curso.nombre}>
                  {curso.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAgregarRequisito}
              style={{ marginTop: '32px' }} // Adjust to align with the dropdown
            >
              Agregar Requisito
            </button>
          </div>
        </div>

        {/* Table to display added requisitos */}
        <div className="form-group">
          <label>Requisitos</label>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Clave</th>
                <th style={{ width: '70%' }}>Nombre</th>
                <th style={{ width: '15%' }}>Remover</th>
              </tr>
            </thead>
            <tbody>
              {requisitos.map((curso) => (
                <tr key={curso.clave}>
                  <td>{curso.clave}</td>
                  <td>{curso.nombre}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleEliminarRequisito(curso.clave)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default SeriacionesForm;
