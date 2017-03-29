/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'

/* Reducers */
import selection from './selection';

const reducers = combineReducers({
  router: routerReducer,
  selection,
});

export default reducers;
