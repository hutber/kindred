/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'

/* Reducers */

//### Not Logged in
  //### Login
  import user from './user';

//Logged In
import selection from './selection';


const reducers = combineReducers({
  router: routerReducer,
  user,
  selection,
});

export default reducers;
