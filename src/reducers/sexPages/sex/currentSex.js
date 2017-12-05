import {
  RESET,
  SET_ORGASM_QUANTITY,
  SET_ORGASM_QUALITY,
  SET_TOY_BOOLEAN,
  SET_CHANGED,
	SET_OCCURRENCES,
} from '../../../actions/sexPages/sex/currentSexAction';

const initialState = {
  participants: 3,
	occurrences: 0,
  protection: false,
  enjoyment: false,
	quantity: 3,
	quality: 0,
  changed: false,
};

function currentMasturbation (state = initialState, action) {
  switch (action.type) {

    case RESET:
      return initialState;

    case SET_CHANGED:
      return {...state, changed: action.changed};

    case SET_ORGASM_QUANTITY:
      return {...state, quantity: action.quantity};
    case SET_ORGASM_QUALITY:
      return {...state, quality: action.quality};

    case SET_TOY_BOOLEAN:
      return {...state, toys: action.value};
    case SET_OCCURRENCES:
      return {...state, occurrences: action.value};
  }
  return state
}

export default currentMasturbation;
