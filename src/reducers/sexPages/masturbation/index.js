/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';

import currentMasturbation from './currentMasturbation';
import tags from './tags/tagsReducer';

const masturbation = combineReducers({
    tags,
    current: currentMasturbation
});

export default masturbation;
