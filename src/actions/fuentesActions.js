import axios from 'axios';
import Fuente from '../classes/Fuente';

export const setFuentes = (fuentes) => ({
  type: 'SET_FUENTES',
  payload: fuentes
});

export const addFuente = (fuente) => {
  console.log("Atemping lo add fuente:", fuente);
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/fuentes/add_fuente.php', {
        id_curso: fuente.id_curso,
        tipo: fuente.tipo,
        titulo: fuente.titulo,
        fecha_publicacion: fuente.fecha_publicacion,
        editorial: fuente.editorial,
        volumen: fuente.volumen,
        numero: fuente.numero,
        pagina: fuente.pagina,
        doi: fuente.doi,
        url: fuente.url,
        fecha_consulta: fuente.fecha_consulta,
        edicion: fuente.edicion,
        editor: fuente.editor,
        nombre_web: fuente.nombre_web,
        nombre_revista: fuente.nombre_revista,
        cita: fuente.cita
      });
      if (response.data.success) {
        dispatch(fetchFuentes(fuente.id_curso));
      }
    } catch (error) {
      console.error('Error adding fuente:', error);
    }
  };
};

export const fetchFuentes = (courseId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/fuentes/select_all.php?id_curso=${courseId}`);
      const fuentesResponse = response.data.fuentes;
      const fuentes = fuentesResponse.map(fuente => new Fuente(
        fuente.id_fuente,
        fuente.id_curso,
        fuente.tipo,
        fuente.titulo,
        fuente.fecha_publicacion,
        fuente.editorial,
        fuente.volumen,
        fuente.numero,
        fuente.pagina,
        fuente.doi,
        fuente.url,
        fuente.fecha_consulta,
        fuente.edicion,
        fuente.editor,
        fuente.nombre_web,
        fuente.nombre_revista,
        fuente.cita
      ));
      console.log('from fetch fuentes',fuentes);
      dispatch(setFuentes(fuentes));
    } catch (error) {
      console.error('Error fetching fuentes:', error);
    }
  };
};

export const removeFuente = (fuente) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/fuentes/remove_fuente.php', {
        id_fuente: fuente.id_fuente
      });
      if (response.data.success) {
        dispatch({
          type: 'REMOVE_FUENTE',
          payload: fuente
        });
      }
    } catch (error) {
      console.error('Error removing fuente:', error);
    }
  };
};


export const updateFuente = (fuente) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/fuentes/update_fuente.php', fuente);
      if (response.data.success) {
        dispatch(fetchFuentes(fuente.id_curso));
      }
    } catch (error) {
      console.error('Error updating fuente:', error);
    }
  };
};
