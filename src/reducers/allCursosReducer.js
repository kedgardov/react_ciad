const initialState = {
  courses: []
};

const allCoursesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_ALL_CURSOS':
      return {
        ...state,
        courses:action.payload
      };
    default:
      return state;
  };
};

export default allCoursesReducer;
