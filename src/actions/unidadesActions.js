import axios from 'axios';
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


export const fetchUnidades = (course) => {
  console.log('course_id:',course.id_curso);
  console.log('fetchUnidades called');
  return async (dispatch) => {
    try{
      console.log('trying');
      const response = await axios.get(`http://localhost/react_ciad/api/unidades/select_all.php?id_curso=${course.id_curso}`);
      console.log('got a response:',response);
      const unidades = response.data.unidades;
      dispatch(setUnidades(unidades));
    }catch(error){
      console.error('Error fetching unidades',error);
    }
  }
};
