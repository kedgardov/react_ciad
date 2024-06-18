import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAutor, removeAutor } from '../../../../../actions/autoresActions';
import Autor from '../../../../../classes/Autor';

const Autores = ({ id_fuente }) => {
  const dispatch = useDispatch();
  const autores = useSelector(state => state.autores.autores);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [principal, setPrincipal] = useState(false);

  const handleAddAutor = () => {
    const newAutor = new Autor(null, id_fuente, nombre, apellido, principal);
    dispatch(addAutor(newAutor));
    setNombre('');
    setApellido('');
    setPrincipal(false);
  };

  const handleRemoveAutor = (id_autor) => {
    dispatch(removeAutor(id_autor));
  };

  return (
    <div className="autores">
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={principal}
            onChange={(e) => setPrincipal(e.target.checked)}
          />
          Principal
        </label>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleAddAutor}>
        Agregar Autor
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Principal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autores.map(autor => (
            <tr key={autor.id_autor}>
              <td>{autor.nombre}</td>
              <td>{autor.apellido}</td>
              <td>{autor.principal ? 'Sí' : 'No'}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemoveAutor(autor.id_autor)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Autores;
