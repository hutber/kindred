/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import desireReducer from './desireReducer';
import current from './desireCurrentlReducer';

const desire = combineReducers({
    data: desireReducer,
    current
});

export default desire;
