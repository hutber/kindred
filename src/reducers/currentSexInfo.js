import { List, Map } from 'immutable';

const initialState = {
	date: new Date(),
	sexData: ''
};

function currentSexInfo (state = initialState, action) {
	switch (action.type) {
		case 'SET_DATE':
			return {
				...state,
				date:action.date
			}
	}
	return state
}
 
export default currentSexInfo;
