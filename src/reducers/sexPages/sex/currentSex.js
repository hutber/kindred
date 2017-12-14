import {
  RESET,
  SET_ORGASM_QUANTITY,
  SET_ORGASM_QUALITY,
	SET_PROTECTION,
  SET_CHANGED,
	SET_ENJOYMENT,
	SET_OCCURRENCES,
} from '../../../actions/sexPages/sex/currentSexAction';

const initialState = {
  participants: 3,
	occurrences: 2,
  protection: false,
  enjoyment: 4,
	quantity: 3,
	quality: 2,
  changed: false,
};

function currentMasturbation (state = initialState, action) {
  switch (action.type) {

    case RESET:
      return initialState;

    case SET_CHANGED:
      return {...state, changed: action.changed};

    case SET_ENJOYMENT:
      return {...state, enjoyment: action.enjoyment};

    case SET_ORGASM_QUANTITY:
      return {...state, quantity: action.quantity};
    case SET_ORGASM_QUALITY:
      return {...state, quality: action.quality};

    case SET_PROTECTION:
      return {...state, protection: action.value};

    case SET_OCCURRENCES:
      return {...state, occurrences: action.value};
  }
  return state
}

export default currentMasturbation;
