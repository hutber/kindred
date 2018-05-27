import { formatSexDate } from '../../functions/dates';
import { SET_DATE, ADD_DATES, REMOVE_DATES } from '../../actions/datesSexAction';

const initialState = {
  currentDate: new Date(),
  dates: {}
};

function sexDates(state = initialState, action) {
  let key;
  let newDates;
  switch (action.type) {
    case ADD_DATES:
      key = formatSexDate(action.date);
      newDates = { ...state.dates };
      newDates[key] = isNaN(newDates[key]) ? 1 : newDates[key] + 1;
      return {
        ...state,
        dates: newDates
      };

    case SET_DATE:
      return {
        ...state,
        currentDate: action.currentDate
      };

    //TODO Write date removal
    case REMOVE_DATES:
      return {
        ...state,
        dates: action.data
      };
  }
  return state;
}

export default sexDates;
