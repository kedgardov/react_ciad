import axios from 'axios';

export const setAutores = (autores) => ({
  type: 'SET_AUTORES',
  payload: autores
});

export const addAutor = (autor) => ({
  type: 'ADD_AUTOR',
  payload: autor
});

export const removeAutor = (id_autor) => ({
  type: 'REMOVE_AUTOR',
  payload: id_autor
});

export const fetchAutores = (id_fuente) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/autores/select_all.php?id_fuente=${id_fuente}`);
      dispatch(setAutores(response.data.autores));
    } catch (error) {
      console.error('Error fetching autores:', error);
    }
  };
};
