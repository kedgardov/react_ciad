import Curso from '../classes/Curso';

const initialState = new Curso();

const cursoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURSO':
      return action.payload;
    case 'UPDATE_CURSO':
      // Update the current Curso instance directly
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    case 'INVALID_CURSO':
      return state;
    default:
      return state;
  }
};

export default cursoReducer;
