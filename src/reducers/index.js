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
      //#Masturbation
      import currentMasturbation from './sexPages/currentMasturbation';
	      //#Masturbation Tags
	      import masturbationTags from './tags/tagsReducer'


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
  , currentMasturbation
	, masturbationTags
});

export default reducers;
