/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';

import current from './currentSex';
import dataSexReducer from './dataSex';
import positions from './positions/positionsReducer';

const sex = combineReducers({
		positions,
    current: current,
    data: dataSexReducer
});

export default sex;
