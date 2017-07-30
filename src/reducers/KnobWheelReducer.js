import {
	SET_DESIRE
	, SET_DATE
} from '../actions/KnobWheelAction';

const initialState = {
	desire: 3,
  currentDate: new Date()
};

function KnobWheel (state = initialState, action) {
  console.info(action);
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
 
export default KnobWheel;
