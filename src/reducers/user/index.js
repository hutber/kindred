/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';

import pin from './pin';
import auth from './auth';

const desire = combineReducers({
    pin,
    auth
});

export default desire;
