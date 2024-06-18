const initialState = {
  autores: []
};

const autoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTORES':
      return {
        ...state,
        autores: action.payload
      };

    case 'ADD_AUTOR':
      return {
        ...state,
        autores: [...state.autores, action.payload]
      };

    case 'REMOVE_AUTOR':
      return {
        ...state,
        autores: state.autores.filter(autor => autor.id_autor !== action.payload)
      };

    default:
      return state;
  }
};

export default autoresReducer;
