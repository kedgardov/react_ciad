import React from 'react';

const WebForm = ({ fuente, setFuente }) => {
  const handleChange = (e) => {
    setFuente({ ...fuente, [e.target.name]: e.target.value });
  };

  return (
    <>
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
      <div className="form-group">
        <label htmlFor="nombreWeb">Nombre del sitio web</label>
        <input
          type="text"
          id="nombreWeb"
          name="nombre_web"
          value={fuente.nombre_web || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="editor">Editor</label>
        <input
          type="text"
          id="editor"
          name="editor"
          value={fuente.editor || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </>
  );
};

export default WebForm;
