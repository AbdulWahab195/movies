import { combineReducers } from 'redux';
import { moviesReducer } from './Movies';

const reducersObj = {
  moviesReducer,
}

export default combineReducers(reducersObj);