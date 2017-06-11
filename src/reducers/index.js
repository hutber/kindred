/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


/* Reducers */
import sexData from './sexDataReducer';
import loading from './loadingReducer';

//### Not Logged in
  //### Login
  import user from './userReducer';

//Logged In
import currentSexInfo from './currentSexInfo';
import KnobWheel from './KnobWheelReducer';


const reducers = combineReducers({
  router: routerReducer
  , form: formReducer
  , user
  , currentSexInfo
  , KnobWheel
  , sexData
});

export default reducers;
