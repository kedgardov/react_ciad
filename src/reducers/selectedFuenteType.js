const initialState = '';

const selectedFuenteTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_FUENTE_TYPE':
      return action.payload;
    default:
      return state;
  }
};

export default selectedFuenteTypeReducer;
