import axios from 'axios';
import Colaborador from '../classes/Colaborador';

export const setColaboradores = (colaboradores) => ({
  type: 'SET_COLABORADORES',
  payload: colaboradores,
});

export const fetchColaboradores = (courseId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/colaboradores/select_all.php?id_curso=${courseId}`);
      const colaboradoresResponse = response.data.colaboradores;
      console.log("Got colaboradores", colaboradoresResponse);
      const standardizedColaboradores = colaboradoresResponse.map(colab => ({
        ...colab,
        id_colaboracion: colab.id_rol_curso
      }));
      dispatch(setColaboradores(standardizedColaboradores));
    } catch (error) {
      console.error('Error fetching colaboradores:', error);
    }
  };
};

export const addColaborador = (colaborador) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/colaboradores/add_colaborador.php', {
        id_rol: colaborador.id_rol,
        id_curso: colaborador.id_curso,
        id_docente: colaborador.id_docente,
      });
      if (response.data.success) {
        console.log('Success adding colaborador');
        dispatch(fetchColaboradores(colaborador.id_curso));
      }
    } catch (error) {
      console.error('Error adding colaborador:', error);
    }
  };
};

export const removeColaborador = (colaborador) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/colaboradores/remove_colaborador.php', {
        id_colaboracion: colaborador.id_colaboracion,
      });
      if (response.data.success) {
        dispatch(fetchColaboradores(colaborador.id_curso));
      }
    } catch (error) {
      console.error('Error removing colaborador:', error);
    }
  };
};
