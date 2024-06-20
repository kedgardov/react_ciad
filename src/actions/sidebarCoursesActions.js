import axios from 'axios';

export const updateSidebarCourses = (user, token) => {

  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost/react_ciad/api/sidebar/select_all.php',{
        username: user.username,
        token: token
      });
      dispatch({
        type: 'UPDATE_SIDEBAR_CURSOS',
        payload: response.data.sidebar_cursos
      });
    } catch (error) {
      console.error('Error fetching sidebar courses:', error);
    }
  };
};
