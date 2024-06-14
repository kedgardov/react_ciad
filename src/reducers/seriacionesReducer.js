// reducers/seriacionesReducer.js

const initialState = {
  seriaciones: []
};

const seriacionesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SERIACIONES':
      return {
        ...state,
        seriaciones: action.payload
      };

    case 'ADD_SERIACION':
      return {
        ...state,
        seriaciones: [...state.seriaciones, action.payload]
      };
    case 'REMOVE_SERIACION':
      return {
        ...state,
        seriaciones: state.seriaciones.filter(seriacion => {
          if (action.payload.id_seriacion !== null) {
            return seriacion.id_seriacion !== action.payload.id_seriacion;
          } else {
            return !(seriacion.id_curso === action.payload.id_curso && seriacion.id_requisito === action.payload.id_requisito);
          }
        })
      };
   default:
      return state;
  }
};

export default seriacionesReducer;
