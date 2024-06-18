import React from 'react';

const DiarioForm = ({ fuente, setFuente }) => {
  const handleChange = (e) => {
    setFuente({ ...fuente, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="nombreDiario">Nombre del diario</label>
        <input
          type="text"
          id="nombreDiario"
          name="nombre_diario"
          value={fuente.nombre_diario || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pagina">Página</label>
        <input
          type="number"
          id="pagina"
          name="pagina"
          value={fuente.pagina || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          value={fuente.url || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="fechaConsulta">Fecha de consulta</label>
        <input
          type="date"
          id="fechaConsulta"
          name="fecha_consulta"
          value={fuente.fecha_consulta || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </>
  );
};

export default DiarioForm;
