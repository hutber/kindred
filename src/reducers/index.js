/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


//# Reducers
  import hydrate from './hydrate';
    //# Sex
      import sexDates from './sexPages/datesSexReducer';
      import desire from './sexPages/desire';
      import masturbation from './sexPages/masturbation';
      import sex from './sexPages/sex';

//### Not Logged in
  //### Login
  import user from './userReducer';

const reducers = combineReducers({
  router: routerReducer
  , hydrate
  , form: formReducer
  , user
  , desire
  , masturbation
  , sex
  , dates: sexDates
});

export default reducers;
