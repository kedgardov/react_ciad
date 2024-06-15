import axios from 'axios';
import Objetivo from '../classes/Objetivo';

export const setObjetivosEspecificos = (objetivos) => ({
  type: 'SET_OBJETIVOS_ESPECIFICOS',
  payload: objetivos
});

export const setObjetivoGeneral = (objetivo) => ({
  type: 'SET_OBJETIVO_GENERAL',
  payload: objetivo
});

export const fetchObjetivos = (id_curso) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/objetivos/select_all.php?id_curso=${id_curso}`);
      const objetivos = response.data.objetivos;
      const objetivosEspecificos = objetivos.filter(obj => obj.tipo === 'especifico');
      let objetivoGeneral = objetivos.find(obj => obj.tipo === 'general');

      if (!objetivoGeneral) {
        // Create a new general objetivo if it doesn't exist
        const newObjetivoGeneral = new Objetivo(null, id_curso, 'general', 0, '');
        const addResponse = await axios.post('http://localhost/react_ciad/api/objetivos/add_objetivo.php', {
          id_curso: newObjetivoGeneral.id_curso,
          tipo: newObjetivoGeneral.tipo,
          numero: newObjetivoGeneral.numero,
          objetivo: newObjetivoGeneral.objetivo
        });

        if (addResponse.data.success) {
          objetivoGeneral = {
            ...newObjetivoGeneral,
            id_objetivo: addResponse.data.id_objetivo
          };
        }
      }

      dispatch(setObjetivosEspecificos(objetivosEspecificos));
      dispatch(setObjetivoGeneral(objetivoGeneral));
    } catch (error) {
      console.error('Error fetching objetivos:', error);
    }
  };
};

export const addObjetivo = (objetivo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/objetivos/add_objetivo.php', {
        id_curso: objetivo.id_curso,
        tipo: objetivo.tipo,
        numero: objetivo.numero,
        objetivo: objetivo.objetivo
      });
      if (response.data.success) {
        dispatch(fetchObjetivos(objetivo.id_curso));
      }
    } catch (error) {
      console.error('Error adding objetivo:', error);
    }
  };
};

export const removeObjetivo = (objetivo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/objetivos/remove_objetivo.php', {
        id_objetivo: objetivo.id_objetivo
      });
      if (response.data.success) {
        await axios.post('http://localhost/react_ciad/api/objetivos/update_objetivos.php', {
          id_curso: objetivo.id_curso
        });
        dispatch(fetchObjetivos(objetivo.id_curso));
      }
    } catch (error) {
      console.error('Error removing objetivo:', error);
    }
  };
};

export const updateObjetivo = (objetivo) => {
  return {
    type: 'UPDATE_OBJETIVO',
    payload: objetivo
  };
};

export const updateObjetivoInDatabase = (objetivo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/objetivos/update_objetivo.php', {
        id_objetivo: objetivo.id_objetivo,
        objetivo: objetivo.objetivo
      });
      if (response.data.success) {
        dispatch(updateObjetivo(objetivo));
      }
    } catch (error) {
      console.error('Error updating objetivo:', error);
    }
  };
};

export const updateObjetivoGeneralInDatabase = (objetivo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/objetivos/update_objetivo.php', {
        id_objetivo: objetivo.id_objetivo,
        objetivo: objetivo.objetivo
      });
      if (response.data.success) {
        dispatch(fetchObjetivos(objetivo.id_curso));
      }
    } catch (error) {
      console.error('Error updating general objetivo:', error);
    }
  };
};
