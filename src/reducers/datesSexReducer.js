import { formatSexData } from '../functions/dates';
import {
  SET_DATE,
  ADD_DATES,
  REMOVE_DATES
} from '../actions/datesSexAction';

const initialState = {
	currentDate: new Date(),
	dates: {}
};


function sexDates (state = initialState, action) {
	switch (action.type) {

		case ADD_DATES:
      var key = formatSexData(action.currentDate);
      console.info('key', key);
      const newDates = {...state.dates};
      newDates[key] = isNaN(newDates[key]) ? 1 : newDates[key]+1 ;
			return {
				...state,
				dates: newDates
			};

		case SET_DATE:
      return {
        ...state,
        currentDate:action.currentDate
      };

      //TODO Write date removal
		case REMOVE_DATES:
			return {
				...state,
        dates: action.data
			};
	}
	return state
}
 
export default sexDates;

