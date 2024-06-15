// reducers/objetivosReducer.js

const initialState = {
  objetivosEspecificos: [],
  objetivoGeneral: null
};

const objetivosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OBJETIVOS_ESPECIFICOS':
      return {
        ...state,
        objetivosEspecificos: action.payload
      };
    case 'SET_OBJETIVO_GENERAL':
      return {
        ...state,
        objetivoGeneral: action.payload
      };
    case 'ADD_OBJETIVO':
      if (action.payload.tipo === 'especifico') {
        return {
          ...state,
          objetivosEspecificos: [...state.objetivosEspecificos, action.payload]
        };
      } else {
        return {
          ...state,
          objetivoGeneral: action.payload
        };
      }
    case 'REMOVE_OBJETIVO':
      if (action.payload.tipo === 'especifico') {
        const updatedObjetivos = state.objetivosEspecificos.filter(objetivo => objetivo.id_objetivo !== action.payload.id_objetivo);
        const renumberedObjetivos = updatedObjetivos.map((obj, index) => ({
          ...obj,
          numero: index + 1 // Update the numero field to be consecutive
        }));
        return {
          ...state,
          objetivosEspecificos: renumberedObjetivos
        };
      } else {
        return {
          ...state,
          objetivoGeneral: null
        };
      }
    case 'UPDATE_OBJETIVO':
      if (action.payload.tipo === 'especifico') {
        return {
          ...state,
          objetivosEspecificos: state.objetivosEspecificos.map((obj) =>
            obj.id_objetivo === action.payload.id_objetivo ? action.payload : obj
          )
        };
      } else {
        return {
          ...state,
          objetivoGeneral: action.payload
        };
      }
    default:
      return state;
  }
};

export default objetivosReducer;
