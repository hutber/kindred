/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


//# Reducers
  import hydrate from './hydrate';
    //# Sex
      import sexDates from './datesSexReducer';
      //#Desire
      import desireReducer from './desireReducer';


//### Not Logged in
  //### Login
  import user from './userReducer';

//Logged In
import currentSexInfo from './currentSexInfo';
import KnobWheel from './KnobWheelReducer';


const reducers = combineReducers({
  router: routerReducer
  , hydrate
  , form: formReducer
  , user
  , KnobWheel
  , desire: desireReducer
  , sexDates
});

export default reducers;
