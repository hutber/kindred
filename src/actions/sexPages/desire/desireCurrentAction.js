// There are three possible states for our login
// process and we need actions for each of them
export const SET_DESIRE = 'SET_DESIRE';
export const SET_DATE = 'SET_DATE';
export const RESET = 'RESET';
export const SET_CHANGED = 'SET_CHANGED';

export function reset() {
  return {
    type: RESET
  }
}

export function setChanged(value) {
  return {
    type: SET_CHANGED,
    changed: value
  }
}
