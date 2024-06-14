import axios from 'axios';

export const setObjetivos = (objetivos) => ({
  type: 'SET_OBJETIVOS',
  payload: objetivos
});

export const fetchObjetivos = (id_curso) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/objetivos/select_all.php?id_curso=${id_curso}`);
      dispatch(setObjetivos(response.data.objetivos));
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
        // Update numeros
        await axios.post('http://localhost/react_ciad/api/objetivos/update_objetivos.php', {
          id_curso: objetivo.id_curso
        });
        // Fetch all objetivos after removing and updating
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
