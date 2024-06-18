const initialState = {
  fuentes: []
};

const fuentesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FUENTES':
      return {
        ...state,
        fuentes: action.payload
      };

    case 'ADD_FUENTE':
      return {
        ...state,
        fuentes: [...state.fuentes, action.payload]
      };

    case 'REMOVE_FUENTE':
      return {
        ...state,
        fuentes: state.fuentes.filter(fuente => fuente.id_fuente !== action.payload.id_fuente)
      };

    default:
      return state;
  }
};

export default fuentesReducer;
