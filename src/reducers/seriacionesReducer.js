const initialState = [];

const seriacionesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SERIACIONES':
      return action.payload;
    default:
      return state;
  }
};


export default seriacionesReducer;
