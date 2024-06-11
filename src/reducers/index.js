import { combineReducers } from 'redux';
import mainSpaceReducer from './mainSpaceReducer';
import tabSpaceReducer from './tabSpaceReducer';
import selectedCourseReducer from './selectedCourseReducer';
import sidebarCoursesReducer from './sidebarCoursesReducer';
import cursoReducer from './cursoReducer';

const rootReducer = combineReducers({
  mainSpace: mainSpaceReducer,
  tabSpace: tabSpaceReducer,
  selectedCourse: selectedCourseReducer,
  sidebarCourses: sidebarCoursesReducer,
  curso: cursoReducer
});


export default rootReducer;
