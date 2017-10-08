import {
	SET_DESIRE
	, SET_DATE
} from '../../../actions/sexPages/desire/KnobWheelAction';

const initialState = {
	desire: 3,
  currentDate: new Date()
};

function knobWheel (state = initialState, action) {
	switch (action.type) {
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
 
export default knobWheel;
