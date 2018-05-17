/* eslint-disable import/max-dependencies */
import { combineReducers } from 'redux';

import pin from './pin';
import auth from './auth';
import signup from './signup';

const desire = combineReducers({
  pin,
  auth,
  signup
});

export default desire;
