import {
	SET_DESIRE
	, SET_DATE
} from '../actions/desireAction';

const initialState = {
	desire: 3,
	date: new Date()
};

function desire (state = initialState, action) {
	switch (action.type) {
		case SET_DESIRE:
			return {
				...state,
				desire: action.desire
			}
		case SET_DATE:
			return {
				...state,
				date: action.date
			}
	}
	return state
}
 
export default desire;
