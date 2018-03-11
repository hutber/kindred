import { formatSexDate } from '../../../functions/dates';
import { SET_DESIRE_DATA } from '../../../actions/sexPages/desire/desireAction';

const initialState = {};

function desireReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DESIRE_DATA:
      const key = formatSexDate(action.data.currentDate);
      const newDesire = { ...state.desire };
      newDesire[key] = action.data;
      delete newDesire[key].changed;

      const newState = Object.assign({}, state, newDesire);
      return newState;
  }
  return state;
}

export default desireReducer;
