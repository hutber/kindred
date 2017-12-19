/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';

import currentSex from './currentSex';
import dataSexReducer from './dataSex';

const sex = combineReducers({
    current: currentSex,
    data: dataSexReducer
});

export default sex;
