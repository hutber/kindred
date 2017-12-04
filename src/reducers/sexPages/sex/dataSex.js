import { formatSexDate } from '../../../functions/dates';
import {
	PUSH_TO_SEX,
} from '../../../actions/sexPages/sex/dataSexAction';

const initialState = {};

function dataSexReducer (state = initialState, action) {
	switch (action.type) {
		case PUSH_TO_SEX:
			console.info(action.data);
      const key = formatSexDate(action.data.currentDate);
      const newDesire = {...state.masturbation};
      newDesire[key] = action.data;

      const newState = Object.assign({}, state, newDesire);
			return newState;
	}
	return state
}
 
export default dataSexReducer;
