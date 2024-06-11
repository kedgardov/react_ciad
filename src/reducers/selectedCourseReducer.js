import Curso from '../classes/Curso';

const selectedCourseReducer = (state = null, action) => {
  switch(action.type){
    case 'SET_SELECTED_CURSO':
      return new Curso(
        action.payload.id_curso,
        action.payload.clave,
        action.payload.nombre,
        action.payload.nombre_ingles,
        action.payload.horas_teoricas,
        action.payload.horas_practicas,
        action.payload.horas_independientes,
        action.payload.horas_semana,
        action.payload.horas_semestre,
        action.payload.vinculo_objetivos_posgrado
      );
    case 'UPDATE_SELECTED_CURSO':
      if (state instanceof Curso) {
        state.update(action.payload);
        return { ...state };  // Ensure a new state object is returned
      }
      return state;
    default:
      return state;
  }
};

export default selectedCourseReducer;
