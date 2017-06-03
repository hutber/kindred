/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


/* Reducers */

//### Not Logged in
  //### Login
  import user from './user';

//Logged In
import selection from './selection';


const reducers = combineReducers({
  router: routerReducer,
  form: formReducer,
  user,
  selection,
});

export default reducers;
