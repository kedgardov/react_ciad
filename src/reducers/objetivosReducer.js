// reducers/objetivosReducer.js

const initialState = {
  objetivos: []
};

const objetivosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OBJETIVOS':
      return {
        ...state,
        objetivos: action.payload
      };
    case 'ADD_OBJETIVO':
      return {
        ...state,
        objetivos: [...state.objetivos, action.payload]
      };
    case 'REMOVE_OBJETIVO':
      const updatedObjetivos = state.objetivos.filter(objetivo => objetivo.id_objetivo !== action.payload.id_objetivo);
      // Renumber the remaining objetivos
      const renumberedObjetivos = updatedObjetivos.map((obj, index) => ({
        ...obj,
        numero: index + 1 // Update the numero field to be consecutive
      }));
      return {
        ...state,
        objetivos: renumberedObjetivos
      };

    case 'UPDATE_OBJETIVO':
      return {
        ...state,
        objetivos: state.objetivos.map((obj) =>
          obj.id_objetivo === action.payload.id_objetivo ? action.payload : obj
        )
      };

    default:
      return state;
  }
};

export default objetivosReducer;
