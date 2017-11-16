import Moment from 'moment';
import { SexDateOnly } from '../../functions/dates';
import {
  ADD_DATES,
  REMOVE_DATES
} from '../../actions/datesSexAction';

const initialState = {
  'desire': {},
	'masturbation': {},
	'sex': {},
	'dates': {}
};

function sexDates (state = initialState, action) {
	switch (action.type) {

		/*
		* DATES
		*/
		case ADD_DATES:
      var key = SexDateOnly(action.date);
      const newDates = {...state.dates};
      newDates[key] = isNaN(newDates[key]) ? 1 : newDates[key]+1 ;
			return {
				...state,
				dates: newDates
			}

		case REMOVE_DATES:
			return {
				...state,
				sex: action.data
			}
	}
	return state
}
 
export default sexDates;

