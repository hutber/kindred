import {
  ADD_DIGIT,
  DELETE_DIGIT,
  ADD_CONFIRM_DIGIT,
  DELETE_CONFIRM_DIGIT,
  ADD_SATEFY_DIGIT,
  DELETE_SATEFY_DIGIT
} from '../../actions/user/pinActions';

const initialState = {
  pin: [null, null, null, null],
  pinConfirm: [null, null, null, null],
  pinSafety: [null, null, null, null],
  pinFilledIn: false,
  pinConfirmFilledIn: false,
  pinSafetyFilledIn: false,
  pinsMatch: false,
  pinsSafetyMatch: false
};

function getPinType(type) {
  if (type === ADD_DIGIT || type === DELETE_DIGIT) {
    return 'pin';
  } else if (type === ADD_CONFIRM_DIGIT || type === DELETE_CONFIRM_DIGIT) {
    return 'pinConfirm';
  } else if (type === ADD_SATEFY_DIGIT || type === DELETE_SATEFY_DIGIT) {
    return 'pinSafety';
  }
}

export default function(state = initialState, action, data = {}) {
  switch (action.type) {
    case ADD_DIGIT:
    case ADD_CONFIRM_DIGIT:
    case ADD_SATEFY_DIGIT:
      const pinType = getPinType(action.type);
      const indexDigitAdd = state[pinType].filter((item, index) => Number.isInteger(item)).length;

      let addPin = state[pinType];
      if (indexDigitAdd === 0 && addPin.length === 4) {
        addPin[0] = action.digit;
      } else if (indexDigitAdd < 4) {
        addPin[indexDigitAdd] = action.digit;
      }

      const pinsMatch = JSON.stringify(state.pin) === JSON.stringify(state.pinConfirm) ? true : false;
      const pinsSafetyMatch = JSON.stringify(state.pin) === JSON.stringify(state.pinSafety) ? true : false;

      const pinFilledIn = state['pin'].filter(item => item !== null).length === 4 ? true : false;
      const pinConfirmFilledIn = state['pinConfirm'].filter(item => item !== null).length === 4 ? true : false;
      const pinSafetyFilledIn = state['pinSafety'].filter(item => item !== null).length === 4 ? true : false;

      return {
        ...state,
        [pinType]: addPin,
        pinFilledIn,
        pinConfirmFilledIn,
        pinsMatch,
        pinsSafetyMatch,
        pinSafetyFilledIn
      };

    case DELETE_DIGIT:
    case DELETE_CONFIRM_DIGIT:
    case DELETE_SATEFY_DIGIT:
      const deleteType = getPinType(action.type);
      let removeFilledInStatus;

      if (action.type === DELETE_DIGIT) {
        removeFilledInStatus = 'pinFilledIn';
      } else if (action.type === DELETE_CONFIRM_DIGIT) {
        removeFilledInStatus = 'pinConfirmFilledIn';
      } else if (action.type === DELETE_SATEFY_DIGIT) {
        removeFilledInStatus = 'pinSafetyFilledIn';
      }
      return {
        ...state,
        [deleteType]: [null, null, null, null],
        [removeFilledInStatus]: false
      };
  }
  return state;
}
