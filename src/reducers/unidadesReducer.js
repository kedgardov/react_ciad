import Unidad from '../classes/Unidad';

const initialState = [];

const unidadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UNIDADES':
      return action.payload;
    case 'ADD_UNIDAD':
      return [...state, action.payload];
    case 'REMOVE_UNIDAD':
      return state.filter(unidad => unidad.id_unidad !== action.payload.id_unidad);
    default:
      return state;
  }
};

export default unidadesReducer;
