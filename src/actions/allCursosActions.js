import axios from 'axios';

export const getAllCourses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost/react_ciad/api/cursos/select_all.php');
      dispatch({
        type: 'SET_ALL_CURSOS',
        payload: response.data.cursos
      });
    } catch (error) {
      console.error('Error fetching sidebar courses',error);
    }
  };
}
