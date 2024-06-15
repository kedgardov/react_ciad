import Unidad from '../classes/Unidad';

const unidad1 = new Unidad(
  1,
  1,
  1,
  "Introduction to Programming",
  "Understand basic programming concepts",
  101,
  1,
  "Live coding session",
  "Reading assignment",
  "Project submission",
  "Quiz",
  3
);

const unidad2 = new Unidad(
  2,
  1,
  2,
  "Advanced JavaScript",
  "Learn advanced JavaScript techniques",
  102,
  2,
  "Group discussion",
  "Code review",
  "Project presentation",
  "Assignment",
  4
);

const unidad3 = new Unidad(
  3,
  1,
  3,
  "Web Development",
  "Develop a basic web application",
  103,
  3,
  "Workshop",
  "Individual project",
  "Demo",
  "Peer review",
  5
);

const initialState = [unidad1, unidad2, unidad3];

const unidadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UNIDADES':
      return action.payload;
    case 'ADD_UNIDAD':
      return [...state, action.payload];
    case 'REMOVE_UNIDAD':
      return state.filter(unidad => unidad.id_unidad !== action.payload.id_unidad);
    default:
      return state;
  }
};

export default unidadesReducer;
