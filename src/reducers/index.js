import { combineReducers } from 'redux';
import mainSpaceReducer from './mainSpaceReducer';
import tabSpaceReducer from './tabSpaceReducer';

const rootReducer = combineReducers({
  mainSpace: mainSpaceReducer,
  tabSpace: tabSpaceReducer
});

export default rootReducer;
