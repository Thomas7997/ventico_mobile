import { combineReducers } from 'redux';
import httpReducer from './http';

export default combineReducers({
  http : httpReducer
})