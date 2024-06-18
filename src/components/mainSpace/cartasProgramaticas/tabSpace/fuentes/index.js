import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFuentes, addFuente } from '../../../../../actions/fuentesActions';
import Modal from './Modal';
import AddFuenteForm from './AddFuenteForm';
import Fuente from '../../../../../classes/Fuente';


const Fuentes = () => {
  const dispatch = useDispatch();
  const selectedCourse = useSelector(state => state.curso);
  const fuentes = useSelector(state => state.fuentes.fuentes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFuente, setCurrentFuente] = useState(new Fuente());

  useEffect(() => {
    if (selectedCourse && selectedCourse.id_curso) {
      dispatch(fetchFuentes(selectedCourse.id_curso));
    }
  }, [dispatch, selectedCourse]);

  const openModal = () => {
    setCurrentFuente(new Fuente());
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddFuente = () => {
    dispatch(addFuente(currentFuente));
    closeModal();
  };

  const handleEditFuente = (fuente) => {
    setCurrentFuente(fuente);
    setIsModalOpen(true);
  };


  return (
    <div className="fuentes">
      <button className="btn btn-primary" onClick={openModal}>
        Agregar Fuente
      </button>
      <ul>
        {fuentes.map(fuente => (
          <li key={fuente.id_fuente}
            onDoubleClick={() => handleEditFuente(fuente)}
          >
            {console.log(fuente)}
          {fuente.cita}
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddFuenteForm fuente={currentFuente} setFuente={setCurrentFuente} onSubmit={handleAddFuente} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Fuentes;
