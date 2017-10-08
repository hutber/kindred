/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import desireReducer from './desireReducer';
import knobWheel from './KnobWheelReducer';

const desire = combineReducers({
    data: desireReducer,
    knobWheel
});

export default desire;
