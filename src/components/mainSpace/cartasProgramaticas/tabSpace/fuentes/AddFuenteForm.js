import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFuenteType } from '../../../../../actions/selectedFuenteTypeActions';
import { addFuente, updateFuente } from '../../../../../actions/fuentesActions';
import LibroForm from './LibroForm';
import RevistaForm from './RevistaForm';
import WebForm from './WebForm';
import DiarioForm from './DiarioForm';
import Autores from './Autores';
import generateApaCitation from '../../../../../utils/citationUtils';

const AddFuenteForm = ({ fuente, setFuente, onClose }) => {
  const dispatch = useDispatch();
  const selectedFuenteType = useSelector(state => state.selectedFuenteType);
  const selectedCurso = useSelector(state => state.curso);

  const handleTypeChange = (e) => {
    const tipo = e.target.value;
    dispatch(setSelectedFuenteType(tipo));
    setFuente({ ...fuente, tipo });
  };

  const renderSpecificForm = () => {
    switch (selectedFuenteType) {
      case 'libro':
        return <LibroForm fuente={fuente} setFuente={setFuente} />;
      case 'revista':
        return <RevistaForm fuente={fuente} setFuente={setFuente} />;
      case 'web':
        return <WebForm fuente={fuente} setFuente={setFuente} />;
      case 'diario':
        return <DiarioForm fuente={fuente} setFuente={setFuente} />;
      default:
        return null;
    }
  };

  const dummyAuthors = [
    { apellido: 'Smith', nombre: 'John' },
    { apellido: 'Doe', nombre: 'Jane' }
  ];

  const handleSubmit = () => {
    fuente.cita = generateApaCitation(fuente,dummyAuthors);
    if (fuente.id_fuente) {
      dispatch(updateFuente(fuente));
    } else {
      fuente.id_curso = selectedCurso.id_curso;
      dispatch(addFuente(fuente));
    }
    onClose();
  };

  return (
    <div className="add-fuente-form">
      <div className="form-group">
        <label htmlFor="tipo">Tipo</label>
        <select
          id="tipo"
          name="tipo"
          value={fuente.tipo || ''}
          onChange={handleTypeChange}
          className="form-control"
        >
          <option value="">Seleccione Tipo</option>
          <option value="libro">Libro</option>
          <option value="revista">Revista</option>
          <option value="web">Web</option>
          <option value="diario">Diario</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={fuente.titulo || ''}
          onChange={(e) => setFuente({ ...fuente, titulo: e.target.value })}
          className="form-control"
        />
      </div>
      <Autores id_fuente={fuente.id_fuente} />
      <div className="form-group">
        <label htmlFor="fechaPublicacion">Año de publicación</label>
        <input
          type="number"
          id="fechaPublicacion"
          name="fecha_publicacion"
          value={fuente.fecha_publicacion || ''}
          onChange={(e) => setFuente({ ...fuente, fecha_publicacion: e.target.value })}
          className="form-control"
        />
      </div>
      {renderSpecificForm()}
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        {fuente.id_fuente ? 'Actualizar Fuente' : 'Agregar Fuente'}
      </button>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        Cancelar
      </button>
    </div>
  );
};

export default AddFuenteForm;
