import { updateSidebarCourses } from './sidebarCoursesActions'

export const setSelectedCourse = (course) => ({
  type: 'SET_SELECTED_CURSO',
  payload: course
});

const updateSelectedCourseSync = (course) => ({
  type: 'UPDATE_SELECTED_CURSO',
  payload: course
});

export const updateSelectedCourse = (course, apiURL) => {
  return (dispatch) => {
    dispatch(updateSelectedCourseSync(course));
    dispatch(updateSidebarCourses(apiURL));
  };
};
