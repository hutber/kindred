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
  , dates: sexDates
});

export default reducers;
