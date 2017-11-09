import { formatSexDate } from '../../../functions/dates';
import {
	PUSH_TO_MASTURBATION,
} from '../../../actions/sexPages/masturbation/dataMasturbationAction';

const initialState = {};

function dataMasturbationReducer (state = initialState, action) {
	switch (action.type) {
		case SET_DESIRE_DATA:
      const key = formatSexDate(action.data.currentDate);
      const newDesire = {...state.desire};
		case PUSH_TO_MASTURBATION:
      const key = formatSexData(action.data.currentDate);
      const newDesire = {...state.masturbation};
      newDesire[key] = action.data;

      const newState = Object.assign({}, state, newDesire);
			return newState;
	}
	return state
}
 
export default dataMasturbationReducer;
