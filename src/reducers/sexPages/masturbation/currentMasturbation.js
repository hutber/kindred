import {
  SET_ORGASM_QUANTITY,
  SET_ORGASM_QUALITY,
  SET_TOY_BOOLEAN,
  SET_PORN_BOOLEAN,
} from '../../../actions/sexPages/masturbation/currentMasturbationAction';

const initialState = {
  quality: 3,
  quantity: 0,
	toys: false,
	porn: false,
};

function currentMasturbation (state = initialState, action) {
	switch (action.type) {

		case SET_ORGASM_QUANTITY:
			return {...state, quantity: action.quantity };
		case SET_ORGASM_QUALITY:
			return {...state, quality: action.quality };

    case SET_TOY_BOOLEAN:
      return {...state, toys: action.value };
    case SET_PORN_BOOLEAN:
      return {...state, toys: action.value };
	}
	return state
}
 
export default currentMasturbation;
