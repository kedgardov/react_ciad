import axios from 'axios';

export const setMainSpace = (spaceType, data) => ({
  type: 'SET_MAIN_SPACE',
  payload: { spaceType, data }
});

export const setTabSpace = (spaceType, data) => ({
  type: 'SET_TAB_SPACE',
  payload: { spaceType, data }
});

export const setSelectedCourse = (course) => ({
  type: 'SET_SELECTED_CURSO',
  payload: course
});

const updateSelectedCourseSync = (course) => ({
  type: 'UPDATE_SELECTED_CURSO',
  payload: course
});

export const updateSidebarCourses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost/react_ciad/api/cursos/select_all.php');
      dispatch({
        type: 'UPDATE_SIDEBAR_CURSOS',
        payload: response.data
      });
    } catch (error) {
      console.error('Error fetching sidebar courses:', error);
    }
  };
};

export const updateSelectedCourse = (course, apiURL) => {
  return (dispatch) => {
    dispatch(updateSelectedCourseSync(course));
    dispatch(updateSidebarCourses(apiURL));
  };
};
