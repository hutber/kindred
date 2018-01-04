import {
  RESET,
  SET_ORGASM_QUANTITY,
  SET_ORGASM_QUALITY,
	SET_PROTECTION,
  SET_CHANGED,
	SET_ENJOYMENT,
	SET_OCCURRENCES,
	SET_PARTICIPANTS,
	SET_POSITION_SELECTION,
} from '../../../actions/sexPages/sex/currentSexAction';

import { positionsObject } from './positions/positions';

const initialState = {
  participants: 1,
	occurrences: 2,
  protection: false,
  enjoyment: 4,
	quantity: 3,
	quality: 2,
  changed: false,
	positions: positionsObject
};

function currentSex (state = initialState, action) {
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

    case SET_PARTICIPANTS:
      return {...state, participants: action.value};

	  case SET_POSITION_SELECTION:
		  return {
		  	...state,
			  positions: {
				  ...state.positions,
				  [action.tagName]: action.tagVal
			  }
		  };
  }
  return state
}

export default currentSex;
