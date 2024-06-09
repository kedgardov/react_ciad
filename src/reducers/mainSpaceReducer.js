const initialState = {
  type:'curso',
  data:null
};

const mainSpaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAIN_SPACE':
      return action.payload;
    default:
      return state;
  }
};

export default mainSpaceReducer;
