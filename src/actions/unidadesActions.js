import Unidad from '../classes/Unidad';

export const setUnidades = (unidades) => ({
  type: 'SET_UNIDADES',
  payload: unidades
});

export const addUnidad = (unidad) => {
  return async (dispatch) => {
    dispatch({
      type: 'ADD_UNIDAD',
      payload: unidad
    });
  }
};

export const removeUnidad = (unidad) => {
  return async (dispatch) => {
    dispatch({
      type: 'REMOVE_SERIACION',
      payload: unidad
    });
  }
};
