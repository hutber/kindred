import {
  SET_ORGASM_QUANTITY,
  SET_ORGASM_QUALITY,
} from '../../actions/sexPages/currentMasturbationAction';

const initialState = {
  quality: 3,
  quantity: 0
};

function currentMasturbation (state = initialState, action) {
	switch (action.type) {
		case SET_ORGASM_QUANTITY:
			return {...state, quantity: action.quantity };
		case SET_ORGASM_QUALITY:
			return {...state, quality: action.quality };
	}
	return state
}
 
export default currentMasturbation;