import React from 'react';

const LibroForm = ({ fuente, setFuente }) => {
  const handleChange = (e) => {
    setFuente({ ...fuente, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="editorial">Editorial</label>
        <input
          type="text"
          id="editorial"
          name="editorial"
          value={fuente.editorial || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="edicion">Edición</label>
        <input
          type="number"
          id="edicion"
          name="edicion"
          value={fuente.edicion || ''}
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

export default LibroForm;
