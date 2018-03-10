export const SET_ORGASM_QUANTITY = 'SET_ORGASM_QUANTITY';
export const SET_ORGASM_QUALITY = 'SET_ORGASM_QUALITY';
export const SET_TOY_BOOLEAN = 'SET_TOY_BOOLEAN';
export const SET_PORN_BOOLEAN = 'SET_PORN_BOOLEAN';
export const SET_CHANGED = 'SET_CHANGED';
export const RESET = 'RESET';

export function reset() {
  return {
    type: RESET
  };
}
export function setToys(value) {
  return {
    type: SET_TOY_BOOLEAN,
    value: value
  };
}
export function setPorn(value) {
  return {
    type: SET_PORN_BOOLEAN,
    value: value
  };
}
export function setChanged(value) {
  return {
    type: SET_CHANGED,
    changed: value
  };
}
export function setOrgasmQuantity(amount) {
  return {
    type: SET_ORGASM_QUANTITY,
    orgasmQuantity: amount
  };
}

export function setOrgasmQuality(amount) {
  return {
    type: SET_ORGASM_QUALITY,
    orgasmQuality: amount
  };
}
