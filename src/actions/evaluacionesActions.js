// actions/evaluacionActions.js

import axios from 'axios';
import Criterio from '../classes/Criterio';

// Action to set the current criterios
export const setCriterios = (criterios) => ({
  type: 'SET_CRITERIOS',
  payload: criterios
});

export const addCriterio = (criterio) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/criterios/add_criterio.php', {
        id_curso: criterio.id_curso,
        criterio: criterio.criterio,
        valor: criterio.valor
      });
      if (response.data.success) {
        console.log('Success adding criterio');
        dispatch(fetchCriterios(criterio.id_curso));
      } else {
        console.error('Failed to add criterio:', response.data);
      }
    } catch (error) {
      console.error('Error adding criterio:', error);
    }
  };
};

export const removeCriterio = (criterio) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/criterios/remove_criterio.php', {
        id_criterio: criterio.id_criterio
      });

      if (response.data.success) {
        dispatch({
          type: 'REMOVE_CRITERIO',
          payload: criterio
        });
      } else {
        console.error('Failed to remove criterio:', response.data);
      }
    } catch (error) {
      console.error('Error removing criterio:', error);
    }
  };
};

// Thunk to fetch current criterios from the database
export const fetchCriterios = (courseId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/criterios/select_all.php?id_curso=${courseId}`);
      const criteriosResponse = response.data.criterios;

      if (criteriosResponse.length === 0) {
        console.log('No criterios found for course:', courseId);
        dispatch(setCriterios([]));
      } else {
        const criterios = criteriosResponse.map(crit => new Criterio(
          crit.id_criterio,
          crit.id_curso,
          crit.criterio,
          crit.valor
        ));
        console.log('Fetched criterios:', criterios);
        dispatch(setCriterios(criterios));
      }
    } catch (error) {
      console.error('Error fetching criterios:', error);
    }
  };
};
