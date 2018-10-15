import { combineReducers } from 'redux';
import modal from './modalReducer';
import gifs from './gifReducer';



const rootReducer =  combineReducers({
  modal,
  gifs
});

export default rootReducer;
