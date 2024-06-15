import { combineReducers } from 'redux';
import mainSpaceReducer from './mainSpaceReducer';
import tabSpaceReducer from './tabSpaceReducer';
import selectedCourseReducer from './selectedCourseReducer';
import sidebarCoursesReducer from './sidebarCoursesReducer';
import cursoReducer from './cursoReducer';
import allCoursesReducer from './allCursosReducer';
import seriacionesReducer from './seriacionesReducer';
import objetivosReducer from './objetivosReducer';
import unidadesReducer from './unidadesReducer';



const rootReducer = combineReducers({
  mainSpace: mainSpaceReducer,
  tabSpace: tabSpaceReducer,
  selectedCourse: selectedCourseReducer,
  sidebarCourses: sidebarCoursesReducer,
  curso: cursoReducer,
  allCourses: allCoursesReducer,
  seriaciones: seriacionesReducer,
  objetivos: objetivosReducer,
  unidades: unidadesReducer
});


export default rootReducer;
