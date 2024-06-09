const selectedCourseReducer = (state = null, action) => {
  switch(action.type){
    case 'SET_SELECTED_CURSO':
      return action.payload;
    case 'UPDATE_SELECTED_CURSO':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default selectedCourseReducer;
