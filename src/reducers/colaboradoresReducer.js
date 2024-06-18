const initialState = [];

const colaboradoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLABORADORES':
      return {
        ...state,
        colaboradores: action.payload,
      };
    case 'SET_DOCENTES':
      return {
        ...state,
        docentes: action.payload,
      };
    case 'SET_ROLES':
      return {
        ...state,
        roles: action.payload,
      };
    default:
      return state;
  }
};

export default colaboradoresReducer;
