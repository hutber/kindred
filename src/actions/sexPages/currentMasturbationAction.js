export const SET_ORGASM_QUANTITY = 'SET_ORGASM_QUANTITY';
export const SET_ORGASM_QUALITY = 'SET_ORGASM_QUALITY';

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
