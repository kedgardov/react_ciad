const initState = {
  spaceType:'general',
  data:null
};
const tabSpaceReducer = (state = initState, action) => {
  switch (action.type){
    case 'SET_TAB_SPACE':
      return action.payload;
    default:
      return state;
  }
};

export default tabSpaceReducer;
