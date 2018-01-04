export const SET_ORGASM_QUANTITY = 'SET_ORGASM_QUANTITY';
export const SET_ORGASM_QUALITY = 'SET_ORGASM_QUALITY';
export const SET_OCCURRENCES = 'SET_OCCURRENCES';
export const SET_PARTICIPANTS = 'SET_PARTICIPANTS';
export const SET_PROTECTION = 'SET_PROTECTION';
export const SET_ENJOYMENT = 'SET_ENJOYMENT';
export const SET_CHANGED = 'SET_CHANGED';
export const RESET = 'RESET';
export const SET_POSITION_SELECTION = 'SET_POSITION_SELECTION';

export function reset() {
  return {
    type: RESET
  }
}
export function setPositionSelection(tagName, tagVal) {
	return {
		type: SET_POSITION_SELECTION,
		tagName,
		tagVal
	}
}
export function setProtection(value) {
  return {
    type: SET_PROTECTION,
    value: value
  }
}
export function DispatchChangeOccurrences(value) {
  return {
    type: SET_OCCURRENCES,
    value: value
  }
}
export function setParticipants(value) {
  return {
    type: SET_PARTICIPANTS,
    value: value
  }
}
export function setChanged(value) {
  return {
    type: SET_CHANGED,
    changed: value
  }
}
export function setOrgasmQuantity(amount) {
  return {
    type: SET_ORGASM_QUANTITY,
    quantity: amount
  }
}
export function setOrgasmQuality(amount) {
  return {
    type: SET_ORGASM_QUALITY,
	  quality: amount
  }
}

export function setEnjoyment(amount) {
  return {
    type: SET_ENJOYMENT,
    enjoyment: amount
  }
}
