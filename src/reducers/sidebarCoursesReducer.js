const initialState = {
  courses: []
};

const sidebarCoursesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_SIDEBAR_CURSOS':
      return {
        ...state,
        courses: action.payload
      };
    default:
      return state;
  }
};

export default sidebarCoursesReducer;
