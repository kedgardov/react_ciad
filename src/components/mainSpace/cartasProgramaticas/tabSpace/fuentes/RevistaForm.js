import React from 'react';

const RevistaForm = ({ fuente, setFuente }) => {
  const handleChange = (e) => {
    setFuente({ ...fuente, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="nombreRevista">Nombre de la revista</label>
        <input
          type="text"
          id="nombreRevista"
          name="nombre_revista"
          value={fuente.nombre_revista || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="volumen">Volumen</label>
        <input
          type="number"
          id="volumen"
          name="volumen"
          value={fuente.volumen || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="numero">Número</label>
        <input
          type="number"
          id="numero"
          name="numero"
          value={fuente.numero || ''}
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
        <label htmlFor="doi">DOI</label>
        <input
          type="text"
          id="doi"
          name="doi"
          value={fuente.doi || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </>
  );
};

export default RevistaForm;
