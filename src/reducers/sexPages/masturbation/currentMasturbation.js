import {
  RESET,
  SET_ORGASM_QUANTITY,
  SET_ORGASM_QUALITY,
  SET_TOY_BOOLEAN,
  SET_CHANGED,
  SET_PORN_BOOLEAN
} from '../../../actions/sexPages/masturbation/currentMasturbationAction';

const initialState = {
  orgasmQuality: 3,
  orgasmQuantity: 0,
  toys: false,
  porn: false,
  changed: false
};

function currentMasturbation(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;

    case SET_CHANGED:
      return { ...state, changed: action.changed };

    case SET_ORGASM_QUANTITY:
      return { ...state, orgasmQuantity: action.orgasmQuantity };
    case SET_ORGASM_QUALITY:
      return { ...state, orgasmQuality: action.orgasmQuality };

    case SET_TOY_BOOLEAN:
      return { ...state, toys: action.value };
    case SET_PORN_BOOLEAN:
      return { ...state, porn: action.value };
  }
  return state;
}

export default currentMasturbation;
