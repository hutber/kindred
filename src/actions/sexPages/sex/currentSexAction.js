export const SET_ORGASM_QUANTITY = 'SET_ORGASM_QUANTITY';
export const SET_ORGASM_QUALITY = 'SET_ORGASM_QUALITY';
export const SET_TOY_BOOLEAN = 'SET_TOY_BOOLEAN';
export const SET_OCCURRENCES = 'SET_OCCURRENCES';
export const SET_CHANGED = 'SET_CHANGED';
export const RESET = 'RESET';

export function reset() {
  return {
    type: RESET
  }
}
export function setToys(value) {
  return {
    type: SET_TOY_BOOLEAN,
    value: value
  }
}
export function DispatchChangeOccurrences(value) {
  return {
    type: SET_OCCURRENCES,
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
