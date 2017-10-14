import {
	SET_DESIRE,
	SET_DATE,
  RESET,
  SET_CHANGED,
} from '../../../actions/sexPages/desire/desireCurrentAction';

const initialState = {
	desire: 3,
  currentDate: new Date(),
  changed: false,
};

function current (state = initialState, action) {
	switch (action.type) {

    case RESET:
      return initialState;

    case SET_CHANGED:
      return {...state, changed: action.changed };

		case SET_DESIRE:
			return {
				...state,
				desire: action.desire
			}
		case SET_DATE:
			return {
				...state,
        currentDate: action.currentDate
			}
	}
	return state
}
 
export default current;
