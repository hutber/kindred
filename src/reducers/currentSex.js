import { List, Map } from 'immutable';

const initialState = {
	date: new Date(),
	sexData: ''
};

function currentSex (state = initialState, action) {
	switch (action.type) {
		case 'SET_DATE':
			return {
				...state,
				date:action.date
			}
	}
	return state
}
 
export default currentSex;
