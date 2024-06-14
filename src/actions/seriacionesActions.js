import axios from 'axios';
import Seriacion from '../classes/Seriacion';

// Action to set the current seriaciones
export const setSeriaciones = (seriaciones) => ({
  type: 'SET_SERIACIONES',
  payload: seriaciones
});

export const addSeriacion = (seriacion) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/seriaciones/add_seriacion.php', {
        id_curso: seriacion.id_curso,
        id_requisito: seriacion.id_requisito
      });
      if (response.data.success) {
        dispatch({
          type: 'ADD_SERIACION',
          payload: seriacion
        });
      }
    } catch (error) {
      console.error('Error adding seriacion:', error);
    }
  };
};


export const removeSeriacion = (seriacion) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/seriaciones/remove_seriacion.php', {
        id_curso: seriacion.id_curso,
        id_requisito: seriacion.id_requisito
      });

      if (response.data.success) {
        dispatch({
          type: 'REMOVE_SERIACION',
          payload: seriacion
        });
      }
    } catch (error) {
      console.error('Error removing seriacion:', error);
    }
  };
};




// Thunk to fetch current seriaciones from the database
export const fetchSeriaciones = (courseId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/seriaciones/get_seriaciones.php?id_curso=${courseId}`);
      const seriacionesResponse = response.data.seriaciones;
      //console.log(seriacionesResponse);
      if(seriacionesResponse.length === 0){
        //console.log(seriacionesResponse);
        dispatch(setSeriaciones(seriacionesResponse));
      }else{
      const allCourses = getState().allCourses.courses;

      const seriaciones = seriacionesResponse.map(ser => {
        const course = allCourses.find(c => c.id_curso === ser.id_requisito);
        return new Seriacion(
          ser.id_seriacion,
          ser.id_curso,
          ser.id_requisito,
          course ? course.clave : null,
          course ? course.nombre : null
        );
      });

      dispatch(setSeriaciones(seriaciones));
    }
    } catch (error) {
      console.error('Error fetching seriaciones:', error);
    }
  };
};

// Thunk to update the seriaciones in the database
export const updateSeriaciones = (courseId, seriaciones) => {
  return async (dispatch, getState) => {
    const currentSeriaciones = getState().curso.seriaciones;

    const toAdd = seriaciones.filter(
      (newSeriacion) => !currentSeriaciones.some(
        (currentSeriacion) => currentSeriacion.id_requisito === newSeriacion.id_requisito
      )
    );

    const toRemove = currentSeriaciones.filter(
      (currentSeriacion) => !seriaciones.some(
        (newSeriacion) => newSeriacion.id_requisito === currentSeriacion.id_requisito
      )
    );

    try {
      for (const seriacion of toAdd) {
        await axios.post('http://localhost/react_ciad/api/seriaciones/add_seriacion.php', {
          id_curso: courseId,
          id_requisito: seriacion.id_requisito
        });
        dispatch(addSeriacion(seriacion));
      }

      for (const seriacion of toRemove) {
        await axios.post('http://localhost/react_ciad/api/seriaciones/remove_seriacion.php', {
          id_seriacion: seriacion.id_seriacion
        });
        dispatch(removeSeriacion(seriacion.id_seriacion));
      }
    } catch (error) {
      console.error('Error updating seriaciones:', error);
    }
  };
};
