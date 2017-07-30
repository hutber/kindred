export const SET_DESIRE_DATA = 'SET_DESIRE_DATA';

export function pushToDesire(data) {
  return {
    type: SET_DESIRE_DATA,
    data
  }
}
