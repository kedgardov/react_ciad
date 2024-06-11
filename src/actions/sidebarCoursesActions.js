import axios from 'axios';


export const updateSidebarCourses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost/react_ciad/api/cursos/select_all.php');
      dispatch({
        type: 'UPDATE_SIDEBAR_CURSOS',
        payload: response.data.sidebar_cursos
      });
    } catch (error) {
      console.error('Error fetching sidebar courses:', error);
    }
  };
};
