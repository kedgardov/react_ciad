

const initialState = {
  criterios: []
};

const evaluacionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CRITERIOS':
      return {
        ...state,
        criterios: action.payload
      };

    case 'ADD_CRITERIO':
      return {
        ...state,
        criterios: [...state.criterios, action.payload]
      };

    case 'REMOVE_CRITERIO':
      return {
        ...state,
        criterios: state.criterios.filter(criterio => criterio.id_criterio !== action.payload.id_criterio)
      };

    default:
      return state;
  }
};

export default evaluacionReducer;
