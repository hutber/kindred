/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


/* Reducers */
import data from './dataReducer';

//### Not Logged in
  //### Login
  import user from './userReducer';

//Logged In
import currentSexInfo from './currentSexInfo';
import KnobWheelReducer from './KnobWheelReducer';


const reducers = combineReducers({
  router: routerReducer
  , form: formReducer
  , user
  , currentSexInfo
  , KnobWheelReducer
  , data
});

export default reducers;
