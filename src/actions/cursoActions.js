import axios from 'axios';
import Curso from '../classes/Curso';

export const setCurso = (curso) => {
  return {
    type: 'SET_CURSO',
    payload: curso,
  };
};

export const fetchCurso = (id_curso) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/react_ciad/api/cursos/select_one.php?id=${id_curso}`);
      const cursoData = response.data;

      const curso = new Curso();
      curso.update(cursoData);

      dispatch(setCurso(curso));
    } catch (error) {
      console.error("Error fetching curso:", error);
    }
  };
};

export const updateFieldLocal = (field, value) => {
  return {
    type: 'UPDATE_CURSO',
    payload: {field, value}
  };
};

export const updateField = (cursoId, field, value) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/cursos/update_one_field.php', {
        id: cursoId,
        field:field,
        value:value
      });

      if (response.data.success) {
        // Optionally fetch the updated curso and update the state
        const cursoResponse = await axios.get(`http://localhost/react_ciad/api/cursos/select_one.php?id=${cursoId}`);
        const cursoData = cursoResponse.data;

        const curso = new Curso();
        curso.update(cursoData);

        dispatch(setCurso(curso));
      } else {
        console.error('Update failed:', response.data);
      }
    } catch (error) {
      console.error('Error updating field:', error);
    }
  };
};
