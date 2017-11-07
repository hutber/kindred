/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';

import currentMasturbation from './currentMasturbation';
import dataMasturbationReducer from './dataMasturbation';
import tags from './tags/tagsReducer';

const masturbation = combineReducers({
    tags,
    current: currentMasturbation,
    data: dataMasturbationReducer
});

export default masturbation;
